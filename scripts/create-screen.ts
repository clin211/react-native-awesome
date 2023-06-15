import fs from 'fs';
import path from 'path';
import child_process from 'child_process';

// 1.获取创建screen的名称
const filename = process.argv[2];

if (!filename) {
    throw new Error(`filename is required, actual: ${filename}`);
}

const capitalizedFn = (text: string) => text.charAt(0).toUpperCase() + text.slice(1);

// 将首字母转为大写
let capitalized = capitalizedFn(filename);

// 2.创建 style 文件
function createStyle() {
    const stylePath = path.resolve(process.cwd(), `src/assets/styles/screens/${filename}.ts`);
    const styleContent = `import { StyleSheet } from 'react-native';
import theme from '@/theme/theming';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: theme.color.transparent,
    },
});

export default styles;
`;
    console.log('🚀 ~ file: create-screen.ts:25 ~ stylePath:', stylePath);
    fs.writeFileSync(stylePath, styleContent, 'utf8');

    if (filename.includes('-')) {
        capitalized = filename
            .split('-')
            .map(item => capitalizedFn(item))
            .join('');
    }
}

// 3.在navigation-types中写入所创建screen的类型
function createScreenType() {
    const navigationTypesPath = path.resolve(process.cwd(), 'src/types/navigate.type.ts');
    const content = fs.readFileSync(navigationTypesPath).toString();
    const regex = /\{([^}]+)\}/;
    const match = content.match(regex);
    if (match?.[1]) {
        const old = match[1];
        // 重名检查
        if (old.includes(capitalized)) {
            throw new Error(`${capitalized} 已存在！请勿重复命名～`);
        }
        const newType = `${old}${capitalized}: undefined;`;
        const newContent = content.replace(old, newType);
        fs.writeFileSync(navigationTypesPath, newContent, 'utf-8');
        child_process.execSync(`npx prettier --write ${navigationTypesPath}`);
    }
}

// 4.创建文件并写入模板代码
function createFileAndWriteTemplateCode() {
    const screenPath = path.resolve(process.cwd(), 'src/screens');
    const template = `import React, { FC } from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import Layout from '@/components/Layout';
import Text from '@/components/common/Text';
import styles from '@/assets/styles/screens/${filename}';
import { ScreenParams } from '@/types/navigate.type';

const ${capitalized}: FC<NativeStackScreenProps<ScreenParams, '${capitalized}'>> = ({
    navigation,
}) => {
    return (
        <Layout style={styles.container}>
            <Text>${capitalized}</Text>
        </Layout>
    );
};

export default ${capitalized};
`;
    fs.writeFileSync(`${screenPath}/${capitalized}.tsx`, template, 'utf8');
}

// 5.在App.tsx中引入文件并写入路由配置
function readNavigateAndWriteConfig() {
    const AppPath = path.resolve(process.cwd(), 'src/Navigate.tsx');
    let navigateContent = fs.readFileSync(AppPath).toString();
    // 插入新增的import
    const lastImport = navigateContent
        .split('\n')
        .filter(item => item.includes('import'))
        .slice(-1)[0];
    const insertIndex = navigateContent.indexOf(lastImport) + lastImport.length;
    navigateContent = `${navigateContent.slice(0, insertIndex)}
import ${capitalized} from '@/screens/${capitalized}';${navigateContent.slice(insertIndex)}`;

    // 新增 screen 配置
    const regex = /(<Stack\.Screen[^>]*\/>)/g;
    const content = `<Stack.Screen name="${capitalized}" component={${capitalized}} />`;
    const insetContent = navigateContent.replace(regex, `$1\n${content}`);
    fs.writeFileSync(AppPath, insetContent, 'utf8');
    child_process.execSync(`npx prettier --write ${AppPath}`);
}

try {
    createStyle();
    createScreenType();
    createFileAndWriteTemplateCode();
    readNavigateAndWriteConfig();
} catch (error) {
    console.error('create screen error:', error);
}
