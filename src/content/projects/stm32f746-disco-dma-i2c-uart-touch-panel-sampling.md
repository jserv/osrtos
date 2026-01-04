---
title: STM32F746-DISCO DMA I2C/UART Touch Panel Sampling
summary: A bare-metal demonstration project for the STM32F746-DISCO board showcasing
  DMA-based I2C and UART communication. It implements touch panel scanning for the
  FT5336 controller using hardware timers and direct CMSIS register-level programming
  without high-level HAL or LL libraries.
slug: stm32f746-disco-dma-i2c-uart-touch-panel-sampling
codeUrl: https://github.com/ellectroid/STM32F746-Disco-CMSIS-DMA-I2C-UART-Touch-Panel-Sampling
star: 5
lastUpdated: '2022-06-23'
rtos: ''
topics:
- cmsis
- dma
- i2c
- nvic
- stm32
- stm32f746
- timer
- uart
- usart
isShow: false
createdAt: '2026-01-04'
updatedAt: '2026-01-04'
---

## Overview

The STM32F746-DISCO DMA I2C/UART Touch Panel Sampling project is a minimalist proof-of-concept designed for the STM32F746 Discovery board. It serves as a technical demonstration of how to implement peripheral communication using Direct Memory Access (DMA) and hardware timers while avoiding the overhead of high-level abstraction libraries like the STM32 HAL (Hardware Abstraction Layer) or LL (Low Layer) drivers. Instead, the project relies exclusively on CMSIS register definitions, providing a clear view of the underlying hardware operations.

## Technical Implementation

The project is configured to run the STM32F746 MCU at its maximum clock speed of 216MHz. The implementation focuses on three primary peripheral interactions:

- **UART Communication**: USART1 is configured to interface with the ST-Link's virtual COM port. This allows for real-time debugging and data output to a PC via terminal emulators like Putty.
- **I2C Touch Interface**: I2C3 is utilized to communicate with the onboard FT5336 capacitive touch panel. The project demonstrates how to retrieve touch coordinates and status data efficiently.
- **DMA Integration**: Both I2C and UART communications are handled via DMA, offloading data transfer tasks from the CPU to improve system responsiveness and efficiency.
- **Hardware Timers**: TIM6 and TIM7 are employed to provide regular, periodic scanning of the touch panel, ensuring consistent sampling rates without relying on software delays.

## Hardware and Software Requirements

This project is specifically tailored for the **STM32F746G-DISCO** board. Because it uses direct register access, the code is highly specific to the STM32F7 series architecture. 

On the software side, the project was developed using **STM32CubeIDE**. It is intended for developers who want to understand the "nuts and bolts" of STM32 development. The author has included extensive comments on almost every line of code, making it an excellent resource for learning how to configure registers for DMA, I2C, and UART from scratch.

## Key Features

- **Bare-Metal Approach**: No libraries used except for standard CMSIS headers.
- **Educational Focus**: Heavily commented source code explains the purpose of specific bit manipulations and register configurations.
- **Efficient Sampling**: Uses hardware timers to trigger touch panel reads, demonstrating a robust alternative to polling-based input handling.
- **DMA-Centric Design**: Showcases the configuration of DMA streams and channels for non-blocking peripheral I/O.

This project is ideal for embedded engineers looking to transition from library-dependent development to a deeper understanding of the STM32 hardware manual and register-level programming.
