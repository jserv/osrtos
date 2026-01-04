---
title: Raspberry Pi Pico TinyGo FatFs Test
summary: A technical demonstration and benchmark of the FatFs file system running
  on Raspberry Pi Pico via TinyGo. It supports various SD card standards and FAT formats,
  utilizing CGO to optimize SPI performance for embedded Go applications.
slug: raspberry-pi-pico-tinygo-fatfs-test
codeUrl: https://github.com/elehobica/pico_tinygo_fatfs_test
star: 3
lastUpdated: '2022-10-03'
rtos: ''
topics:
- fatfs
- raspberry-pi-pico
- tinygo
isShow: false
createdAt: '2026-01-04'
updatedAt: '2026-01-04'
---

## Overview

The **Raspberry Pi Pico TinyGo FatFs Test** project provides a robust example of implementing the FatFs file system on the RP2040 microcontroller using the TinyGo compiler. Ported from a reference C++ implementation, this project bridges the gap between high-level Go programming and low-level storage hardware, specifically targeting SD, SDHC, and SDXC cards.

## Key Features

This implementation supports a wide range of industry-standard features for embedded storage:
- **FatFs R0.13c Integration**: Leverages the widely-used FatFs module for filesystem management.
- **Broad Format Support**: Compatible with FAT16, FAT32, and exFAT file systems.
- **Hardware Compatibility**: Designed for SD, SDHC, and SDXC cards interfaced via SPI.
- **Performance Optimization**: Uses CGO to optimize SPI access, significantly improving data throughput compared to standard Go implementations.
- **Comprehensive Benchmarking**: Includes built-in tools to measure read/write speeds and latency.

## Technical Implementation

The project is built using TinyGo 0.25.0 and targets the Raspberry Pi Pico. A critical aspect of the implementation is the use of CGO (C-Go) to handle performance-sensitive SPI operations. This allows the project to maintain the safety and ease of Go for application logic while achieving the execution speed necessary for high-speed SD card communication.

### Pin Mapping

The project uses the following default SPI configuration for the microSD card:
- **GP2**: SPI0_SCK
- **GP3**: SPI0_TX (MOSI)
- **GP4**: SPI0_RX (MISO)
- **GP5**: SPI0_CSn

Note that for reliable operation, SPI_TX and SPI_RX lines should be pulled up with 10Kohm resistors, and wiring should be kept as short as possible to prevent mounting or preallocation errors.

## Performance Benchmarks

One of the highlights of this repository is the comparison between TinyGo and a reference C++ implementation. While C++ remains the performance leader, the TinyGo implementation shows impressive results:
- **C++ Write Speed**: ~447 KB/sec
- **TinyGo Write Speed**: ~390 KB/sec
- **C++ Read Speed**: ~974 KB/sec
- **TinyGo Read Speed**: ~835 KB/sec

These results demonstrate that TinyGo is a viable option for data-intensive embedded applications on the RP2040.

## Getting Started

The project is designed to be built within a TinyGo Docker environment, particularly optimized for Windows WSL2 users. The build process involves initializing the Go module, tidying dependencies, and compiling the UF2 binary with specific optimization flags. 

Integration into a Go application follows standard patterns for hardware initialization:

```go
// Example of initializing the SD card and FatFs in TinyGo
sd := sdcard.New(spi, sckPin, sdoPin, sdiPin, csPin)
err := sd.Configure()
if err != nil {
    // Handle configuration error
}

filesystem := fatfs.New(&sd)
filesystem.Configure(&fatfs.Config{
    SectorSize: 512,
})

err = filesystem.Mount()
if err == nil {
    fmt.Printf("mount ok\r\n")
}
```

This setup allows developers to quickly integrate high-capacity storage into their Pico-based Go projects while maintaining high performance through optimized SPI drivers.
