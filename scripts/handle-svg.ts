import fs from 'fs';

const rootDir = process.cwd();
const svgDir = `${rootDir}/src/assets/images/icons`;
async function run() {
  const exportStr: string[] = [];
  const imports: string[] = [];
  const widgets: string[] = [];
  try {
    // 1、导入所有 svg 文件
    const files = await fs.readdirSync(svgDir);

    files.forEach(file => {
      if (!file.includes('.svg')) {
        console.log(`${file} is not an SVG file`);
        return;
      }

      const filename = file.split('.')[0];
      let name = filename.replace(/-./g, match =>
        match.charAt(1).toUpperCase(),
      );
      name = name.charAt(0).toUpperCase() + name.slice(1);

      const im = `import ${name}Widget from '@/assets/images/icons/${file}';`;
      imports.push(im);
      widgets.push(`export const ${name}: FC<CommonProps> = ({style, onPress, svgProps}) => {
  const {theme} = useMakeStyle();
  return (
    <Pressable style={style} onPress={onPress} testID="${filename}">
      <${name}Widget fill={theme.colors.text} {...svgProps} />
    </Pressable>
  );
};`);
      exportStr.push(name);
    });
    let content =
      "import React, {FC} from 'react';\nimport {Pressable, PressableProps, ViewStyle} from 'react-native';\nimport {SvgProps} from 'react-native-svg';\nimport useMakeStyle from '@/hooks/useMakeStyle';\n";
    content += imports.join('\n');
    content += '\n';
    content += `interface CommonProps extends PressableProps {
  onPress?: () => void;
  style?: ViewStyle;
  svgProps?: SvgProps;
}\n`;
    content += widgets.join('\n\n');
    fs.writeFileSync(
      `${rootDir}/src/components/Icons/index.tsx`,
      content,
      'utf-8',
    );
  } catch (error) {
    console.log(error);
  }
}

run();

/**
 *
 * 2、处理 svg 文件名
 * 3、在组件名后面全部加上 Widget
 * 4、全部 Widget 使用 Pressable 组件包裹
 */
