---
title: FatFs for MS-RTOS
summary: A port of the generic FatFs/exFAT filesystem module for MS-RTOS. It provides
  a FAT-compatible filesystem for small embedded systems, supporting features like
  exFAT and Unicode. This implementation includes MS-RTOS specific porting layers
  and kernel-space integration.
slug: fatfs-for-ms-rtos
codeUrl: https://github.com/ms-rtos/fatfs
siteUrl: http://elm-chan.org/fsw/ff/00index_e.html
star: 1
lastUpdated: '2021-08-02'
rtos: ''
topics:
- fatfs
- ms-rtos
isShow: false
createdAt: '2025-12-28'
updatedAt: '2025-12-28'
---

FatFs is a widely recognized, platform-independent FAT/exFAT file system module designed specifically for small embedded systems. This repository contains a specialized port of FatFs version R0.14 for MS-RTOS, a micro-kernel safety real-time operating system developed by Acoinfo. 

The project integrates the core FatFs logic with MS-RTOS specific glue code, allowing developers to easily add robust file system support to their embedded applications running on the MS-RTOS platform. By providing a standardized interface for storage media, it simplifies the process of managing files on SD cards, USB drives, and flash memory.

## Core Features

FatFs is known for its small footprint and high portability. Key features provided by this module include:
- **Broad File System Support**: Full compatibility with FAT12, FAT16, and FAT32.
- **exFAT Support**: Enables handling of large files and partitions beyond the 32GB limit of FAT32.
- **Multi-Partition Handling**: Support for multiple partitions on a single physical drive.
- **Long File Names (LFN)**: Full Unicode support for modern file naming conventions.
- **Resource Efficiency**: Minimal RAM and ROM usage, making it ideal for microcontrollers with limited memory resources.
- **Configurability**: Highly customizable through configuration files to enable or disable features based on system requirements.

## MS-RTOS Integration

This repository provides the necessary porting layer to bridge the generic FatFs API with the MS-RTOS kernel environment. The build system is based on standard Makefiles, with `libfatfs.mk` defining the library targets and source files. 

The source tree is organized to separate the generic logic from the platform-specific implementation:
- `ff.c` and `ffunicode.c`: The core FatFs implementation provided by ChaN.
- `ms_fatfs_porting.c`: The hardware abstraction layer (HAL) and OS-specific hooks required for MS-RTOS.
- `ms_fatfs.c`: Higher-level integration logic for the MS-RTOS environment.

The library is typically compiled with the `__MS_KERNEL_SPACE` symbol, indicating its role within the operating system's kernel or system services layer, ensuring it can interact correctly with the micro-kernel's memory and task management.

## Licensing

FatFs uses a unique BSD-style license. While it is open-source and compatible with most licenses including the GNU GPL, it features a specific clause intended for commercial embedded products: redistributions in binary form (such as embedded firmware) do not require the inclusion of FatFs documentation. This makes it highly attractive for commercial development where proprietary source code is not provided to the end user.

## Getting Started

To use this library within an MS-RTOS project, the `libfatfs.mk` file is included in the main build process. This generates `libfatfs.a`, which can then be linked against the system kernel or application. Developers should refer to the official FatFs documentation for detailed API usage regarding file operations like `f_open`, `f_read`, and `f_write`, while the MS-RTOS specific initialization is handled through the provided porting files.
