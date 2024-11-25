const express = require('express');
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
      const response = [];
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
      response.push(`Number of students: ${studentsCount}`);
      for (const prop in fields) {
        if (Object.hasOwnProperty.call(fields, prop)) {
          response.push(`Number of students in ${prop}: ${fields[prop].length}. List: ${fields[prop].join(', ')}`);
        }
      }
      resolve(response.join('\n'));
    }
  });
});

const app = express();

app.get('/', (_, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (_, res) => {
  countStudents(DB_FILE)
    .then((data) => {
      res.send(`This is the list of our students\n${data}`);
    }).catch((err) => {
      res.send(`This is the list of our students\n${err instanceof Error ? err.message : err.toString()}`);
    });
});

app.listen(1245);

module.exports = app;
