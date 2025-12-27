---
title: Eclipse ThreadX
slug: threadx-rtos
version: v6.4.3.202503_rel
codeUrl: https://github.com/eclipse-threadx/threadx
siteUrl: hhttps://threadx.io/ttps://azure.microsoft.com/en-us/services/rtos/
date: '2020-05-27'
lastUpdated: '2025-09-28'
star: 3327
components:
- FileSystem
- Network
- Runtime Analysis
- GUI
- USBHost
- USBDevice
libraries: []
licenses:
- MIT
platforms:
- Arm Cortex-A7/A8/A9/A1x/A3x/A6x/A5x/A7x
- Arm Cortex-R4/R5/R7
- Arm Cortex-M0+/M3/M4/M7/M23/M33/M55/M85
- RISC-V
- Xtensa
- RXv1/v2/v3
summary: This advanced real-time operating system (RTOS) is designed specifically
  for deeply embedded applications. Among the multiple benefits it provides are advanced
  scheduling facilities, message passing, interrupt management, and messaging services.
  Eclipse ThreadX has many advanced features, including picokernel architecture, preemption
  threshold, event chaining, and a rich set of system services.
createdAt: '2025-09-28'
updatedAt: '2025-09-28'
---

### Features

- Intuitive and consistent API
- Blocking APIs have optional thread timeout
- Many APIs are directly available from application ISRs
- Core Scheduler:
- No limits on the number of threads
- Dynamic queue creation.
- Dynamic semaphore creation. No limits on the number of semaphores. 32-bit counting semaphores (0 to 4,294,967,295). Supports consumer-producer or resource protection. Optional thread suspension when semaphore unavailable
Optional timeout on all suspension.
- Dynamic mutex creation. No limits on the number of mutexes. Nested resource protection supported. Optional priority inheritance supported. Optional thread suspension when mutex unavailable. Optional timeout on all suspension.
- Dynamic event flag group creation. No limits on the number of event flag groups. Synchronization of one thread or multiple threads. Atomic get and clear supported. Optional multithread suspension on AND/OR set of events. Optional timeout on all suspension
- Dynamic block pool creation. No limits on the number of block pools. No limits on size of fixed-size blocks or size of pool. Fastest possible memory allocation/deal-location. Optional thread suspension on empty pool. Optional timeout on all suspension
- Dynamic byte pool creation. No limits on the number of byte pools. No limits on size of byte pool. Most flexible variable-length memory allocation/deallocation. Allocation size locality supported.
- Dynamic timer creation. No limits on the number of timers. Periodic or one-shot timers supported. Periodic timers may have different initial expiration value. No searching on timer activation or deactivation. All timers driven from one hardware timer interrupt.