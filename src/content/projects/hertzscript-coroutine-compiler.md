---
title: HertzScript Coroutine Compiler
summary: The HertzScript Compiler transforms standard JavaScript into preemptible
  coroutines that conform to the HertzScript specification. It enables voluntary preemptive
  multitasking and green threads in JavaScript environments by converting functions
  into instruction-yielding generator functions.
codeUrl: https://github.com/hertzscript/Compiler
siteUrl: https://github.com/hertzscript/hertzscript-specification
isShow: false
rtos: ''
libraries: []
topics:
- automatic-concurrency
- concurrent
- concurrent-javascript
- concurrent-programming
- coroutine
- coroutine-compiler
- coroutines
- green-threads
- interruption
- javascript
- multitasking
- preemptible
- preemption
- preemptive
- protothreads
- stackless-coroutines
- voluntary-preemptive-scheduling
lastUpdated: '2025-12-27'
createdAt: '2025-12-27'
updatedAt: '2025-12-27'
---

Concurrency in JavaScript has traditionally been dominated by the event loop and asynchronous callbacks. While powerful, this model can make certain types of multitasking and long-running computations difficult to manage without blocking the main thread. The HertzScript Coroutine Compiler offers a sophisticated alternative by producing preemptible JavaScript coroutines that conform to the HertzScript specification.

At its core, the HertzScript compiler is a source-to-source transformation tool. It takes standard JavaScript functions and transforms them into instruction streams. Specifically, all functions within a HertzScript program are converted into GeneratorFunctions that yield instructions. This allows an external dispatcher—such as the [HertzScript Dispatcher](https://github.com/Floofies/hertzscript-dispatcher)—to pause, resume, and manage the execution of these coroutines, effectively implementing a form of "green threads" or voluntary preemptive multitasking.

### How It Works

The compiler leverages powerful AST (Abstract Syntax Tree) tools like Acorn and Babel to parse and rewrite JavaScript code. By wrapping function logic into generators, the compiler ensures that the execution state can be preserved and yielded back to a scheduler. This is particularly useful for complex concurrent programming where developers need fine-grained control over execution without the overhead of native OS threads.

### Flexible Integration

Developers can interact with the HertzScript compiler in two primary ways: as a Node.js module or via a Command-Line Interface (CLI).

**Using the Compiler Module:**

For programmatic use, the module exports a single function that accepts source code and various configuration options. This allows for dynamic compilation within a larger application pipeline.

```javascript
const hzCompile = require("hertzscript-compiler");
const sourceCode = "console.log('Hello World!')";
const compiledCode = hzCompile(sourceCode);
```

**Using the CLI:**

The `hzc` (or `hzcompile`) command provides a convenient wrapper for terminal-based workflows. It supports several flags to customize the output, such as wrapping the code in a standalone self-running module or enabling the experimental `spawn` keyword.

```bash
hzc -i myScript.js -o myOutput.hz.js --spawn -s
```

### Key Features and Options

*   **Standalone Mode:** Using the `-s` or `--standalone` flag, the compiler generates a self-running HertzScript module, simplifying deployment.
*   **Module Support:** The `-m` flag allows the output to be formatted as a standard HertzScript module for better interoperability.
*   **The `spawn` Keyword:** When enabled, the compiler can detect and transform a custom `spawn` keyword, which is used to instantiate new coroutines within the HertzScript ecosystem.

By providing the infrastructure for preemptible execution, the HertzScript Compiler serves as a foundational tool for developers looking to push the boundaries of concurrency in JavaScript, whether for complex simulations, game logic, or high-performance concurrent applications.
