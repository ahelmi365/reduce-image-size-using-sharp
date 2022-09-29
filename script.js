const sharp = require('sharp');
const fs = require('fs');
const directory = './images';

fs.readdirSync(directory).forEach(file => {
    console.log(file.split('.')[0]);
    const newfilteName =file.split('.')[0];
    const fileExtension =file.split('.')[1];
    sharp(`${directory}/${file}`)
        .resize(200, 116) // width, height
        .toFile(`${directory}/${newfilteName}-small.${fileExtension}`);
});