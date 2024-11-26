import fs from 'fs';

function readDatabase(path) {
  return new Promise((resolve, reject) => {
    if (!path) {
      reject(new Error('Cannot load the database'));
    } else {
      fs.readFile(path, (err, data) => {
        if (err) {
          reject(new Error('Cannot load the database'));
        } else if (data) {
          const lines = data.toString().trim().split('\n');
          const fields = {};
          for (const line of lines.slice(1)) {
            if (line) {
              const values = line.split(',');
              const fieldName = values[3].trim();
              if (Object.hasOwnProperty.call(fields, fieldName)) {
                fields[fieldName].push(values[0].trim());
              } else {
                fields[fieldName] = [values[0].trim()];
              }
            }
          }
          resolve(fields);
        }
      });
    }
  });
}

export default readDatabase;
module.exports = readDatabase;
