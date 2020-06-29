const fs = require('fs');

fs.readFile(process.argv[2], 'utf8', (err, data) => {
  if (err) return console.error(err);
  const splitted = data.split('\n');
  console.log(splitted.length - 1);
});
