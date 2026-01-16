---
title: BLE Positioning System (BPS)
summary: An indoor positioning system for Home Assistant that provides real-time,
  multi-device tracking using BLE trilateration. It leverages data from ESP32 devices
  running ESPHome's bluetooth_proxy to estimate precise coordinates, floor levels,
  and zone locations.
slug: ble-positioning-system-bps
codeUrl: https://github.com/Hogster/BPS
siteUrl: https://github.com/Hogster/BPS/wiki/
star: 74
version: v.0.1.2
lastUpdated: '2025-08-08'
rtos: ''
topics:
- ble
- bluetooth
- bluetooth-low-energy
- esphome
- hacs-integration
- home-assistant
- homeassistant-custom-component
- triangulation
- trilateration
isShow: false
createdAt: '2026-01-15'
updatedAt: '2026-01-15'
---

The BLE Positioning System (BPS) is a sophisticated indoor tracking solution designed for Home Assistant users who need more precision than simple presence detection. By building upon the Bermuda BLE Trilateration integration, BPS allows for real-time, multi-device tracking across floor plans, enabling advanced automation based on a person's or object's exact location within a home.

### The Mechanics of Indoor Positioning

BPS operates by collecting signal strength data from multiple Bluetooth proxies distributed throughout a building. It specifically leverages the `bluetooth_proxy` component of ESPHome, which allows ESP32-based devices to relay BLE advertisement data to Home Assistant. By analyzing the estimated distances from at least three different points—a process known as trilateration—BPS can calculate a precise coordinate for a tracked device.

This approach moves beyond binary presence detection. Instead of just knowing a device is in the "Living Room," BPS can determine where exactly on the floor plan the device is located, functioning much like an indoor GPS. This data is then translated into actionable entities within the Home Assistant ecosystem.

### Key Capabilities and Features

The system provides several layers of location data to enhance home automation:

- **Real-time Coordinate Tracking**: Visualizes device movement on a floor plan, providing a sense of where people or objects are moving in the house.
- **Floor Determination**: Automatically identifies which level of a house a device is on, allowing for floor-specific automations (e.g., turning on lights when someone reaches the second floor).
- **Zone-based Logic**: Users can define specific zones, such as a kitchen or bedroom, and trigger actions when a device enters or leaves these areas.
- **Multi-Device Support**: Capable of tracking any Bluetooth device supported by the Bermuda integration, including wearables, smartphones, and BLE tags.

### Hardware Requirements

To achieve reliable trilateration, the system requires a dense network of Bluetooth receivers. The project recommends using ESP32-based hardware that can run ESPHome, such as:

- **D1-Mini32 boards**: Cost-effective and easy to deploy in various rooms.
- **Shelly Plus devices**: Reliable commercial options that support Bluetooth proxying natively.
- **Sonoff NS Panels**: These are particularly effective when used as wall switch replacements throughout the house, providing consistent coverage.

A minimum of three proxies with overlapping coverage is required for the trilateration algorithm to function effectively. If a device loses contact with one of the three required proxies, tracking precision will be lost until it re-enters range.

### Integration and Configuration

BPS is designed to be installed via the Home Assistant Community Store (HACS). Once installed, it creates sensors for each tracked device, providing entities for floor and zone attributes. The integration also includes a dedicated BPS panel within the Home Assistant sidebar. This panel serves as a graphical tool for placing receivers on a virtual map, defining zones, and debugging the real-time tracking performance.

Because the system relies on the SciPy library for its complex mathematical calculations, users running Home Assistant on ARM-based hardware (like the Raspberry Pi) should ensure they are using a 64-bit version of the OS to satisfy the library's compilation requirements.
