---
title: ECoS Control
summary: A Flutter-based mobile application designed to serve as a handheld controller
  for the ESU ECoS digital model railway station. It provides a user-friendly interface
  for managing locomotives, switches, and signals over a network connection.
codeUrl: https://github.com/TheKingDave/ECoS_control
isShow: false
rtos: ''
libraries: []
topics:
- ecos
- flutter
- model
- railway
star: 2
lastUpdated: '2020-12-25'
createdAt: '2025-12-27'
updatedAt: '2025-12-27'
---

## A Modern Handheld Controller for ESU ECoS

ECoS Control is an open-source mobile application designed to transform a smartphone into a powerful handheld controller for the [ESU ECoS](http://www.esu.eu/en/products/digital-control/ecos-50210-dcc-system/what-ecos-can-do/) digital command station. For model railway enthusiasts, the ECoS station is a centerpiece of layout management, and having a portable, responsive interface is essential for operating trains and accessories from anywhere around the layout.

This project was inspired by the official Mobile Control II hardware but was developed independently using the Flutter framework. It aims to provide a similar level of control and convenience using standard Android and iOS devices.

### Key Features and Capabilities

The application is structured to handle the core aspects of model railway operation:

*   **Locomotive Control**: Manage train speeds, directions, and specific locomotive functions (lights, sound, etc.) through a dedicated train control interface.
*   **Switch and Signal Management**: A visual representation of switches and signals allows users to toggle track paths and signal states directly from their phone. The project includes custom SVG assets for various signal states (Green, Red, Yellow) and switch positions (Straight, Bent).
*   **Station Management**: Connect to and manage the ECoS station settings, including adding new stations and monitoring the connection status.
*   **Network Integration**: The app communicates with the ECoS station over a local network, utilizing a structured protocol to send commands and receive real-time updates from the layout.

### Technical Architecture

ECoS Control is built using **Flutter**, which allows for a consistent UI across both Android and iOS platforms. The codebase is organized into logical modules that reflect the different components of a model railway system:

*   **Network Layer**: Located in `lib/network/`, this handles the communication logic and object parsing for the ECoS station.
*   **Train Module**: Found in `lib/train/`, this manages locomotive states, function mapping, and the control UI.
*   **Switch Module**: Located in `lib/switches/`, this handles the logic for track accessories and their visual representation.
*   **Station Module**: Found in `lib/station/`, this manages the connection to the physical hardware.

### Getting Started and Testing

As the project is currently in active development, it is primarily intended for developers and hobbyists looking to experiment with ECoS integration. To facilitate development without needing a physical ECoS station at all times, the app includes a built-in **Testing/Debug mode**.

To test the interface, users can input the following debug credentials:
- **Station name**: `debug`
- **Station port**: `45227`

This allows developers to explore the UI components, such as the `trainControlDisplay` and `switchDisplay`, without a live hardware connection. For those looking to deploy the app, the repository contains standard Flutter project files, including the `pubspec.yaml` for dependency management and platform-specific configurations for Android and iOS.
