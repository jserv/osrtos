---
title: Zynq7010 FPGA Digital Oscilloscope
summary: A high-performance digital oscilloscope system based on the Xilinx Zynq-7010
  SoC, featuring real-time waveform acquisition via an AD9280 ADC and 1080p HDMI display
  output. The project utilizes a bare-metal ARM Cortex-A9 software stack with DMA-driven
  data transfers and a custom HDMI font rendering engine to achieve a 60 FPS refresh
  rate.
slug: zynq7010-fpga-digital-oscilloscope
codeUrl: https://github.com/2827700630/Zynq7010Oscilloscope2
star: 14
lastUpdated: '2025-08-21'
rtos: ''
topics:
- arm
- oscilloscope
- zynq-7010
isShow: false
createdAt: '2026-01-13'
updatedAt: '2026-01-13'
---

## Overview

The Zynq7010 FPGA Digital Oscilloscope is a sophisticated embedded system designed to transform the Xilinx Zynq-7010 SoC into a high-performance signal analysis tool. By leveraging the heterogeneous architecture of the Zynq platform—combining FPGA logic for high-speed data acquisition and ARM Cortex-A9 cores for complex processing—the project achieves professional-grade oscilloscope features, including real-time waveform rendering at 60 frames per second on a Full HD (1920x1080) HDMI display.

## Hardware Architecture

The system is built around a robust hardware pipeline that ensures high-fidelity signal capture and low-latency display:

- **Analog-to-Digital Conversion**: Uses the AD9280, an 8-bit ADC capable of sampling at 32.26MHz. The signal is conditioned through an AD8056 operational amplifier circuit to handle a -5V to +5V input range.
- **FPGA Logic**: The Programmable Logic (PL) side handles the high-speed ADC interface and packs the samples into an AXI-Stream. It also manages the HDMI timing and physical signaling.
- **Processing System (PS)**: The ARM Cortex-A9 dual-core processor manages the system state, processes the raw ADC data, handles user inputs, and coordinates the display buffer via DMA.

## Embedded Software Architecture

Running on Xilinx Standalone (bare-metal) software, the project is optimized for maximum performance without the overhead of a traditional operating system. The software architecture is divided into several critical layers:

### DMA and Interrupt Management
A central component of the system is the AXI DMA controller. The project implements a sophisticated interrupt-driven S2MM (Stream-to-Memory Map) transfer mechanism. By using a double-buffering scheme, the system can capture new ADC samples into one memory region while the CPU processes the previous set in another, preventing data loss and display flickering.

### High-Performance HDMI Rendering
To maintain a 60 FPS refresh rate at 1080p resolution, the project employs several optimization strategies:
- **Grid Pre-rendering**: Instead of redrawing the oscilloscope grid every frame, the system pre-renders the grid into a dedicated buffer, reducing CPU load by nearly 60%.
- **Custom Font Engine**: A self-developed 8x16 pixel font rendering engine allows for high-definition text overlays for measurements and UI elements.
- **Layered Rendering**: The display system separates the background, grid, waveform, and UI text into logical layers, updating only the necessary regions to conserve memory bandwidth.

## Trigger and Timebase Systems

Despite being a bare-metal application, the project implements a "Smart Software Trigger." This system analyzes the incoming ADC buffer to find stable rising edges based on a user-defined trigger level. It includes hysteresis to filter out noise and provides three states: `TRIGGERED` (stable display), `WAITING` (searching), and `AUTO` (free-running).

The timebase system supports multiple levels of decimation, allowing the user to switch between different time scales (from 5.0μs/div to 40.0μs/div). This is achieved through uniform sampling extraction from the master 15,360-point ADC buffer.

## Technical Implementation Example

The following snippet demonstrates the core logic for the software-based rising edge trigger used to stabilize the waveform display:

```c
// Simplified rising edge detection with hysteresis
if (prev_val < (trigger_level - hysteresis) && curr_val >= trigger_level) {
    // Trigger point found
    trigger_index = current_sample_index;
    state = TRIGGERED;
}
```

## Development and Build System

The project is developed using the latest Xilinx Vitis 2025.1 environment. It includes comprehensive technical guides for DMA troubleshooting, HDMI optimization, and embedded architecture design, making it an excellent reference for developers working on Zynq-based signal processing applications.
