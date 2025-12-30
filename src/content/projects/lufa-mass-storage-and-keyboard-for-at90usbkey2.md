---
title: LUFA Mass Storage and Keyboard for AT90USBKEY2
summary: A firmware project for the AT90USBKEY2 development board that implements
  a composite USB device featuring both Mass Storage (via SD card) and HID Keyboard
  functionality. It utilizes the LUFA framework and FatFS to provide file system access
  and keyboard emulation on AT90USB1287 microcontrollers.
slug: lufa-mass-storage-and-keyboard-for-at90usbkey2
codeUrl: https://github.com/therealdreg/lufa-sdcard-mass-storagekeyboard-fatfs-AT90USBKEY2
star: 7
version: '1.0'
lastUpdated: '2023-08-11'
rtos: ''
topics:
- 8bit
- at90usb1287
- at90usbkey
- atmel-studio
- avr
- fatfs
- lufa
- mass-storage-device
- sdcard
- usb-composite
- usb-device
- usb-devices
isShow: false
createdAt: '2025-12-30'
updatedAt: '2025-12-30'
---

## Overview

This project provides a specialized firmware implementation for the Atmel AT90USBKEY2 development board, transforming it into a composite USB device. By combining USB Mass Storage and HID Keyboard capabilities, the project enables complex interactions with host systems, ranging from standard data storage to automated keyboard input. It is particularly noted for its potential use as a proof-of-concept tool for offline system interaction.

The project is an evolution of several existing works, notably porting the LUFA SD card mass storage demo from the Teensy2/ATMEGA32U4 platform to the more powerful AT90USB1287-based AT90USBKEY2. It also updates the underlying framework from older LUFA versions to the 170418 release, ensuring better compatibility with modern toolchains.

## Technical Architecture

The firmware is built upon the **Lightweight USB Framework for AVRs (LUFA)**, which handles the complexities of the USB stack and device class drivers. To manage the file system on the SD card, the project integrates **FatFS**, a generic FAT file system module. This combination allows the device to present an SD card as a standard removable drive to a host computer while simultaneously operating as a keyboard.

### Key Components
- **LUFA Framework**: Manages the USB composite device descriptors and class drivers for Mass Storage and HID.
- **FatFS Integration**: Provides the logic required to read and write to FAT-formatted SD/MMC cards.
- **Hardware Support**: Specifically targets the AT90USB1287 microcontroller found on the AT90USBKEY2, utilizing its integrated USB controller.
- **Debug Support**: Includes configurations for JTAG debugging via Atmel ICE and TTL UART output for serial logging.

## Hardware and Connectivity

The project is designed for the AT90USBKEY2, but the implementation details provide flexibility for various hardware setups. The developer notes the use of custom clips, LEDs, and tin for connections where standard pins might be missing. A significant technical warning is included for developers using Atmel ICE: certain peripherals, like Corsair keyboards, can interfere with the debugger unless placed in BIOS mode.

## Development and Build System

The repository supports two primary development workflows:
1. **Standard Makefile**: A LUFA-style build system that can be executed via `make all` in a terminal. This is compatible with both Windows (via MinGW/MSYS or WinAVR) and Linux environments.
2. **Atmel Studio 7**: A pre-configured project solution (`.atsln`) is provided for users who prefer an Integrated Development Environment (IDE) and require user-friendly JTAG debugging capabilities.

### Build Example

When building via the command line, the process compiles the core application logic alongside the LUFA drivers and FatFS library components:

```c
// Example of the compilation of the main project file
avr-gcc -c -pipe -gdwarf-2 -g2 -mmcu=at90usb1287 -fshort-enums ... MassStorageKeyboard.c -o obj/MassStorageKeyboard.o
```

The resulting firmware is output as a `.hex` file, which can be flashed to the AT90USB1287 using the DFU bootloader or a hardware programmer like the Atmel ICE.

## Origins and Porting

This project serves as a bridge between several classic AVR USB projects. It incorporates code and patches from:
- Mathieu Sonet's LUFA SD card mass storage demo.
- Roland Riegel's MMC/SD/SDHC card reader library.
- The original Atmel AT90USBKEY2 source examples.

By consolidating these resources, the project provides a robust starting point for developers looking to create advanced USB composite devices on AVR hardware.
