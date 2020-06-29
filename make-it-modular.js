const mymodule = require('./mymodule.js')

mymodule(process.argv[2], process.argv[3], (err, data) => {
  if (err) return console.error(err);
  data.forEach(d => console.log(d));
});
