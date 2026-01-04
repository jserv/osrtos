---
title: PicoNet Serial-to-Network Converter
summary: A firmware implementation for the PicoNet serial-to-network converter based
  on 8-bit PIC18 microcontrollers. It utilizes the uIP-1.0 stack for TCP/IP connectivity
  and FatFs for SD card storage, enabling serial-to-Ethernet and serial-to-SD data
  logging capabilities.
slug: piconet-serial-to-network-converter
codeUrl: https://github.com/basvkesteren/piconet
star: 0
lastUpdated: '2019-01-25'
rtos: ''
topics:
- fatfs
- pic18
- uip
isShow: false
createdAt: '2026-01-04'
updatedAt: '2026-01-04'
---

## Overview

PicoNet is a specialized firmware project designed to transform an 8-bit PIC microcontroller into a versatile serial-to-network converter. By bridging traditional serial communication with modern Ethernet networking, PicoNet allows legacy devices or simple microcontrollers to communicate over TCP or UDP protocols. The project is specifically optimized for the resource-constrained environment of 8-bit microcontrollers, employing clever memory management techniques to handle network traffic efficiently.

## Technical Architecture

The firmware is built around the Microchip PIC18F series, specifically targeting devices like the 18F24J50, 18F26J50, and 18F27J53. These microcontrollers provide a balance of integrated peripherals and low power consumption, making them ideal for small interface converters.

### Networking Stack
At the heart of PicoNet's networking capability is a modified version of the uIP-1.0 TCP/IP stack. To work around the limited RAM available on 8-bit PICs, the developer implemented tweaks that allow incoming serial data to be written directly into the buffer of the ENC28J60 network controller. Once the buffer is full, the firmware completes the packet by appending the necessary headers and transmitting it, significantly reducing the internal memory footprint required for buffering.

### Storage and File System
For data logging and configuration, PicoNet integrates the FatFs library. This allows the device to interact with SD cards, supporting standard file system operations. The current implementation includes a simple telnet console that provides basic shell commands like `ls` and `cat` to navigate and view files on the inserted SD card.

## Key Features

- **Protocol Support**: Supports both TCP and UDP for serial-to-network data transparently.
- **Dynamic Configuration**: Includes a DHCP client for automatic IP address assignment, alongside support for static IP configuration.
- **Management Interface**: A built-in Telnet console allows users to modify parameters and interact with the system remotely.
- **Hardware Integration**: Robust drivers for the ENC28J60 Ethernet controller and SPI-based SD card access.
- **Dual Toolchain Support**: The project is compatible with both Microchip's XC8 compiler and the open-source Small Device C Compiler (SDCC).

## Hardware and Peripherals

The project utilizes several hardware components and protocols to achieve its functionality:
- **ENC28J60**: A popular stand-alone Ethernet controller with an SPI interface.
- **SPI (SSP)**: Used for communicating with the Ethernet controller, SD card, and EEPROM.
- **UART**: Dual serial port support for console management and data bridging.
- **RTC**: Real-time clock integration for system uptime tracking and potential future timestamping of logs.

## Getting Started

The project is managed via a comprehensive Makefile that supports both Linux and Windows environments. Developers can choose between the XC8 and SDCC compilers by setting the `CC` variable. The firmware includes linker scripts for various PIC18 models, ensuring that the memory layout is correctly configured for the target hardware. Once compiled, the resulting hex file can be flashed to the PIC microcontroller to begin bridging serial data to the network.
