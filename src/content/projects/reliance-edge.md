---
title: Reliance Edge
summary: A small, portable, and power-fail safe file system designed for resource-constrained
  32-bit microcontrollers. It features a unique transactional model for atomic data
  updates and provides both POSIX-like and minimalist APIs for embedded storage needs.
slug: reliance-edge
codeUrl: https://github.com/tuxera/reliance-edge
siteUrl: https://www.tuxera.com/products/tuxera-edge-fs/
star: 117
version: v2.6
lastUpdated: '2025-11-11'
rtos: ''
topics:
- amazon-freertos
- compact
- data-integrity
- edgefs
- embedded
- failsafe
- filesystem
- freertos
- microcontroller
- misra
- reliability
- reliance-edge
- transactional
- tuxera
isShow: false
createdAt: '2026-01-04'
updatedAt: '2026-01-04'
---

## Overview

Reliance Edge is a highly reliable, power-fail safe file system specifically engineered for resource-constrained embedded systems, such as 32-bit microcontrollers. Developed by Tuxera, it addresses the critical need for data integrity in environments where sudden power loss or system failures are common. Unlike traditional file systems that may require complex recovery tools like `fsck` or `CHKDSK`, Reliance Edge is designed to remain in a consistent state at all times.

## Key Features and Capabilities

The standout feature of Reliance Edge is its unique transactional model. This architecture allows developers to perform a set of interrelated changes in an atomic "all or nothing" fashion. If a power failure occurs during a write operation, the system ensures that either the entire transaction is committed or none of it is, effectively eliminating the risk of partial updates and the need for complex application-level recovery code.

**Core benefits include:**
- **Power-Fail Safety:** Prevents file system corruption without the overhead of traditional journaling.
- **Deterministic Performance:** Designed for real-time applications where predictable behavior is essential.
- **Flash Optimization:** Reduces storage media wear compared to journaling file systems, extending the lifetime of NOR/NAND flash devices.
- **Flexible APIs:** Offers a familiar POSIX-like interface for ease of use, alongside a minimalist API for applications with very simple storage requirements.

## Technical Specifications

Reliance Edge is optimized for the small footprints typical of embedded hardware. Its typical resource requirements are remarkably low:
- **RAM:** 4 KB to 5 KB
- **Code Space (ROM/Flash):** 11 KB to 18 KB
- **Stack:** 500 to 700 bytes

While it is primarily targeted at 32-bit microcontrollers, its portable C implementation allows it to be adapted to various architectures. It is specifically intended for systems that do not run high-end operating systems like Linux, filling the gap for bare-metal or RTOS-based microcontrollers.

## Architecture and Portability

The project is structured to be highly configurable and portable. The core logic is separated from the OS and hardware abstraction layers. To get Reliance Edge running on new hardware, developers typically work within the `os/` directory to implement block device drivers and OS-specific synchronization primitives. A blank template is provided in `os/stub/` to facilitate this process.

Configuration is handled through `redconf.h` and `redconf.c` files, which can be generated using a dedicated Configuration Utility. This allows the file system to be tuned to the precise needs of the application, such as adjusting the number of volumes or the buffer sizes.

## Integration and Usage

Using Reliance Edge involves including either `redposix.h` or `redfse.h` in your application. The driver must be initialized via `red_init()` or `RedFseInit()` before mounting volumes. Because it follows POSIX conventions, developers familiar with standard C file I/O will find the transition to Reliance Edge straightforward.

For those looking to contribute or customize the file system, the repository includes a comprehensive test suite and tools to ensure reliability across different ports. The project is available under the GPLv2 license for open-source use, with commercial licensing options available for proprietary products.
