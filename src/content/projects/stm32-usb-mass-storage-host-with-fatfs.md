---
title: STM32 USB Mass Storage Host with FatFS
summary: An STM32F407-based project that implements a USB Mass Storage Class (MSC)
  host to interface with external USB drives. It utilizes the FatFS library to provide
  filesystem support, allowing the microcontroller to read and write files on USB
  flash drives.
slug: stm32-usb-mass-storage-host-with-fatfs
codeUrl: https://github.com/shishir-dey/stm32-usb-msc
star: 8
lastUpdated: '2024-07-19'
rtos: ''
topics:
- fatfs
- stm32
- thumb-drive
- usb-msc
- usb-otg
isShow: false
createdAt: '2026-01-04'
updatedAt: '2026-01-04'
---

## Overview

The `stm32-usb-msc` project provides a practical implementation of a USB Mass Storage Class (MSC) host on the STM32F4 platform. By combining the STM32 USB Host library with the popular FatFS middleware, this project enables embedded applications to interact with standard USB flash drives for data logging, firmware updates, or external storage.

## Hardware Foundation

The project is configured for the **STM32F407VGTx** microcontroller, a high-performance ARM Cortex-M4 core. Based on the configuration files, it is specifically tailored for the **STM32F407G-DISC1** (Discovery) board. The hardware setup utilizes the USB On-The-Go (OTG) Full Speed peripheral in Host mode, which is a common feature on this development board.

## Software Architecture

The system is built using the STM32Cube ecosystem, leveraging several key components to bridge the gap between raw USB signals and high-level file operations:

- **STM32 HAL (Hardware Abstraction Layer)**: Provides the low-level drivers for the USB OTG peripheral and other system resources like GPIOs and clocks.
- **STM32 USB Host Library**: Implements the USB protocol stack and the Mass Storage Class (MSC) driver. It handles the complex tasks of device enumeration, bulk transfers, and protocol management.
- **FatFS Middleware**: A generic FAT/exFAT filesystem module that provides a standard API (such as `f_open`, `f_read`, and `f_write`) for file operations, abstracting the underlying storage medium.

## Technical Implementation

The integration between the USB stack and the filesystem is handled via a "disk I/O" layer, typically found in `usbh_diskio.c`. This layer translates FatFS disk operations into USB MSC commands. 

When a USB drive is plugged in, the USB Host library detects the device, identifies it as a mass storage device, and begins the enumeration process. Once the device is ready, the application can mount the drive using FatFS. This architecture allows developers to treat a USB thumb drive much like a local SD card or internal flash memory.

## Key Features

- **USB Host MSC Support**: Automatically handles the connection and disconnection of USB flash drives through the ST USB Host stack.
- **Filesystem Support**: Full FAT filesystem access, allowing for complex file and directory management on external media.
- **Modular Configuration**: The project uses STM32CubeMX (`.ioc` file) for peripheral and clock configuration, making it relatively straightforward to port to other STM32 microcontrollers with USB Host capabilities.
- **Bare-Metal Performance**: The project is implemented without an RTOS, providing a lightweight example of how to handle high-level middleware in a standard super-loop architecture.

## Getting Started

The project is organized into standard STM32CubeIDE folders. The `Core/Src/main.c` file contains the main application loop and the USB host process handler. The `USB_HOST` and `FATFS` directories contain the application-specific configurations for those middlewares. 

To use this in a real-world scenario, a developer would typically add their file-handling logic inside the USB host state machine. When the state transitions to `APPLICATION_READY`, the filesystem is mounted, and the application can safely perform read/write operations on the attached USB drive.
