---
title: RT-Thread
slug: rt-thread
version: v5.1.0
codeUrl: https://github.com/RT-Thread/rt-thread
siteUrl: http://www.rt-thread.org/
date: '2016-11-29'
lastUpdated: '2024-12-30'
star: 10706
components:
- FileSystem
- Network
- AT Commands
- Command Line Interface
- Runtime Analysis
- USBHost
- USBDevice
libraries:
- Yaffs
- FatFs
- lwIP
- MicroPython
licenses:
- Apache-2.0
platforms:
- ARM
- x86
- MIPS
- PowerPC
- RISC-V
- Andes
summary: 'RT-Thread is an open source real-time operating system for embedded devices
  from China. RT-Thread RTOS is a scalable real-time operating system: a tiny kernel
  for ARM Cortex-M0, Cortex-M3/4, or a full feature system in ARM Cortex-A8, ARM Cortex-A9
  DualCor'
---

### Features

- Object oriented real-time core (while remaining the elegant and flexible style of C Programming Language);
- 8, 32 or 256 priority scheduling multi-thread scheduling; Using the round-robin policy ensures that all threads having the same priority level will be scheduled equally;
- Synchronization of threads: semaphore and mutual exclusion semaphore (mutex) to prevent priority inversion;
- Complete and efficient support for communication between threads, including mailbox, message queues, event flag;
- Static memory management supports thread suspend/resume when it allocates/frees a memory block and thread-safe dynamic heap management;
- A device driver framework to provide standard interface to high level application;