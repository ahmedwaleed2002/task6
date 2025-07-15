# Promise-based CLI Tool - Refactoring Exercise

This project demonstrates the refactoring of a callback-based CLI application to use Promises with .then()/.catch() chaining. It's part of a learning exercise focused on understanding how to convert nested callbacks to a more maintainable Promise-based approach.

## Project Overview

The application performs three sequential asynchronous operations:
1. Reading a file (ile.txt)
2. Waiting for 2 seconds (simulated delay)
3. Writing processed content to a log file (log.txt)

This workflow demonstrates common asynchronous patterns in Node.js applications and provides a clear comparison between callback-based and Promise-based approaches.


## Project Structure

- cli-callback.js - Original implementation using nested callbacks
- cli-promise.js - Refactored implementation using Promises
- COMPARISON.md - Detailed analysis of both implementations
- file.txt - Sample file for reading operations
- log.txt - Output file for logging operations
- package.json - Project configuration and dependencies

## Implementation Details

### Callback Implementation
The callback-based version (cli-callback.js) demonstrates the traditional approach to handling asynchronous operations in Node.js. Each function accepts a callback parameter that is invoked upon completion or error. This leads to nested callbacks when operations need to be performed in sequence.

### Promise Implementation
The Promise-based version (cli-promise.js) refactors the same functionality using Promises. Each function returns a Promise that resolves with the operation's result or rejects with an error. This allows for chaining operations using .then() and centralizing error handling with .catch().
