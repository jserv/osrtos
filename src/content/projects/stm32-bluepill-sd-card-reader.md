---
title: STM32 BluePill SD Card Reader
summary: A project that enables an STM32 BluePill to function as a USB SD card reader
  using the Mass Storage Class (MSC). It utilizes the FatFS library for local file
  system access and the ST USB-FS library to interface with a PC via USB, connecting
  the SD card through the SPI interface.
slug: stm32-bluepill-sd-card-reader
codeUrl: https://github.com/viteo/STM32-BluePill-SD-Card-Reader
star: 14
lastUpdated: '2022-01-11'
rtos: ''
topics:
- bluepill
- fatfs
- mmc
- msc
- sdcard
- spi
- stm32
- stm32f103
isShow: false
createdAt: '2026-01-04'
updatedAt: '2026-01-04'
---

The STM32 BluePill SD Card Reader project demonstrates how to transform a standard STM32F103 development board into a functional USB Mass Storage device. By leveraging the SPI interface of the microcontroller, the project enables communication with MMC and SD cards, allowing them to be accessed both locally by the firmware and externally by a host computer.

### Hardware Integration

The project utilizes the SPI1 peripheral on the STM32 BluePill. The wiring follows a standard SPI configuration to bridge the SD card's SPI mode and the PC's USB interface:

- **CS (Chip Select)**: PB0
- **MOSI**: PA7
- **MISO**: PA6
- **SCLK**: PA5
- **VCC/GND**: 3.3V and Ground

### Software Architecture

The firmware is built using a combination of specialized libraries to handle different layers of the storage stack:

- **FatFS (ChaN)**: Provides the file system layer, allowing the BluePill to read and write files directly to the SD card.
- **MMC SPI Library**: Handles the low-level SPI communication protocols required to interface with the SD card hardware.
- **ST USB-FS Library**: Implements the USB Mass Storage Class (MSC), which makes the SD card appear as a removable drive when connected to a PC via the BluePill's USB port.

### Technical Implementation

The project is configured for the STM32F103C8T6 microcontroller. The provided `.ioc` file reveals a system clock configuration of 72MHz using an external high-speed oscillator (HSE). The USB peripheral is configured in Device mode, while SPI1 is set as a Full-Duplex Master with a baud rate prescaler of 32 to ensure stable communication with the SD card.

### Development Environment

This project is designed for use with **STM32CubeIDE**. It includes a `.ioc` configuration file for reference regarding pin assignments and clock settings. However, the project maintainer explicitly advises against using the 'Generate Code' feature in STM32CubeMX to prevent overwriting the custom logic integrated into the project.

### Performance and Limitations

While the project successfully implements a card reader, users should be aware that data transfer rates are limited. Because the SD card is accessed via SPI rather than the faster SDIO interface, and the USB peripheral operates at Full-Speed (12 Mbps), the read and write speeds are relatively low. This makes the project ideal for embedded data logging, configuration storage, or educational purposes rather than high-performance file transfers.

### Getting Started

To deploy the project, import the directory into STM32CubeIDE using the 'Open Project from File System' option. After flashing the firmware and connecting the SD card to the specified SPI pins, the BluePill can be connected to a computer. The operating system should recognize the device as a standard USB Mass Storage device, allowing for seamless file manipulation on the SD card.
