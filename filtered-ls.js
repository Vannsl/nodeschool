const fs = require('fs');
var path = require('path');

const pathName = process.argv[2];
const ext = process.argv[3];

fs.readdir(pathName, (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    if (path.extname(file) === `.${ext}`) {
      console.log(file);
    }
  })
})
