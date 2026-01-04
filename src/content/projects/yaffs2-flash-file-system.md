---
title: YAFFS2 Flash File System
summary: A specialized filesystem for NAND flash memory, optimized for embedded systems.
  It includes core filesystem logic, Linux VFS integration, and MTD interface support
  for various NAND page sizes, featuring robust ECC and bad block management.
slug: yaffs2-flash-file-system
codeUrl: https://github.com/zhaogezhang/study_yaffs
siteUrl: http://www.aleph1.co.uk/yaffs/
star: 1
lastUpdated: '2019-06-11'
rtos: ''
topics:
- fs
- yaffs
- yaffs1
- yaffs2
isShow: false
createdAt: '2026-01-04'
updatedAt: '2026-01-04'
---

YAFFS (Yet Another Flash File System) is a premier filesystem specifically designed for NAND flash memory. Unlike general-purpose filesystems that are adapted for flash, YAFFS was built from the ground up to handle the unique characteristics of NAND, such as page-based access, limited write cycles, and the necessity of wear leveling and bad block management.

### Core Architecture

The heart of the filesystem lies in `yaffs_guts.c`, which implements the internal logic for managing file structures and flash layout. YAFFS uses a tree-based indexing system composed of "tnodes" (tree nodes) to map logical file offsets to physical chunks on the flash. This structure allows for efficient file access and updates. The filesystem is log-structured, meaning data is written sequentially to new locations, which inherently assists with wear leveling and minimizes the overhead of flash erase cycles.

### NAND-Specific Features

YAFFS provides robust handling for the specific challenges of NAND flash:

- **ECC (Error Correction Code)**: The project includes its own software ECC implementation (`yaffs_ecc.c`) but can also be configured to rely on hardware ECC provided by the MTD (Memory Technology Device) layer.
- **Bad Block Management**: It actively tracks and retires bad blocks to ensure data integrity over the lifetime of the device.
- **Tags and Metadata**: Each flash chunk is accompanied by "tags" that store metadata such as the object ID and chunk ID. This allows the filesystem to reconstruct its state during mount by scanning the flash, providing resilience against power loss.

### Version Support: YAFFS1 and YAFFS2

The repository supports two primary modes through its configuration and build system:

- **YAFFS1**: Optimized for older NAND devices with 512-byte pages and 16-byte spare areas.
- **YAFFS2**: Designed for modern NAND devices with 2KB or larger pages. YAFFS2 improves performance by reducing the number of writes required for metadata updates and handling the "write-once" constraint of modern MLC/TLC flash.

### Linux Integration and Portability

While YAFFS is highly portable and used in many RTOS environments, this repository specifically highlights integration with the Linux kernel. It includes VFS (Virtual File System) wrappers (`yaffs_vfs_multi.c` and `yaffs_vfs_single.c`) and scripts to patch the filesystem into a Linux source tree. The build system supports creating out-of-tree kernel modules (`.ko`), making it easier to test and deploy on embedded Linux platforms.

### Configuration and Study

The project utilizes Kconfig files to manage features such as background garbage collection, extended attribute (xattr) support, and checkpointing for faster mount times. As indicated by the repository name `study_yaffs`, this project is an excellent resource for developers and students looking to understand the internals of a production-grade flash filesystem. Note that while the core logic is universal, many of the code comments in this specific repository are written in Chinese to assist local developers in their study of the filesystem's architecture.
