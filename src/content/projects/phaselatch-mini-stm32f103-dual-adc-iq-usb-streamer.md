---
title: PhaseLatch Mini – STM32F103 Dual-ADC IQ USB Streamer
summary: A high-rate continuous streaming platform for interleaved dual ADC (I/Q)
  samples using an STM32F103C8 microcontroller. It features optimized USB Full-Speed
  CDC throughput reaching over 210 kS/s and includes a suite of Python host tools
  for live visualization, FIFO bridging, and SDR integration.
slug: phaselatch-mini-stm32f103-dual-adc-iq-usb-streamer
codeUrl: https://github.com/AndersBNielsen/PhaseLatchMini
star: 63
lastUpdated: '2025-11-14'
rtos: ''
topics:
- adc
- dma
- gqrx
- sdr
- stm32f103
- usb
isShow: false
createdAt: '2026-01-13'
updatedAt: '2026-01-13'
---

## Overview

PhaseLatch Mini is a specialized hardware and firmware ecosystem designed for high-rate continuous streaming of interleaved dual ADC (I/Q) samples. Built around the ubiquitous STM32F103C8 "Blue Pill" microcontroller, the project achieves impressive throughput over USB Full-Speed (FS) using the standard Communication Device Class (CDC). It was originally developed as a lightweight streaming engine for the PhaseLoom project but serves as a versatile platform for any dual analog front end producing baseband signals.

## Hardware Capabilities

The PhaseLatch Mini hardware is a compact 4-layer PCB featuring a Blue Pill-inspired footprint. It integrates two SMA input ports (J20 for I and J21 for Q) with on-board ~100 kHz low-pass filtering, providing roughly 210 kHz of complex baseband bandwidth. 

**Key hardware features include:**
- **MCU:** STM32F103C8 (72 MHz) in an LQFP-48 package.
- **ADC:** Dual simultaneous 12-bit ADC mode, packing samples into 32-bit words.
- **Connectivity:** USB-C connector for data and power.
- **Timing:** Dedicated 8 MHz and 32.768 kHz crystals for stable system and RTC operation.
- **Noise Reduction:** Ferrite beads and local decoupling for clean ADC rails, with unused GPIOs forced to analog mode to minimize switching noise.

## Firmware Architecture

The firmware is highly optimized for throughput, targeting a complex sample rate of approximately 210.5 k I/Q samples per second. It utilizes a dynamic timer trigger initialization routine that searches for the closest achievable rate at runtime using the STM32's TIM3 peripheral.

To maintain sustained USB payload throughput exceeding 500 KiB/s, the firmware employs several advanced techniques:
- **Circular DMA:** Uses half and full transfer interrupts to manage data flow.
- **Lock-free Ring Queue:** Feeds the USB transmit path to prevent blocking.
- **ISR Burst Chaining:** Minimizes USB idle gaps by chaining up to 16 packets per IN completion.
- **Immediate DMA IRQ Kick:** Ensures the first packet of each buffer is scheduled promptly.

## Data Format and Processing

Each I/Q sample pair is delivered as a 32-bit little-endian word. The lower 16 bits contain the I channel (ADC1), and the upper 16 bits contain the Q channel (ADC2). In both cases, the 12-bit ADC result is right-aligned within its 16-bit lane. Host-side tools typically mask these values and center them at 2048 to produce signed floating-point values for signal processing.

## Host Tooling and SDR Integration

A significant portion of the project is dedicated to Python-based host utilities that facilitate data capture and analysis. These tools include:
- **host_test.py:** A capture utility with optional float32 output and basic statistics.
- **host_iq_fifo.py:** A bridge that streams CDC data into a named FIFO, allowing real-time integration with SDR software like GQRX or GNU Radio.
- **host_iq_live.py:** Provides a terminal-based live view of I/Q levels with sparklines and averages.
- **host_diagnostics.py:** Decodes status packets and provides USB descriptor information for troubleshooting.

## Getting Started

The project is managed via PlatformIO, offering several build environments tailored for different use cases, such as `adc` for active streaming or `diag` for troubleshooting. Once flashed, the device responds to simple ASCII commands over the serial interface, including `START`, `STOP`, and `STATS`, making it easy to integrate into custom automated workflows.
