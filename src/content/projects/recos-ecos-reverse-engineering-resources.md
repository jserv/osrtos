---
title: 'ReCOS: eCos Reverse Engineering Resources'
summary: A comprehensive toolkit for the static and dynamic analysis of eCos-based
  firmware, with a primary focus on Broadcom platforms. It provides automated scripts
  for memory mapping, vector table dumping, and Ghidra-based function identification
  to assist in security research and firmware exploration.
slug: recos-ecos-reverse-engineering-resources
codeUrl: https://github.com/ecos-wtf/recos
star: 23
lastUpdated: '2024-09-26'
rtos: ''
topics:
- broadcom
- ecos
- mips
- reverse-engineering
isShow: false
createdAt: '2026-01-04'
updatedAt: '2026-01-04'
---

## Overview

ReCOS is a specialized suite of tools designed to facilitate the reverse engineering of the eCos (embedded Configurable operating system) platform. While eCos is a highly flexible RTOS used in a wide variety of embedded devices, its implementation in consumer electronics—particularly Broadcom-based cable modems and networking equipment—often lacks public documentation. ReCOS addresses this by providing scripts and resources to automate the discovery of system structures, memory layouts, and function names within binary blobs.

## Static Analysis Capabilities

The project includes several Python-based tools for analyzing firmware images without execution. One of the core utilities is the **Device Memory Mapper**, which identifies patterns in firmware code to derive critical memory segments such as `.text`, `.data`, `.bss`, and the stack. This information is essential for setting up correct memory maps in Software Reverse Engineering (SRE) tools like Ghidra or IDA Pro.

For bootloader analysis, ReCOS offers a demangling script that searches for function name logging strings. By cross-referencing these strings to their call sites, researchers can identify low-level hardware interaction functions, such as those used for NAND or SPI flash operations. This is particularly useful for creating device profiles for external utilities like `bcm2-utils`.

## Dynamic Analysis and Memory Dumping

When a live device is accessible via a serial connection (such as a CM> or RG> shell), ReCOS provides scripts to extract runtime information. These tools include:

- **Virtual Vector Table Dumper**: Extracts the eCos virtual vector table, revealing the locations of interrupt handlers, exception tables, and debug I/O procedures.
- **Virtual Service Routine (VSR) Table Dumper**: Maps out the hardware interrupt and exception service routines.
- **Heap Dumper**: Captures the entire heap region to assist in understanding the memory allocator's state and identifying potential vulnerabilities.

## Ghidra Integration and Function Identification

To streamline the analysis process in Ghidra, ReCOS provides pre-generated FunctionID (FIDB) files for eCos 1.0, 2.0, and 3.0 on MIPS architectures. These databases allow Ghidra to automatically recognize and name standard library functions, significantly reducing the manual effort required to understand the code.

Additionally, the repository includes Ghidra scripts for automated renaming:
- **DebugLogsRenameFunctions.java**: Uses internal debug logging strings to rename thousands of functions simultaneously.
- **RenameLabelVTable.java**: Identifies and renames C++ virtual tables based on the newly identified function names.

## Exploit Development and Utilities

Beyond analysis, ReCOS includes utilities for security researchers developing proof-of-concept exploits. This includes the **AF_INET Hunter**, which searches firmware for specific byte patterns used in `sockaddr_in` structures, helping researchers build ROP chains for networking-related exploits. For visual confirmation of code execution, the `led_fun.py` script demonstrates how to manipulate device LEDs on Broadcom platforms.
