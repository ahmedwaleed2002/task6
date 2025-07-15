# Promise-based CLI Tool - Refactoring Exercise

This project demonstrates the refactoring of a callback-based CLI application to use Promises with .then()/.catch() chaining. It's part of a learning exercise focused on understanding how to convert nested callbacks to a more maintainable Promise-based approach.

## Project Overview

The application performs three sequential asynchronous operations:
1. Reading a file (`file.txt`)
2. Waiting for 2 seconds (simulated delay)
3. Writing processed content to a log file (`log.txt`)

This workflow demonstrates common asynchronous patterns in Node.js applications and provides a clear comparison between callback-based and Promise-based approaches.

## Project Structure

- `cli-callback.js` - Original implementation using nested callbacks
- `cli-promise.js` - Refactored implementation using Promises
- `COMPARISON.md` - Detailed analysis of both implementations
- `file.txt` - Sample file for reading operations
- `log.txt` - Output file for logging operations
- `package.json` - Project configuration and dependencies

## Implementation Details

### Callback Implementation
The callback-based version (`cli-callback.js`) demonstrates the traditional approach to handling asynchronous operations in Node.js. Each function accepts a callback parameter that is invoked upon completion or error. This leads to nested callbacks when operations need to be performed in sequence.

### Promise Implementation
The Promise-based version (`cli-promise.js`) refactors the same functionality using Promises. Each function returns a Promise that resolves with the operation's result or rejects with an error. This allows for chaining operations using `.then()` and centralizing error handling with `.catch()`.

## Usage

Run the callback-based version:
```bash
npm run callback
# or
node cli-callback.js
```

Run the Promise-based version:
```bash
npm run promise
# or
node cli-promise.js
```

## Key Benefits of Promise-based Approach

- **Improved Readability**: Flatter code structure avoids the "pyramid of doom"
- **Centralized Error Handling**: Single `.catch()` block handles errors from the entire chain
- **Better Data Flow**: Values flow naturally through the Promise chain
- **Enhanced Maintainability**: Easier to add, remove, or modify steps in the sequence
- **Consistent Interfaces**: Functions return Promises with a standardized pattern
- **Better Composability**: Easier to combine with other Promise-returning functions

## Learning Objectives

- Understanding Promise syntax and behavior
- Converting callback-based code to Promises
- Implementing proper Promise chaining
- Managing error handling in Promise chains
- Appreciating the benefits of modern asynchronous patterns

## Further Improvements

Future enhancements could include:
- Refactoring to use async/await syntax for even cleaner code
- Adding more complex error handling scenarios
- Implementing parallel operations using Promise.all()
- Adding unit tests to verify behavior

## Detailed Comparison

For a comprehensive analysis of the differences between callback and Promise approaches, see [COMPARISON.md](COMPARISON.md). 