const fs = require('fs');

// Task 1: Read a file asynchronously
function readFile(callback) {
  console.log('Reading the file...');
  fs.readFile('file.txt', 'utf8', (err, data) => {
    if (err) {
      console.log('Error reading file:', err);
      callback(err); // Call the callback with the error
    } else {
      console.log('File content:', data);
      callback(null, data); // Successfully read the file, pass the data to the callback
    }
  });
}

// Task 2: Wait for 2 seconds (simulated delay)
function waitFor(callback) {
  console.log('Waiting for 2 seconds...');
  setTimeout(() => {
    console.log('Done waiting!');
    callback();
  }, 2000); // Wait for 2 seconds
}

// Task 3: Write a log asynchronously
function writeLog(message, callback) {
  console.log('Writing log...');
  fs.appendFile('log.txt', message + '\n', (err) => {
    if (err) {
      console.log('Error writing log:', err);
      callback(err); // Call callback with error
    } else {
      console.log('Log written successfully!');
      callback(null); // Successfully written, call the callback
    }
  });
}

// Task Chain (callback hell or pyramid of doom)
readFile((err, data) => {
  if (err) {
    console.log('Aborting due to error.');
    return;
  }

  waitFor(() => {
    const logMessage = `File content processed: ${data}`;
    writeLog(logMessage, (err) => {
      if (err) {
        console.log('Aborting due to error.');
        return;
      }
      console.log('All tasks completed!');
    });
  });
}); 