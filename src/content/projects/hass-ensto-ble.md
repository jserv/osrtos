---
title: Hass Ensto BLE
summary: A Home Assistant custom integration for controlling Ensto BLE thermostats,
  including models like ELTE6-BT and ECO16BT. It enables remote management of heating
  modes, temperature offsets, schedules, and energy monitoring via Bluetooth Low Energy.
slug: hass-ensto-ble
codeUrl: https://github.com/ExMacro/hass_ensto_ble
star: 14
version: v0.5.6
lastUpdated: '2026-01-05'
rtos: ''
topics:
- ble
- bluetooth-low-energy
- ensto
- thermostat
isShow: false
createdAt: '2026-01-15'
updatedAt: '2026-01-15'
---

## Overview

Hass Ensto BLE is a custom Home Assistant integration designed to interface with Ensto Bluetooth Low Energy (BLE) thermostats. It allows users to read and write data to various Ensto models, including the ELTE6-BT, ECO16BT, and EPHE5-BT. By bridging these devices into the Home Assistant ecosystem, users can automate their home heating, monitor energy consumption, and manage complex schedules through a unified dashboard.

The project is particularly useful for users running Home Assistant OS on hardware like the Raspberry Pi 4, and it supports multi-device setups using ESP32 Bluetooth proxies to extend range and reliability.

## Key Features

The integration provides comprehensive control over thermostat functionality, mirroring and often extending the capabilities of the official mobile application. 

### Advanced Heating Control
Users can switch between various heating modes depending on their hardware support, such as Floor-based, Room-based, Combination, or direct Power control. For more granular adjustments, the integration supports:
- **Boost Mode**: Temporarily increases temperature or power for a set duration with an automatic countdown.
- **Adaptive Temperature Control**: Toggles the thermostat's internal logic for predictive heating.
- **Vacation Mode**: Allows for scheduled periods of reduced energy consumption with specific start and end times.

### Energy and Environment Monitoring
One of the standout features is the ability to track energy usage. By configuring the thermostat's heating power rating (e.g., 900W), the integration can calculate real-time power consumption and provide historical data, including on/off ratios for the last 24 hours, 7 days, and 12 months. It also tracks hourly temperature history for both floor and room sensors.

### Scheduling and Calibration
The integration supports full calendar management. Users can read and write weekly schedules (up to six programs per day) directly to the device memory. Additionally, it provides tools for room sensor calibration and floor sensor type selection (specifically for ECO16 models) to ensure accurate temperature readings.

## Technical Implementation

As a Home Assistant custom component, Hass Ensto BLE leverages the Home Assistant Bluetooth stack. It is designed to work seamlessly with the `Generic Thermostat` helper in Home Assistant, allowing the thermostat to act as a climate entity. 

For devices with weak internal Real-Time Clock (RTC) batteries, the integration includes a dedicated service, `set_device_time`, to synchronize the thermostat's internal clock with Home Assistant. This ensures that scheduled events and energy logs remain accurate even if the hardware's backup battery fails.

## Getting Started

The integration is typically installed via HACS (Home Assistant Community Store). Once installed, the pairing process involves putting the thermostat into pairing mode via its physical BLE reset button. 

In some environments, particularly those with strict Bluetooth security, users may need to use `bluetoothctl` in the terminal to manually trust and pair the device MAC address before the integration can establish a stable connection. Once paired, the thermostat's entities—ranging from temperature sensors to configuration switches—become available for use in automations and Lovelace dashboards.
