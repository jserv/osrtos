---
title: Petit FatFS Free Pascal Port
summary: A Free Pascal port of the Petit FatFS module, designed for tiny 8-bit microcontrollers
  with limited memory. It supports FAT12, FAT16, and FAT32 file systems on platforms
  like Arduino (AVR), Raspberry Pi, and Windows.
slug: petit-fatfs-free-pascal-port
codeUrl: https://github.com/JulStrat/pff
siteUrl: https://julstrat.github.io/pff/
star: 2
lastUpdated: '2020-01-25'
rtos: ''
topics:
- arduino
- cdb
- embedded-systems
- fatfs
- file-system
- pascal
- petit-fatfs
isShow: false
createdAt: '2026-01-04'
updatedAt: '2026-01-04'
---

## Overview

The Petit FatFS Free Pascal port is a specialized implementation of the Petit FatFS module, originally developed by ChaN, for the Free Pascal (FPC) ecosystem. This library is specifically designed for tiny 8-bit microcontrollers where memory is extremely scarce—even in cases where the available RAM is less than the sector size of the storage medium. By providing an Object Pascal interface to this lightweight filesystem, it enables Pascal developers to implement file storage on resource-constrained embedded hardware.

## Key Features

Petit FatFS is a subset of the full FatFS module, optimized for minimal footprint. This port maintains the core capabilities required for basic file operations:

- **Broad FAT Support**: Compatible with FAT12, FAT16, and FAT32 file systems.
- **Resource Efficiency**: Designed for systems with very limited RAM, utilizing a streaming approach to handle data without needing large buffers.
- **Volume Management**: Supports a single volume and a single open file at any given time, which significantly reduces the memory overhead compared to more complex filesystem implementations.
- **Streaming and Writing**: Provides functions for streaming file reads and basic file writing (with specific restrictions to maintain its small footprint).

## Technical Implementation

The project is structured around the core `pff.pas` unit, which contains the main logic for filesystem handling. It relies on a low-level disk I/O interface defined in `disk_io.pas`, which must be implemented for the specific hardware target (e.g., SD card over SPI). 

Configuration is handled via the `pff_cfg.inc` file, allowing developers to enable or disable features like `PF_USE_READ`, `PF_USE_WRITE`, and `PF_USE_DIR` to further optimize the binary size. The library supports various code pages and includes logic for handling different endianness, making it portable across different processor architectures.

## Hardware and Platform Support

This port has been tested and verified on several platforms, demonstrating its versatility:

- **Arduino UNO R3 (AVR)**: Using the `ppcrossavr` cross-compiler, the library can be deployed to ATmega328p microcontrollers. The README provides specific pin mappings for connecting SD cards via SPI.
- **Raspberry Pi**: Tested on Linux-based environments for file operations.
- **Windows**: Useful for development and testing using FAT12 file images.

## Usage Example

Integrating the library into a Free Pascal project involves mounting the filesystem and using the provided API for directory listing and file reading. Below is a basic example of how the library is used to list a directory and read a text file:

```pascal
uses
  pff;

var
  fs: FATFS;
  dr: DIR;
  fi: FILINFO;
  bf: array[0..Pred(256)] of char;
  fr: FRESULT;
  br: UINT;

begin
  (* Mount the volume *)
  fr := pf_mount(fs);

  (* List root directory *)
  fr := pf_opendir(dr, '');
  repeat
  begin
    fr := pf_readdir(dr, @fi);
    if fi.fname[0] <> #0 then
      WriteLn(fi.fname);
  end;
  until fi.fname[0] = #0;

  (* Read a text file *)
  fr := pf_open('TEST.TXT');
  while pf_read(@bf, 128, br) = FR_OK do
  begin
    if (br = 0) then break;
    bf[br] := #0;
    Write(bf);
  end;
end.
```

## Development and Documentation

The project is built using the Lazarus IDE and utilizes PasDoc for generating its API documentation. It serves as an excellent bridge for Pascal developers looking to work with embedded storage on platforms that traditionally rely on C-based libraries.
