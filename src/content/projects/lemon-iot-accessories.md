---
title: Lemon IoT Accessories
summary: A collection of example source code and support files for the Lemon IoT hardware
  ecosystem. It provides drivers and implementation examples for various companion
  boards including sensors, displays, WiFi-6 modules, and power management solutions.
slug: lemon-iot-accessories
codeUrl: https://github.com/aaron-mohtar-co/Lemon-IoT-Accessories
siteUrl: https://lemon-iot.com
star: 3
lastUpdated: '2023-11-17'
rtos: ''
topics:
- bme680
- iot-platform
- lemon-iot
- ltr-329als
- lvgl
- microsd
- nrf7002
- shtc3
- st7789
- zephyr
isShow: false
createdAt: '2025-12-29'
updatedAt: '2025-12-29'
---

## Overview

The Lemon IoT Accessories repository serves as the central hub for developers working with the Lemon IoT hardware ecosystem. It contains the official source code, example projects, and essential support files required to integrate various companion and power boards into IoT solutions. These accessories are designed to extend the functionality of Lemon IoT base boards, providing modular capabilities for sensing, connectivity, and user interaction.

## Hardware Ecosystem

The repository is organized around several categories of hardware, each serving a specific role in an embedded system's architecture:

### Companion Boards
Companion boards provide the primary functional interfaces for an IoT device. The repository includes support for:
- **Environmental Sensor**: Code and configuration for monitoring ambient conditions.
- **LCD Board**: Drivers and examples for visual output and user interface implementation.
- **WiFi-6 Companion**: Support for high-speed, modern wireless connectivity using the latest WiFi standards.
- **Micro SD Card Board**: Implementation files for external data logging and storage capabilities.

### Power and Base Boards
To support mobile and industrial applications, the ecosystem includes dedicated power management and prototyping hardware:
- **Battery Board**: Files related to power delivery and battery management for portable IoT nodes.
- **Breakout Board**: A base board designed to simplify prototyping by exposing pins and facilitating easy connection between different modules.

## Technical Implementation

Each directory within the repository corresponds to a specific hardware module. These directories typically contain the necessary source code to initialize the hardware, handle communication protocols (such as I2C, SPI, or UART depending on the module), and demonstrate basic functionality through example applications. 

By providing these reference implementations, the project reduces the barrier to entry for developers looking to build complex IoT devices. Whether you are implementing a data logger using the Micro SD board or a connected sensor node using the WiFi-6 and Environmental Sensor modules, the repository provides a tested starting point for firmware development.

## Getting Started

Developers should navigate to the specific directory corresponding to the hardware they are using. Each sub-folder is tailored to the specific requirements of that accessory. For comprehensive hardware specifications and further technical documentation, users are encouraged to consult the official Lemon IoT website, which provides deeper insights into the electrical characteristics and integration possibilities of the entire accessory line.
