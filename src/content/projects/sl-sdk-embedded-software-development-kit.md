---
title: SL_SDK Embedded Software Development Kit
summary: A modular software development kit designed for Cortex-M and RISC-V microcontrollers.
  It features a runtime environment with dynamic memory management, a hardware abstraction
  layer (HAL), and an operating system abstraction layer (OSAL) to facilitate cross-platform
  embedded application development.
slug: sl-sdk-embedded-software-development-kit
codeUrl: https://github.com/sudashannon/SL_SDK
star: 89
lastUpdated: '2022-06-24'
rtos: ''
topics:
- algorithms-and-data-structures
- arm
- gui
- lvgl
- middleware
- riscv
- rtos
- stm32
isShow: false
createdAt: '2026-01-04'
updatedAt: '2026-01-04'
---

## Overview

SL_SDK is a comprehensive software development kit (SDK) tailored for embedded devices, specifically targeting ARM Cortex-M and RISC-V architectures. The framework is designed to accelerate the development process by providing a suite of platform-related and cross-platform modules that abstract common embedded tasks, from memory management to hardware interfacing.

By offering a unified set of APIs, SL_SDK allows developers to write code that is more portable across different microcontrollers and operating systems. The project utilizes **xmake** as its primary build system, allowing for flexible toolchain configuration across various architectures.

## Core Modules

The SDK is organized into several distinct layers, each addressing a specific aspect of embedded system design:

### Runtime Environment (RTE)
The RTE module provides essential system services required for robust application execution. It includes:
- **Dynamic Memory Management**: A dynamic memory pool for efficient heap allocation.
- **Concurrent Data Structures**: Implementation of thread-safe or interrupt-safe data structures such as linked lists, hash tables, arrays, and ring buffers.
- **Logging and Shell**: A built-in logging system for debugging and a shell system for interactive command-line access to the device.

### Hardware Abstraction Layer (HAL)
The HAL provides a standardized interface for accessing hardware peripherals. By using a unified device instantiation and access API, developers can interact with peripherals like GPIO, UART, or SPI without being tied to the specific register maps of a particular silicon vendor.

### Operating System Abstraction Layer (OSAL)
To simplify the transition between different Real-Time Operating Systems (RTOS), the OSAL provides a common set of primitives for task management and synchronization. This layer makes it significantly easier to port applications between different RTOS environments or even bare-metal setups.

### Software Interface Standard (SIS)
Similar in philosophy to ARM's CMSIS, the SIS module aims to provide a unified API to adapt to different processor cores. This ensures that core-level features of Cortex-M and RISC-V processors are handled through a consistent interface.

### Bootloader and OTA
SL_SDK includes a dedicated bootloader implementation. Notably, this bootloader is designed to be compatible with the **RT-Thread (RTT) OTA firmware format**, allowing devices using SL_SDK to integrate into ecosystems that utilize RTT's over-the-air update mechanisms.

## Technical Implementation

The project is structured to be highly modular, with separate directories for each major component (`rte`, `hal`, `osal`, `sis`). This allows developers to pick and choose the specific modules required for their project. The inclusion of an `example` directory provides reference implementations for getting started with the various layers of the SDK.

Because SL_SDK uses xmake, the build process is streamlined. Users only need to specify their specific toolchain (such as `arm-none-eabi-gcc` or a RISC-V toolchain) within the xmake configuration to compile the project for their target hardware.
