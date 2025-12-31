---
title: My-OS for Raspberry Pi
summary: A custom operating system project developed for Raspberry Pi hardware, specifically
  targeting the Model B+, A+, and Model 2. It is built from scratch using C and Assembly,
  utilizing the ARM GCC cross-compiler toolchain for bare-metal development.
slug: my-os-for-raspberry-pi
codeUrl: https://github.com/majorviraj/my-os
star: 8
lastUpdated: '2018-11-15'
rtos: ''
topics:
- arm
- armv7
- asm
- assembly
- baking-pi
- bare-metal
- baremetal
- baremetal-os
- bcm2835
- bus-pirate
- emmc
- fat32
- fatfs
- jtag
- openocd
- operating-system
- os
- pong
- raspberry-pi
- rpi
isShow: false
createdAt: '2025-12-31'
updatedAt: '2025-12-31'
---

## Overview

My-OS is an experimental project dedicated to building a functional operating system from the ground up for the Raspberry Pi platform. This project serves as a deep dive into bare-metal programming, where the software interacts directly with the hardware without the abstraction of an existing kernel like Linux. By writing the OS from scratch, the project explores the fundamental building blocks of computing, including hardware initialization, memory management, and execution flow.

## Hardware Support

The project is primarily developed and tested on the **Raspberry Pi Model B+**. However, the codebase is designed with portability in mind for similar ARMv7 and ARMv6 architecture boards. It is expected to function correctly on:
- Raspberry Pi Model A+
- Raspberry Pi 2

These platforms provide a rich environment for learning low-level ARM programming, specifically focusing on the Broadcom SoCs used in early Raspberry Pi generations.

## Technical Implementation

The development of My-OS relies on a mix of low-level assembly and high-level C code. This hybrid approach is standard in kernel development, where assembly is required for the initial boot sequence and processor configuration, while C is used for the logic and system services.

### Toolchain and Build Process
To compile the project, the developer utilizes the `arm-none-eabi-gcc` toolchain. Specifically, the project documentation references the `7-2017-q4-major` release of the GNU Arm Embedded Toolchain. This toolchain is essential for cross-compiling code on a modern PC to run on the ARM-based Raspberry Pi hardware.

### Project Structure
The repository is organized into several key directories that reflect the separation of concerns in OS design:
- **Assembly_Codes**: This section contains the startup code (often referred to as `crt0` or boot code). These routines are responsible for setting up the stack pointer, clearing the BSS section, and preparing the environment for C code execution.
- **C_Codes**: This directory contains the main logic of the operating system. This likely includes peripheral drivers (such as UART for serial debugging), interrupt handlers, and basic system calls.
- **Libraries**: A collection of reusable helper functions and abstractions that support the core kernel logic.

## Getting Started

For developers interested in bare-metal Raspberry Pi development, this project provides a template for how to structure a custom kernel. The use of the ARM GCC toolchain ensures that the project follows industry-standard compilation practices. By studying the assembly initialization and the transition into C code, users can gain a better understanding of how embedded systems wake up and begin executing complex software stacks.
