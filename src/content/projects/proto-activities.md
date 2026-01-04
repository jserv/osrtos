---
title: proto_activities
summary: A header-only C/C++ library for imperative synchronous programming in embedded
  systems. It implements a protothreads-based model to handle concurrent tasks, deterministic
  delays, and state management without the overhead of a traditional multi-threaded
  RTOS.
slug: proto-activities
codeUrl: https://github.com/frameworklabs/proto_activities
star: 11
version: 0.2.0
lastUpdated: '2024-12-02'
rtos: ''
topics:
- macros
- protothreads
- synchronous-language
- synchronous-programming
isShow: false
createdAt: '2026-01-04'
updatedAt: '2026-01-04'
---

## Overview

Embedded systems development often faces a trade-off between the simplicity of linear, delay-based programming and the necessity of handling multiple concurrent tasks. While a traditional Real-Time Operating System (RTOS) provides multi-threading, it often comes with significant memory overhead and complexity. Conversely, manual state machines are memory-efficient but quickly become difficult to maintain as logic grows.

`proto_activities` offers a middle ground. It is a header-only library that enables imperative synchronous programming in C and C++, heavily inspired by the [protothreads](http://dunkels.com/adam/pt/) approach and the [Blech](https://blech-lang.org/) programming language. It allows developers to write code that looks sequential—using delays and waits—while executing in a structured, modular, and deterministic way that supports concurrency.

## Core Concepts

The library is built around the concept of **Activities**. An activity is a block of code that can be paused and resumed across multiple execution "ticks." Unlike standard functions that run to completion, an activity can yield control back to the main loop and resume exactly where it left off in the next cycle.

### Synchronous Statements

`proto_activities` provides a suite of macros to control execution flow within an activity:

- **pa_pause**: Pauses the activity and resumes it at the next tick.
- **pa_await(cond)**: Suspends execution until a specific condition becomes true.
- **pa_delay(ticks)**: Pauses the activity for a set number of cycles.
- **pa_co**: Starts a concurrent section where multiple "trails" (sub-activities) run simultaneously.

## Structured Concurrency

One of the most powerful features of `proto_activities` is its support for structured concurrency. Using the `pa_co` (concurrent) and `pa_with` macros, developers can run multiple tasks in parallel within a single activity. This is handled cooperatively, meaning there is no need for complex locking mechanisms or semaphores typically associated with preemptive multi-threading.

```c
/* Example: Running two blinkers concurrently for 10 ticks */
pa_co(2) {
    pa_with(FastBlinker, 0);
    pa_with(SlowBlinker, 1, 3, 2);
} pa_co_end
```

## C++ Enhancements

While the core library is compatible with C, it offers advanced features when used with C++. This includes lifecycle callbacks and signal management:

- **Lifecycle Callbacks**: Macros like `pa_defer`, `pa_enter`, `pa_suspend`, and `pa_resume` allow developers to define code that runs automatically when an activity starts, ends, or is interrupted. This is particularly useful for hardware cleanup (e.g., turning off an LED when a task is aborted).
- **Signals**: C++ users can define signals to communicate between activities. Signals can carry values and are automatically reset at the beginning of each tick, modeling the synchronous reactive pattern found in languages like Blech or Esterel.

## Integration and Usage

Because `proto_activities` is header-only, integration is straightforward. It does not require a specific hardware abstraction layer (HAL) and can be used on almost any microcontroller, from 8-bit AVRs to powerful ESP32 or ARM Cortex-M chips. 

To run the system, you simply "tick" the main activity within your application's main loop. This can be done at a fixed frequency (e.g., using a timer interrupt or a sleep function) or as fast as the processor allows for free-running applications.

```cpp
int main() {
    pa_use(Main);
    while (pa_tick(Main) == PA_RC_WAIT) {
        // Control the tick frequency here
        delay_ms(20);
    }
    return 0;
}
```

By keeping the logic deterministic and avoiding the stack overhead of per-thread allocations, `proto_activities` is an excellent choice for resource-constrained IoT devices and robotics projects where timing and reliability are paramount.
