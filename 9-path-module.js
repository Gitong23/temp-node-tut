const path = require('path');
console.log(path.sep);
const fielPath = path.join('/content', 'subfolder', 'test.txt');
console.log(fielPath);

const base = path.basename(fielPath);
console.log(base);

const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt');
console.log(absolute);