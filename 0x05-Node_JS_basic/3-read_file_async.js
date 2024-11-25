const fs = require('fs');

const countStudents = (path) => new Promise((resolve, reject) => {
  fs.readFile(path, (err, data) => {
    if (err) {
      reject(new Error('Cannot load the database'));
    } else if (data) {
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
      console.log(`Number of students: ${studentsCount}`);
      for (const prop in fields) {
        if (Object.hasOwnProperty.call(fields, prop)) {
          console.log(`Number of students in ${prop}: ${fields[prop].length}. List: ${fields[prop].join(', ')}`);
        }
      }
      resolve(true);
    }
  });
});

module.exports = countStudents;
