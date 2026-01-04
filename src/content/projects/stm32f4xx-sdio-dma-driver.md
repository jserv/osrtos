---
title: STM32F4xx SDIO DMA Driver
summary: A modified STMicroelectronics SDIO driver for STM32F4xx microcontrollers
  with integrated DMA support. It provides a ready-to-use solution for SD card interfacing
  and is designed for compatibility with the FatFs file system library.
slug: stm32f4xx-sdio-dma-driver
codeUrl: https://github.com/afinello/stm32f4xx-sdio-dma-driver
star: 11
lastUpdated: '2018-06-10'
rtos: ''
topics:
- dma
- fatfs
- sdcard
- sdio
- stm32f4
isShow: false
createdAt: '2026-01-04'
updatedAt: '2026-01-04'
---

The `stm32f4xx-sdio-dma-driver` is a specialized hardware abstraction component designed to facilitate high-performance SD card communication on the STM32F4xx family of microcontrollers. This project provides a modified version of the original STMicroelectronics SDIO driver, specifically optimized to ensure that Direct Memory Access (DMA) functionality works correctly out-of-the-box.

### High-Performance SDIO Communication

One of the primary challenges when working with SD cards on STM32 platforms is the reliable implementation of DMA for data transfers. DMA is crucial for offloading the CPU during intensive read and write operations, allowing the processor to handle other tasks while data moves between the SD card and system memory. This driver addresses common stability issues found in standard implementations, providing a robust foundation for storage-heavy embedded applications.

### Key Features and Configuration

The driver is designed to be flexible, accommodating various hardware designs and performance requirements:

- **DMA Mode**: Enabled by default to provide high-speed data throughput with minimal CPU overhead.
- **Polling Mode**: For developers who prefer a simpler, synchronous approach or are troubleshooting timing issues, the driver can be switched to polling mode by adding a specific definition to the project code.
- **Configurable Card Detection**: Not all development boards include a dedicated Card Detect (CD) pin. The driver allows users to easily disable hardware presence validation by modifying the configuration in the source files.

### Technical Implementation

The driver manages the low-level signaling required for SDIO communication, including command/response cycles and data block transfers. By focusing on the STM32F4xx architecture, it leverages the specific DMA controller and SDIO peripheral characteristics of the Cortex-M4 line.

To enable Polling mode instead of the default DMA mode, the following definition can be added to the user code:

```c
#define SD_POLLING_MODE ((uint32_t)0x00000002)
```

For boards without a Card Detect pin, users should comment out the following line in the `sdio_sd.c` file to bypass the presence check:

```c
#define SD_USE_DETECT_PIN
```

### Integration with FatFs

To provide a complete storage solution, this driver is designed to be compatible with the popular FatFs library. This allows developers to implement standard file system operations—such as creating directories, reading files, and managing logs—on top of the low-level SDIO communication layer. This makes it an ideal choice for data logging, media playback, and firmware update systems where reliable SD card access is a requirement.
