---
title: Petit FAT File System Module
summary: A lightweight FAT file system module designed for tiny 8-bit microcontrollers
  with extremely limited memory. It is a subset of the FatFs module, written in ANSI
  C, and features a disk I/O layer separation that allows it to operate with RAM smaller
  than a single sector.
slug: petit-fat-file-system-module
codeUrl: https://github.com/forGGe/petite-fat
siteUrl: http://elm-chan.org/fsw/ff/00index_p.html
star: 5
lastUpdated: '2018-03-15'
rtos: ''
topics:
- elm
- embedded
- fat
- fatfs
- petit-fat
isShow: false
createdAt: '2026-01-04'
updatedAt: '2026-01-04'
---

Petit FatFs is a compact, lightweight FAT file system module specifically engineered for resource-constrained 8-bit microcontrollers. Originally developed by ELM (ChaN), this module serves as a specialized subset of the full-featured FatFs library, optimized for environments where memory is at a premium.

The primary strength of Petit FatFs lies in its extremely small footprint. Unlike standard file system implementations that require a RAM buffer at least as large as a disk sector (typically 512 bytes), Petit FatFs can operate with significantly less RAM. This makes it an ideal choice for legacy or ultra-low-power microcontrollers where every byte of memory counts.

### Key Features and Capabilities

Petit FatFs is designed with portability and efficiency in mind:
- **ANSI C Compliance**: The code is written in standard C, ensuring compatibility with a wide range of compilers and architectures.
- **Hardware Abstraction**: The module is completely decoupled from the disk I/O layer. Users only need to provide basic low-level functions for disk initialization and data streaming.
- **Minimal RAM Usage**: It can function even when the available RAM is smaller than the sector size of the storage medium.
- **FAT Support**: Compatible with FAT12, FAT16, and FAT32 file systems.

### Technical Implementation

The architecture of Petit FatFs focuses on streaming data rather than buffering entire sectors. This design choice is what allows it to run on tiny microcontrollers. However, this optimization comes with certain trade-offs compared to the full FatFs module:
- **Read-Only or Limited Write**: While it excels at reading files, write operations are often restricted (e.g., you cannot create new files or expand existing ones in the base implementation).
- **Single Volume**: It typically supports only a single logical drive.
- **Single File**: Only one file can be open at any given time.

This specific repository provides a version of Petit FatFs that has been slightly modified for integration with **theCore Embedded Framework**, a modular C++ framework for embedded development. These modifications ensure that the file system module works seamlessly within the broader ecosystem of theCore while maintaining the core efficiency of the original ELM-Chan implementation.

### Getting Started

To integrate Petit FatFs into a project, developers must implement a few low-level disk I/O functions, typically found in a `diskio.c` file. These functions include:
- `disk_initialize`: To initialize the storage device (like an SD card).
- `disk_readp`: To read a partial sector.
- `disk_writep`: To write a partial sector (if write support is enabled).

Once the I/O layer is established, the application can mount the volume using `pf_mount` and open files using `pf_open`. Data can then be read using `pf_read`, which can stream data directly to a user-defined buffer or even a peripheral like a DAC or UART.

For developers needing more advanced features like subdirectories, file creation, or multiple simultaneous file handles, the full FatFs module is the recommended alternative. However, for simple data logging or configuration reading on the smallest of chips, Petit FatFs remains a premier solution.
