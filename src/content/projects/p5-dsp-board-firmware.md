---
title: P5-DSP-Board Firmware
summary: C firmware for the FHNW P5 DSP Board, a custom audio effect box powered by
  the STM32F412 microcontroller and TLV320 audio codec. It utilizes the CMSIS/DSP
  library for real-time audio processing, including FIR filtering, and features dual
  OLED displays and rotary encoders for user interaction.
slug: p5-dsp-board-firmware
codeUrl: https://github.com/mnemocron/P5-DSP-Board-mdk
star: 11
version: '1.3'
lastUpdated: '2020-01-15'
rtos: ''
topics:
- audio-dsp
- cmsis
- cmsis-dsp
- codec
- dma
- dsp
- i2s
- i2s-audio
- stm32
- stm32f4
isShow: false
createdAt: '2026-01-04'
updatedAt: '2026-01-04'
---

The P5-DSP-Board-mdk repository contains the C firmware for a specialized audio digital signal processing (DSP) board. Developed for HAM radio enthusiasts and hobbyist musicians, this project provides an affordable yet high-performance solution for real-time audio effects. The system is built around the ARM Cortex-M4 architecture, specifically leveraging the STM32F412 microcontroller's floating-point capabilities to handle complex mathematical operations required for audio manipulation.

### Hardware Architecture

The hardware is designed for versatility and direct user interaction. The core components include:
- **STM32F412 Microcontroller**: An ARM Cortex-M4 core providing the necessary computational power for DSP tasks.
- **TLV320 Stereo Audio Codec**: Handles high-quality audio input and output via I2S.
- **Dual OLED Displays**: Two 1-inch SSD1306-based screens for visual feedback and menu navigation.
- **User Interface**: Two rotary encoders and two push buttons for parameter adjustment.
- **Power Management**: A USB port for power and programming, with the capability to run on a rechargeable battery.

### Digital Signal Processing Dataflow

The firmware implements a sophisticated dataflow to ensure low-latency audio processing. Audio data is sampled through the I2S2 interface and transferred into memory using a DMA (Direct Memory Access) circular buffer. This approach allows the CPU to process one half of the buffer while the DMA controller fills the other half, preventing audio dropouts or glitches.

The project utilizes the CMSIS/DSP library, a standard for ARM-based microcontrollers, to implement signal processing algorithms. A primary demonstration of this is the implementation of a Finite Impulse Response (FIR) filter. Validation measurements indicate high audio fidelity, with a Total Harmonic Distortion ($THD_2$) of 75.77dB and an Effective Number of Bits (ENOB) of 11.23 bit.

### Software Implementation

The project is structured to separate hardware initialization from DSP logic, making it easier to maintain and extend:
- `main.c`: Manages the initial peripheral setup and starts the DMA transfers.
- `stm32f4xx_it.c`: Handles the DMA Half Transfer and Transfer Complete interrupts, which trigger the processing routines.
- `dsp_processing.c`: Contains the implementation of various DSP effects.
- `fir.c`: Specifically implements the CMSIS/DSP FIR filter example.

For the display, the project integrates a driver for the SSD1306 OLED, allowing for text and graphics rendering. The following snippet illustrates the initialization and usage of the display:

```c
SSD1306_t holed1;
holed1.hi2cx = &hi2c1;

ssd1306_Init(&holed1);
ssd1306_Fill(&holed1, Black);
ssd1306_SetCursor(&holed1, 2, 0);
ssd1306_WriteString(&holed1, "Hello,", Font_11x18, White);
ssd1306_UpdateScreen(&holed1);
```

### Development Environment

The project is configured for the MDK-ARM (Keil) toolchain and uses STM32CubeMX for peripheral configuration (`P5_Debug.ioc`). It also includes MATLAB scripts for filter design or analysis, bridging the gap between mathematical modeling and embedded implementation. This makes it an excellent reference for developers looking to implement real-time audio processing on STM32 platforms.
