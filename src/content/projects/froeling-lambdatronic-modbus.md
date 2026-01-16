---
title: Froeling Lambdatronic Modbus
summary: A Home Assistant integration for Fröling Lambdatronic heating systems using
  the Modbus protocol. It enables real-time monitoring of boiler sensors, configuration
  of writable parameters, and mode control via a Modbus TCP bridge.
slug: froeling-lambdatronic-modbus
codeUrl: https://github.com/GyroGearl00se/ha_froeling_lambdatronic_modbus
star: 15
version: v2.0.5
lastUpdated: '2026-01-15'
rtos: ''
topics:
- froeling
- hacs
- home-assistant
- homeassistant
- lambdatronic
- modbus
isShow: false
createdAt: '2026-01-15'
updatedAt: '2026-01-15'
---

## Overview

The Froeling Lambdatronic Modbus integration brings advanced monitoring and control of Fröling heating systems into the Home Assistant ecosystem. By leveraging the Modbus protocol, this project allows users to interface directly with their boiler's control unit, extracting high-fidelity data that was previously confined to the physical unit's display or proprietary interfaces.

This integration is designed to work with Fröling systems that support Modbus RTU, typically requiring a Serial-to-Ethernet bridge to translate the boiler's RS232/RS485 signals into Modbus TCP packets that Home Assistant can consume over a local network.

## Technical Implementation and Hardware

To establish communication, the system utilizes the COM2 interface on the Fröling Lambdatronic board. The integration is typically paired with hardware such as the Waveshare RS232/RS485 to Ethernet Converter. This setup creates a transparent bridge between the industrial serial protocol used by the boiler and the IP-based network environment of a modern smart home.

On the boiler side, specific configuration is required to enable the Modbus RTU protocol. This involves accessing service-level settings (using the -7 service code) to activate the 2014 Modbus protocol and assign COM2 as the primary interface. Once configured, the boiler acts as a Modbus slave, responding to polls from the Home Assistant integration.

## Key Features and Data Entities

The integration exposes a wide array of entities, categorized by their function within the heating system:

- **Real-time Sensors**: Users can monitor boiler temperatures, exhaust gas temperatures, pump speeds, and fuel consumption. It also tracks complex states like the 'Kesselzustand' (boiler state) and 'Anlagenzustand' (system state).
- **Writable Parameters**: Through 'Number' entities, users can adjust setpoints such as the target boiler temperature directly from the Home Assistant UI. These entities are configured with appropriate step sizes and limits to ensure safe operation.
- **Mode Control**: 'Select' entities allow for the switching of heating circuit operating modes, including Automatic, Extra Heating, Setback, and Party modes.
- **Diagnostics**: The integration provides access to the boiler's internal error buffers, allowing for remote inspection of the last 20 system errors or warnings.

## System Compatibility

The integration is modular, allowing users to select only the components installed on their specific unit during the setup process. Supported modules include:
- Main Boiler (Kessel) and Second Boiler (Zweitkessel)
- DHW Boilers and Heating Circuits (HK01/HK02)
- Buffer Tanks (Puffer)
- Feed Systems (Austragung)
- Circulation Pumps

By integrating these components into Home Assistant, users can create advanced automations, such as adjusting heating based on room occupancy or tracking pellet consumption over time using the Home Assistant Energy Dashboard. For visualization, the project is often paired with a dedicated Lovelace card designed to mimic the look and feel of the original Fröling interface.
