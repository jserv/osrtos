---
title: FatFs Example for Linux
summary: A generic example project demonstrating the use of Elm Chan's FatFs library
  on a Linux environment. It implements the FatFs disk I/O layer using standard POSIX
  APIs to simulate disk operations on a local file image, allowing for easy testing
  and learning of filesystem behavior.
slug: fatfs-example-for-linux
codeUrl: https://github.com/gadget114514/fatfs-example
siteUrl: http://elm-chan.org/fsw/ff/00index_e.html
star: 3
lastUpdated: '2018-01-17'
rtos: ''
topics:
- fatfs
- linux
isShow: false
createdAt: '2025-12-28'
updatedAt: '2025-12-28'
---

## Understanding FatFs via Linux Simulation

FatFs is a generic FAT/exFAT file system module widely used in small embedded systems. While it is typically deployed on microcontrollers like STM32, AVR, or PIC, understanding its internal behavior and API can be challenging without a debugger or a stable hardware environment. This project provides a bridge, allowing developers to run and experiment with FatFs directly on a Linux system.

By mapping the low-level disk I/O layer to standard POSIX system calls, this example creates a sandbox where FatFs operations are performed on a local file acting as a virtual disk image. This approach is particularly useful for beginners who want to learn the FatFs API without the overhead of hardware-specific drivers.

## Technical Implementation

The core of any FatFs port is the `diskio.c` file, which provides the interface between the filesystem module and the storage hardware. In this project, the backend is implemented using standard C library and POSIX functions:

- `open()` and `close()` for disk initialization and shutdown.
- `read()` and `write()` for sector-level data transfer.
- `lseek()` for navigating the virtual disk image.

This implementation treats a file (defaulting to `abc.dat`) as a block device. This approach is highly educational, as it strips away the complexity of SPI or SDIO drivers, focusing purely on how FatFs manages directories, files, and the File Allocation Table itself.

## Working with Virtual Disk Images

The project includes a utility called `fmkfs` to prepare the environment. When executed, it creates a 64KB disk image (the minimum size for a FAT12 volume) and formats it using the `f_mkfs` function. The default configuration uses a "super floppy" format with 128 sectors of 512 bytes each.

Once the image is created, several test commands are available to demonstrate filesystem operations:

- `mkd`: Create directories.
- `cf` / `cf2`: Create files and write data.
- `rf` / `rf2`: Read data from files.
- `rd`: Read directory contents.

## Configuration and Customization

The project uses a mostly default FatFs configuration, with `f_mkfs` enabled to allow for on-the-fly formatting. The disk geometry, such as the sector count, is defined in `fatfstest.h`. This allows users to experiment with different volume sizes and see how FatFs reacts to various storage constraints.

This repository serves as an excellent starting point for anyone looking to integrate FatFs into their own embedded project, providing a safe and fast environment to validate filesystem logic before moving to target hardware.
