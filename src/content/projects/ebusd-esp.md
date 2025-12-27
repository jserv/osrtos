---
title: ebusd-esp
summary: A specialized firmware for ESP8266, ESP8285, and ESP32 microcontrollers designed
  to enable low-latency eBUS communication for the ebusd daemon. It acts as a bridge
  between eBUS hardware adapters and network or serial interfaces, featuring a built-in
  web configuration portal and support for various Wemos and NodeMCU boards.
codeUrl: https://github.com/john30/ebusd-esp
isShow: false
rtos: ''
libraries: []
topics:
- ebus
- esp32
- esp8266
- micropython
star: 157
lastUpdated: '2024-06-15'
createdAt: '2025-12-27'
updatedAt: '2025-12-27'
---

ebusd-esp is a dedicated firmware designed for the ESP8266, ESP8285, and ESP32 families of microcontrollers. Its primary purpose is to facilitate communication with eBUS (Energy Bus) systems—commonly found in heating, ventilation, and solar installations—by providing a high-performance, low-latency bridge to the `ebusd` software daemon. While development on this specific firmware has been discontinued in favor of newer hardware versions, it remains a vital piece of history for the eBUS community and continues to support a wide range of legacy ESP-based adapters.

### Hardware Compatibility
The firmware is highly versatile, supporting a variety of popular development boards and chips. Key supported hardware includes:
* **Wemos D1 mini / Pro / Lite**: Covering ESP8266 and ESP8285 variants with flash sizes ranging from 1MB to 16MB.
* **NodeMCU v1.0**: A standard ESP8266-based platform.
* **ESP-01S**: For compact, minimal implementations.
* **ESP32 Boards**: Including the Wemos D32 (Lolin32) and D1 mini 32.

For ESP32 devices, the project provides specific "factory" images to simplify the initial flashing process on blank chips, ensuring all partition tables and bootloaders are correctly placed.

### Flexible Configuration Options
One of the standout features of ebusd-esp is its user-friendly configuration. Users can manage the device through two primary interfaces:

1. **Web Interface**: After flashing, the device creates a WiFi access point named "EBUS". By connecting to this network, users can access a comprehensive HTML frontend to configure WiFi credentials, GPIO pin assignments, and ebusd connection settings. It even includes a live status dashboard and a "PINs" page for manual GPIO control.
2. **Serial Link**: For those who prefer a command-line approach or lack WiFi access, the firmware provides an interactive serial console at 115200 baud. This menu-driven interface allows for SSID setup, factory resets, and real-time logging.

### Advanced Features and eBUS Integration
The firmware is optimized for the eBUS Adapter 3.x series. It includes a specialized "PIC" tab in the web UI that enables a pass-through mode. This allows users to update the firmware of the PIC microcontroller on the adapter itself using the `ebuspicloader` tool without needing additional hardware programmers.

Additionally, the firmware provides:
* **Low Latency**: Optimized for the timing-sensitive eBUS protocol.
* **LED Feedback**: Intelligent use of onboard LEDs to signal WiFi status, eBUS signal detection, and active data transmission.
* **1-Wire Support**: Experimental support for DS18B20 temperature sensors, with data exposed via a JSON API at the `/sensor` endpoint.
* **OTA Updates**: Support for Over-the-Air firmware updates, allowing for easy maintenance once the device is installed in a heating system.

### Usage with ebusd
Once configured, the firmware allows an `ebusd` instance to connect via TCP or UDP. It supports "enhanced" mode, which offloads some of the protocol handling to the ESP chip to ensure the highest reliability. For users of the eBUS Adapter 3, the firmware handles the complex RX/TX high-speed signaling required for modern eBUS communication.
