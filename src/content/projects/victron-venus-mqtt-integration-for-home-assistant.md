---
title: Victron Venus MQTT Integration for Home Assistant
summary: A Home Assistant integration that connects to Victron Energy devices using
  MQTT, providing real-time monitoring and control of inverters, solar chargers, and
  battery systems. It supports auto-discovery via SSDP and provides over 300 entities
  for comprehensive system management.
slug: victron-venus-mqtt-integration-for-home-assistant
codeUrl: https://github.com/tomer-w/ha-victron-mqtt
siteUrl: https://tomer-w.github.io/victron_mqtt/
star: 124
version: v2026.1.2
lastUpdated: '2026-01-27'
rtos: ''
topics:
- home-assistant
- integration
- mqtt
- victron
- victron-venus
- victronenergy
isShow: true
createdAt: '2026-01-29'
updatedAt: '2026-01-29'
---

## Overview

The Victron Venus MQTT Integration for Home Assistant provides a robust bridge between Victron Energy's power management systems and the Home Assistant ecosystem. By leveraging the MQTT protocol, this integration enables real-time monitoring and bidirectional control of Victron hardware, including Cerbo GX communication centers, inverters, solar chargers, EV chargers, and battery management systems (BMS).

This project is particularly valuable for users in marine, RV, and off-grid environments who require detailed insights into their energy production and consumption. It transforms raw data from the Victron Venus OS into over 300 Home Assistant entities, allowing for complex automation and high-fidelity dashboards.

## Key Features

The integration is designed for ease of use while maintaining deep technical capabilities. Key features include:

- **Auto-Discovery**: Uses SSDP to automatically find Victron devices like the Cerbo GX on the local network.
- **Comprehensive Sensor Data**: Monitors battery metrics (voltage, current, SoC, temperature), solar/PV yield, grid status, and inverter performance.
- **Two-Way Control**: Allows users to change inverter modes (On, Off, Charger Only), adjust EV charger current limits, and set charger current constraints directly from the Home Assistant UI.
- **Multi-Phase Support**: Handles complex electrical installations with support for multi-phase systems.
- **Security**: Supports SSL/TLS and authentication for secure communication with the Victron device.

## Technical Architecture

The integration functions as a Home Assistant `custom_component` that communicates with the Victron Venus OS MQTT broker. Venus OS (the firmware running on Victron GX devices) publishes system data to specific MQTT topics. This integration subscribes to those topics and maps them to Home Assistant sensor, switch, and number entities.

For advanced users, the project supports a **Bridged Configuration**. This setup involves using a local Mosquitto broker on the Home Assistant host to bridge topics from the Victron device. This reduces the processing load on the Venus device and provides a more stable connection in environments with limited network bandwidth.

## Supported Entities

The integration provides an extensive list of entities derived from the Victron system. These include:
- **Battery Metrics**: Voltage, current, power, temperature, state of charge (SoC), and state of health (SoH).
- **Solar Chargers**: PV voltage, current, power, and daily yield.
- **Inverters/Chargers**: Input/output power, frequency, and operational state.
- **System Alarms**: Monitoring for cell imbalance, high/low voltage, and temperature warnings.

## Getting Started

The recommended installation method is via HACS (Home Assistant Community Store), which simplifies the update process. Once installed, the integration can often be configured via automatic discovery. If manual configuration is required, users simply provide the IP address or hostname of their Victron device (e.g., `venus.local`) and the appropriate MQTT port (1883 for unsecured or 8883 for SSL).

For users in bandwidth-constrained environments, such as marine vessels using satellite links, the project includes a specialized shell script (`update_integration.sh`) to perform manual updates with minimal data overhead.

## Community and Documentation

The project is an evolution of original code submitted to Home Assistant core, now maintained as a community-driven custom integration. Detailed documentation for all 300+ supported entities is maintained via a dedicated documentation site, and the core logic is driven by the `victron_mqtt` module, which is designed for easy extensibility by the community.
