# Callback-based CLI Tool - Day 1 Learning Task

This Node.js CLI application demonstrates the use of **callbacks** to perform asynchronous tasks and showcases the **pyramid of doom** pattern. This is part of a performance learning exercise focused on understanding callback fundamentals.

## Learning Objectives
- Understanding JavaScript callbacks concept
- Experiencing pyramid of doom (callback hell)
- Handling nested callbacks
- Managing asynchronous task sequencing
- Error handling in callback chains

## Tasks Performed
1. Read a file (`file.txt`) asynchronously
2. Wait for 2 seconds (simulate delay)  
3. Write a log to `log.txt`

## Usage
```bash
node cli.js
```

To automatically run the application and push changes to GitHub:
```bash
node auto-push.js
```

## How It Works
- **File Read**: Reads `file.txt` asynchronously using `fs.readFile`
- **Wait**: Simulates waiting using `setTimeout` 
- **Write Log**: Appends log message to `log.txt` using `fs.appendFile`

## Callback Hell Demonstration
The code intentionally shows how callback nesting creates the "pyramid of doom" pattern, making code harder to read and maintain as complexity increases.

## Setup Instructions
1. Clone repository: `git clone https://github.com/ahmedwaleed2002/task6.git`
2. Initialize project: `npm init -y`
3. Create `file.txt` with sample content
4. Run: `node cli.js`

## Automatic Git Push
The repository includes an `auto-push.js` script that:
1. Runs the main application
2. Automatically stages all changes
3. Commits with a timestamp message
4. Pushes to the GitHub repository

This demonstrates how automation can be integrated into the development workflow.

## Git Workflow Used
- Initial commit: "Initial commit: Set up CLI app with async tasks using callbacks"
- Task 1: "Add: Read file content asynchronously using callback"
- Task 2: "Add: Simulate wait with setTimeout() callback"
- Task 3: "Add: Write log to a file asynchronously using callback"
- Final version: "Implemented CLI with 3 async tasks using callbacks"

## What I Learned
Working with nested callbacks revealed several key insights:

- **Readability Challenges**: As callbacks nest deeper, code becomes increasingly difficult to follow, with each level of indentation making the logical flow harder to trace.
- **Error Handling Complexity**: Each callback requires its own error handling, leading to repetitive code and potential places where errors might be overlooked.
- **Control Flow Difficulties**: Managing the sequence of operations becomes more complicated as the nesting depth increases, especially when conditional logic is needed.
- **Maintenance Hurdles**: Making changes to deeply nested callbacks often requires careful tracing through multiple levels of code, increasing the risk of introducing bugs.
- **Debugging Complications**: When errors occur, stack traces can be difficult to interpret due to the asynchronous nature of callbacks, making troubleshooting more time-consuming.

This exercise clearly demonstrates why more modern approaches like Promises and async/await have gained popularity as they help mitigate these "pyramid of doom" issues while maintaining the benefits of asynchronous programming. 