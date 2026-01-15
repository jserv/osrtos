---
title: DaisySeedCubeTemplate
summary: A comprehensive STM32CubeIDE project template for the DaisySeed board (Rev
  5 & 7). It integrates essential hardware drivers for the audio codec, external SDRAM,
  and QSPI flash memory, providing a structured foundation for high-performance audio
  development.
slug: daisyseedcubetemplate
codeUrl: https://github.com/DADDesign-Projects/DaisySeedCubeTemplate
star: 11
lastUpdated: '2025-05-08'
rtos: ''
topics:
- cube
- daisyseed
- electrosmith-daisy
- framework
- stm32cubeide
- stm32cubemx
- stm32h7
isShow: false
createdAt: '2026-01-15'
updatedAt: '2026-01-15'
---

## Overview

The DaisySeedCubeTemplate is a specialized development framework designed for the DaisySeed board, a popular platform for high-fidelity audio processing. While the Daisy ecosystem typically relies on the libDaisy library, this project provides an alternative path for developers who prefer the native STM32CubeIDE environment and the STM32 HAL (Hardware Abstraction Layer). 

By handling the complex initialization of the board's static hardware components, the template allows developers to jump straight into application logic, particularly in the realms of digital signal processing (DSP) and embedded audio. It supports both Revision 5 and Revision 7 of the DaisySeed hardware.

## Hardware Integration and Features

The template provides a complete configuration for the core peripherals that make the DaisySeed a powerful audio platform. The STM32H750IBK6 microcontroller at the heart of the board is configured to interface with several critical external components:

- **Audio Codec Management**: The template includes initialization and interface management for the onboard audio codec via the Serial Audio Interface (SAI). This setup is essential for low-latency audio input and output.
- **SDRAM Configuration**: It handles the Flexible Memory Controller (FMC) setup required to access the external SDRAM, which is vital for delay lines, large buffers, and complex audio algorithms.
- **QSPI Flash Management**: The project provides routines for erasing, writing, and reading the external Quad-SPI flash memory, enabling persistent storage for samples or configuration data.
- **MPU Configuration**: Proper Memory Protection Unit (MPU) settings are included to manage cacheability and access permissions across different memory regions, ensuring system stability and performance.

## Technical Architecture

The project is structured around the STM32CubeMX configuration (`.ioc` file), which defines the pinout and clock tree for the 480MHz Cortex-M7 processor. A notable feature of this template is its support for C++ development within the STM32CubeIDE ecosystem. It includes utility scripts (`c2cpp.bat` and `cpp2c.bat`) to facilitate the transition between C and C++ source files, allowing developers to leverage modern programming paradigms alongside the standard HAL drivers.

The memory map is carefully partitioned to utilize the various RAM banks of the STM32H7, including DTCM, ITCM, and the larger D1/D2/D3 RAM blocks, alongside the external 64MB SDRAM. This ensures that high-speed buffers can be placed in the most efficient memory locations for the CPU and DMA controllers.

## Getting Started

To use this template, developers can import the project into STM32CubeIDE. The hardware initialization is handled in the `Core` directory, where the main peripherals are set up during the boot sequence. Because the template is designed as a "solid starting point," it leaves the main loop and audio callbacks open for user implementation. 

Developers can utilize the pre-configured SAI DMA streams for circular audio buffering, ensuring that the CPU is not bogged down by individual sample transfers. The inclusion of linker scripts for both Flash and RAM execution provides flexibility in how the final firmware is deployed and tested on the DaisySeed hardware.
