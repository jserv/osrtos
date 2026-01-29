---
title: Columba
summary: A native Android messaging application for the Reticulum mesh networking
  stack. It enables secure, decentralized communication via LXMF over Bluetooth LE,
  LoRa radio, and TCP without relying on centralized infrastructure or internet access.
slug: columba
codeUrl: https://github.com/torlando-tech/columba
star: 116
version: v0.6.11
lastUpdated: '2026-01-29'
rtos: ''
topics:
- ble
- lora
- lxmf
- mesh-networks
- off-grid
- privacy
- reticulum
- rns
isShow: true
createdAt: '2026-01-29'
updatedAt: '2026-01-29'
---

Columba is a specialized messaging application designed to bring the power of the Reticulum network to Android devices. Named after the constellation representing a dove—a historical symbol of messengers—Columba provides a modern, Material Design 3 interface for off-grid communication. It allows users to send and receive messages using the Lightweight Extensible Message Format (LXMF) without any reliance on internet connectivity, cellular towers, or central servers.

## The Reticulum Foundation

At its core, Columba is built upon Reticulum, a cryptography-based networking stack designed for building resilient mesh networks. Reticulum is optimized for high-latency, low-bandwidth environments and can operate over virtually any medium. By utilizing Reticulum, Columba treats the Android device as a node in a larger mesh, capable of not just sending its own messages but also helping to relay traffic for others in the network.

## Communication Without Infrastructure

One of the most significant features of Columba is its versatility in connectivity. It breaks away from the traditional client-server model by supporting multiple transport mediums:

- **Bluetooth LE (BLE):** Uses a native Android implementation of `ble-reticulum` to communicate with nearby Android and Linux devices.
- **LoRa Radio:** Connects to [RNode](https://github.com/markqvist/RNode_Firmware) hardware to facilitate long-distance, low-power communication.
- **WiFi and TCP:** Allows connection to local networks or global Reticulum servers when available.

This multi-modal approach ensures that users can stay connected in diverse scenarios, from local peer-to-peer interactions to wide-area mesh networks.

## Privacy and Identity Management

Columba prioritizes user sovereignty and privacy. The application features end-to-end encryption by default, with no tracking and no requirement for user accounts. Identities are generated locally on the device, ensuring that keys never leave the user's control. 

Key identity features include:
- **Local Generation:** Create messaging identities directly on the hardware.
- **Multi-Identity Support:** Easily swap between different personas for different contexts.
- **Portability:** Export and import identities for secure backups or device migration.
- **QR Integration:** Built-in scanner and generator for seamless identity sharing.

## Technical Architecture

The project is implemented as a native Android application using Kotlin and the Gradle build system. It is organized into a multi-module architecture, including dedicated modules for data handling, domain logic, and a specific `reticulum` module for protocol integration. The UI is built with Jetpack Compose and follows Material Design 3 guidelines, providing a familiar user experience while hiding the underlying complexity of mesh networking protocols.

For developers and advanced users, the repository includes various utility scripts for auditing dispatchers and managing builds, reflecting a focus on security and robust development practices. As an open-source tool, Columba serves as a vital bridge between high-level mobile interfaces and low-level mesh networking hardware.
