---
title: FatFs Library for Raspberry Pi Pico and Pico 2
summary: A FatFs implementation for the Raspberry Pi Pico series, supporting both
  native SPI and PIO-based SPI interfaces. It provides support for SD, SDHC, and SDXC
  cards with FAT16, FAT32, and exFAT file systems on RP2040 and RP2350 microcontrollers.
slug: fatfs-library-for-raspberry-pi-pico-and-pico-2
codeUrl: https://github.com/elehobica/pico_fatfs_test
star: 59
version: fatfs-R0.15-1.0.2
lastUpdated: '2025-05-19'
rtos: ''
topics:
- exfat
- fatfs
- raspberry-pi-pico
- raspberry-pi-pico-2
- rp2040
- rp2350
isShow: false
createdAt: '2026-01-04'
updatedAt: '2026-01-04'
---

## Overview

The pico_fatfs project provides a robust implementation of the FatFs R0.15 library specifically tailored for the Raspberry Pi Pico and Pico 2 series. By bridging the popular FatFs file system module with the RP2040 and RP2350 microcontrollers, this library enables developers to easily integrate SD card storage into their embedded projects. It supports a wide range of card types including SD, SDHC, and SDXC, and is compatible with FAT16, FAT32, and exFAT formats.

## Flexible SPI Interfacing

One of the standout features of this library is its dual-mode SPI support. Depending on your hardware layout and pin requirements, you can choose between two different SPI master implementations:

1.  **Native SPI Function**: This mode utilizes the hardware SPI blocks of the Raspberry Pi Pico series. It is optimized for speed and efficiency but requires adherence to specific pin assignments defined by the microcontroller's multiplexing logic.
2.  **SPI PIO Function**: For projects requiring more flexible pin assignments, the library leverages the Pico's Programmable I/O (PIO) state machines. This allows any GPIO to be used for SPI communication, which is particularly useful when the native SPI pins are already occupied by other peripherals.

The library is intelligent enough to switch to PIO mode automatically if the user-provided pin configuration does not match the native SPI hardware constraints.

## Configuration and Usage

Setting up the library involves defining a configuration structure that specifies the SPI instance, clock speeds, and pin assignments. The library provides a simple API to initialize the interface:

```c
  pico_fatfs_spi_config_t config = {
      spi0,                   // spi_inst (spi0, spi1 or NULL)
      CLK_SLOW_DEFAULT,       // clk_slow
      CLK_FAST_DEFAULT,       // clk_fast
      PIN_SPI0_MISO_DEFAULT,  // pin_miso (SPIx_RX)
      PIN_SPI0_CS_DEFAULT,    // pin_cs
      PIN_SPI0_SCK_DEFAULT,   // pin_sck  (SPIx_SCK)
      PIN_SPI0_MOSI_DEFAULT,  // pin_mosi (SPIx_TX)
      true                    // pullup
  };
  bool spi_configured = pico_fatfs_set_config(&config);
```

If the configuration requires PIO, developers can further customize the PIO instance and state machine used to avoid conflicts with other PIO-based drivers in the system.

## Performance and Benchmarking

The project includes comprehensive benchmark tests to measure real-world performance across various SD card vendors and standards. These tests evaluate write and read speeds as well as latency. For instance, on an RP2040 running at 125 MHz, the native SPI clock can reach up to 31.25 MHz, while the PIO implementation can achieve approximately 20.83 MHz. These benchmarks provide valuable data for developers needing to understand the timing constraints of file operations in time-sensitive applications.

## Hardware Compatibility

The library is fully compatible with the latest Raspberry Pi Pico 2 (RP2350) and the original Pico (RP2040), including their wireless 'W' variants. It integrates seamlessly with the Pico SDK (confirmed up to version 2.1.1) and follows standard CMake build patterns, making it easy to include as a dependency in larger firmware projects.
