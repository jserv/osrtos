---
title: CARe STM32 Embedded System
summary: An STM32-based health monitoring system developed for the CARe project. It
  integrates heart rate, temperature, and weight sensors, processing data on an STM32F10x
  microcontroller and transmitting results to an Android application via Bluetooth.
codeUrl: https://github.com/NUAA-WatchDog/CARe-stm32-embedded-system
isShow: false
rtos: ''
libraries: []
topics:
- bluetooth
- c
- cmsis
- embedded-systems
- stm32f10x
lastUpdated: '2025-12-27'
createdAt: '2025-12-27'
updatedAt: '2025-12-27'
---

CARe is an embedded health-monitoring system designed as part of a comprehensive healthcare solution. Developed for the 7th China Software Cup competition, this project serves as the data collection hub, interfacing with various medical and physiological sensors to monitor a user's vital signs. The system is built on the STM32F10x platform, leveraging the ARM Cortex-M3 architecture for efficient data processing and sensor management.

### Core Functionality and Sensors
The system is designed to collect a variety of health metrics through specialized sensor modules:
- **Heart Rate and Pulse Oximetry**: Utilizing the MAX30102 sensor, the system tracks heart rate and blood oxygen levels. The project includes a dedicated I2C bit-bang driver (`bsp_i2c_gpio.c`) to interface with this sensor.
- **Body Temperature**: A DS18B20 digital thermometer is used for accurate temperature sensing, providing essential data for health assessment.
- **Weight Measurement**: The inclusion of the HX711 24-bit ADC module allows the system to interface with load cells for weight tracking.
- **Local Display**: An LCD driver (specifically the NUAA107_32_Driver) provides real-time visual feedback to the user directly on the device.

### Technical Architecture
The software is developed using the Keil μVision IDE and is based on the CMSIS (Cortex Microcontroller Software Interface Standard) and the STM32F10x Standard Peripheral Library. The project structure is organized into several key areas:
- **User Application Logic**: Located in the `User/Main` directory, containing the main entry point and interrupt handlers.
- **Hardware Drivers**: Specific directories for each sensor (HX711, MAX30102, DS18B20) and the LCD display, ensuring a modular and maintainable codebase.
- **Algorithms**: The `User/algorithm` directory contains C++ implementations for processing raw sensor data, likely filtering noise or calculating physiological trends from the raw ADC inputs.

### Connectivity and Ecosystem
A primary feature of the CARe embedded system is its ability to act as a bridge between hardware and mobile software. Once data is collected and processed by the STM32, it is transmitted via a Bluetooth module to a companion Android application. This allows for long-term data logging, advanced visualization, and user alerts on a smartphone interface.

### Development and Setup
The project is configured for the Keil MDK environment, with project files (`.uvprojx`) ready for compilation. It utilizes standard STM32 peripheral drivers for GPIO, I2C, and UART communication. Developers looking to extend the system can find the hardware configuration details in `hw_config.c`, which manages the low-level initialization of the microcontroller's peripherals.
