const fs = require('fs');
const dirPath = process.cwd();

fs.readdir('.', (err, files) => {
    if (err) {
        console.error(err);
        return;
    }

    files.forEach(file => {
        // console.log(file);
        if (!file.includes('.svg')) {
            return;
        }
        let filename = file.split('.')[0];
        let name = '';
        if (filename.includes('-')) {
            name = filename
                .split('-')
                .map(item => item.charAt(0).toUpperCase() + item.slice(1))
                .join('');
        } else {
            name = filename.charAt(0).toUpperCase() + filename.slice(1);
        }
        const printString = `import ${name} from "../assets/images/icons/${file}";`;
        const renderString = `<View style={styles.item}><${name} /><Text style={styles.name}>${filename}</Text></View>`;
        console.log(renderString)
        // console.log(printString);
    });
});
