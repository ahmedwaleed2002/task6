# Promise-based CLI Tool - Refactoring Exercise

This project demonstrates the refactoring of a callback-based CLI application to use Promises with .then()/.catch() chaining. It's part of a learning exercise focused on understanding how to convert nested callbacks to a more maintainable Promise-based approach.

## Project Structure

- `cli-callback.js` - Original implementation using nested callbacks
- `cli-promise.js` - Refactored implementation using Promises
- `COMPARISON.md` - Detailed analysis of both implementations
- `file.txt` - Sample file for reading operations
- `log.txt` - Output file for logging operations

## Asynchronous Operations

Both implementations perform the same three sequential operations:

1. **Read File**: Reads content from `file.txt`
2. **Wait**: Simulates a 2-second delay
3. **Write Log**: Writes processed content to `log.txt`

## Usage

Run the callback-based version:
```bash
node cli-callback.js
```

Run the Promise-based version:
```bash
node cli-promise.js
```

## Key Benefits of Promise-based Approach

- Flatter code structure (avoids "pyramid of doom")
- Centralized error handling with `.catch()`
- Clearer data flow between asynchronous operations
- Better maintainability and readability
- Enhanced composability for complex operations

## Learning Objectives

- Understanding Promise syntax and behavior
- Converting callback-based code to Promises
- Implementing proper Promise chaining
- Managing error handling in Promise chains
- Appreciating the benefits of modern asynchronous patterns

## Detailed Comparison

For a comprehensive analysis of the differences between callback and Promise approaches, see [COMPARISON.md](COMPARISON.md). 