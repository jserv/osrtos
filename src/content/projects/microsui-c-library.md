---
title: MicroSui C Library
summary: A lightweight C library for embedded systems to interact with the Sui Network
  blockchain. It supports key management, transaction signing, and RPC communication,
  with full compatibility for ESP32, Arduino, and PlatformIO.
slug: microsui-c-library
codeUrl: https://github.com/MicroSui/microsui-lib
siteUrl: https://www.microsui.com/
star: 12
version: v0.2.2
lastUpdated: '2025-09-06'
rtos: ''
topics:
- blockchain
- embedded-systems
- iot
- sui-network
isShow: false
createdAt: '2026-01-18'
updatedAt: '2026-01-18'
---

## Overview

The MicroSui C Library (microsui-lib) is a specialized toolkit designed to bring blockchain capabilities to the world of microcontrollers. Specifically targeting the Sui Network, this library allows resource-constrained devices to participate in decentralized ecosystems by providing the necessary cryptographic and networking primitives in a lightweight, pure C implementation.

Traditionally, interacting with modern blockchains requires significant computational resources and complex software stacks. MicroSui addresses this by offering a minimalistic approach. It enables embedded developers to perform essential blockchain operations—such as generating Ed25519 keypairs, signing transactions, and constructing JSON-RPC calls—directly on hardware like the ESP32.

## Key Features & Capabilities

The library is structured to be both modular and easy to integrate. It follows an object-oriented style in C, organizing functionality into clear modules that handle the lifecycle of a blockchain interaction:

- **Client**: Manages the connection to Sui Network RPC nodes and handles the request-response cycle.
- **Keypair**: Provides secure handling of cryptographic identities and key management.
- **Transaction**: Facilitates the creation, serialization, and signing of blockchain transactions.
- **WiFi**: Includes abstraction layers for network connectivity, specifically tailored for the ESP32 platform.

## Technical Implementation

Under the hood, MicroSui leverages several high-performance, small-footprint third-party libraries to maintain a low memory profile. It uses **Monocypher** for cryptographic primitives, **compact25519** for Ed25519 key format support, and **jsmn** for lightweight JSON parsing. This combination ensures that the library remains efficient enough for microcontrollers while maintaining the security standards required for blockchain interactions.

The project structure is designed for portability, with a clear separation between the public API in the `include` directory and the platform-specific implementations in the `src/microsui_core/impl` folder. This allows the library to support both the ESP32 and traditional desktop operating systems like Linux, macOS, and Windows.

## Platform & Hardware Support

One of the library's primary strengths is its broad compatibility within the embedded ecosystem:

- **ESP32**: Full compatibility with the popular Espressif microcontroller.
- **Arduino & PlatformIO**: The library is listed in both the Arduino and PlatformIO registries, allowing for seamless integration into existing projects.
- **Desktop Environments**: Support for standard OS environments enables developers to build and test their logic on a PC before deploying to hardware.

## Getting Started

Integration into embedded projects is straightforward. For Arduino users, the library can be added via the Library Manager. For manual builds, the project includes a root-level Makefile that automatically detects and builds all available examples. 

The repository provides three categories of examples to help developers get started:
1. **Core Examples**: Demonstrating basic cryptographic and utility functions.
2. **SDK Examples**: Showing higher-level interactions with the Sui Network.
3. **Arduino Examples**: Specifically tailored for the Arduino framework and ESP32 hardware.

By providing a bridge to the Sui Network, MicroSui opens up new possibilities for IoT devices, such as automated machine-to-machine payments, decentralized identity for sensors, and secure, immutable data logging on a distributed ledger.
