const fs = require('fs');

const buffer = fs.readFileSync(process.argv[2], 'utf8');
const splitted = buffer.split('\n');

console.log(splitted.length - 1);
