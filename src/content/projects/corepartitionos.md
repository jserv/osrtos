---
title: CorePartitionOS
summary: CorePartitionOS is a lightweight, single-core cooperative RTOS designed for
  embedded systems ranging from 8-bit microcontrollers to 64-bit processors. It features
  a pure C implementation with no assembly, offering a low memory footprint, a tick-based
  momentum scheduler, and robust inter-process communication via a built-in message
  broker.
codeUrl: https://github.com/solariun/CorePartition
isShow: false
rtos: ''
libraries: []
topics:
- arduino
- arduinos
- arm
- attiny85
- avr
- c
- cooperative-multitasking
- cooperative-thread
- cpp
- freertos
- kernel
- linux
- modern-micro-controller
- osx
- risc-v
- small-memory
- spressif
- thread
- universal
- windows
---

CorePartitionOS is a versatile and highly portable operating system designed for embedded systems where resources are at a premium. Its primary philosophy is to provide a powerful multi-threading environment using a single core, relying exclusively on standard C principles. By avoiding assembly language and using a non-stack displacement approach, it achieves a remarkably small context size—ranging from just 48 bytes on 8-bit microcontrollers to 168 bytes on 64-bit processors.

## The Power of Cooperative Threading

Unlike preemptive RTOSs that switch contexts at arbitrary times, CorePartitionOS is entirely cooperative. This means the developer retains full control over when a context switch occurs by calling functions like `Cpx_Yield()`, `Cpx_Wait()`, or `Cpx_Sleep()`. This approach ensures that code execution is inherently atomic between yield points, significantly simplifying the management of shared resources and reducing the need for complex mutexes. Furthermore, it allows developers to tune stack memory pages precisely, maximizing available RAM for the application.

## Momentum Scheduler and IPC

At the heart of CorePartitionOS is the **Momentum Scheduler**, a tick-based system that allows threads to resume based on a defined "nice" value. Developers can define what a "tick" represents—whether it is milliseconds, microseconds, or simple kernel cycles—by implementing two simple functions: `Cpx_GetCurrentTicks()` and `Cpx_SleepTicks()`. 

For inter-process communication (IPC), the OS offers a sophisticated in-kernel message broker. It supports both asynchronous Publish/Subscriber patterns and synchronous Wait/Notify mechanisms. These features allow threads to block until a specific tag or variable (pointer-based) is notified, ensuring efficient CPU usage without busy-waiting.

## Technical Specifications and Requirements

CorePartitionOS is designed to be "zero-assembler," making it compatible with almost any toolchain that supports the C99 standard. The mandatory requirements are minimal:
- `setjmp` and `longjmp` for context switching.
- `malloc` and `free` (only if dynamic thread creation is required; full static implementation is supported).

## Wide Hardware Support

The project has been extensively tested across a vast array of hardware, from the tiny ATTiny85 (with only 512 bytes of RAM) to modern 32-bit RISC-V and ARM Cortex-M cores. It is fully compatible with the Arduino ecosystem, allowing users to import it as a standard library and begin multi-threading on boards like the Nano, ESP8266, and STM32 Bluepill. Beyond microcontrollers, it runs on Linux, Windows, Mac, and even legacy systems like DOS and BeOS.

## Getting Started

Implementing a multi-threaded application is straightforward. Below is a basic example of how to initialize the kernel and create threads:

```c
#include "CorePartition.h"
#include <stdio.h>

void Thread1(void* pValue) {
    while (Cpx_Yield()) {
        printf("Thread %zu is running
", Cpx_GetID());
    }
}

int main() {
    // Initialize kernel for up to 3 threads
    if (Cpx_Start(3)) {
        // Create a thread with 210 bytes of stack and 1000ms interval
        Cpx_CreateThread(Thread1, NULL, 210, 1000);
        
        // Start the scheduler
        Cpx_Join();
    }
    return 0;
}
```

CorePartitionOS represents a unique middle ground between simple main-loop architectures and heavy preemptive RTOSs, providing the structure of threads with the predictability and low overhead of cooperative scheduling.
