---
title: Blake2s RTL Implementation
summary: A fully featured Blake2s cryptographic hash function implementation in Verilog,
  targeting the SKY130A process node for the Tiny Tapeout shuttle. It supports block
  streaming and secret keys, achieving a hash rate of 41.42 MB/s at a target frequency
  of 66 MHz. The project includes a comprehensive verification environment featuring
  Cocotb simulations and FPGA-based emulation using an RP2040 microcontroller.
slug: blake2s-rtl-implementation
codeUrl: https://github.com/Essenceia/blake2_asic
star: 15
version: initial_tt_submission
lastUpdated: '2025-12-03'
rtos: ''
topics:
- asic
- blake2s
- c
- fpga
- rp2040
- sky130
- tiny-tapeout
- verilog
isShow: false
createdAt: '2026-01-15'
updatedAt: '2026-01-15'
---

## Overview

The Blake2s RTL implementation is a high-performance cryptographic accelerator designed for the SKY130A silicon process. Implementing the Blake2s hash function (RFC7693), this project provides a hardware-optimized solution for secure hashing, supporting both standard block streaming and keyed hashing modes. The design was specifically developed for the Tiny Tapeout `sky25b` shuttle, occupying a 682 x 225 µm area envelope.

## Technical Specifications and Architecture

The accelerator is designed to operate at a frequency of 66.66 MHz with a typical operating voltage of 3.3V. One of the most notable aspects of the design is its high density of sequential logic; approximately 22% of the total area is dedicated to flip-flops, which are primarily utilized for storing intermediate hash states during the computation process. 

At its target frequency, the core achieves a maximum hash rate of 41.42 MB/s. The implementation is fully featured, allowing for the processing of streaming data blocks and the use of secret keys for Message Authentication Code (MAC) generation.

## Verification and Emulation

To ensure silicon success, the project employs a multi-stage verification strategy combining simulation and hardware emulation:

### Simulation Environment
- **RTL Simulation**: Verified using a Cocotb-based testbench with Iverilog, compared against an instrumented golden model to debug intermediate algorithm states.
- **Gate-Level Simulation (GLS)**: Performed using the CVC simulator with SDF (Standard Delay Format) timing back-annotation to validate the design after synthesis.
- **Linting**: Static code analysis is handled by Verilator, with specific waivers documented to maintain code quality.

### Hardware Emulation
Beyond software simulation, the design was emulated on a Basys3 FPGA. This setup is particularly sophisticated as it connects the FPGA to an RP2040 (Raspberry Pi Pico) microcontroller. The RP2040 runs custom firmware that communicates with the hardware accelerator via a custom parallel bus protocol implemented using the RP2040's PIO (Programmable I/O) blocks. This co-emulation strategy allows for simultaneous debugging of hardware and firmware before the ASIC is manufactured.

## Development and Debugging

The project includes a robust build system based on Makefiles that handles everything from linting and simulation to FPGA bitstream generation. For hardware debugging, the flow supports automated insertion of Xilinx ILA (Integrated Logic Analyzer) debug cores for signals marked with the `mark_debug` property. On the software side, the RP2040 firmware is debugged using OpenOCD and GDB via a J-Link probe, supporting remote GDB server configurations.

## Future Roadmap

While the current version is taped-in and in fabrication, the project identifies several areas for future iteration:
- **SRAM Integration**: Utilizing SRAM macros to reduce the area currently consumed by flip-flop-based storage.
- **Enhanced Debugging**: Adding a JTAG TAP (Test Access Port) to probe internal registers directly.
- **Design for Test (DFT)**: Implementing scan chains and generating test vectors to improve post-manufacturing defect detection.
