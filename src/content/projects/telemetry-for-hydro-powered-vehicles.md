---
title: Telemetry for Hydro-Powered Vehicles
summary: A data collection and storage module for STM32F103C8T6 microcontrollers,
  designed for use in hydro-powered vehicle electronic systems. It captures data from
  an RS-485 bus and logs it to a flash drive using the FatFs file system.
slug: telemetry-for-hydro-powered-vehicles
codeUrl: https://github.com/EcoTech-Team/Telemetry
star: 1
lastUpdated: '2020-12-07'
rtos: ''
topics:
- board
- bus
- fat32
- fatfs
- hydrogen
- rs-485
- sdcard
- spi
- stm32f103
- telemetry
- uart
- vehicle
isShow: false
createdAt: '2026-01-04'
updatedAt: '2026-01-04'
---

## Overview

The Telemetry project is a specialized embedded system developed for hydro-powered vehicles. Its primary role is to act as a data logger within the vehicle's electronic ecosystem, capturing real-time information from an RS-485 communication bus and persisting it to a flash drive for later analysis.

Built around the popular STM32F103C8T6 microcontroller (often referred to as the "Blue Pill"), the system provides a robust bridge between industrial-standard communication protocols and mass storage. It was designed to be integrated into the electronic systems of high-performance hydro-powered racing vehicles.

## Technical Architecture

The firmware is built using the STM32 HAL (Hardware Abstraction Layer) libraries, configured via STM32CubeMX. The system utilizes several key peripherals and middleware components to achieve its logging goals:

- **RS-485 Interface**: Used for high-reliability data collection from various sensors and controllers on the vehicle's internal bus. This is managed through the USART3 peripheral.
- **SPI Interface**: Communicates with an external flash drive or SD card module via SPI1.
- **FatFs Middleware**: Provides a FAT file system implementation, allowing the logged data to be stored in a format easily readable by standard operating systems.
- **Custom Controllers**: The project includes specific drivers for LED management, SPI communication, and bus handling located in the `Drivers/Controllers` directory.

The project is structured for development within Visual Studio Code using the `stm32-for-vscode` extension, which integrates the GNU Arm Embedded Toolchain and OpenOCD for a streamlined "edit-compile-debug" workflow.

## Data Logging and Analysis

Data is stored on the flash drive in a structured format. To facilitate the interpretation of this data, the repository includes a Python-based analysis tool named `analyze_data.py`. This script allows users to process the telemetry files directly from the mounted drive, making it easy to review vehicle performance after a run.

```bash
$ python3 analyze_data.py /mnt/Telemetry
```

The analysis tool relies on standard scientific Python libraries such as `matplotlib`, `numpy`, and `scipy` to visualize and process the captured vehicle metrics. A `requirements.txt` file is provided to set up the necessary environment for these host-side tools.

## Hardware Configuration

The system's hardware parameters are defined in the `Telemetry.ioc` file, which can be opened with STM32CubeMX. Key configurations include:

- **Clock Speed**: 72 MHz (using an external 8MHz crystal and PLL).
- **USART3**: Configured for asynchronous communication for the RS-485 bus.
- **SPI1**: Configured in Master mode for data storage with a baud rate prescaler of 256.
- **GPIOs**: Dedicated pins for status LEDs (LED1, LED2, LED3) and chip select lines for the SPI interface.

This setup ensures high-speed processing and reliable data throughput, essential for monitoring the dynamic performance of hydro-powered racing vehicles in real-time.
