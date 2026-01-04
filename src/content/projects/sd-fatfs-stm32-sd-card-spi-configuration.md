---
title: 'SD_FATFS: STM32 SD Card SPI Configuration'
summary: A project demonstrating the implementation of a FAT file system on an SD
  card using an STM32F103 microcontroller. It utilizes the SPI peripheral for communication
  and integrates the FatFs middleware for file management operations.
slug: sd-fatfs-stm32-sd-card-spi-configuration
codeUrl: https://github.com/Sajadahf/SD_FATFS
star: 0
lastUpdated: '2022-11-26'
rtos: ''
topics:
- arduino
- cprogramming-language
- fatfs
- sdcard
- sdcard-arduino
- sdcardfs
- stm32
- stm32f1
- stm32f103
- stm32f4
isShow: false
createdAt: '2026-01-04'
updatedAt: '2026-01-04'
---

## Overview

The SD_FATFS project provides a reference implementation for interfacing Mini-SD cards with the STM32F1xx series of microcontrollers. By leveraging the Serial Peripheral Interface (SPI) and the popular FatFs middleware, this project enables embedded developers to implement robust file storage and retrieval capabilities on STM32 hardware.

Interfacing with SD cards is a common requirement for data logging, configuration storage, and firmware updates in embedded systems. This repository focuses on the SPI-based approach, which is often preferred for its simplicity and lower pin-count requirements compared to the SDIO interface.

## Technical Implementation

The project is built using the STM32Cube ecosystem, specifically targeting the STM32F103ZET6 microcontroller. It utilizes the STM32 HAL (Hardware Abstraction Layer) to manage low-level peripheral communication. 

### Key Components

- **Microcontroller**: STM32F103ZET6 (Cortex-M3), a high-density performance line MCU.
- **Middleware**: FatFs, a generic FAT/exFAT file system module for small embedded systems.
- **Communication**: SPI1 and SPI2 are configured, with the SD card module typically residing on one of these buses.
- **Debugging**: USART1 is initialized for asynchronous communication, likely used for serial logging and status output.
- **Timing**: TIM2 is configured to provide precise timing or interrupt-driven tasks.

### Configuration Details

The project configuration, managed via the `SD_FATFS.ioc` file, reveals several important settings for the file system implementation:
- **Long File Name (LFN) Support**: Enabled, allowing for more descriptive file and directory names.
- **Sector Size**: Configured for a maximum sector size of 4096 bytes to accommodate various SD card formats.
- **Clock Speed**: The system clock is configured for 40MHz, with SPI baud rates optimized for reliable data transfer (approx. 5-10 MBits/s).

## Hardware Setup

The project is designed for a custom board or a standard development board featuring the STM32F103ZETx package. The pinout configuration includes:
- **SPI1**: PA5 (SCK), PA6 (MISO), PA7 (MOSI).
- **SPI2**: PB13 (SCK), PB14 (MISO), PB15 (MOSI).
- **UART**: PA9 (TX) and PA10 (RX).
- **GPIO**: PC0, PA4, and PB12 are configured as outputs, likely serving as Chip Select (CS) lines for the SD module or status LEDs.

## Getting Started

This project is structured for use with the Keil MDK-ARM (V5) toolchain. Developers can open the project using the provided `.uvprojx` file within the `MDK-ARM` directory. The source code is organized into `Core` (application logic), `Drivers` (HAL and CMSIS), and `FATFS` (middleware and target-specific disk I/O).

For those looking to understand the implementation logic, the `user_diskio.c` file in the `FATFS/Target` directory is a critical component, as it bridges the FatFs generic API with the STM32 SPI HAL commands. This project serves as an excellent starting point for developers needing to add persistent storage to their STM32-based IoT or industrial devices.
