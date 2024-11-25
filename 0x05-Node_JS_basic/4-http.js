const http = require('http');

const app = new http.Server((req, res) => {
  res.write('Hello Holberton School!');
  res.end();
});

app.listen(1245);
