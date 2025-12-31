---
title: NEORV32 FatFs Benchmark for DE0-Nano
summary: A port of the FatFs generic filesystem to the NEORV32 RISC-V processor running
  on a Terasic DE0-Nano FPGA board. It provides a benchmark suite to measure SD card
  read and write performance using an external SPI-connected card holder.
slug: neorv32-fatfs-benchmark-for-de0-nano
codeUrl: https://github.com/emb4fun/neorv32-de0n-fatfs
siteUrl: https://www.emb4fun.de/fpga/fatfs/index.html
star: 2
lastUpdated: '2023-04-30'
rtos: ''
topics:
- fatfs
- neorv32
isShow: false
createdAt: '2025-12-31'
updatedAt: '2025-12-31'
---

## Overview

This project demonstrates the integration of the FatFs generic FAT file system with the NEORV32 RISC-V processor. Specifically targeting the Terasic DE0-Nano FPGA board, it serves as a port of an earlier project that utilized a different CPU architecture. The primary goal is to provide a reliable filesystem implementation for embedded RISC-V applications and to benchmark the performance of SD card operations in this environment.

## Hardware Configuration

The project is designed to run on the Cyclone IV EP4CE22F17C6N FPGA found on the DE0-Nano. Since the DE0-Nano lacks an integrated SD card slot, the system utilizes an external Waveshare Micro SD Storage Board connected via jumper wires. 

**Key Hardware Specifications:**
- **FPGA:** Intel/Altera Cyclone IV
- **Processor:** NEORV32 RISC-V Soft-core
- **Clock Frequency:** 100 MHz
- **Storage:** microSD SanDisk Ultra 16GB
- **Connectivity:** External SPI-based SD card holder

## Technical Implementation

The software is developed using SEGGER Embedded Studio for RISC-V (v7.12a). It implements a filesystem benchmark that performs a simple write/read test followed by a performance evaluation. The system communicates with the user via a serial terminal configured at 19200 baud.

### Performance Benchmarking

The benchmark provides real-time feedback on the total drive space and available capacity of the SD card. In testing, the system achieved the following performance metrics:
- **Write Speed:** Approximately 0.93 MB/s
- **Read Speed:** Approximately 1.40 MB/s

These values demonstrate the efficiency of the NEORV32 SPI interface and the FatFs library when operating at a 100 MHz system clock.

## Software Structure

The repository includes two distinct versions of the demo:
1. **demo-fatfs**: The standard standalone benchmark application.
2. **demo-fatfs-tcts**: A version integrated with TinyCTS/AL, a lightweight task-switching system.

The project is licensed under the BSD 3-Clause License, making it suitable for both open-source and commercial adaptations. While the README serves as the primary documentation, the project structure is straightforward, focusing on the Quartus FPGA project files and the C-based application code for the RISC-V core.
