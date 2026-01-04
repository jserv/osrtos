---
title: μT-Kernel 3.0 for Renesas RX
summary: A port of the μT-Kernel 3.0 real-time operating system for Renesas RX microcontrollers,
  supporting RXv1, RXv2, and RXv3 cores. It provides a comprehensive environment for
  embedded development on RX hardware, including drivers for networking, file systems,
  and various peripherals.
slug: t-kernel-3-0-for-renesas-rx
codeUrl: https://github.com/yuji-katori/RX-mtkernel_3
star: 4
version: V1.00.10e
lastUpdated: '2025-08-16'
rtos: ''
topics:
- ethernet
- fatfs
- filesystem
- kernel
- netstack
- ntp-client
- renesas
- renesas-rx
- rtos
- rx
- sd-card
- tcpip
- tkernel
- usb-msc
isShow: false
createdAt: '2026-01-04'
updatedAt: '2026-01-04'
---

## Overview

μT-Kernel 3.0 is a highly efficient real-time operating system (RTOS) designed for small-scale embedded systems, maintained by the TRON Forum. This project brings the power of μT-Kernel 3.0 to the Renesas RX family of microcontrollers, covering the RXv1, RXv2, and RXv3 cores. By providing a robust port for these popular microcontrollers, the repository enables developers to leverage a standardized RTOS environment across a wide variety of Renesas hardware.

## Broad Hardware Support

The port is designed with versatility in mind, supporting both Little Endian and Big Endian configurations. It includes specific support for a range of popular development boards and evaluation kits, including:

- **Renesas Official Boards**: GR-SAKURA (RX63N), TB-RX231, TB-RX23W, TB-RX65N, TB-RX660, TB-RX66N, and the EK-RX72N.
- **Alpha Project Boards**: AP-RX63N-0A, AP-RX65N-0A, and AP-RX72N-0A.

This wide coverage ensures that developers can easily transition from prototyping on a target board to final hardware implementation. The architecture is structured to make porting to other RX-based products straightforward.

## Advanced Core Features

The implementation takes full advantage of the architectural improvements found in newer RX cores. For the RXv3 core, the port supports advanced features such as double-precision floating point units and interrupt register banks, which significantly reduce interrupt latency by utilizing dedicated hardware for context saving.

Additionally, the project includes a stack estimation tool. This is a critical utility for embedded developers who need to optimize memory usage by accurately calculating the required stack sizes for various tasks, preventing stack overflow while minimizing RAM footprint.

## Integrated Middleware and Drivers

Beyond the core kernel, this repository provides a suite of essential middleware and drivers to accelerate development:

- **Networking**: Support for Ethernet communication via the M3S-T4-Tiny TCP/IP protocol stack.
- **File Systems**: Integration with FatFs, allowing for sophisticated file management on external storage.
- **Storage**: Support for multiple memory devices, including RAM disks, SD cards, and USB memory sticks.
- **Peripheral Drivers**: Comprehensive drivers for I2C (using internal RIIC), simplified I2C (using SCI), Serial (SCI), and Data Flash.

For those working with the RX72N Envision Kit, the project includes specialized samples for the TFT Display, Touch Panel, and QSPI-connected Serial Flash Memory, making it an excellent starting point for HMI (Human Machine Interface) applications.

## Development Workflow

The project is tailored for the Renesas ecosystem, specifically targeting the **CS+** integrated development environment and the **CC-RX** compiler. To aid in debugging, it supports a partner OS debug plugin, allowing developers to inspect kernel objects and system states directly within the IDE. This level of integration provides a professional-grade development experience suitable for industrial and commercial applications.
