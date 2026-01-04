---
title: uXos
summary: A lightweight cooperative operating system for STM32 microcontrollers based
  on the protothreads principle. It offers a stackless multitasking environment with
  task and timer management, optimized for resource-constrained embedded applications.
slug: uxos
codeUrl: https://github.com/charliexp/uXos
star: 4
lastUpdated: '2019-06-26'
rtos: ''
topics:
- mcu
- protothreads
- rtos
isShow: false
createdAt: '2026-01-04'
updatedAt: '2026-01-04'
---

uXos is a specialized cooperative operating system designed for embedded systems, specifically targeting the STM32F10x family of microcontrollers. At its core, uXos leverages the principles of **protothreads**, a programming abstraction that provides a thread-like control flow without the memory overhead of traditional multi-threading.

### Cooperative Multitasking and Protothreads

Unlike preemptive RTOSs like FreeRTOS or Zephyr, uXos operates on a cooperative basis. This means tasks must voluntarily yield control back to the scheduler. By using protothreads, uXos achieves multitasking without requiring a dedicated stack for every task. This "stackless" approach significantly reduces RAM consumption, making it an excellent choice for microcontrollers with very limited memory.

### Key Features and Configuration

The system is highly configurable through the `osconfig.h` header file. Developers can define the maximum number of tasks and system timers to suit their specific application needs. In its default configuration, the system supports:

- **Task Management**: Support for multiple concurrent tasks (defaulting to 6).
- **Software Timers**: Independent timers for handling periodic events and timeouts.
- **Interrupt Handling**: Macros for enabling and disabling interrupts (`ENABLE_ISR`, `DISABLE_ISR`) are provided to ensure thread safety during critical sections.
- **Watchdog Integration**: Built-in support for reloading the Independent Watchdog (IWDG) to ensure system reliability and recovery from hangs.

### Hardware Integration

uXos is designed to work with the STM32 hardware abstraction layers, specifically referencing the `stm32f10x_conf.h` configuration. This allows the OS to interact directly with the hardware features of the ARM Cortex-M3 core, such as interrupt controllers and hardware watchdogs. The project structure includes a dedicated `os` directory for the kernel logic and a `lib` directory for supporting components.

### Use Cases

Because of its small footprint and cooperative nature, uXos is ideal for:

- Simple control loops that require basic concurrency without the overhead of a full kernel.
- IoT devices where RAM is at a premium and every kilobyte counts.
- Projects where the deterministic nature of cooperative scheduling is preferred over preemption.
- Educational purposes for understanding stackless multitasking and the implementation of protothreads in C.

The repository also includes a comprehensive documentation file titled "Developing Projects with uXos," which provides deeper insights into the implementation and usage of the system in real-world scenarios.
