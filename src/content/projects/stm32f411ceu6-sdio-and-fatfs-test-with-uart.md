---
title: STM32F411CEU6 SDIO and FatFs Test with UART
summary: This project demonstrates how to interface an STM32F411CEU6 (Black Pill)
  microcontroller with an SD card using the SDIO peripheral and the FatFs file system
  library. It includes a UART-based command interface for performing file operations
  and utilizes DMA to ensure efficient data handling between peripherals and memory.
slug: stm32f411ceu6-sdio-and-fatfs-test-with-uart
codeUrl: https://github.com/taejin-seong/STM32F411CEU6-SDIO-plus-FatFs-Test-With-UART
star: 1
lastUpdated: '2022-07-20'
rtos: ''
topics:
- fatfs
- hal
- sdio
- stm32
isShow: false
createdAt: '2026-01-04'
updatedAt: '2026-01-04'
---

The STM32F411CEU6, commonly known as the "Black Pill," is a powerful and compact development board favored for its performance-to-size ratio. This project provides a robust implementation for adding external storage capabilities to the Black Pill using the SDIO (Secure Digital Input Output) interface, which offers significantly higher throughput compared to traditional SPI-based SD card interfacing.

## Hardware and Interface

The setup utilizes the STM32F411CEU6 paired with an NS-SD01 SD card module. While many hobbyist projects rely on SPI for SD cards due to its simplicity, this project leverages the dedicated SDIO peripheral of the STM32F4. The configuration includes a Card Detect (CD) pin, which monitors the physical presence of the MicroSD card, transitioning from High to Low when a card is inserted. This hardware-level detection ensures the software only attempts to mount the file system when media is actually present.

## System Configuration

The project is configured using STM32CubeMX and developed within the STM32CubeIDE environment. Key peripheral settings include:

- **SDIO**: Configured for high-speed communication with the SD card, utilizing the native SD protocol rather than SPI emulation.
- **UART1**: Used as the primary debug and control interface, allowing users to interact with the file system via a terminal program like Tera Term.
- **DMA (Direct Memory Access)**: To minimize CPU overhead, DMA is employed for both UART and SDIO. Specifically, USART1_RX is set to Circular mode to handle incoming serial data continuously, while SDIO transfers use DMA to handle bulk data movement without stalling the processor.
- **NVIC**: Interrupt priorities are managed to ensure that high-speed SDIO transfers and UART communications do not conflict.

## File System Integration

At the heart of the software stack is the FatFs library, a generic FAT/exFAT file system module. The project includes a manual port of FatFs, enabling standard file operations such as creating, writing, reading, and deleting files on a FAT32-formatted SD card. The logic is encapsulated within a modular structure, with the main test routines located in `ap.c`. This modularity makes it easier to port the SD card logic to other STM32F4-based projects.

## Interactive Testing

The firmware includes a built-in test suite, `apSDCardTest`, which can be triggered via the UART terminal. This allows developers to perform several real-world tests:

- **Card Information**: Detect and print SD card metadata such as capacity and block size.
- **Directory Management**: Perform directory listings and navigate the file structure.
- **File I/O**: Create and write to files (e.g., generating CSV files like `HelloWorld.csv`) and verify data integrity by reading back stored information.
- **Performance**: Observe the speed of SDIO-based transfers compared to standard serial logging.

## Development Notes

When building the project in STM32CubeIDE, users should note that certain library folders, specifically the `Core` folder within the library path (`stm32f411ceu6_fw_module → src → lib → Core`), must be excluded from the build and debug entries. This is necessary to avoid conflicts with the project's custom modular structure. This project serves as an excellent reference for developers looking to implement high-performance storage solutions on STM32 microcontrollers using industry-standard middleware.
