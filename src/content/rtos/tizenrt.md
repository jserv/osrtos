---
title: TizenRT
slug: tizenrt
version: 3.0_GBM
codeUrl: https://github.com/Samsung/TizenRT
siteUrl: https://github.com/Samsung/TizenRT
date: '2018-02-11'
lastUpdated: '2024-12-27'
star: 593
components:
- FileSystem
- Network
- HTTP
- HTTP/2
- TLS/SSL
- Command Line Interface
- gRPC
- IPv6
libraries: []
licenses:
- Apache License 2.0
platforms:
- ARM
- iMX RT
- QEMU
summary: TizenRT is a lightweight RTOS (Real-Time Operating System) designed to support
  low-end IoT devices. It aims to extend the Tizen platform device coverage to devices
  like home appliances without display and wearable bands with a small LCD. These
  devices are typically equipped with Cortex-M/R processors with MPU, less than 2
  MB RAM, and less than 16 MB Flash.
---

### Features

- **RTOS-based Platform**: Specifically designed for low-end IoT devices.
- **IPv6 Support**: Includes support for Neighbor Discovery (ND6), Multicast Listener Discovery (MLD), and ICMPv6 protocols.
- **Docker Build Environment**: Provides an easy way to build using Docker, eliminating the need for manual library and toolchain installations.
- **Media Framework**: Offers player/recorder functionalities for voice/audio streaming.
- **Task Manager Framework**: Enables control and messaging between applications.
- **Network Monitoring Tool**: Monitors real-time information regarding network sockets, network interface, and WiFi Manager.
- **gRPC for Client Roles**: Supports various RPC types and both insecure and secure modes of RPC execution.
- **HTTP/2 Support**: Ported nghttp2 version 1.32.0 from Github.