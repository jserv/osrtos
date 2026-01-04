---
title: SMD Counter
summary: An STM32F103-based device designed to count radio components in SMD tapes
  using an optical optocoupler. The project features a state-machine-based firmware
  written with CMSIS, a custom PCB, and a 3D-printed enclosure.
slug: smd-counter
codeUrl: https://github.com/Ivanchenko59/SMD_counter
star: 6
lastUpdated: '2022-01-24'
rtos: ''
topics:
- c
- cmsis
- counter
- optical-sensor
- smd
- smd-tape
- stm32
- stm32f103
isShow: false
createdAt: '2026-01-04'
updatedAt: '2026-01-04'
---

## Overview

The SMD Counter is a specialized tool designed to automate the process of counting radio components stored in SMD tapes. Developed as a comprehensive training project for the STM32F103 microcontroller, this device replaces manual counting with an optical detection system. By passing the tape through a guide slot, an optocoupler detects the presence of components or tape perforations to provide an accurate count, which is then displayed on an integrated OLED screen.

## Hardware and Design

The project is built around the popular STM32F103 "Blue Pill" ecosystem but utilizes a custom-designed PCB. The hardware stack includes:

- **Microcontroller**: STM32F103 (ARM Cortex-M3).
- **Display**: A 0.96-inch OLED display using the I2C interface for the user menu.
- **Sensors**: An optical optocoupler for component detection.
- **Power Management**: The device is powered by two 1.5V AA batteries, with voltage boosted to 3.3V via an NCP1402 step-up DC-DC converter.
- **Connectivity**: A CP2102 UART-to-USB converter for PC communication and an onboard RFID module (reserved for future warehouse tracking features).

The physical design includes a custom 3D-printed case with a dedicated guide slot for the SMD tape, ensuring consistent alignment with the optical sensor during the counting process.

## Firmware Architecture

The firmware is written using CMSIS, focusing on direct peripheral manipulation rather than high-level abstraction layers. This approach provides a deep look into the STM32 architecture, utilizing several core peripherals:

- **GPIO and Interrupts**: For button handling and high-speed sensor pulse detection.
- **Timers**: Used for PWM, timing events, and debouncing.
- **I2C**: For driving the OLED display.
- **ADC**: For monitoring the battery voltage level.

The software logic is organized using a **state machine pattern**, which manages the transitions between the main menu, counting mode, settings, and data saving screens. This ensures a responsive user interface and reliable counting logic.

## User Interface and Functionality

Upon startup, the device displays a custom animation before entering the main menu. Users can navigate through several modes using a three-button interface:

- **Counting Mode**: The primary function where the device tracks components as the tape is pulled through. It supports adjustable step sizes (e.g., for tapes where multiple holes correspond to a single component).
- **Save Menu**: After counting, users can manually adjust the final value and save it to a local database.
- **Settings**: Allows for configuration of device parameters and viewing stored data.
- **Battery Monitoring**: The main screen provides real-time feedback on the remaining battery life, calculated via the internal ADC.

This project serves as an excellent reference for developers looking to understand bare-metal STM32 development, state machine implementation in embedded C, and the integration of low-power DC-DC conversion in handheld devices.
