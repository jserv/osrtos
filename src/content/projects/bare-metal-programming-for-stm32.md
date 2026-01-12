---
title: Bare Metal Programming for STM32
summary: A learning-focused project demonstrating bare-metal programming on the STM32
  Nucleo-F446RE development board. It covers the entire embedded development lifecycle,
  including manual register control, custom startup files, linker scripts, and the
  GCC toolchain build process without using high-level HAL libraries.
slug: bare-metal-programming-for-stm32
codeUrl: https://github.com/Choaib-ELMADI/bare-metal-programming
siteUrl: https://elmadichoaib.vercel.app
star: 23
lastUpdated: '2025-09-17'
rtos: ''
topics:
- arm
- arm-cortex-m4
- assembly
- bare-metal
- bare-metal-programming
- build-tool
- cprogramming
- cprograms
- embedded-systems
- gcc
- gcc-complier
- low-level
- low-level-programming
- makefile
- microcontroller
- nucleo-board
- stm32
- stm32f4
isShow: false
createdAt: '2026-01-12'
updatedAt: '2026-01-12'
---

## Understanding Bare Metal Programming

Bare metal programming involves writing software that runs directly on a microcontroller's hardware without the abstraction layers provided by an operating system or a high-level Integrated Development Environment (IDE). This project serves as a deep dive into the STM32 Nucleo-F446RE, focusing on manual resource management, peripheral control, and the underlying mechanics of the ARM Cortex-M4 architecture.

By bypassing Hardware Abstraction Layers (HAL) and standard libraries, developers gain granular control over memory, interrupts, and GPIO registers. This approach is essential for performance-critical applications where every clock cycle and byte of memory matters.

## The Embedded Build Process

One of the primary goals of this project is to demystify how a C program transforms into a binary that a microcontroller can execute. The repository documents the multi-stage compilation process using the GNU ARM Toolchain (`arm-none-eabi-gcc`):

1.  **Preprocessing**: Handling macros and header inclusions.
2.  **Compilation**: Translating C code into assembly instructions specific to the Cortex-M4.
3.  **Assembly**: Converting assembly into relocatable object files (`.o`).
4.  **Linking**: Combining object files and resolving memory addresses based on a custom linker script.

## Core Components of a Bare Metal Project

To successfully run code on a raw microcontroller, several low-level components must be manually implemented:

### The Startup File
This project implements a custom startup file (in both C and Assembly) that prepares the MCU for operation. It is responsible for setting the initial Stack Pointer, defining the Interrupt Vector Table, and executing the `Reset_Handler`. This handler initializes the `.data` and `.bss` sections in RAM before finally jumping to the `main()` function.

### The Linker Script
Linker scripts (`.ld`) are used to define the memory map of the STM32F446RE. They specify exactly where the Flash and RAM regions start and how the various program sections—such as `.text` (code), `.rodata` (constants), and `.data` (initialized variables)—should be placed within those regions.

### System Calls and Semihosting
Since there is no OS to handle standard I/O, the project explores the implementation of `syscalls.c`. This allows the use of standard C library functions like `printf()`. By enabling **Semihosting**, the microcontroller can communicate back to the host PC's terminal via the OpenOCD debug interface, which is invaluable for debugging without dedicated hardware displays.

## Hardware Interaction and Debugging

The project demonstrates direct register manipulation to control hardware, such as blinking the onboard LD2 LED by writing to the GPIO and RCC (Reset and Clock Control) registers. 

For deployment and debugging, the project utilizes **OpenOCD** (Open On-Chip Debugger) and **GDB**. This setup allows for in-circuit programming and real-time debugging, enabling developers to set breakpoints, inspect memory addresses, and step through code directly on the STM32 hardware.

## Automation with Makefiles

To manage the complexity of cross-compilation flags and linking requirements, the project includes a comprehensive `Makefile`. This automates the generation of ELF files, memory maps, and binary images, providing a streamlined workflow for bare-metal development.

```Makefile
CC = arm-none-eabi-gcc
MACH = cortex-m4
CFLAGS = -c -mcpu=$(MACH) -mthumb -mfloat-abi=soft -std=gnu11 -Wall -O0
LDFLAGS = -mcpu=$(MACH) -mthumb --specs=nano.specs -T stm32f446xx_ls.ld -Wl,-Map=final.map

final.elf: main.o led.o stm32f446xx_startup.o syscalls.o
	$(CC) $(LDFLAGS) $^ -o $@
```

This repository is an excellent resource for anyone looking to move beyond vendor-provided libraries and understand the fundamental relationship between software and hardware in embedded systems.
