---
title: FreeRTOS
slug: freertos
version: '202411.00'
codeUrl: https://github.com/FreeRTOS/FreeRTOS
siteUrl: http://www.freertos.org/
date: '2016-11-29'
lastUpdated: '2024-12-30'
star: 5496
components:
- FileSystem
- Network
- TLS/SSL
- Command Line Interface
- Runtime Analysis
libraries:
- lwIP
licenses:
- MIT
platforms:
- MSP430
- ARM
- AVR
- ColdFire
- PIC
- x86
summary: FreeRTOS is a market leading RTOS from Amazon Web Services that supports
  more than 35 architectures. It is distributed under the MIT license.
---

### Features

- Free RTOS scheduler - preemptive, cooperative and hybrid configuration options, with optional time slicing.
- The SafeRTOS derivative product provides a high level of confidence in the code integrity.
- Includes a tickless mode for low power applications.
- RTOS objects (tasks, queues, semaphores, software timers, mutexes and event groups) can be created using either dynamically or statically allocated RAM.
- Tiny footprint.
- Official support for >30 embedded system architectures (counting ARM7 and ARM Cortex-M3 as one architecture each).
- FreeRTOS-MPU supports the ARM Cortex-M3 Memory Protection Unit (MPU).
- Designed to be small, simple and easy to use. Typically a RTOS kernel binary image will be in the region of 4K to 9K bytes.
- Very portable source code structure, predominantly written in C.
- Supports both real time tasks and co-routines.
- Direct to task notifications, queues, binary semaphores, counting semaphores, recursive semaphores and mutexes for communication and synchronisation between tasks, or between real time tasks - and interrupts.
- Innovative event group (or event flag) implementation.
- Mutexes with priority inheritance.
- Efficient software timers.
- Powerful execution trace functionality.
- Stack overflow detection options.
- Pre-configured RTOS demo applications for selected single board computers allowing 'out of the box' operation and fast learning curve.
- Free monitored forum support, or optional commercial support and licensing.
- No software restriction on the number of real time tasks that can be created.
- No software restriction on the number of task priorities that can be used.
- No restrictions imposed on task priority assignment - more than one real time task can be assigned the same priority.
- Free development tools for many supported architectures.
- Free embedded software source code.
- Royalty free.
- Cross development from a standard Windows host.