const fs = require('fs');

function countStudents(path) {
  if (!fs.existsSync(path) || !fs.statSync(path).isFile()) {
    throw new Error('Cannot load the database');
  }
  const lines = fs.readFileSync(path, { encoding: 'utf-8' }).toString().trim().split('\n');
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
}

module.exports = countStudents;
