---
title: Pico USB Host Mass Storage Class Demo
summary: A command-line interface demo for the Raspberry Pi Pico that implements a
  USB Mass Storage Class (MSC) Host. It allows the RP2040 to interface with USB flash
  drives using the TinyUSB stack and FatFs file system, supporting both native USB
  hardware and PIO-based USB host ports.
slug: pico-usb-host-mass-storage-class-demo
codeUrl: https://github.com/rppicomidi/pico-usb-host-msc-demo
star: 44
lastUpdated: '2025-02-02'
rtos: ''
topics:
- fatfs
- raspberry-pi-pico
- tinyusb
- usb-flash-drive
- usb-host-msc
isShow: false
createdAt: '2026-01-04'
updatedAt: '2026-01-04'
---

## Overview

The Pico USB Host MSC Demo is a comprehensive example project demonstrating how to use a Raspberry Pi Pico (or other RP2040/RP2350 based boards) as a USB Mass Storage Class (MSC) Host. By leveraging the TinyUSB stack and the FatFs file system, this project enables the microcontroller to read from and write to standard USB flash drives. The project features a terminal-based command line interpreter (CLI) that allows users to interact with the connected storage devices in a manner similar to a Unix shell.

## Hardware Support and Connectivity

The demo is designed to be versatile, supporting multiple hardware configurations and boards:
- **Native USB Host**: Uses the RP2040's built-in USB hardware. This requires a microUSB to USB A female adapter and an external 5V supply to Vbus to power the connected flash drive.
- **PIO USB Host**: Utilizes the RP2040's Programmable I/O (PIO) hardware to create an additional USB host port using two GPIO pins. This is particularly useful for projects that need to maintain the native USB port for debugging or other purposes.
- **Supported Boards**: Tested on the standard Raspberry Pi Pico, Pico W, and the Adafruit Feather RP2040 with USB A Host.

When using a USB hub, the system can support up to four concurrent USB flash drives. 

## Technical Implementation

The project integrates several key embedded components to provide a full-featured storage solution:

- **TinyUSB**: Handles the complex USB host stack requirements, including device enumeration and bulk transfers.
- **FatFs (Elm-Chan)**: Provides the FAT/exFAT file system layer, allowing the Pico to understand the directory structures and file data on the drives.
- **Embedded CLI**: A lightweight command-line interface that processes user input over UART, providing a familiar environment for file manipulation.
- **Pico-PIO-USB**: An optional dependency used when the host port is implemented via PIO rather than native hardware.

### Performance Considerations

Because the RP2040's native USB hardware operates at USB Full Speed (12Mbps), the project is optimized for functionality rather than raw throughput. Users can expect transfer rates of slightly less than 64 Kbytes/second. While this is more than sufficient for configuration files, small logs, or basic data collection, it is not intended for high-bandwidth applications like high-bitrate audio or video streaming.

## Command Line Interface

Once connected via a UART terminal (defaulting to 115200 baud), users can interact with the filesystem using a variety of built-in commands. The CLI includes support for:

- **Navigation**: `ls` (list files), `cd` (change directory), `pwd` (print working directory), and `chdrive` (switch between connected drives).
- **File Operations**: `cat` (display file content), `cp` (copy files), `mv` (rename/move), and `rm` (delete).
- **Directory Management**: `mkdir` (create directory).
- **System Utilities**: `set-date` and `set-time` to ensure file timestamps are accurate using the RP2040's internal RTC, and `get-free` to check available disk space.

## Getting Started

Building the project requires the Raspberry Pi Pico SDK. Because USB host bulk transfers are a relatively recent addition to the ecosystem, the project requires a modern version of the TinyUSB library (included in Pico SDK 2.0+ or manually updated in older versions). Configuration is handled via environment variables such as `PICO_BOARD` and `RPPICOMIDI_PIO_HOST`, allowing the build system to tailor the binary for specific hardware layouts and port selections.
