---
title: IR0 Kernel
summary: A modular monolithic operating system kernel for x86-64 architecture supporting
  development in C, C++, and Rust. It provides a POSIX-compatible system call interface,
  advanced memory management, a virtual file system (VFS), and a comprehensive networking
  stack for embedded and system-level applications.
slug: ir0-kernel
codeUrl: https://github.com/IRodriguez13/IR0
star: 38
version: v0.0.1-pre.1
lastUpdated: '2026-01-13'
rtos: ''
topics:
- asm
- c
- iot
- kernel
- operating-system
- operating-system-kernel
- operating-systems
- os
- osdev
- server
- unix
isShow: false
createdAt: '2026-01-16'
updatedAt: '2026-01-16'
---

## Overview

IR0 is a sophisticated monolithic operating system kernel designed specifically for the x86-64 architecture. It focuses on modularity, multi-language support, and POSIX compliance, providing a robust foundation for system-level development. The project is unique in its approach to kernel-level programming, allowing developers to utilize C for core services, C++ for advanced abstractions, and Rust for memory-safe device drivers.

The kernel operates with a clear separation between Ring 0 (Kernel Space) and Ring 3 (User Space), utilizing a system call interface via INT 0x80 to bridge the two. This architecture ensures system stability while providing user applications with access to core services like process management, file operations, and networking.

## Multi-Language Development Environment

One of the most striking features of IR0 is its unified driver registry and multi-language build system. The kernel provides specific roles for different languages:

*   **C (Primary)**: Used for the kernel core, memory management, and critical system drivers.
*   **C++ (Advanced Components)**: Utilized for complex components requiring object-oriented features. The kernel includes a minimal C++ runtime (`compat.cpp`) that supports global `new`/`delete` operators and static initialization guards without standard library dependencies.
*   **Rust (Device Drivers)**: Focused on memory safety, Rust drivers are compiled for a custom bare-metal target (`x86_64-ir0-kernel`). The system uses a `no_std` environment with FFI bindings to kernel functions, allowing modern safety features to exist within the kernel space.

## Core Subsystems

### Memory and Process Management
IR0 implements a complete memory management suite including paging with identity mapping, a physical memory bitmap manager, and a kernel heap allocator (`kmalloc`/`kfree`). The process management system supports a full lifecycle (create, run, terminate, wait) and utilizes a Round-Robin scheduler with configurable time quanta. Context switching is handled via an assembly-optimized x86-64 implementation.

### Virtual File System (VFS)
An abstraction layer allows IR0 to support multiple filesystem types simultaneously. Currently, the kernel supports:
*   **Minix FS**: For persistent storage.
*   **RAMFS/TMPFS**: For high-speed temporary storage.
*   **ProcFS & DevFS**: Virtual filesystems for system information and device access.

### Networking Stack
The kernel includes an evolving networking stack that handles Ethernet frames, Address Resolution Protocol (ARP), and the foundation of the IPv4 protocol. It includes drivers for common virtualization-friendly hardware like the RTL8139 and Intel e1000 Ethernet NICs.

## Hardware Support and Drivers

IR0 features a wide array of built-in drivers for legacy and modern hardware, including:
*   **Storage**: ATA/IDE disk drivers with DMA support.
*   **Input**: PS/2 keyboard and mouse support.
*   **Audio**: Sound Blaster 16 and Adlib OPL2 drivers.
*   **Video**: VGA text mode and VBE graphics drivers.
*   **Timers**: Support for PIT, HPET, LAPIC, and RTC.

## Development and Build System

The project includes a highly flexible build system called **unibuild**, which allows for the isolated compilation of individual files in C, C++, or Rust without rebuilding the entire kernel. This is particularly useful for driver development. Additionally, an experimental `menuconfig` tool provides a graphical interface for configuring kernel subsystems, similar to the Linux kernel configuration process.

For testing and execution, IR0 is optimized for the QEMU emulator and uses the GRUB bootloader for ISO creation. The build system supports both native Linux environments and cross-compilation from Windows using MSYS2 or MinGW-w64.
