---
title: Double Bottom USB Stick
summary: A specialized USB flash drive project built on the STM32F446RE that implements
  hidden and encrypted partitions. It leverages the STM32 USB Mass Storage Class and
  SDIO to manage an SD card, using XOR encryption for partition data and AES for device
  configurations.
codeUrl: https://github.com/Lrakulka/Double_Bottom_USB_Stick
isShow: false
rtos: ''
libraries: []
topics:
- aes-encryption
- cubemx
- encryption
- fatfs
- gsoc-2017
- openhardware
- sdio
- stm32f4
- students
- truestudio
- usb-stick
- xor-cipher
star: 4
version: v1.0
lastUpdated: '2018-02-10'
createdAt: '2025-12-27'
updatedAt: '2025-12-27'
---

The Double Bottom USB Stick is an innovative security-focused project developed as part of the Google Summer of Code 2017. At its core, it is a USB flash drive designed to conceal the very existence of specific data partitions. Unlike standard encrypted drives that show an encrypted volume, this device can hide partitions entirely, making them invisible to the host operating system unless a specific sequence of commands is issued.

### How It Works
The device operates by mapping specific segments of an SD card to the USB Mass Storage interface. It divides the available storage into multiple partitions, categorized as either public or private. 

*   **Public Partitions:** These are visible by default. If the SD card is removed and plugged into a standard card reader, only the public partition (Partition 0) is accessible.
*   **Private Partitions:** These are hidden from the host. They are encrypted and decrypted on-the-fly using a XOR cipher. While XOR was chosen for performance reasons on the microcontroller, the project architecture allows for more robust algorithms in the future.
*   **Device Configurations:** The metadata that defines where partitions start and end, as well as their keys, is stored on the SD card itself. This configuration data is protected using AES encryption to ensure that even if the hardware is compromised, the partition map remains secure.

### The Command-Based Interface
One of the most unique aspects of this project is its user interface. Since the device presents itself as a standard USB Mass Storage device, it doesn't use a custom GUI. Instead, users interact with the device by creating a file named `COMMAND_.TXT` in the root directory of the drive. 

The microcontroller monitors the file system for this specific file. When it detects it, it parses the text inside for commands like `InitConf`, `ChangePart`, `ShowConf`, or `UpdateConf`. For example, to switch to a hidden partition, a user would write the following into the command file:

```text
ChangePart
[Device root key]
[Partition name] [Partition key]
```

Once the command is processed, the device automatically deletes the file and reconnects to the host PC, presenting the newly selected partition as the drive's contents.

### Technical Architecture & Hardware
The project is built using the **STM32F446RE** (Nucleo-F446RE) development board. It utilizes the following hardware components:
*   **SDIO Interface:** Used for high-speed communication with the Micro SD card.
*   **USB 2.0 Full Speed:** Provides the Mass Storage Device interface to the host computer.
*   **FatFS:** Used internally by the microcontroller to parse the command files and manage the configuration storage.

The firmware was developed using **STM32CubeMX** for peripheral initialization and **Atollic TrueSTUDIO** for the application logic. A specific patch is provided in the repository to modify the standard STM32 USB stack to support the dynamic partition switching required for the "double bottom" functionality.

### Future Improvements
While the current implementation is fully operational, the developer has identified several areas for growth. Currently, partitions are stored as contiguous blocks on the SD card. A proposed improvement involves spreading partition sectors across the physical memory to make forensic analysis significantly more difficult. Additionally, while XOR is used for data throughput, moving to hardware-accelerated AES for the data partitions would further harden the device against sophisticated attacks.
