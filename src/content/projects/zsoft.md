---
title: zSoft
summary: A collection of operating systems and applications for ZPU, ARM Cortex-M4,
  and M68K architectures. It features zOS, a disk-based operating system, and ZPUTA,
  a hardware testing application, targeting FPGA platforms and the Teensy 3.5 development
  board.
slug: zsoft
codeUrl: https://github.com/pdsmart/zSoft
star: 4
version: v2.0
lastUpdated: '2022-08-24'
rtos: ''
topics:
- arduino
- armv7
- assembly
- bash
- basic-interpreter
- c
- c-plus-plus
- cortex-m4
- editor
- fatfs
- makefile
- operating-system
- rtl
- teensy35
- teensyduino
- zpu
isShow: false
createdAt: '2026-01-04'
updatedAt: '2026-01-04'
---

## Overview

zSoft is a comprehensive software ecosystem developed for the ZPU processor and its successors. While the "Z" originally stood for ZPU, the project has evolved into the "Zeta" project (the sixth Greek letter) to reflect its expansion into multiple CPU architectures, including the ARM Cortex-M4 (specifically the Freescale K64F found on the Teensy 3.5) and the Motorola 68000 (M68K).

The project provides a complete stack for embedded development, ranging from low-level bootstrap loaders to a disk-based operating system and a suite of application applets. It is particularly focused on FPGA-based SoC designs and vintage computer emulation, such as the Sharp MZ series.

## Core Components

The zSoft repository is organized into several distinct layers of software, each serving a specific role in the system lifecycle:

### zOS (Zeta Operating System)
zOS is the flagship operating system of the project. It evolved from a testing application into a more sophisticated environment comparable to CP/M or MS-DOS. Unlike simple firmware, zOS is designed to store and execute applications from an SD card rather than having them hard-coded into the kernel. This modularity allows for a flexible development environment where tools can be updated without reflashing the entire system.

### ZPUTA (ZPU Testing Application)
Originally the precursor to zOS, ZPUTA remains a vital part of the ecosystem for hardware verification. It can be built as a single standalone program containing various applets, making it ideal for environments where an SD card interface is not yet available or required. It continues to serve as the primary tool for CPU and hardware-level testing.

### IOCP (I/O Control Program)
IOCP is the lowest-level bootstrap program in the zSoft stack. It is designed to be extremely size-sensitive, fitting into small Boot ROMs or BRAM. By utilizing the Petit FatFS library, IOCP can bootstrap more complex kernels (like zOS or ZPUTA) directly from an SD card, significantly speeding up the development cycle for FPGA-based hardware.

## Hardware and Architecture Support

zSoft is designed with portability in mind, supporting a variety of processing environments:
- **ZPU (Evo/Flex/Small/Medium):** Various configurations of the stack-based ZPU processor implemented in FPGA.
- **ARM Cortex-M4 (K64F):** Support for the Teensy 3.5, allowing zSoft to run on modern, high-performance microcontrollers.
- **M68K:** Support for Motorola 68000 architectures.
- **Sharp MZ Series:** Specific builds allow zOS to act as a host OS for Sharp MZ hardware emulators.

## Application Ecosystem

The project includes several "applets" that run on top of zOS or ZPUTA, providing a functional user environment via a VT100 terminal interface:
- **ed & kilo:** Visual WYSIWYG text editors designed for serial terminal use, with `kilo` offering advanced features like syntax highlighting.
- **mbasic:** An interactive Mini-Basic interpreter for on-device programming.
- **System Tools:** Various utilities for file management and hardware diagnostics.

## Build System and Configuration

The project utilizes a sophisticated shell-based build system (`build.sh`) that allows developers to configure memory maps, stack sizes, heap locations, and target architectures. This flexibility is crucial for FPGA development where BRAM resources are often limited and vary between different boards. The build script manages the generation of linker scripts and orchestrates the compilation of libraries, the kernel, and the application suite in a single workflow.
