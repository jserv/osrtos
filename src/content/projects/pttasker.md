---
title: PTTasker
summary: A lightweight Protothreads (PT) implementation for the ESP8266 Arduino platform.
  It provides a cooperative multitasking environment using stackless threads, enabling
  non-blocking delays and task management on resource-constrained hardware.
slug: pttasker
codeUrl: https://github.com/ar2rus/PTTasker
star: 1
lastUpdated: '2022-03-13'
rtos: ''
topics:
- arduino
- arduino-library
- esp8266
- esp8266-arduino
- protothreads
- protothreads-library
isShow: false
createdAt: '2026-01-04'
updatedAt: '2026-01-04'
---

PTTasker is a specialized library designed to bring the power of Protothreads to the ESP8266 Arduino environment. Protothreads are an extremely lightweight, stackless threading mechanism originally developed by Adam Dunkels. They provide a way to implement cooperative multitasking without the significant memory overhead associated with traditional multi-threading systems, which typically require a dedicated stack for each thread.

In the context of the ESP8266, where RAM is a precious resource, PTTasker allows developers to write complex, concurrent logic that looks like sequential code. This is achieved through a set of C macros that manage the state of a function, allowing it to "yield" execution and resume later from the same point without losing its place in the logic flow.

### Core Functionality

The library revolves around the concept of "Tasks." Unlike standard Arduino code that often relies on complex state machines or deeply nested `if` statements inside the `loop()` function to handle timing and events, PTTasker allows you to define tasks that can pause their own execution. 

Key macros and keywords provided by the library include:
- **PT_BEGIN and PT_END**: Define the entry and exit boundaries of a protothread.
- **PT_WAIT_UNTIL**: Blocks the thread's progress until a specific condition is met, yielding control to other tasks in the meantime.
- **PT_DELAY**: Implements a non-blocking delay, allowing the processor to handle other tasks while the timer expires.
- **PT_SUBTHREAD**: Enables hierarchical task management by allowing one protothread to spawn and wait for another.

### Task Management and Scheduling

PTTasker includes a tasker component that handles the execution and lifecycle of these threads. It provides a clean API for managing how and when tasks are executed:
- **perform**: Executes a specific task immediately.
- **loop**: Sets a task to run repeatedly in a loop.
- **once**: Schedules a task to run exactly one time.
- **stop and stopAll**: Provides granular control over stopping specific tasks or clearing the entire task queue.

### Why Use PTTasker?

The primary advantage of using PTTasker over a traditional RTOS like FreeRTOS on the ESP8266 is the minimal memory footprint. Since protothreads are stackless, they only require a few bytes of state information per thread (usually just a single integer). This makes it possible to run dozens of concurrent tasks on hardware where a stack-based RTOS would quickly exhaust available memory due to stack allocation for each thread.

It is particularly useful for applications involving:
- Handling multiple asynchronous sensors simultaneously.
- Managing network communication timeouts without blocking the main execution loop.
- Creating complex LED patterns or UI sequences that require precise timing.
- Implementing protocol state machines in a readable, linear fashion.

### Getting Started

To integrate PTTasker into an Arduino project, you define a function using the `PT_THREAD` macro. Inside this function, you wrap your logic between `PT_BEGIN` and `PT_END`. Within these bounds, you can use `PT_WAIT` or `PT_DELAY` to yield control back to the scheduler. The scheduler is typically invoked within the main Arduino `loop()` function, ensuring that all registered tasks are polled and executed according to their state.
