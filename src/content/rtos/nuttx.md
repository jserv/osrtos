---
title: NuttX
slug: nuttx
version: nuttx-12.1.0
codeUrl: https://github.com/apache/nuttx
siteUrl: https://nuttx.apache.org/
date: '2016-11-29'
lastUpdated: '2024-12-30'
star: 3017
components:
- FileSystem
- Network
- 6LoWPAN
- Command Line Interface
- USBHost
- USBDevice
- GUI
libraries:
- LittlevGL
licenses:
- Apache License 2.0
platforms:
- ARM
- AVR
- '8051'
- PIC
- x86
- MIPS
- Xtensa
- RISC-V
- Freescale HCS12
- Zilog
summary: NuttX is a real-time operating system (RTOS) with an emphasis on standards
  compliance and small footprint. Scalable from 8-bit to 32-bit microcontroller environments,
  the primary governing standards in NuttX are Posix and ANSI standards.
---

### Features

- Standards Compliant.
- Core Task Management.
- Modular, micro-kernel.
- Fully pre-emptible.
- Naturally scalable.
- Highly configurable.
- Easily extensible to new processor architectures, SoC architecture, or board architectures. See Porting Guide.
- FIFO and round-robin scheduling.
- Realtime, deterministic, with support for priority inheritance.
- POSIX/ANSI-like task controls, named message queues, counting semaphores, clocks/timers, signals, pthreads, environment variables, filesystem.
- VxWorks-like task management and watchdog timers.
- BSD socket interface.
- Extensions to manage pre-emption.
- Optional tasks with address environments (Processes).
- Inheritable