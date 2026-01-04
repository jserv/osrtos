---
title: Simple Microcontroller Operation Library (SMOL)
summary: A lightweight bare-metal framework for microcontroller development, providing
  hardware abstraction layers, board support packages, and peripheral drivers. It
  targets ARM Cortex-M0+ platforms like the SAMD21 and includes drivers for common
  display controllers.
slug: simple-microcontroller-operation-library-smol
codeUrl: https://github.com/JeremyGrosser/smol
star: 0
lastUpdated: '2019-08-13'
rtos: ''
topics:
- arduino
- atmel
- cmsis
- cortex-m
- isc-license
- samd21
isShow: false
createdAt: '2026-01-04'
updatedAt: '2026-01-04'
---

## Overview

The Simple Microcontroller Operation Library (SMOL) is a lightweight framework designed to streamline the development of embedded applications on bare-metal hardware. By providing a structured environment for platform-independent logic, board support packages (BSPs), and peripheral drivers, SMOL allows developers to focus on application code rather than low-level register manipulation for every new project.

SMOL is particularly focused on ARM-based microcontrollers, utilizing the GNU Arm Embedded Toolchain for compilation. Its architecture encourages a clean separation between application code, hardware-specific configurations, and reusable drivers.

## Hardware Support

SMOL includes built-in support for several platforms, ranging from stable production-ready boards to experimental targets:

- **Atmel SAM D21 Xplained Pro**: A stable target for the popular Cortex-M0+ microcontroller.
- **Arduino M0 Clones (m0-mini)**: Support for various SAMD21-based mini boards.
- **Raspberry Pi**: An unstable/experimental target for broader platform testing.
- **Clock3**: A custom implementation for a desk clock based on the ADA3010.

## Project Structure

The repository is organized to facilitate modularity and porting to new hardware:

- **src/**: Contains the primary application code.
- **include/platform/**: Houses platform-independent methods and abstractions.
- **boards/**: Contains board-specific build configurations and initialization code.
- **driver/**: Includes peripheral drivers for external components.
- **make/**: Contains the core build system logic and toolchain definitions.

## Integrated Drivers

SMOL provides a growing library of drivers for common embedded peripherals, making it easier to integrate displays and controllers into a project:

- **HT16K33**: A stable driver for the Holtek LED matrix controller, commonly used in segment displays and LED matrices.
- **SSD1306**: A driver for the ubiquitous OLED display controller, allowing for graphical output on small screens.

## Build System

The project uses a modular Makefile-based build system. Compiling for a specific target is as simple as specifying the board variable during the make process:

```bash
make BOARD=samd21-xpro
```

The build system is configured with `-ffreestanding` and `-std=c11`, ensuring that the code is suitable for execution in environments without a standard operating system. It generates standard output formats including `.elf`, `.hex`, `.bin`, and `.lst` files for debugging and flashing.
