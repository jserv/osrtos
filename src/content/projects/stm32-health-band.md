---
title: STM32 Health Band
summary: An open-source smart health band project based on the STM32F103C8T6 microcontroller.
  It integrates heart rate, blood oxygen, and temperature monitoring with motion-based
  features like pedometry and fall detection, synchronizing data to a mobile app via
  WiFi.
slug: stm32-health-band
codeUrl: https://github.com/FuTseYi/STM32-Health-Band
star: 18
version: v1.0
lastUpdated: '2026-01-03'
rtos: ''
topics:
- embedded-systems
- esp8266
- health-monitoring
- iot
- open-source
- smart-band
- stm32
isShow: false
createdAt: '2026-01-12'
updatedAt: '2026-01-12'
---

## Overview

The STM32 Health Band is a comprehensive open-source wearable project designed for real-time health monitoring and activity tracking. Built around the popular STM32F103C8T6 (ARM Cortex-M3) microcontroller, the project serves as an excellent reference for developers interested in sensor fusion, low-power embedded design, and IoT connectivity in the wearable space.

The system integrates several high-performance sensors to provide a full suite of health metrics, including heart rate, blood oxygen saturation (SpO2), and body temperature. Beyond vital signs, the band includes a smart pedometer and an intelligent fall detection system, making it suitable for both fitness enthusiasts and elderly care applications.

## Hardware Architecture

The project utilizes a modular hardware approach, connecting various sensors and peripherals to the STM32 MCU via standard communication protocols:

- **Main Controller**: STM32F103C8T6 running at 72MHz.
- **Health Sensing**: A MAX30102 sensor provides heart rate and SpO2 data using Photoplethysmography (PPG).
- **Motion Tracking**: An ADXL345 3-axis accelerometer handles step counting and fall detection.
- **Connectivity**: An ESP8266-01S WiFi module enables wireless data transmission to a mobile device.
- **User Interface**: A 128x64 OLED display (SSD1306) provides local data visualization, complemented by a passive buzzer for emergency alarms.

## Core Algorithms

One of the most valuable aspects of this project is the implementation of specific algorithms for health and motion data processing:

### Heart Rate and SpO2
The system employs a peak detection algorithm to analyze PPG signals. By calculating the RR-Interval (the time between peaks), it determines the heart rate. For blood oxygen, it uses the ratio of red and infrared light absorption (the R-value) to estimate SpO2 levels using the standard formula: `SpO2 = 110 - 25 × R`.

### Fall Detection
The fall detection system monitors the total acceleration vector. By calculating the magnitude of acceleration across three axes (`Total_G = √(X² + Y² + Z²)`), the firmware can identify sudden impacts or free-fall conditions (typically triggered when G-force exceeds 3g or drops below 0.5g).

### Smart Pedometer
The pedometer utilizes the ADXL345 accelerometer data to identify the rhythmic patterns of walking, filtering out noise to provide an accurate step count.

## Software and Connectivity

The firmware is developed using the STM32F10x Standard Peripheral Library and compiled with Keil uVision5. It follows a structured architecture with a clear separation between the hardware driver layer (MAX30102, ADXL345, OLED) and the user application layer.

For remote monitoring, the band acts as a WiFi hotspot. A companion Android application connects to the device to receive and display real-time health metrics. This allows for remote monitoring scenarios where a caregiver might need to check the status of a user from a separate mobile device.

## Technical Specifications

- **Data Acquisition Cycle**: 100ms
- **Display Refresh Rate**: 10Hz
- **Heart Rate Range**: 60-100 BPM
- **Temperature Accuracy**: ±0.5°C
- **WiFi Range**: 10-15 meters (indoor)
- **Power Management**: Optimized for 6-24 hours of battery life depending on usage patterns.
