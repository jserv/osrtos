---
title: eCOS Shellcodes (ecoshell)
summary: A specialized toolkit for generating and deploying shellcode on the eCOS
  RTOS platform, with a primary focus on Broadcom-based networking hardware. It includes
  implementations for bind shells, reverse shells, and background threads, along with
  scripts for memory injection and firmware persistence.
codeUrl: https://github.com/ecos-wtf/ecoshell
siteUrl: https://ecos.wtf/2021/03/15/ecos-persistence-firmware
isShow: false
rtos: ''
libraries: []
topics:
- broadcom
- ecos
- exploit-development
- shellcode
star: 14
lastUpdated: '2021-03-13'
createdAt: '2025-12-27'
updatedAt: '2025-12-27'
---

eCOS Shellcodes (ecoshell) is a technical project dedicated to shellcode generation and deployment on the eCOS (embedded Configurable Operating System) platform. While eCOS is a versatile RTOS used in many embedded systems, this project specifically targets the Broadcom eCOS platform, often referred to as the Broadcom Foundation Classes, which is commonly found in cable modems and routers.

### Core Capabilities

The repository provides several pre-implemented shellcodes designed for different operational needs:
- **Sample**: A basic thread that prints a string to the console every five seconds, useful for verifying execution.
- **Bind Shell**: A blocking function that opens a port on the target device for remote access.
- **Reverse Shell**: A blocking function that connects back to a specified IP and port.
- **Threaded Variants**: Both bind and reverse shells are provided in threaded versions, allowing them to run in the background without immediately halting the main system execution.

### Hardware and Toolchain Support

The project currently supports two primary targets: the **Netgear CG3700** and the **Askey/Siligence TCG300**. Because these devices typically run on MIPS architecture, the project requires the `mipsisa32-elf` toolchain. An `install.sh` script is included to facilitate the setup of the necessary GNU tools.

To generate shellcode for a specific device, users must extract function offsets from the target's firmware and populate a `payload.ld` linker script. This ensures that the shellcode correctly maps to the internal functions of the specific eCOS build running on the hardware.

### Deployment and Execution

One of the most practical aspects of ecoshell is its deployment workflow. The Broadcom eCOS CLI often exposes `write_memory` and `read_memory` functions. The project includes a Python utility, `upload.py`, which automates writing the binary shellcode into the device's RAM over a serial connection. 

Once the shellcode is residing in memory, it can be triggered using the eCOS `call` command. For example, to launch a reverse shell, a user would execute a command similar to:

```bash
CM> call func -r -a 0x80810000 0xc0a80003 0x115c
```

This command tells the system to call the code at the specified memory address with the target IP and port as arguments.

### Threading and Persistence

Threading in eCOS presents unique challenges. On Broadcom platforms, console I/O is often not shared across multiple threads. If a shell thread is launched, the user may lose access to the physical UART or Telnet console until the thread exits. However, threading remains highly valuable for background tasks like network scanning or maintaining an implant that doesn't require active console interaction.

For long-term access, the project provides `inject.py`. This script allows for "Firmware Implants," where custom shellcode is injected directly into an unpacked firmware file by overwriting specific sections. This enables persistence across reboots, as the shellcode becomes a permanent part of the device's operating software.
