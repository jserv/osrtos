---
title: VS Code Development for LPC1113
summary: A collection of example projects and tests for developing firmware on the
  NXP LPC1113 microcontroller using Visual Studio Code. It features CMake-based builds
  for the GCC toolchain, covering GPIO, UART communication with interrupts, and command
  processing.
slug: vs-code-development-for-lpc1113
codeUrl: https://github.com/RoSchmi/VSCode_LPC1113
star: 0
lastUpdated: '2019-10-24'
rtos: ''
topics:
- cmake
- cmsis
- cortex-m0
- visual-studio-code
isShow: false
createdAt: '2026-01-04'
updatedAt: '2026-01-04'
---

Developing for the NXP LPC1113 series of microcontrollers often involves proprietary IDEs, but this project demonstrates how to leverage the modern Visual Studio Code environment for ARM Cortex-M0 development. The repository serves as a practical starting point for developers looking to move away from traditional toolchains in favor of a GCC and CMake-based workflow.

The LPC1113 is a cost-effective ARM Cortex-M0 based microcontroller designed for 8/16-bit microcontroller applications, offering high performance, low power, and a simple instruction set. This repository provides a series of progressive tests that move from basic hardware interaction to more complex interrupt-driven communication.

## Project Structure and Examples

The repository is organized into several distinct test projects, each focusing on a specific aspect of the LPC1113's capabilities:

- **LPC1113_Test_2**: A foundational "Blinky" example. This project establishes the basic CMake configuration required to compile code for the LPC1113F/301 MCU using the GCC toolchain.
- **LPC1113_GCC_VSCode_Uart**: Combines the Blinky functionality with basic UART communication, allowing for simple serial debugging and status output.
- **LPC1113_Uart_Event**: A more advanced implementation that utilizes interrupts for UART reception. It also demonstrates the use of timer interrupts and GPIO management, showcasing how to handle multiple hardware events concurrently without blocking the main execution loop.
- **LPC1113_Uart_Cmd_02**: A functional command-line interface (CLI) for the MCU. It allows the user to send commands with up to three parameters via UART. One implemented feature includes the ability to print out the memory content of the MCU directly to the serial console.

## Technical Implementation

The projects utilize the GCC ARM Embedded toolchain, which is the industry standard for open-source ARM development. By using CMake, the project remains platform-agnostic, allowing developers to build their firmware on Windows, macOS, or Linux with minimal configuration changes. 

The code emphasizes interrupt-driven design for serial communication. By handling UART reception via interrupts, the system remains responsive to other tasks, a critical requirement for real-time embedded applications. The command-processing example further demonstrates how to parse serial input into actionable logic, which is a common requirement for diagnostic tools and configuration interfaces in embedded systems.

## Development Environment

To use these examples, developers typically need:
- Visual Studio Code with the C/C++ and CMake Tools extensions.
- The GNU Arm Embedded Toolchain (arm-none-eabi-gcc).
- A hardware debugger compatible with the LPC1113 (such as a J-Link or LPC-Link) and OpenOCD or similar software for flashing.

This repository is particularly useful for those transitioning from beginner-level C programming to more structured embedded development, providing clear examples of how to organize a project and interact with hardware peripherals using modern tooling.
