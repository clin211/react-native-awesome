import {writeFileSync} from 'fs';
import fonts from '../android/link-assets-manifest.json';
import {immer} from 'zustand/middleware/immer';
import {execSync} from 'child_process';

function main() {
    const family: any = {};

    // 处理数据
    fonts.data.forEach(item => {
        const pathParts = item.path.split('/');
        const fileName = pathParts[pathParts.length - 1];
        const fontName = fileName.split('.')[0];
        const [fontType, fontFamily] = fontName.split('-');

        if (!family[fontType]) {
            family[fontType] = {};
        }

        family[fontType][fontFamily] = fontName;
    });

    // 写入文件
    writeFileSync(
        './src/themes/fonts.ts',
        `const fonts = ${JSON.stringify(family, null, 4)}\n\nexport default fonts;`,
        'utf8',
    );

    // 格式化
    execSync('npx prettier --write ./src/themes/fonts.ts', {stdio: 'inherit'});
}

main();
