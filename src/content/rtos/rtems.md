---
title: RTEMS
slug: rtems
version: '6.1'
codeUrl: https://gitlab.rtems.org/rtems/rtos/rtems
siteUrl: https://www.rtems.org/
date: '2016-11-29T11:36:57+00:00'
lastUpdated: '2024-06-11'
star: 585
components:
- FileSystem
- TLS/SSL
- Dynamic Loading
- SMP
- Command Line Interface
libraries:
- LibBSD
- lwIP
- net-legacy
licenses:
- BSD
platforms:
- AArch64
- BlackFin
- i386
- lm32
- m68k, ColdFire
- Microblaze
- MIPS
- Moxie
- Nios 2
- OR1K
- PowerPC
- RISC-V
- SuperH (sh)
- SPARC (LEON)
- SPARC64
- V850
- x86
summary: RTEMS is an open source RTOS that supports open standard application programming
  interfaces such as POSIX. It is used in space flight, medical, networking and many
  more embedded devices.
---

### Features

- POSIX 1003.1b API including threads.
- VMEbus Industry Trade Association RTEID/ORKID based Classic API (similar to pSOS+).
- TCP/IP including BSD Sockets. Choice of high performance port of FreeBSD TCP/IP stack or LwIP.
- GNU Toolset Supports Multiple Language Standards. Multitasking capabilities.
- Symmetric Multiprocessing (SMP) on ARM, AArch64, PowerPC, RISC-V, SPARC, and x86.
- Homogeneous and heterogeneous multiprocessor systems. Event-driven, priority-based pre-emptive scheduling.
- Optional rate-monotonic scheduling. Intertask communication and synchronization.
- Priority inheritance.
- Responsive interrupt management.
- Dynamic memory allocation.
- High level of user configurability.
- Portable to many target environments.
- POSIX standard file system semantics.
- GNU debugger. DDD GUI interface to gdb.
- Self-hosted debugging on AArch64, ARM, i386, Microblaze, PowerPC
- Loadable modules on AArch64, ARM, Blackfin, i386, lm32, m68k, Microblaze, MIPS, Moxie, PowerPC, RISC-V, SPARC, v850