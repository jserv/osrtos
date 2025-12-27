---
title: NFFS
slug: nffs
summary: The Newtron Flash File System (NFFS) is a lightweight, reliable flash file
  system designed specifically for resource-constrained embedded devices. It optimizes
  for minimal RAM footprint while ensuring data integrity across power cycles, providing
  native support for both the Apache Mynewt and Zephyr RTOS environments.
codeUrl: https://github.com/apache/mynewt-nffs
siteUrl: https://github.com/apache/mynewt-nffs
star: 36
lastUpdated: '2024-07-30'
components:
- FileSystem
- Storage
platforms:
- ARM Cortex-M
- RISC-V
- Native
- POSIX
- QEMU
licenses:
- Apache-2.0
libraryType: FileSystem
createdAt: '2024-07-30'
updatedAt: '2024-07-30'
---

### Features


- Minimal RAM usage through efficient in-memory data structures.

- High reliability for maintaining data integrity on flash storage media.

- Native integration with the Apache Mynewt RTOS ecosystem.

- Native support for the Zephyr real-time operating system.

- Log-structured design to minimize flash wear and improve write efficiency.

- Atomic file operations to prevent corruption during unexpected power loss.

- Support for hierarchical directory structures and file management.

- Configurable system parameters via syscfg.yml for fine-tuned resource allocation.

- Integration with Mynewt's package management system using pkg.yml.

- Flash area management for defining and utilizing specific storage partitions.

- Automatic garbage collection mechanism to reclaim unused flash blocks.

- Support for standard file operations including seeking and random access.

- Optimized specifically for NOR flash hardware characteristics.

- Built-in self-test suite located in the test directory for verifying filesystem integrity.

- Low-level flash abstraction layer to ensure portability across different hardware.

- RAM-resident index for fast file lookups and metadata access.



### Architecture

NFFS is designed as a log-structured file system, which is particularly suited for flash memory. Instead of overwriting data in place, which is costly on flash, NFFS appends new data and metadata to the end of the log. This approach inherently provides wear leveling and simplifies the process of ensuring data consistency. The system maintains a compact RAM-resident index of the file system structure to provide fast access times while adhering to its priority of minimal memory consumption.

The architecture relies on a series of flash "areas" which are treated as a circular buffer. When an area becomes full, the system utilizes a garbage collection process to move valid data to a new area and erase the old one. This design ensures that the file system can continue to operate efficiently even as the physical media reaches its capacity limits.

#### Core Components
- **Flash Abstraction Layer**: Provides a consistent interface to the underlying hardware-specific flash drivers provided by the RTOS.
- **In-Memory Index**: A highly optimized set of structures that track the location of files and directories in flash.
- **Garbage Collector**: A background or on-demand process that reclaims space by consolidating valid data blocks.
- **Area Manager**: Handles the partitioning and lifecycle of physical flash sectors assigned to the file system.

### Use Cases

This library is ideal for:

- **IoT Sensor Nodes**: Storing periodic sensor readings on devices with extremely limited RAM and flash resources.
- **Configuration Management**: Persisting system settings, network credentials, and calibration data across reboots.
- **Firmware Updates**: Managing the storage and metadata for staged firmware images during OTA updates.
- **Event Logging**: Recording system events, error logs, or audit trails in a reliable, power-fail safe manner.
- **Resource-Constrained Wearables**: Providing a structured file interface for user data on low-power microcontrollers.

### Getting Started

To integrate NFFS into an Apache Mynewt project, developers should include the NFFS package in their project's `pkg.yml` file. Configuration is primarily managed through `syscfg.yml`, where users must define the flash areas and resource limits (such as the maximum number of open files). For Zephyr users, NFFS is available as a file system backend that can be enabled via Kconfig and accessed through the standard Zephyr File System API.

Detailed technical specifications regarding the internal data formats and block structures are available in the `design.txt` file located in the root of the repository. For bug reporting and issue tracking, the project utilizes the Mynewt Jira instance under the 'NFFS' component.
