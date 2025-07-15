# Callback vs Promise Implementation Comparison

This document compares the callback-based and Promise-based implementations of our CLI application that performs three sequential asynchronous operations.


## Implementation Overview

Both implementations perform the same three operations:
1. Reading a file (\ile.txt\)
2. Waiting for 2 seconds (simulated delay)
3. Writing to a log file (\log.txt\)
