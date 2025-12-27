---
title: DACard-Basic
summary: A custom data acquisition card based on the STM32F103C8Tx (Blue Pill) platform,
  designed for high-speed signal processing. It features multiple ADC channels capable
  of 4 Msps aggregate sampling, dedicated AC signal sensing, and configurable level
  crossing detection.
codeUrl: https://github.com/wayri/DACard-Basic
isShow: false
rtos: ''
libraries: []
topics:
- c
- cmsis
- data-aquisition
- electronic
- embedded-systems
- stm32f103c8t6
star: 1
lastUpdated: '2020-04-01'
createdAt: '2025-12-27'
updatedAt: '2025-12-27'
---

The **DACard-Basic** is a custom-designed data acquisition (DAQ) solution built around the popular and versatile STM32F103C8Tx microcontroller, commonly known as the "Blue Pill." This project aims to provide a robust hardware platform for interfacing with various analog and digital signals, making it an ideal tool for diagnostics, power monitoring, and signal analysis.

### High-Performance Analog Sensing

At the heart of the DACard-Basic is its impressive analog-to-digital conversion capability. Leveraging the STM32's internal ADCs running at 12MHz (APB2), the system is configured to achieve a total throughput of approximately 4 Msps (Mega-samples per second). This bandwidth is intelligently distributed across several specialized channels:

*   **DC Channels:** Four dedicated channels on ADC1, providing roughly 1 Msps each for steady-state measurements.
*   **AC Signal Sensing:** A dedicated low-voltage AC sensing channel on ADC2 (approx. 2 Msps) designed for signal-level monitoring rather than high-power AC mains.
*   **Level Crossing Detector:** A configurable detector for identifying specific signal thresholds.
*   **Integrated Sensors:** The board includes on-board current and voltage sensors that share the DC ADC pins, allowing for immediate power monitoring without external modules.

### Digital Interfacing and Control

Beyond analog sensing, the DACard-Basic offers significant digital flexibility. It features 10 GPIO digital pins and a DIP6 software-configurable digital header, which is particularly useful for logic testing and custom protocol implementation. 

For control applications, the board provides:
*   3 high-speed PWM pins with adjustable dead-time insertion.
*   3 complementary PWM pins.
*   2 high-power shared digital pins.

### Hardware Diagnostics and Design

The board includes visual feedback mechanisms for hardware troubleshooting. For instance, red LEDs are utilized to indicate the hardware gain selection settings. In a standard diagnostic run, these LEDs remaining off indicates a successful gain configuration test. The design is optimized for the 72MHz clock speed of the STM32F103, ensuring that the processing overhead remains low even during high-speed sampling tasks.

### Project Status

It is important to note that while the hardware design and specifications are detailed, the software for the DACard-Basic is currently in a "Gamma" or closed-source state. The developer intends to release the interfacing software under an appropriate license once the codebase reaches a stable production-ready milestone. Currently, the repository serves as a documentation hub for the prototype hardware and its diagnostic capabilities.
