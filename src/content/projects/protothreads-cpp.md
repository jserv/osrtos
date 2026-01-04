---
title: Protothreads-cpp
summary: A C++ port of Adam Dunkels' protothreads library, providing lightweight,
  stackless threads for memory-constrained embedded systems. It allows developers
  to write procedural, thread-style code using a class-based approach without the
  overhead of a traditional RTOS.
slug: protothreads-cpp
codeUrl: https://github.com/benhoyt/protothreads-cpp
siteUrl: http://blog.brush.co.nz/2008/07/protothreads/
star: 201
lastUpdated: '2023-09-15'
rtos: ''
topics:
- c-plus-plus
- macros
- protothreads
isShow: false
createdAt: '2026-01-04'
updatedAt: '2026-01-04'
---

## Overview

Protothreads-cpp is a C++ implementation of the famous protothreads concept originally developed by Adam Dunkels. Protothreads are an ingenious set of macros that allow programmers to write procedural, thread-style code without the memory overhead associated with traditional multi-threading. In the world of embedded systems, where RAM is often a precious resource, protothreads provide a middle ground between complex, manual state machines and heavy, stack-based real-time operating systems.

This specific port brings the power of protothreads to C++, offering several architectural advantages over the original C implementation. By wrapping the protothread logic in a class, developers can eliminate the need to pass state structures manually, utilize instance variables instead of static variables for multi-instancing, and use inheritance to create specialized threads for specific hardware tasks like I/O monitoring or timer management.

## The Power of Stackless Threads

Traditional threads require their own stack space, which can quickly consume the limited RAM of a microcontroller. Protothreads are "stackless," meaning they run on the single system stack and do not save local variables across context switches. Instead, they use a clever implementation of Duff's Device—a specific use of the C/C++ `switch` statement—to jump back to the exact line where the thread last yielded.

This approach is particularly useful for tasks that would otherwise be implemented as complex state machines, such as communication protocols, user interface sequencing, or sensor polling. 

## Key Features and API

The library is contained within a single header file, `Protothread.h`, making it extremely easy to integrate into existing projects. The core API consists of several macros that manage the execution flow:

- `PT_BEGIN()`: Marks the start of the protothread logic within the `Run()` method.
- `PT_WAIT_UNTIL(condition)`: Blocks the thread until the specified condition evaluates to true, yielding execution back to the caller in the meantime.
- `PT_YIELD()`: Voluntarily yields execution until the next time the thread is called.
- `PT_SPAWN(child)`: Restarts and waits for a child protothread to complete.
- `PT_END()`: Marks the end of the thread and automatically stops it.

## Practical Example: UART Packet Processing

One of the most common use cases for protothreads is handling serial protocols. Below is an example of how a UART thread can be implemented to process a packet with a sync byte, length, and checksum:

```cpp
bool UartThread::Run()
{
    PT_BEGIN();

    while (true) {
        // Wait for sync byte
        PT_WAIT_UNTIL(ReadByte(ch));
        if (ch == Sync) {
            // Read length byte
            PT_WAIT_UNTIL(ReadByte(ch));
            len = ch;
            if (len <= MaxLength) {
                // Read data bytes
                for (i = 0; i < len; i++) {
                    PT_WAIT_UNTIL(ReadByte(ch));
                    data[i] = ch;
                }
                // Read checksum and dispatch
                PT_WAIT_UNTIL(ReadByte(ch));
                if (ValidChecksum(data, len, ch))
                    Dispatch(data, len);
            }
        }
    }

    PT_END();
}
```

In a traditional state machine, this logic would be fragmented into multiple `case` statements, making it difficult to follow the linear flow of the protocol. With protothreads, the code remains readable and maintainable while maintaining the efficiency of a state machine.

## Integration and Scheduling

Because protothreads are stackless and do not include a built-in scheduler, they are highly flexible. A "scheduler" can be as simple as a `while` loop in your `main()` function that calls the `Run()` method of various protothread objects. This allows the developer to define exactly how and when each task is executed, providing deterministic behavior without the complexity of a preemptive kernel.

Protothreads-cpp is an ideal choice for embedded developers working on platforms like AVR, STM32, or MSP430 who need the appearance of concurrency but cannot afford the RAM cost of a full RTOS.
