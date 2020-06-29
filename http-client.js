const http = require('http');

http.get(process.argv[2], 'utf8', response => {
  response.on('data', data => {
    console.log(data);
  }) 
})