const http = require('http');
const fs = require('fs');

const DB_FILE = process.argv.length > 2 ? process.argv[2] : '';
const countStudents = (path) => new Promise((resolve, reject) => {
  if (!path) {
    reject(new Error('Cannot load the database'));
  }
  fs.readFile(path, (err, data) => {
    if (err) {
      reject(new Error('Cannot load the database'));
    } else if (data) {
      let response = '';
      const lines = data.toString().trim().split('\n');
      let studentsCount = 0;
      const fields = {};
      for (const line of lines.slice(1)) {
        if (line) {
          studentsCount += 1;
          const values = line.split(',');
          const fieldName = values[3].trim();
          if (Object.hasOwnProperty.call(fields, fieldName)) {
            fields[fieldName].push(values[0].trim());
          } else {
            fields[fieldName] = [values[0].trim()];
          }
        }
      }
      response += `Number of students: ${studentsCount}\n`;
      for (const prop in fields) {
        if (Object.hasOwnProperty.call(fields, prop)) {
          response += `Number of students in ${prop}: ${fields[prop].length}. List: ${fields[prop].join(', ')}\n`;
        }
      }
      resolve(response.slice(0, response.length - 2));
    }
  });
});
const app = new http.Server((req, res) => {
  if (req.url === '/') {
    res.write('Hello Holberton School!');
    res.end();
  } else if (req.url === '/students') {
    res.write('This is the list of our students\n');
    countStudents(DB_FILE)
      .then((data) => {
        res.write(data);
        res.end();
      })
      .catch((err) => {
        res.write(err.message);
        res.end();
      });
  }
});

app.listen(1245);

module.exports = app;
