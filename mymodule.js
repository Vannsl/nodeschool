const fs = require('fs');
var path = require('path');

module.exports = (pathName, ext, callback) => {
  return fs.readdir(pathName, (err, files) => {
    if (err) {
      callback(err, null);
      return;
    };
    callback(null, files.filter(file => path.extname(file) === `.${ext}`));
  })
}
