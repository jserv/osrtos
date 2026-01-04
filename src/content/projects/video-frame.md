---
title: Video Frame
summary: A low-power digital picture frame project based on an STM32 microcontroller
  that displays movies at a rate of one frame per minute. It utilizes a 7-color ePaper
  display for ultra-low power consumption and decodes JPEG images directly from an
  SD card.
slug: video-frame
codeUrl: https://github.com/ts-manuel/VideoFrame
siteUrl: https://hackaday.io/project/177197-the-slowest-video-player-with-7-colors
star: 6
version: v1.1
lastUpdated: '2022-09-12'
rtos: ''
topics:
- e-paper
- fatfs
- jpeg
- sdcard
- stm32
- stm32f4-discovery
isShow: false
createdAt: '2026-01-04'
updatedAt: '2026-01-04'
---

## The Slowest Video Player

Video Frame is a unique take on the digital picture frame, designed to play movies at an incredibly slow pace: exactly one frame per minute. By utilizing a 7-color ePaper display, the project creates a "slow cinema" experience where the image evolves gradually throughout the day. Because ePaper technology maintains an image without requiring power, the device is exceptionally energy-efficient, allowing it to run for extended periods on standard AA batteries.

## Hardware and Display Technology

The heart of the project is an STM32 microcontroller, which handles the heavy lifting of JPEG decoding and driving the display. The output is rendered on a Waveshare 5.65-inch 7-color ePaper module. These displays are known for their high contrast and paper-like aesthetic, though they come with the trade-off of long refresh times. In this implementation, a full update cycle takes approximately 18 seconds, during which the display cycles through its color palette to reach the final image.

To manage the large amount of data required for a full-length movie, the project stores the video as a sequence of JPEG images on an SD card. The STM32 reads these files, decodes the compressed data, and maps the colors to the ePaper's specific 7-color palette.

## Power Management and Operation

Efficiency is a core focus of the Video Frame. The device is powered by six AA batteries and spends the vast majority of its time in a deep sleep mode. A timer interrupt wakes the microcontroller every 24 minutes (by default) to trigger a display update. 

**The device features a simple physical interface:**
- **RESET**: Wakes the MCU from sleep to initiate an immediate update.
- **BOOT**: Used to enter DFU (Device Firmware Upgrade) mode or to enable the USB configuration interface.

## Configuration and USB Interface

While the device is designed to be autonomous, it includes a USB-based serial interface for configuration. By holding the BOOT button during a display update, users can enter a command mode. This allows for manual control over the device via a serial terminal, including commands to load specific files from the SD card, trigger manual updates, or force the system back into sleep mode.

## Development and Flashing

The project is developed using STM32CubeIDE. For firmware deployment, it utilizes the built-in STM32 USB bootloader, allowing users to flash the "Video Frame.bin" file using `dfu-util` without needing an external programmer like an ST-Link. This makes the project more accessible for hobbyists looking to build their own version of the hardware.
