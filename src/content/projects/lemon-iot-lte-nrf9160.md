---
title: Lemon IoT LTE nRF9160
summary: A comprehensive support repository for the Lemon IoT LTE nRF9160 board, featuring
  board definitions, schematics, and example applications. It utilizes the Zephyr
  RTOS and Nordic nRF Connect SDK to enable low-power LTE-M, NB-IoT, and GNSS connectivity.
codeUrl: https://github.com/aaron-mohtar-co/Lemon-IoT-LTE-nRF9160
siteUrl: https://lemon-iot.com/index.php/product/lemon-iot-lte-cat-m1-nb-iot-nrf9160-board/
isShow: true
image: /images/202512/lemon_iot_lte_nrf9160_diagram.webp
rtos: zephyr
libraries: []
topics:
- cat-m1
- nrf9160
- cat-nb1
- devicetree
- device-tree-overlay
- i2c
- shtc3
- spi
- zephyr
- iot
- iot-platform
- lemon-iot
---

The Lemon IoT LTE nRF9160 board is a versatile development platform designed for low-power cellular IoT applications. At its heart lies the Nordic Semiconductor nRF9160 System-in-Package (SiP), which integrates an ARM Cortex-M33 application processor with a full LTE-M/NB-IoT modem and GNSS capabilities. This repository serves as the central hub for developers looking to leverage the Lemon IoT hardware within the Zephyr RTOS ecosystem.

## Getting Started with Zephyr and nRF Connect SDK

To begin developing for the Lemon IoT LTE board, you first need to integrate the provided board files into your Zephyr environment. These files define the hardware mapping and device tree configurations necessary for the nRF Connect SDK to recognize the board. 

Developers should download the files from the `Zephyr board files` directory and place them in the appropriate SDK path (typically `\Nordic\<SDK version>\zephyr\boards\arm`). The repository supports two primary targets:
- **Lemon IoT NRF9160**: For standard applications.
- **Lemon IoT NRF9160 non-secure**: For applications utilizing the TrustZone-M non-secure environment.

## Flexible I/O and Peripheral Configuration

The nRF9160 SiP features four serial communication peripherals that can be dynamically configured as I2C (TWI), SPI, or UART. By default, the Lemon IoT board allocates the first peripheral (`&uart0`) for serial communication. 

To maintain flexibility, the project encourages the use of DeviceTree overlays to add additional buses like I2C or SPI. This approach allows developers to allocate pins based on their specific project requirements without modifying the base board definition. For instance, adding an I2C sensor would typically involve allocating `&i2c1` to avoid conflicts with the primary UART.

## Programming and Bootloaders

For developers who do not have access to an external ARM programmer like a Segger J-Link or a Nordic Development Kit, the Lemon IoT board comes pre-installed with a serial bootloader. This allows for firmware updates over a simple serial connection. The repository includes the `newtmgr` tool from the Apache Mynewt project, which is the standard utility for interacting with the management layer of the bootloader to upload new images.

## Practical Examples

To jumpstart development, the repository includes several well-documented examples:

- **Fade RGB LED**: A simple demonstration of PWM control to cycle colors on the onboard RGB LED.
- **I2C Sensor**: Shows how to interface with an SHTC3 temperature and humidity sensor using DeviceTree overlays.
- **SPI Sensor**: Demonstrates communication with an ADXL345 accelerometer over the SPI bus.

### Example CMake Configuration

Most examples follow a standard Zephyr project structure. Here is a look at a typical `CMakeLists.txt` used in the project:

```cmake
# SPDX-License-Identifier: Apache-2.0
cmake_minimum_required(VERSION 3.20.0)

find_package(Zephyr REQUIRED HINTS $ENV{ZEPHYR_BASE})
project(shtc3)

FILE(GLOB app_sources src/*.c)
target_sources(app PRIVATE ${app_sources})
```

## Hardware Documentation

Beyond software, the repository provides full transparency into the hardware design. The `Schematics` folder contains detailed PDF drawings of the board layout and circuitry, ensuring that engineers have the necessary information to integrate the Lemon IoT module into larger systems or custom enclosures.
