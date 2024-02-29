import fonts from '../android/link-assets-manifest.json';

function main() {
    // 读取 ../android/link-assets-manifest.json 文件
    const fontList = fonts.data;
    console.log('🚀 ~ main ~ fontList:', fontList);
}

main();
