---
title: SAMD Internal Flash
summary: A library for the Arduino IDE that enables the use of internal flash memory
  on SAMD21 and SAMD51 microcontrollers as a FatFS-formatted storage volume. It allows
  for file operations similar to an SD card and supports exposing the internal storage
  as a USB Mass Storage device.
slug: samd-internal-flash
codeUrl: https://github.com/Mollayo/SAMD_InternalFlash
star: 3
lastUpdated: '2022-12-25'
rtos: ''
topics:
- arduino-ide
- fatfs
- flash
- internal
- samd21
- samdx1
- samdxx
- smad51
- storage
- usb-mass-storage
isShow: false
createdAt: '2026-01-04'
updatedAt: '2026-01-04'
---

The SAMD Internal Flash library provides a convenient way to utilize the often-underused internal flash memory of Microchip SAMD21 and SAMD51 microcontrollers. While these MCUs typically offer significant flash capacity—256KB for the SAMD21 and 512KB for the SAMD51—firmware often occupies only a small fraction of the available space. This library bridges that gap by implementing a FatFS file system on the remaining flash space, effectively turning it into a built-in storage drive.

### Versatile Storage Options

The primary advantage of this library is the ability to interact with internal flash using standard file system operations. Developers can save, read, and manage files just as they would with an external SD card, but without the need for additional hardware components or external SPI flash chips. This is particularly useful for storing configuration files, sensor logs, or small assets directly on the chip.

Beyond internal access, the library supports exposing the flash storage as a USB Mass Storage device. When a supported SAMD board is connected to a computer via USB, it appears as an external flash drive. This allows users to drag and drop files directly to and from the microcontroller's internal memory, greatly simplifying data transfer and configuration updates for end-users.

### Hardware and Compatibility

The library is designed for the Arduino IDE and has been validated on several popular development boards, including:

- Seeeduino Xiao (SAMD21)
- Adafruit Feather M0 WiFi (SAMD21)
- ItsyBitsy M4 Express (SAMD51)

While tested on these specific boards, the implementation is generic enough to work with most boards based on the SAMD21 or SAMD51 architecture. It leverages the specific memory layout of these chips to ensure that the filesystem does not interfere with the application code.

### Integration and Dependencies

To provide its functionality, the library relies on two key dependencies: the Adafruit SPI Flash library and the FlashStorage library. It is important to note that the project recommends using the version of FlashStorage available on GitHub rather than the one in the Arduino Library Manager to avoid specific bugs related to SAMD51 write operations. 

By combining these tools, SAMD Internal Flash offers a robust solution for embedded developers looking to maximize the utility of their hardware's onboard resources. Whether you need a simple way to store persistent data or a user-friendly USB interface for file management, this library provides the necessary infrastructure within the familiar Arduino ecosystem.
