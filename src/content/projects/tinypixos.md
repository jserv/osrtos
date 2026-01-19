---
title: TinyPiXOS
summary: A lightweight embedded desktop operating system framework based on Linux
  that replaces traditional graphics stacks like X11 and Wayland with a custom, high-performance
  C++ graphics engine. It features a dedicated window manager (TpWM), a comprehensive
  GUI library (TpGUI), and system utilities for media, networking, and hardware management.
slug: tinypixos
codeUrl: https://github.com/TinyPiXOS/TinyPiXOS
siteUrl: https://www.tinypixos.com/
star: 56
version: V0.2.2
lastUpdated: '2026-01-19'
rtos: ''
topics:
- arm64
- cmake
- components-library
- cplusplus-11
- cpp11
- embedded
- embedded-systems
- gui
- guiframework
- library
- open-source
- signal-slot
isShow: false
createdAt: '2026-01-19'
updatedAt: '2026-01-19'
---

TinyPiXOS is an open-source, lightweight desktop operating system framework designed specifically for embedded platforms. Built on a Linux foundation, it takes a radical approach to graphics by completely bypassing traditional display servers like X11 or Wayland. Instead, it implements a custom, high-performance graphics stack from the ground up using C++11, providing a streamlined environment for resource-constrained hardware.

The project is designed to be independent and highly customizable, offering a complete foundational technology stack that developers can control and optimize for specific hardware targets, including ARM, x86, and RISC-V architectures.

## Core Components

The TinyPiXOS ecosystem is divided into four primary modules that work together to provide a full desktop experience:

### TpWM (Window Manager)
At the heart of the system is TpWM, a lightweight window management engine. Inspired by RISC design principles, it provides a minimal set of efficient interfaces that allow developers to assemble and customize window behaviors. This flexibility enables the creation of diverse UI products without the overhead of traditional windowing systems.

### TpGUI (GUI Framework)
TpGUI is a comprehensive widget-based user interface system. It supports modern UI features such as CSS-like styling, event handling, and animations. It utilizes a unified object management system (`TpObject`) to handle resource lifecycles and features a declarative styling system to avoid hard-coding visual attributes.

### TpCore (Core Library)
This library provides the essential building blocks for TinyPiXOS applications. It includes:
- **Unified Data Abstraction**: Standard containers like `TpString`, `TpList`, and `TpVector`.
- **Signal/Slot System**: An event-driven communication mechanism based on the observer pattern, enabling loose coupling between components.
- **Serialization**: Efficient handling of binary and JSON data formats.

### TpUtils (System Utilities)
TpUtils acts as the bridge between high-level application logic and low-level system resources. It integrates several powerful technologies:
- **Media Processing**: Unified abstraction for audio and video using FFmpeg.
- **Networking**: Standardized TCP/UDP socket frameworks.
- **Connectivity**: A Bluetooth stack based on BlueZ.
- **Device Management**: Automatic detection and mounting of USB and disk devices.
- **System Monitoring**: Real-time tracking of CPU, memory, and I/O metrics.

## Technical Architecture

TinyPiXOS leverages several high-performance third-party libraries to handle specialized tasks. It uses `nanomsg` for efficient inter-process communication (IPC) and `erpc` for remote procedure calls. The graphics rendering can optionally utilize hardware acceleration (OpenGL/GLES) or software-based rendering depending on the target hardware's capabilities.

## Getting Started

TinyPiXOS is primarily developed and validated on Ubuntu 22.04 LTS but is designed for cross-compilation to various embedded targets. The build system is based on CMake and utilizes CMake Presets to manage different build configurations (Debug, Release, ARM64, etc.).

### Application Integration

Developers can easily integrate TinyPiXOS libraries into their own projects using CMake. Below is an example of how to link against the core and GUI modules:

```cmake
# Include TpCore
include_directories(/usr/include/TinyPiX/TpCore)
link_directories("/usr/lib/TinyPiX")
target_link_libraries(your_app_name TpCore)

# Include TpGUI
include_directories(/usr/include/TinyPiX/TpGUI)
target_link_libraries(your_app_name TpGUI)
```

## System Configuration

The system behavior is managed through a central configuration file located at `/System/conf/tinyPiX.conf`. This file allows developers to define display resolutions, hardware acceleration settings, and startup applications:

```ini
[display-setting]
width     = 1080
height    = 720

[attribute-setting]
acclerate   = 1    # Enable hardware acceleration
brightness  = 255

[mode-setting]
startapp = TpDesktop
```

TinyPiXOS is released under the Apache License 2.0, making it a viable option for both community projects and commercial embedded products requiring a custom, lightweight desktop environment.
