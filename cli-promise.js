const fs = require('fs').promises;

// Task 1: Read a file asynchronously using Promise
function readFile(filePath) {
  console.log('Reading the file...');
  return fs.readFile(filePath, 'utf8')
    .then(data => {
      console.log('File content:', data);
      return data; // Return data for the next promise in the chain
    });
  // No need for explicit error handling here as it will be caught in the catch() block
}

// Task 2: Wait for 2 seconds (simulated delay) using Promise
function waitFor(ms) {
  console.log(`Waiting for ${ms/1000} seconds...`);
  return new Promise(resolve => {
    setTimeout(() => {
      console.log('Done waiting!');
      resolve(); // Resolve without a value when the timeout completes
    }, ms);
  });
}

// Task 3: Write a log asynchronously using Promise
function writeLog(filePath, message) {
  console.log('Writing log...');
  return fs.appendFile(filePath, message + '\n')
    .then(() => {
      console.log('Log written successfully!');
      return true; // Return a value indicating success
    });
  // No need for explicit error handling here as it will be caught in the catch() block
}

// Promise Chain - sequential execution with proper error handling
readFile('file.txt')
  .then(data => {
    // After file is read, wait for 2 seconds
    return waitFor(2000).then(() => data); // Pass the data to the next then
  })
  .then(data => {
    // After waiting, write to log file
    const logMessage = `File content processed: ${data}`;
    return writeLog('log.txt', logMessage);
  })
  .then(() => {
    console.log('All tasks completed!');
  })
  .catch(err => {
    // Centralized error handling for all promises in the chain
    console.error('Error in promise chain:', err);
    console.log('Aborting due to error.');
  }); 