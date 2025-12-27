---
title: embox
slug: embox
summary: Embox is a highly modular and configurable RTOS designed to execute Linux-compatible
  software on resource-constrained embedded systems without the overhead of a full
  Linux kernel. It provides a robust POSIX-compliant environment, supporting a wide
  array of architectures, file systems, and high-level programming languages while
  maintaining a small footprint suitable for microcontrollers.
codeUrl: https://github.com/embox/embox
siteUrl: https://github.com/embox/embox
star: 1514
version: v0.7.0
lastUpdated: '2025-12-22'
components:
- GUI
- FileSystem
- Network
- Audio
- Graphics
- Shell
- HTTP
- TCP
- UDP
- NTP
- DNS
- DHCP
- FTP
- TFTP
- USBHost
- USBDevice
- CAN
- I2C
- GPIO
- RTC
- Bootloader
- Profiling
- Shell
platforms:
- ARM
- ARM Cortex-M
- ARM Cortex-A
- AArch64
- x86
- RISC-V
- MIPS
- PowerPC
- SPARC
- Microblaze
- QEMU
- STM32
- Raspberry Pi
- i.MX6
- BeagleBoard
- LEON
licenses:
- BSD 2-Clause
libraries:
- PJSIP
- Qt
- OpenCV
- Dropbear
- Mesa3D
- ZeroMQ
- LVGL
- FFMPEG
- Nanomodbus
- Ardupilot
- TensorFlow Lite Micro
createdAt: '2025-12-22'
updatedAt: '2025-12-22'
---

### Features


- POSIX-compliant environment for seamless porting of existing Linux software.

- Highly modular architecture allowing fine-grained configuration of system components.

- Support for multiple architectures including ARM, x86, RISC-V, MIPS, SPARC, and PowerPC.

- Integrated TCP/IP stack with BSD socket support and protocols like UDP, HTTP, and NTP.

- Support for high-level languages including Python, Java, Lua, Ruby, and JavaScript.

- Advanced graphics support via Qt, OpenCV, Mesa3D, LVGL, and Nuklear.

- Multi-filesystem support including FAT, ext2/3/4, and NFS.

- Real-time multitasking with preemptive and cooperative scheduling and priority inheritance.

- Unix-like shell environment providing standard utilities such as ls, cat, and mount.

- Integrated SSH server based on the Dropbear project for secure remote access.

- Support for industrial automation frameworks like Beremiz and 4diac Forte.

- USB support including both Host and Device (gadget) modes on STM32.

- VoIP capabilities through the integration of the PJSIP project.

- Static building process ensures only required modules are included for security and size.

- Device Tree support for standardized hardware configuration.

- Comprehensive networking support on QEMU for x86, ARM, MIPS, and Microblaze.

- Support for machine learning on MCUs via TensorFlow Lite Micro.

- Industrial protocol support including Nanomodbus and IEC 61850.



### Architecture

Embox is built upon a highly modular and configurable architectural design where every functional unit—from device drivers to network protocols—is treated as a standalone module. This modularity is managed by the proprietary "Mybuild" build system, which allows developers to define dependencies, parameters, and resource requirements for each component. This ensures that the final system image contains only the code necessary for the specific target application, which is critical for resource-constrained microcontrollers.

The system provides a comprehensive POSIX-compatible layer that sits atop a microkernel-like core. This layer enables standard Linux software to run on embedded hardware by providing familiar APIs for threading, synchronization, and file I/O. The architecture is divided into arch-independent modules and a Hardware Abstraction Layer (HAL) that organizes architecture-specific code, making the process of porting Embox to new CPU architectures straightforward.

#### Core Components
- **Mybuild Framework**: The engine for module management and dependency resolution.
- **POSIX Layer**: Compatibility layer for standard C/C++ and Linux applications.
- **Virtual File System (VFS)**: An abstraction layer supporting multiple file system backends (FAT, ext4, etc.).
- **TCP/IP Stack**: A full-featured network stack with BSD socket compatibility.
- **HAL**: Architecture-specific implementations for ARM, RISC-V, x86, and others.

### Use Cases

This RTOS is ideal for:

- **Internet of Things (IoT)**: Devices requiring robust networking stacks and high-level language support (Python/Java) on low-power MCUs.
- **Robotics**: Applications that need to combine real-time motor and sensor control with high-level processing like OpenCV.
- **Industrial Automation**: Systems implementing industrial standards such as Modbus or IEC 61850 and PLC frameworks like Beremiz.
- **VoIP and Communication**: Building dedicated communication hardware using integrated PJSIP and audio subsystems on STM32 boards.
- **Legacy Software Migration**: Porting existing Unix/Linux command-line utilities or C++ applications to embedded targets without a full Linux kernel.
- **Embedded Graphics**: Developing rich user interfaces on microcontrollers using Qt, LVGL, or Nuklear.

### Getting Started

To get started with Embox, developers should first set up a cross-compilation environment for their target architecture (e.g., `gcc-arm-none-eabi`). The build process begins by cloning the repository and selecting a configuration template using the `./confset <template>` command or `make confload-<template>`. For example, to target the x86 QEMU emulator, use `./confset x86/qemu`. After configuration, running `make` generates the system image. 

For rapid testing, the provided `./scripts/qemu/auto_qemu` script can launch the image in QEMU with networking enabled. Developers can interact with the system via a Unix-like shell and use GDB for debugging by passing specific flags to the QEMU script. Detailed technical guides and porting instructions are available in the [Embox Wiki](https://github.com/embox/embox/wiki).
