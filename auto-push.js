const { exec, spawn } = require('child_process');
const fs = require('fs');
const path = require('path');

// Function to execute shell commands
function executeCommand(command) {
  return new Promise((resolve, reject) => {
    exec(command, (error, stdout, stderr) => {
      if (error) {
        console.error(`Error executing command: ${error.message}`);
        reject(error);
        return;
      }
      if (stderr) {
        console.log(`Command stderr: ${stderr}`);
      }
      console.log(`Command stdout: ${stdout}`);
      resolve(stdout);
    });
  });
}

// Function to run the main CLI application
function runCliApp() {
  return new Promise((resolve, reject) => {
    console.log('\n=== Running CLI Application ===\n');
    
    const child = spawn('node', ['cli.js'], { stdio: 'inherit' });
    
    child.on('close', (code) => {
      if (code === 0) {
        console.log('\n=== CLI Application completed successfully ===\n');
        resolve();
      } else {
        console.error(`\n=== CLI Application failed with code ${code} ===\n`);
        reject(new Error(`CLI process exited with code ${code}`));
      }
    });
    
    child.on('error', (err) => {
      console.error(`\n=== Failed to start CLI Application: ${err} ===\n`);
      reject(err);
    });
  });
}

// Function to push changes to GitHub
async function pushToGitHub() {
  try {
    console.log('\n=== Starting Git operations ===\n');
    
    // Check git status
    await executeCommand('git status');
    
    // Add all changes
    console.log('\n=== Adding all changes ===\n');
    await executeCommand('git add .');
    
    // Commit with timestamp
    const timestamp = new Date().toISOString().replace(/T/, ' ').replace(/\..+/, '');
    const commitMessage = `Auto update: ${timestamp}`;
    console.log(`\n=== Committing changes: "${commitMessage}" ===\n`);
    await executeCommand(`git commit -m "${commitMessage}"`);
    
    // Push to GitHub
    console.log('\n=== Pushing to GitHub ===\n');
    await executeCommand('git push origin main');
    
    console.log('\n=== Successfully pushed to GitHub ===\n');
  } catch (error) {
    console.error(`\n=== Error in Git operations: ${error.message} ===\n`);
  }
}

// Main function
async function main() {
  try {
    // Run the CLI application
    await runCliApp();
    
    // Push changes to GitHub
    await pushToGitHub();
    
    console.log('\n=== All operations completed successfully ===\n');
  } catch (error) {
    console.error(`\n=== Error in main process: ${error.message} ===\n`);
    process.exit(1);
  }
}

// Run the main function
main(); 