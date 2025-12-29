---
title: ESP Configuration Manager
summary: A WiFi configuration manager for ESP32 and ESP8266 platforms. It features
  a web-based portal to streamline network setup and device configuration within the
  Arduino ecosystem.
slug: esp-configuration-manager
codeUrl: https://github.com/awaistkd/esp-configuration-manger
star: 1
lastUpdated: '2020-02-19'
rtos: ''
topics:
- arduinojson
- esp32
- esp8266
- spiffs
isShow: false
createdAt: '2025-12-28'
updatedAt: '2025-12-28'
---

## Overview

The ESP Configuration Manager is a specialized library designed for the Espressif ESP32 and ESP8266 microcontrollers. It addresses one of the most common challenges in IoT development: providing a user-friendly way to configure WiFi credentials and device settings without hardcoding them into the firmware. By leveraging a web-based portal, it allows end-users to connect to the device's access point and configure the necessary network parameters through a browser.

In the lifecycle of an IoT product, the initial setup phase is often the most critical for user experience. This library streamlines that phase by implementing a robust configuration workflow that handles network failures gracefully and provides a clear interface for recovery.

## Key Features

The library simplifies the process of managing network connectivity for embedded applications. Its primary focus is on the "Captive Portal" pattern, where the device creates its own WiFi network if it cannot connect to a known one.

**Core capabilities include:**
- **Dual Platform Support**: Native compatibility with both ESP32 and ESP8266 architectures, allowing developers to maintain a single codebase for different hardware versions.
- **Web-Based Configuration Portal**: An integrated web server that serves a configuration page to any connected client, eliminating the need for external configuration tools.
- **Arduino Framework Integration**: Designed to work seamlessly with the Arduino IDE, PlatformIO, and other Arduino-compatible build systems.
- **Connection Management Logic**: Automated handling of the transition between Access Point (AP) mode and Station (STA) mode based on connection success or failure.

## Technical Implementation

Built on the Arduino framework, the ESP Configuration Manager utilizes the underlying networking stacks of the Espressif chips. It abstracts the complexities of the WebServer and WiFi libraries, providing a higher-level API for developers. This allows for rapid prototyping of IoT devices that require field-configurable network settings.

The library is structured to be lightweight, making it suitable for projects where memory and processing power are at a premium. By using the standard Arduino `library.properties` and `library.json` formats, it ensures compatibility with major package managers in the embedded ecosystem. The use of the MIT license makes it accessible for both open-source and commercial applications.

## Workflow and Usage

When a device powered by the ESP Configuration Manager boots up, it first attempts to connect to the last known WiFi network. If the connection fails—either because the credentials are missing or the network is out of range—the library automatically switches the ESP32 or ESP8266 into Access Point mode.

Once in AP mode, the device hosts a local web server. Users can connect to this AP using a smartphone or laptop, which typically triggers a captive portal notification. Through the resulting web interface, the user can scan for available networks, select their SSID, and enter the password. After saving, the device reboots or attempts to reconnect using the new credentials, providing a seamless setup experience.

This approach is particularly valuable for:
- **Commercial IoT Products**: Where end-users need to set up devices in their own homes.
- **Remote Sensors**: Where physical access for serial debugging is not possible.
- **Portable Devices**: That may need to connect to different networks frequently.

By integrating this library, developers can focus on their core application logic while leaving the complexities of network provisioning to a proven, reusable component.
