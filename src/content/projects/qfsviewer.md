---
title: QFSViewer
summary: A cross-platform Qt-based tool for inspecting and managing raw file system
  image files including JFFS2, FAT, and EXT2/3/4. It operates independently of the
  host operating system's mounting capabilities, allowing developers to view, export,
  and modify file system contents without administrative permissions.
slug: qfsviewer
codeUrl: https://github.com/QQxiaoming/QFSViewer
star: 15
version: V0.1.4
lastUpdated: '2025-12-19'
rtos: ''
topics:
- embedded
- embedded-systems
- embedded-utils
- exfat
- ext2
- ext3
- ext4
- fatfs
- filesystem-utils
- jffs2
- qt
isShow: false
createdAt: '2026-01-04'
updatedAt: '2026-01-04'
---

QFSViewer is a lightweight, cross-platform utility designed for developers to explore and manage the contents of various file system raw image files. Unlike standard system tools, QFSViewer does not rely on the host operating system's mounting mechanisms or require elevated administrative permissions. This makes it an ideal tool for analyzing firmware images and embedded storage dumps across Windows, Linux, and macOS environments.

The application provides a clean, intuitive interface based on the Qt framework. It allows users to browse directory structures, view file metadata, and extract files from raw images. While primarily a viewer, it also includes experimental features for importing files and modifying the image structure, though these are recommended for use with backups.

## Supported File Systems

QFSViewer supports a wide range of file systems commonly encountered in embedded systems development:
- **Flash-optimized**: JFFS2
- **FAT variants**: FAT12, FAT16, FAT32, and exFAT
- **Linux standards**: EXT2, EXT3, and EXT4

## Technical Foundation

The project leverages several well-known open-source libraries to handle the complexities of different file system formats. It integrates `lwext4` for robust EXT2/3/4 support and the `ff15` (FatFs) library for handling FAT-based images. For JFFS2 support, it incorporates logic from the `jffs2extract` project. 

Built with Qt 6.5.0 or higher, the tool is designed for portability. The repository includes build scripts for generating Windows installers (via Inno Setup), Debian packages for Linux, and DMG images for macOS. This ensures that developers can use the same tool regardless of their primary development workstation.

## Key Functionalities

- **Image Inspection**: Open raw binary images of supported file systems to view their internal hierarchy without needing to mount them to the host OS.
- **File Extraction**: Right-click any file within the image to export it to the host machine for further analysis.
- **Experimental Modification**: Create directories, delete files, or import new data directly into the image file. These features are experimental as they modify the raw binary structure.
- **Cross-Platform Consistency**: Provides a consistent user experience across different desktop operating systems.

For developers working with embedded Linux distributions, RTOS-based systems, or custom bootloaders, QFSViewer serves as a vital bridge between raw binary data and actionable file-level access. It simplifies the process of verifying image contents during the build process or debugging storage issues in the field.
