---
title: libcr
summary: A lightweight C++17 library for massive 1:N and M:N multitasking using coroutines
  and protothreads. Designed for resource-constrained systems, it provides high-performance
  context switching without dynamic allocations or per-task stack overhead.
slug: libcr
codeUrl: https://github.com/sm2coin/libcr
star: 4
lastUpdated: '2025-04-09'
rtos: ''
topics:
- agpl
- agplv3
- c-plus-plus
- child-coroutine
- coroutine
- coroutines
- green-thread-library
- green-threads
- lightweight
- lock-free
- multitasking
- nested-coroutines
- protothreads
- stackless
isShow: false
createdAt: '2025-12-29'
updatedAt: '2025-12-29'
---

## Overview

libcr is a C++17 library designed to enable extremely lightweight, massive multitasking on resource-constrained devices like the Raspberry Pi. By leveraging coroutines and protothreads, it allows developers to manage thousands of concurrent tasks with minimal memory overhead and high execution efficiency. Unlike standard OS threads, which carry significant kernel overhead, libcr tasks are managed entirely in user space, making context switches significantly faster.

## Coroutines and Protothreads

The library offers two distinct models for cooperative multitasking:

*   **Coroutines:** These can yield execution at any point and be resumed later, similar to a thread that blocks, but without the stack and resource overhead. In libcr, a single coroutine requires as little as 56 bytes of memory on a 64-bit platform.
*   **Protothreads:** A simplified, stackless form of coroutine. While they are more restricted (they can only yield from the top-level context), they are incredibly efficient, requiring only 4 to 8 bytes of memory per task. libcr uses a GCC-specific workaround to avoid the traditional limitations of Duff's device-based protothreads, allowing for the use of `switch` statements within the task.

## High-Performance Design

libcr is built for speed and predictability in embedded environments. Benchmarks on modern hardware show that thread-unsafe task switching with libcr can be over 800 times faster than standard kernel task switches. 

**Key technical advantages include:**

*   **No Dynamic Allocation:** The library avoids `malloc` or `new` entirely, giving the developer full control over memory layout and performance.
*   **M:N Threading:** While coroutines are often single-threaded, libcr is thread-safe and supports M:N threading, allowing coroutines to be passed between real kernel threads for true parallelism.
*   **Stackless Architecture:** Because no dedicated stack is allocated for each coroutine, the memory footprint remains small even as the number of tasks grows into the thousands.
*   **OS Independence:** Although it relies on GCC-specific features (like the `&&` and `goto *` operators), it does not depend on any specific operating system APIs, making it portable across any hardware supported by GCC.

## Advanced Features

Despite its lightweight nature, libcr provides several high-level programming constructs usually reserved for heavier frameworks:

*   **Event-Driven Execution:** The library implements a 100% event-driven model, eliminating the need for inefficient polling.
*   **Synchronization Primitives:** It includes coroutine-aware versions of standard primitives such as mutexes, condition variables, barriers, and futures/promises.
*   **Minimalistic Exceptions:** libcr manages a custom exception model compatible with coroutines, providing an efficient "error/no error" mechanism.
*   **Task-Local Storage:** Similar to `thread_local`, this allows for memory reuse (like buffers) that is local to a specific coroutine and its children.

## Getting Started

libcr is a C++17 project that uses CMake for its build system. Because it is designed for maximum optimization, it supports Plain Old Data (POD) types, allowing coroutines to be placed in unions to further save memory in sequential execution paths. Developers can choose between a thread-safe implementation for multi-core environments or a thread-unsafe version for maximum speed on single-threaded systems.
