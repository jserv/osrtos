---
title: Evil Mass Storage AT90USBKEY2
summary: A proof-of-concept hardware tool for data exfiltration from isolated systems
  using the AT90USB1287 microcontroller. It operates as a USB composite device, combining
  keyboard emulation and mass storage to deploy multi-stage payloads and exfiltrate
  data via 433MHz RF or SD card storage.
slug: evil-mass-storage-at90usbkey2
codeUrl: https://github.com/therealdreg/evilmass_at90usbkey2
siteUrl: https://www.driverentry.com/node/104
star: 30
lastUpdated: '2023-08-11'
rtos: ''
topics:
- at90usb1287
- at90usbkey
- atmel-studio
- avr
- c
- embedded-systems
- fatfs
- hacktool
- lufa
- windows
isShow: false
createdAt: '2025-12-28'
updatedAt: '2025-12-28'
---

## Overview

Evil Mass Storage is a specialized proof-of-concept (PoC) tool designed for security researchers to demonstrate data exfiltration from physically isolated or air-gapped environments. Built on the AT90USBKEY2 development board, the project transforms an AVR-based microcontroller into a versatile USB composite device. Unlike standard HID injection tools, this project integrates keyboard emulation, mass storage, and radio frequency (RF) transmission to provide a comprehensive exfiltration path.

The primary objective is to exfiltrate small, high-value data—such as digital certificates—from systems where internet connectivity is unavailable. It achieves this by either storing encrypted data on an onboard SD card or broadcasting it over the 433MHz ASK band, which offers superior penetration compared to 2.4GHz signals.

## Technical Architecture

The system is built around the **AT90USB1287** microcontroller, utilizing the **LUFA (Lightweight USB Framework for AVRs)** for USB stack management and **FatFs** for handling the SD card filesystem. The hardware configuration typically includes:

- **AT90USB1287**: The primary controller managing USB communication and logic.
- **ATmega328P**: A secondary controller used to assist with RF 433MHz ASK transmission.
- **SD Card Reader**: Connected via SPI for storing payloads and exfiltrated data.
- **RF Transmitter**: A 433MHz ASK module for wireless exfiltration.

## Attack Workflow and Features

The project implements a sophisticated multi-stage attack vector designed to bypass simple forensic analysis:

1.  **Forensic Evasion**: Upon connection, the device can randomize its Vendor ID (VID), Product ID (PID), and serial numbers. This makes it difficult to track the device across different connection events.
2.  **Composite Device Emulation**: The device presents itself to the host OS as both a keyboard and a mass storage unit. The keyboard part initiates a "Run" window (Win+R) and executes a brute-force search for the mass storage drive letter to launch the first-stage executable.
3.  **Payload Execution**: The first stage retrieves system information and writes it back to the mass storage. The microcontroller monitors SCSI commands; once the data is written, it can reset the USB connection and decrypt the actual malware payload stored in hidden sectors.
4.  **Data Exfiltration**: Information is exfiltrated either by writing to the SD card (with basic XOR encryption) or by transmitting it via the 433MHz RF module.
5.  **Self-Cleanup**: To hinder post-incident response, the microcontroller is capable of deleting the malware sectors from the SD card after execution or after a specific number of connection attempts.

## Implementation Details

The source code demonstrates low-level manipulation of USB descriptors and SCSI commands. Because the target is an 8-bit AVR architecture, the project uses lightweight XOR-based encryption for sectors. The SD card management logic is particularly interesting, as it handles raw sector access to hide data from the host operating system's standard filesystem view.

```c
// Example of the simple XOR encryption used for 8-bit AVR constraints
for (i = 0; i < 126; i++)
{
    readed_blk[i] ^= 0xAA;
}
```

## Future Directions

While the current version targets the 8-bit AVR platform (AT90USBKEY2 and Teensy++ 2.0), the project documentation notes a transition toward 32-bit ARM Cortex-M4 platforms like the **Teensy 3.6** and **FRDM-K66F**. These newer platforms offer hardware cryptographic acceleration (AES/SHA), true SDIO interfaces for faster data access, and significantly higher clock speeds, enabling more robust encryption and faster exfiltration capabilities.
