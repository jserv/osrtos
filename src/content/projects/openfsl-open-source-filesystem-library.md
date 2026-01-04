---
title: OpenFSL - Open Source Filesystem Library
summary: A portable C++ library for managing and modifying filesystem images and partition
  tables without OS-level mounting. It provides a hardware-independent abstraction
  layer suitable for integration into custom operating systems or standalone disk
  utilities. Currently supports FAT32 and MBR with ongoing development for NTFS and
  GPT.
slug: openfsl-open-source-filesystem-library
codeUrl: https://github.com/kms1212/OpenFSL
siteUrl: https://kms1212.github.io/OpenFSL
star: 6
version: nightly
lastUpdated: '2022-09-24'
rtos: ''
topics:
- cpp
- disk
- fat32
- fatfs
- filesystem
- filesystem-library
- freebsd
- iso9660
- linux
- macos
- ntfs
- openfsl
- windows
isShow: false
createdAt: '2026-01-04'
updatedAt: '2026-01-04'
---

## Overview

OpenFSL is an open-source filesystem library designed to provide developers with a flexible, platform-independent way to interact with disk images and filesystems. Unlike traditional filesystem drivers that require operating system integration or FUSE (Filesystem in Userspace) to mount a volume, OpenFSL operates as a standalone library. This makes it an ideal choice for developers building disk utilities, forensic tools, or even their own custom operating systems.

The project was born out of a need to modify filesystem images and access unsupported formats without the overhead of installing complex mounting drivers. By providing a clean abstraction layer, OpenFSL allows users to implement their own disk device interface, which the library then uses to perform high-level filesystem operations.

## Key Features and Progress

OpenFSL is currently in active development, with several core components already functional and others in the pipeline. The library focuses on two main areas: filesystem drivers and partition table management.

**Filesystem Support:**
- **FAT32:** Fully implemented and stable, allowing for robust read and write operations on one of the most common embedded filesystems.
- **NTFS:** Currently in progress, aiming to bring support for modern Windows-based volumes.
- **ISO9660:** Planned for future development to support optical disc images.

**Partition Table Support:**
- **MBR (Master Boot Record):** Fully finished, supporting legacy partitioning schemes.
- **GPT (GUID Partition Table):** Currently in progress to support modern UEFI-based disk structures.

## Technical Architecture

One of the most compelling aspects of OpenFSL is its architecture. It is designed to be decoupled from the underlying storage hardware. The user application provides a "Disk Device Abstraction Layer," which tells OpenFSL how to read and write sectors to the physical or virtual disk. This design allows OpenFSL to be used in a variety of environments:

1.  **User-Space Applications:** Running on Windows, Linux, or macOS to manipulate disk images.
2.  **OS Integration:** Because the library is self-contained, it can be integrated directly into an operating system kernel to provide native filesystem support.

The library is written in C++11 and utilizes CMake for its build system. It also includes low-level assembly components, such as MBR and VBR boot code for x86 architectures, which are converted to C source files during the build process using Python scripts. This allows the library to assist in creating bootable disk images.

## Platform and Architecture Support

OpenFSL is highly portable and has been tested across a wide range of operating systems and CPU architectures. Supported platforms include Windows (MSVC and MinGW), Linux (Ubuntu), FreeBSD, and macOS. 

In terms of hardware architecture, it supports:
- **x86 and AMD64**
- **AArch64 (ARM 64-bit)**
- **armel (ARM 32-bit Little-Endian)**
- **PowerPC (ppc64/ppc64el)**
- **s390x**

## Getting Started

To use OpenFSL, developers typically link against the shared or static library and include the relevant headers. The primary workflow involves initializing a disk device object, passing it to the partition manager to identify volumes, and then using the filesystem drivers to interact with files and directories. 

For those looking to integrate it into an embedded project or custom OS, the library provides a clear path for implementing the necessary abstraction layers. Extensive API documentation is generated via Doxygen, providing a detailed reference for the library's classes and methods.
