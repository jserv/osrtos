---
title: MCU Fan Control
summary: A hardware-based fan controller for microcontrollers supporting two PWM channels
  and up to eight temperature sensors. It features configurable control algorithms
  like PI and 2-Point, with a Python-based UART utility for YAML configuration.
slug: mcu-fan-control
codeUrl: https://github.com/hrandib/mcu_fancontrol
star: 2
lastUpdated: '2024-08-28'
rtos: ''
topics:
- cpp
- hardware
- scmrtos
- stm8
isShow: false
createdAt: '2025-12-30'
updatedAt: '2025-12-30'
---

## Overview

The MCU Fan Control project is a hardware-based solution designed to provide sophisticated cooling management for equipment that suffers from noisy or poorly regulated fans. While many devices include built-in fan controllers, their control curves are often rudimentary or inefficient. This project offers a dedicated hardware module capable of managing multiple fans using advanced algorithms like PI (Proportional-Integral) and 2-Point control to stabilize temperatures effectively.

## Hardware Capabilities

The module is designed with versatility in mind, supporting different fan types and sensor configurations:

- **Dual Channel Control**: The module provides two independent PWM channels. The first channel is uniquely capable of controlling both 2-pin and 3-pin fans by regulating DC voltage (analog control), while the second channel is dedicated to 4-pin PWM fans.
- **Sensor Support**: The system can interface with up to eight sensors simultaneously. It supports four LM75-type sensors and four DS18B20-type sensors. Each control channel can be bound to up to four of these sensors, allowing for complex thermal management strategies where multiple measurement points influence a single fan's speed.
- **PCB Design**: The repository includes comprehensive hardware design files, including KiCad and Multisim projects, ensuring that users can manufacture the physical controller board required for the firmware.

## Advanced Control Logic

Unlike simple "on/off" controllers found in many consumer devices, this project implements professional-grade control logic:

- **PI Control**: Allows for smooth temperature stabilization by adjusting fan speed based on the error between the current temperature and the setpoint.
- **2-Point Control**: A classic hysteresis-based approach for simpler cooling requirements.
- **EMA Filtering**: Exponential Moving Average filtering is applied to sensor data to prevent erratic fan speed changes caused by momentary temperature spikes or sensor noise.
- **Safety Limits**: Users can define minimum and maximum PWM limits to ensure fans stay within their operational range and never stall.

## Configuration and Workflow

Configuration is handled via a PC-side Python utility (`fanutil.py`) that communicates with the microcontroller over UART. This approach allows for a user-friendly YAML-based configuration workflow:

1.  **Discovery**: Connect the board to a PC to recognize active sensors and generate a configuration template.
2.  **Customization**: Edit the YAML file to define sensor bindings, algorithm parameters (like PI constants), and polling periods.
3.  **Deployment**: Upload the configuration back to the board's non-volatile memory.

Once configured, the module operates autonomously, requiring no further connection to the PC to manage the fans. This makes it an ideal solution for standalone server racks, custom PC builds, or industrial equipment where precise, quiet cooling is a priority.
