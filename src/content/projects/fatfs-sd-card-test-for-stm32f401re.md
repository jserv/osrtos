---
title: FatFs SD Card Test for STM32F401RE
summary: A firmware project for the STM32F401RE microcontroller demonstrating SD card
  integration via SPI using the FatFs library. It utilizes the STM32 Standard Peripheral
  Library and is configured for the NUCLEO-F401RE development platform.
slug: fatfs-sd-card-test-for-stm32f401re
codeUrl: https://github.com/francovaro/sd_card_F401RE
star: 0
lastUpdated: '2021-11-16'
rtos: ''
topics:
- fatfs
- stm32f4
isShow: false
createdAt: '2026-01-04'
updatedAt: '2026-01-04'
---

The `sd_card_F401RE` project is a practical implementation of file system management on an embedded system. Specifically, it focuses on interfacing an SD card with an STM32F401RE microcontroller using the SPI (Serial Peripheral Interface) protocol. This project serves as a testbed for the popular FatFs library, a generic FAT/exFAT file system module for small embedded systems.

### Hardware and Platform
The project is designed to run on the **NUCLEO-F401RE** development board. This board features the STM32F401RE, an ARM Cortex-M4 MCU with 512 KB of Flash memory and 96 KB of RAM. The communication with the SD card is handled via SPI, which is a common and efficient way to add storage to microcontrollers that lack a dedicated SDIO interface or where pin count is a constraint.

### Software Architecture
The firmware is built upon the **STM32 Standard Peripheral Library (StdPeriph)**, rather than the newer HAL (Hardware Abstraction Layer). This choice often results in a smaller code footprint and more direct control over the hardware registers. 

At the heart of the project is the **FatFs library**, developed by Elm-Chan. FatFs is widely used in the embedded industry because it is platform-independent and provides a standard API for file operations like `f_open`, `f_read`, and `f_write`. The project includes the necessary glue logic to bridge the FatFs generic disk I/O layer with the STM32's SPI peripherals, based on sample code provided by the FatFs author.

### Development Environment
The project is configured for use with **System Workbench for MCU (Ac6)**, an Eclipse-based IDE specifically tailored for STM32 development. The repository includes the necessary `.project` and `.cproject` files, as well as a custom linker script (`LinkerScript.ld`) that defines the memory layout for the STM32F401 device. This setup ensures that the code, constant data, and stack/heap are correctly mapped to the microcontroller's internal Flash and RAM.

### Key Features
- **SPI Interface**: Demonstrates low-level SPI configuration for data exchange with storage media.
- **FatFs Integration**: Shows how to initialize, mount, and interact with a FAT file system on an SD card.
- **Modular Design**: Includes separate directories for source code (`src`), headers (`inc`), and startup files, following standard embedded project structures.
- **UART Debugging**: The build configuration includes support for a UART library (`lib_uart`), which is essential for verifying file system operations and debugging hardware interactions in real-time.

This repository is a valuable resource for developers looking to implement persistent storage in their STM32-based applications, providing a clear example of how to integrate third-party middleware with vendor-specific peripheral drivers.
