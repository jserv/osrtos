---
title: Growatt Modbus Integration for Home Assistant
summary: A native Home Assistant integration for Growatt solar inverters using direct
  Modbus RTU/TCP communication. It provides real-time monitoring of PV strings, battery
  status, and energy flow without cloud dependency. Features automatic model detection
  via Device Type Codes (DTC) and supports a wide range of residential inverter models.
slug: growatt-modbus-integration-for-home-assistant
codeUrl: https://github.com/0xAHA/Growatt_ModbusTCP
star: 15
version: v0.1.2
lastUpdated: '2026-01-04'
rtos: ''
topics:
- growatt
- inverter
- modbus
- rs485
- solar
isShow: false
createdAt: '2026-01-13'
updatedAt: '2026-01-13'
---

## Overview

The Growatt Modbus Integration for Home Assistant provides a robust, local-only solution for monitoring and managing Growatt solar inverters. By bypassing cloud services and communicating directly via Modbus RTU or TCP, this integration ensures real-time data availability and privacy. It is designed specifically for residential and small commercial systems ranging from 3kW to 25kW, offering deep insights into energy production, storage, and consumption.

## Protocol Support and Auto-Detection

One of the standout features of this project is its sophisticated handling of Growatt's communication protocols. It primarily utilizes the **Growatt VPP Protocol V2.01**, which allows for automatic model detection through Device Type Codes (DTC). This eliminates the need for manual configuration for newer inverters. For older hardware, the integration includes fallback support for legacy protocols (V1.39 and V3.05) and employs a multi-step detection process that includes register probing to identify the specific inverter model.

## Comprehensive Sensor Suite

The integration exposes a wide array of sensors based on the inverter's hardware capabilities. These are organized into logical devices within Home Assistant:

- **Solar Input**: Individual PV string voltage, current, and power.
- **AC Output**: Grid voltage, frequency, and power for both single-phase and three-phase models.
- **Battery Management**: For hybrid models (like SPH or TL-XH), it monitors SOC, voltage, charge/discharge power, and temperature.
- **Energy Tracking**: Daily and lifetime totals for production, export, and consumption, fully compatible with the Home Assistant Energy Dashboard.
- **Diagnostics**: Internal temperatures (IPM, Boost, Inverter), fault codes, and derating status.

## Hardware and Connectivity

To bridge the gap between the inverter's RS485 port and Home Assistant, the project supports various RS485-to-TCP/WiFi adapters such as the Waveshare RS485-to-ETH, USR-W630, or EW11. It handles the nuances of Modbus communication, including the specific sign conventions used by Growatt (IEC 61850 standard) versus the consumer-friendly conventions expected by Home Assistant. A built-in "Invert Grid Power" option and an automatic orientation detection service help users align their data with Home Assistant's power flow visualizations.

## Built-in Emulator and Diagnostics

For developers and users without immediate access to hardware, the repository includes a sophisticated **Growatt Inverter Emulator**. This Python-based tool can simulate various inverter models, solar generation cycles, and battery behaviors. It serves as a Modbus TCP server, allowing users to test their Home Assistant configurations in a virtual environment. Additionally, a Universal Register Scanner service is provided to help users diagnose connection issues or identify unknown inverter models by dumping register ranges to CSV files.

## Night-Time Reliability

Unlike many cloud-based integrations that show sensors as "unavailable" when the sun goes down and the inverter powers off, this integration handles night-time behavior gracefully. It retains the last known values or defaults to zero where appropriate, ensuring that automations and dashboards remain functional and visually consistent throughout the 24-hour cycle.
