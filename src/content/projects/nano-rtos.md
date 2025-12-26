---
title: Nano RTOS
summary: A minimalist, bare-metal RTOS kernel for ARM Cortex-M microcontrollers, providing
  essential thread-switching capabilities in both C and C++20. It is designed to be
  a lightweight drop-in component that allows developers to implement their own scheduling
  logic with minimal memory overhead.
codeUrl: https://github.com/ventZl/arm-bare-rtos
isShow: false
rtos: ''
libraries: []
topics:
- arm
- cmsis
- cortex-m
- rtos
- microcontroller
---

Nano RTOS is a minimalist "bare" RTOS designed specifically for ARM Cortex-M architectures. Its primary goal is to provide the smallest possible thread switcher while remaining flexible enough for developers to implement their own scheduling models. Whether you need preemptive multi-threading, cooperative multitasking, or a prioritized real-time scheduler, Nano RTOS provides the low-level context-switching logic required to get your threads running.

### Core Philosophy and Architecture

The project is built on the idea that an RTOS should do the "heavy lifting" of thread switching without forcing a specific design pattern on the user. By focusing strictly on the context switch—the sensitive assembly-level task of saving and restoring CPU registers—the kernel maintains an extremely small memory and flash footprint. This efficiency makes it an excellent candidate for advanced flash bootloaders or deeply resource-constrained environments where a full-featured RTOS like FreeRTOS or Zephyr might be overkill.

One of the most interesting aspects of Nano RTOS is its dual-implementation approach. The repository provides two entirely independent versions of the kernel:

*   **Pure C Implementation**: Consists of `kernel.c`, `api.h`, and `kernel.h`. This version is ideal for traditional embedded C projects.
*   **C++20 Module Implementation**: Consists of `kernel.cpp` and `arm_arch.h`. This leverages modern C++ features for developers working with the latest toolchains.

Both versions share `arm_arch.h`, which contains the necessary intrinsics for ARM architecture interactions.

### Hardware Support and Examples

Nano RTOS is designed to be portable across the ARM Cortex-M ecosystem. The project includes several practical examples demonstrating how to integrate the kernel with various SDKs and hardware platforms:

*   **Raspberry Pi RP2040**: Examples are provided for both C and C++ using the Pico SDK.
*   **Nordic nRF52 (PineTime)**: Demonstrates integration with the nRF5 SDK for wearable devices.
*   **STM32F4**: A standard implementation for the popular STM32F410 series using STM32Cube firmware.

### Integration and Usage

Integrating Nano RTOS into a project is straightforward. It has virtually no dependencies other than standard CMSIS headers for register definitions. To use the kernel, a developer typically needs to provide a thread table variable and a callback method that informs the kernel of the number of available entries in that table.

Because the kernel does not enforce a scheduling model, the user is responsible for the high-level logic. For example, to create a preemptive environment, one would typically trigger the kernel's switching logic from a timer interrupt (like the SysTick). 

### Technical Implementation Details

The kernel handles the complex task of touching sensitive registers (like `r7` or the Link Register) that are difficult to manage in high-level C code. In the nRF52 example, specific compiler flags like `-fomit-frame-pointer` are utilized to ensure the thread switcher can safely manipulate the stack and registers during a context switch. 

For those looking to explore the internals of RTOS development or those needing a tiny, reliable switcher for a custom ARM project, Nano RTOS offers a clean, well-documented starting point that stays out of the developer's way.
