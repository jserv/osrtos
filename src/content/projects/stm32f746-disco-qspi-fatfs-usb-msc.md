---
title: STM32F746-DISCO QSPI FATFS USB-MSC
summary: A firmware project for the STM32F746-DISCO board that implements a Flash
  Translation Layer (FTL) using the Dhara library. It enables external QSPI flash
  memory to be used as a USB Mass Storage device with a FATFS file system, handling
  wear leveling and block management.
slug: stm32f746-disco-qspi-fatfs-usb-msc
codeUrl: https://github.com/SergeyLadanov/STM32F746-DISCO_QSPI_FATFS_USB-MSC
star: 3
lastUpdated: '2022-01-20'
rtos: ''
topics:
- fatfs
- qspi
- stm32
- stm32cubeide
- stm32f746g-discovery
- usb-ms
isShow: false
createdAt: '2026-01-04'
updatedAt: '2026-01-04'
---

The STM32F746-DISCO_QSPI_FATFS_USB-MSC project provides a comprehensive implementation for managing external flash memory on the STM32F746 Discovery kit. By combining high-speed QSPI communication with a sophisticated Flash Translation Layer (FTL), the project allows developers to treat raw flash memory as a standard block device, suitable for hosting a FAT-formatted file system.

### Flash Translation with Dhara

A central component of this project is the integration of the Dhara library. Standard flash memory, especially NAND or high-capacity NOR flash, requires careful management due to its erase-before-write nature and limited write cycles. Dhara provides a Flash Translation Layer that handles:
- **Wear leveling**: Distributing writes across the flash to extend the life of the hardware.
- **Bad block management**: Identifying and bypassing unreliable areas of the memory.
- **Logical-to-physical mapping**: Translating standard block requests into flash-specific page operations.

This abstraction is critical for implementing a reliable file system like FATFS on top of raw flash, as it prevents the file system from prematurely wearing out specific sectors, such as the File Allocation Table.

### USB Mass Storage Integration

The project configures the STM32F746 as a USB Device using the Mass Storage Class (MSC). This allows the Discovery board to act as a removable drive when connected to a host computer. The host operating system can read and write files directly to the QSPI flash memory. The firmware bridges the USB MSC requests to the Dhara FTL, which in turn communicates with the W25Q128 flash chip via the Quad-SPI peripheral.

### Hardware and Peripherals

The implementation targets the STM32F746NG microcontroller. Key peripherals and technologies utilized include:
- **QSPI**: Used in 4-bit mode for high-throughput access to the external 128-Mbit flash memory.
- **USB OTG FS**: Configured in device mode for the Mass Storage interface.
- **FATFS**: Integrated to provide a standard file system structure within the flash.
- **STM32 HAL**: The project is built using the STM32 Cube HAL framework, ensuring compatibility with standard STM32 development workflows.

### Project Structure

The repository includes a complete STM32CubeIDE project configuration. The `Core` directory contains the main application logic and peripheral initialization, while the `Middlewares` folder houses the ST USB library and the FatFs implementation. A custom Python script, `CubeMX_CPP_Converter.py`, is also included, which assists in managing code generation or converting project files for C++ compatibility.

This project serves as an excellent reference for developers needing to implement high-performance data logging or removable storage solutions on STM32 platforms where internal flash is insufficient and reliability is a priority.
