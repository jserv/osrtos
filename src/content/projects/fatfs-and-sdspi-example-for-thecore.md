---
title: FATFS and SDSPI Example for theCore
summary: This example demonstrates the implementation of a FAT filesystem over SDSPI
  using theCore embedded C++ framework. It provides a complete workflow for the TI
  Tiva TM4C123G LaunchPad, including hardware wiring, JSON-based peripheral configuration,
  and interactive file system operations.
slug: fatfs-and-sdspi-example-for-thecore
codeUrl: https://github.com/theCore-embedded/example_fatfs
siteUrl: https://forgge.github.io/theCore/examples/fatfs-over-sdspi.html
star: 0
lastUpdated: '2018-06-30'
rtos: ''
topics:
- embedded
- embedded-systems
- fat32
- fatfs
- thecore
- tivacseries
- tm4c123
isShow: false
createdAt: '2025-12-28'
updatedAt: '2025-12-28'
---

## Overview

The `example_fatfs` project serves as a practical demonstration of integrating storage capabilities into embedded applications using **theCore**, a modular C++ framework. Specifically, it illustrates how to mount and interact with a FAT filesystem stored on a standard SD card via the Serial Peripheral Interface (SPI).

## Hardware Integration

The project is tailored for the **TI Tiva TM4C123G LaunchPad Evaluation Kit**. To interface with the SD card, the example utilizes a Catalex micro-SD adapter. Proper wiring is crucial for this setup, particularly regarding the power source; the Catalex module must be powered from a +5V source to ensure stable operation, even though the logic levels for the TM4C123G are 3.3V.

The SPI communication is handled by the SSI3 peripheral on the TivaC board, with the following pin mapping:
- **PD0**: SPI Clock (CLK)
- **PD1**: Chip Select (CS)
- **PD2**: MISO
- **PD3**: MOSI

## Configuration-Driven Development

One of the standout features of this example is its use of JSON-based configuration files. Instead of hardcoding peripheral settings directly into the source code, the project uses `tiva_tm4c_launchpad.json` to define the hardware abstraction layer. This includes:

- **Pinmuxing**: Assigning specific hardware functions to GPIO pins (e.g., mapping PD0 to SSI3Clk).
- **SPI Parameters**: Setting the master mode, clock polarity (CPOL), clock phase (CPHA), and clock dividers.
- **Filesystem Settings**: Defining the mount point (e.g., `sdcard`) and linking the FATFS driver to the underlying SDSPI block device.

This approach allows developers to easily port the application to different hardware by simply modifying the configuration metadata, keeping the application logic clean and portable.

## Interactive Functionality

When the project is flashed and running, it provides an interactive experience through a serial console (UART0). The application performs the following steps:

1. Initializes the hardware peripherals and theCore framework.
2. Mounts the SD card filesystem.
3. Scans the root directory and lists all files and folders found on the card.
4. Prompts the user to select a file via the terminal.
5. Reads and prints the content of the selected file back to the console.

This end-to-end flow demonstrates not just the filesystem drivers, but also the framework's handling of interrupts, timers (using Systick), and serial I/O.

## Getting Started

To build and run the project, the `tcore` CLI tool is used. The process involves bootstrapping the framework, initializing the repository, and compiling for the specific target. The project includes a `meta.json` file that provides the necessary toolchain information and OpenOCD configurations for debugging and flashing via the Launchpad's on-board ICDI (In-Circuit Debug Interface).

For developers looking to implement robust storage solutions in their embedded C++ projects, this example provides a clear blueprint for using industry-standard filesystems within a modern, modular framework environment.
