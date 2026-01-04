---
title: STM32 SDMMC FatFs WAV File Handling
summary: A sample project demonstrating file system management on STM32 microcontrollers
  using SD cards. It integrates the FatFs middleware with SDMMC peripherals and DMA
  for efficient data transfer, specifically targeting the STM32F746NGHx on the STM32F746G-DISCO
  board.
slug: stm32-sdmmc-fatfs-wav-file-handling
codeUrl: https://github.com/shishir-dey/stm32-sdmmc-fatfs-wav
star: 3
lastUpdated: '2021-05-06'
rtos: ''
topics:
- fatfs
- microcontrollers
- sdmmc
- stm32
- wav
isShow: false
createdAt: '2026-01-04'
updatedAt: '2026-01-04'
---

## Overview

Managing data on external storage is a fundamental requirement for many embedded applications, ranging from data logging to audio playback. The `stm32-sdmmc-fatfs-wav` project provides a practical implementation of a file system on an STM32 microcontroller, specifically utilizing the SDMMC peripheral and the popular FatFs middleware. By leveraging Direct Memory Access (DMA), the project ensures that file operations are performed efficiently without placing an excessive burden on the CPU.

## Hardware and Platform

This project is designed for the **STM32F746NGHx** microcontroller, which is the heart of the **STM32F746G-DISCO (Discovery)** board. The STM32F7 series, based on the ARM Cortex-M7 core, offers high performance with a clock speed of up to 216 MHz, making it well-suited for handling complex file operations and high-speed data transfers required for audio processing.

**Key hardware specifications include:**
- **MCU**: STM32F746NGHx (Cortex-M7)
- **Memory**: 1024 KB Flash and 320 KB RAM
- **Peripheral**: SDMMC1 configured for a 4-bit wide bus
- **Clock Configuration**: 216 MHz HCLK and 50 MHz SDMMC clock selection

## Technical Implementation

The project is built using the STM32 HAL (Hardware Abstraction Layer) and configured via STM32CubeMX. The integration of FatFs with the SDMMC peripheral is the core of the implementation.

### SDMMC with DMA

To achieve high-speed communication with the SD card, the project utilizes the SDMMC1 peripheral in 4-bit mode. A critical feature of this implementation is the use of **DMA (Direct Memory Access)**. Specifically, DMA2 Stream 3 is used for RX (receive) and Stream 6 is used for TX (transmit). By using DMA, the system can transfer blocks of data between the SD card and the internal RAM while the CPU continues to execute other tasks, which is essential for maintaining system responsiveness during heavy I/O operations.

### FatFs Middleware

The project incorporates the **FatFs** middleware, a generic FAT file system module for small embedded systems. FatFs acts as a bridge between the low-level SD card driver and the high-level application code. It provides standard file operation functions such as `f_open`, `f_read`, `f_write`, and `f_close`. The project includes the necessary glue logic in `sd_diskio.c` and `bsp_driver_sd.c` to connect the FatFs disk I/O layer to the STM32 HAL SD drivers.

## Project Structure

The repository follows a standard STM32CubeIDE project structure:
- **Core/**: Contains the main application logic (`main.c`), interrupt handlers (`stm32f7xx_it.c`), and hardware initialization code.
- **FATFS/**: Contains the configuration and application files for the FatFs middleware, including the target-specific disk I/O drivers.
- **Drivers/**: Includes the STM32F7xx HAL drivers and CMSIS (Cortex Microcontroller Software Interface Standard) files.
- **Linker Scripts**: Provided for both Flash and RAM execution (`STM32F746NGHX_FLASH.ld` and `STM32F746NGHX_RAM.ld`), defining the memory layout for the 320KB RAM and 1MB Flash.

## Getting Started

This project is intended to be used with **STM32CubeIDE**. Developers can import the project using the `.project` and `.cproject` files. The hardware configuration can be modified or viewed using the `stm32-sdmmc-fatfs-wav.ioc` file in STM32CubeMX. 

While the project name suggests WAV file handling, the primary focus is the robust implementation of the underlying file system. This setup serves as an excellent foundation for building audio players, data loggers, or any application requiring reliable SD card storage on the STM32F7 platform.
