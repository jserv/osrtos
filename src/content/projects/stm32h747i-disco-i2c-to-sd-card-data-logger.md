---
title: STM32H747I-DISCO I2C to SD Card Data Logger
summary: An STM32CubeIDE project for the STM32H747I Discovery board that reads sensor
  data via I2C and logs it to an SD card. It utilizes the FatFs middleware and STM32Cube
  HAL to manage high-speed data storage on the dual-core STM32H7 microcontroller.
slug: stm32h747i-disco-i2c-to-sd-card-data-logger
codeUrl: https://github.com/sh3r4zhassan/STM32H747I-DISCO_I2C_SD
star: 1
lastUpdated: '2022-01-11'
rtos: ''
topics:
- fatfs
- i2c
- i2c-sensors
- sdcardfs
- stm32
- stm32discovery
- stm32h747
isShow: false
createdAt: '2026-01-04'
updatedAt: '2026-01-04'
---

## Overview

The STM32H747I-DISCO is a high-performance development platform featuring a dual-core STM32H7 microcontroller (Cortex-M7 and Cortex-M4). This project focuses on a practical application: reading data from external sensors via the I2C protocol and persisting that data to an SD card for later analysis. It serves as a robust template for data logging applications on high-end STM32 hardware.

## Hardware Integration

The project is specifically tailored for the STM32H747I Discovery board. It utilizes the following hardware blocks and pin assignments as defined in the STM32CubeMX configuration:

- **I2C4**: Configured on pins PD12 (SCL) and PD13 (SDA) to interface with embedded or external sensors. The I2C bus is configured with a timing value of `0x403032CA` to ensure stable communication.
- **SDMMC1**: Used to communicate with the SD card slot available on the board. It uses a 4-bit wide bus (PC8, PC9, PC10, PC11, PC12, and PD2) for high-speed data transfers.
- **Cortex-M7 Core**: The project is primarily configured to run on the high-performance M7 core, which handles the peripheral management and file system operations.
- **GPIO Indicators**: Pins PI14 and PI15 are configured as outputs on the M7 core, likely used for status LEDs during the logging process.

## Technical Implementation

The firmware is developed using the STM32CubeIDE ecosystem. It relies heavily on the STM32Cube Hardware Abstraction Layer (HAL) to manage peripheral initialization and data transfer. 

### File System Management
For file system management, the project integrates the FatFs middleware. This allows the microcontroller to interact with the SD card using a standard FAT-compatible interface. The configuration specifically enables DMA (Direct Memory Access) for the SDIO interface (`USE_DMA_CODE_SD=1`), which offloads data transfer tasks from the CPU, allowing the Cortex-M7 to process sensor data while the hardware handles the storage I/O.

### Dual-Core Architecture
While the STM32H747 is a dual-core MCU, this project focuses on the Cortex-M7 core for the primary application logic. The `.mxproject` and `.ioc` files show that while the Cortex-M4 core is initialized, the heavy lifting of I2C communication and SD card writing is assigned to the M7 domain. The project includes the necessary system files for dual-core booting, ensuring that both cores are correctly managed during the power-on sequence.

## Key Functionality

The application follows a standard logging loop designed for reliability:
1. **Initialization**: The system sets up the HAL, configures the system clocks (HCLK at 64MHz), and initializes the I2C4 and SDMMC1 peripherals.
2. **Mounting**: The FatFs layer attempts to mount the SD card. If the card is missing, the application is designed to wait or signal an error, as the SD card must be present for the code to function.
3. **Data Acquisition**: The M7 core polls the I2C sensors. 
4. **Storage**: The acquired data is formatted and written to the SD card. By using the FatFs `f_write` and `f_sync` functions, the project ensures that data is periodically flushed to the physical media to prevent data loss in the event of power failure.

## Getting Started

To use this project, you will need an STM32H747I-DISCO board and a standard microSD card. 

1. **Hardware Setup**: Insert the SD card into the slot on the underside of the Discovery board.
2. **Software Setup**: Import the project into STM32CubeIDE. The repository includes the `.project` and `.mxproject` files, making the import process seamless.
3. **Build and Flash**: Compile the project for the CM7 target and flash it to the board. 

The project structure is organized into `CM7` and `CM4` directories, with the `Common` folder containing shared system files. Most user-specific logic for sensor handling will be found within the `CM7/Core/Src/main.c` file.
