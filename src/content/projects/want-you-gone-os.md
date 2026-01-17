---
title: Want You Gone OS
summary: A custom bare-metal x86 operating system designed specifically to play the
  Portal 2 song 'Want You Gone'. It features a custom bootloader, resource management
  system, and requires an HDA-compatible sound card to function.
slug: want-you-gone-os
codeUrl: https://github.com/JNNGL/want_you_gone
star: 40
version: v1.0
lastUpdated: '2025-09-13'
rtos: ''
topics:
- assembly
- bootloader
- c
- intel-hda
- os
- osdev
- portal
- portal2
- vesa
isShow: false
createdAt: '2026-01-17'
updatedAt: '2026-01-17'
---

## Overview

Want You Gone OS is a specialized, single-purpose operating system for x86 hardware that serves as a tribute to the ending theme of Portal 2. Inspired by the earlier `stillalive-os` project, this repository provides the source code and build infrastructure to create a bootable disk image that plays the song "Want You Gone" directly on bare-metal hardware, bypassing traditional operating systems like Windows or Linux.

## Technical Implementation

The project is built using a combination of C and x86 Assembly, targeting the i686-elf architecture. It utilizes a custom bootloader and a specialized linker script that maps the code to the standard BIOS boot address of `0x7c00`. The build process is managed by a shell script that orchestrates the compilation of source files and the packaging of binary resources.

### Hardware Requirements

Unlike many simple hobbyist OS projects that rely on the PC speaker, Want You Gone OS requires a High Definition Audio (HDA) compatible sound card. This allows for higher quality audio playback but also means the OS may not be compatible with all hardware configurations, particularly older legacy systems or specific modern chipsets that deviate from the HDA standard.

### Build and Resource Management

The project features a unique resource packing system. The `build.sh` script scans a `resources` directory, calculates file sizes, and appends them to a `data.bin` file. This data is then concatenated onto the end of the compiled bootloader (`boot.bin`). The OS kernel uses a simple internal file table to locate and stream these resources during execution.

**Key technical components include:**
- **Freestanding C Environment**: Compiled with `-ffreestanding` and `-nostdlib` to ensure no dependencies on standard host libraries.
- **NASM Assembly**: Used for low-level hardware initialization and bootloader logic.
- **Custom Linker Script**: Defines the memory layout, ensuring the `.boot` section is placed correctly for the BIOS to execute.
- **HDA Driver**: A specialized driver implementation to interface with modern PC sound hardware.

## Getting Started

To build the project, a cross-compilation toolchain (specifically `i686-elf-gcc`) and `nasm` are required. The provided `build.sh` script automates the process of compiling the source, linking the binary, and padding the final image to be sector-aligned for disk writing. The resulting binary can be written to a USB drive or loaded into an emulator like QEMU, provided the emulator is configured to simulate an HDA-compatible audio device.
