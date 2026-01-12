---
title: MT6835 Framework
summary: A cross-platform C-language driver framework for the MT6835 21-bit magnetic
  encoder. It supports STM32 and ESP32 platforms via SPI communication, offering features
  like CRC validation, EEPROM programming, and high-resolution angle reading for precision
  motion control.
slug: mt6835-framework
codeUrl: https://github.com/Hotakus/mt6835
siteUrl: https://blog.csdn.net/qq_26106317/article/details/145571140
star: 17
lastUpdated: '2025-08-02'
rtos: ''
topics:
- encoder
- esp-idf
- esp32
- framework
- software
- stm32
isShow: false
createdAt: '2026-01-12'
updatedAt: '2026-01-12'
---

## Overview

The MT6835 Framework is a high-performance, pure C implementation designed to interface with the MT6835 21-bit magnetic encoder. Built with a focus on low coupling and high cohesion, this driver provides a flexible abstraction layer that allows it to be easily ported across various embedded platforms, with first-class support for STM32 and ESP32 (ESP-IDF).

The MT6835 is a high-resolution sensor capable of providing 21-bit angular data. This framework simplifies the complexities of SPI communication, register management, and data validation, making it an ideal choice for FOC (Field Oriented Control) motor drivers, robotics, and precision positioning systems.

## Key Features

- **Cross-Platform Compatibility**: Native support for STM32 (via CMake/CubeMX) and ESP32 (via ESP-IDF component system).
- **High Resolution**: Full support for the 21-bit raw angle data provided by the MT6835 hardware.
- **Robust Data Integrity**: Includes a built-in CRC check using a lookup table method, ensuring high-speed validation without significant performance overhead.
- **EEPROM Management**: Provides dedicated functions to write and persist configuration data, such as zero-point calibration and device IDs, to the encoder's non-volatile memory.
- **Flexible SPI Interface**: Supports both standard and burst read modes, with the latter optimized for high-speed control loops.

## Technical Implementation

The framework utilizes a hardware abstraction layer (HAL) approach where the user "links" their platform-specific SPI and GPIO functions to the driver object. This allows the core logic to remain independent of the underlying hardware.

### Communication Requirements
For successful operation, the SPI interface should be configured as follows:
- **Mode**: Full Duplex SPI
- **Clock Speed**: Up to 16MHz
- **Parameters**: CPOL=1, CPHA=1 (Mode 3)
- **Data Size**: 8-bit
- **Chip Select**: Software-controlled CS pin (active low)

## Getting Started

### Integration with STM32
For STM32 projects using CMake, the library can be added as a subdirectory. Users must implement a simple CS control function and an SPI transmit/receive function to link with the driver.

```c
// Example: Linking SPI functions in STM32
mt6835_t *mt6835 = mt6835_create();
mt6835_link_spi_cs_control(mt6835, my_cs_control_func);
mt6835_link_spi_send_recv(mt6835, my_spi_transmit_receive_func);
mt6835_enable_crc_check(mt6835);
```

### Integration with ESP-IDF
For ESP32 development, the repository includes a `CMakeLists_esp_idf.txt`. By placing the project in the `components` directory and renaming the build file, the ESP-IDF build system automatically detects and integrates the driver as a reusable component.

## Angle Reading and Calibration

The framework provides two primary methods for retrieving data: `MT6835_READ_ANGLE_METHOD_NORMAL` and `MT6835_READ_ANGLE_METHOD_BURST`. The burst mode is specifically designed for performance-critical applications where latency must be minimized.

Calibration is handled through zero-angle functions. In FOC applications, finding the mechanical zero is critical; the framework allows users to set a temporary zero position in the registers and subsequently "burn" that value into the EEPROM for permanent storage.

```c
// Reading angle data
uint32_t raw_angle = mt6835_get_raw_angle(mt6835, MT6835_READ_ANGLE_METHOD_BURST);
float radian_angle = raw_angle * (M_PI * 2.0f) / MT6835_ANGLE_RESOLUTION;

if (!mt6835->crc_res) {
    // Handle CRC error
}
```

## EEPROM Persistence

One of the most powerful features of the MT6835 is its internal EEPROM. The framework includes a safety-conscious implementation of the EEPROM write command. Because writing to EEPROM is a high-power operation, the driver requires a specific sequence, and users are advised to maintain power for at least 6 seconds after a write operation to ensure data integrity.
