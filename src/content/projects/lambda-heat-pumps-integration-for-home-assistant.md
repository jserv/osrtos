---
title: Lambda Heat Pumps Integration for Home Assistant
summary: A Home Assistant custom integration for monitoring and controlling Lambda
  heat pumps via Modbus/TCP. It features automatic module detection, dynamic entity
  creation, and comprehensive tracking for energy consumption and compressor cycling
  across various operating modes.
slug: lambda-heat-pumps-integration-for-home-assistant
codeUrl: https://github.com/GuidoJeuken-6512/lambda_heat_pumps
siteUrl: https://guidojeuken-6512.github.io/lambda_heat_pumps/
star: 35
version: Release2.2
lastUpdated: '2025-12-25'
rtos: ''
topics:
- home-assistant
- lambda-heatpump
- modbus
isShow: false
createdAt: '2026-01-15'
updatedAt: '2026-01-15'
---

## Overview

The Lambda Heat Pumps integration is a sophisticated Home Assistant custom component designed to interface with Lambda heat pump controllers using the Modbus/TCP protocol. It provides a bridge between industrial-grade HVAC hardware and modern home automation, allowing users to monitor performance, adjust heating curves, and optimize energy consumption based on solar availability.

By leveraging Modbus/TCP, the integration gains direct access to the heat pump's internal registers, enabling real-time data acquisition and control without relying on cloud services. This local-only approach ensures low latency and high reliability for critical home climate systems.

## Key Features and Capabilities

The integration is built with a focus on automation and ease of use, featuring several advanced mechanisms for hardware management:

- **Automatic Module Detection**: The system automatically scans for available hardware modules, including the heat pump units, boilers, buffer tanks, solar thermal systems, and individual heating circuits.
- **Dynamic Entity Creation**: Rather than providing a static list of sensors, the integration creates entities dynamically based on the detected hardware and the specific firmware version of the Lambda controller.
- **Comprehensive Energy Tracking**: It provides detailed energy consumption sensors categorized by operating mode, such as heating, hot water, cooling, and defrost. It supports automatic unit conversion (Wh/kWh/MWh) and smart sensor change detection.
- **Cycling Analysis**: To monitor hardware longevity, the integration tracks compressor starts and cycling counters across various timeframes, including daily, monthly, and yearly totals.
- **Heating Curve Management**: Users can configure heating curve support points (cold, mid, and warm points) directly from Home Assistant. It features bidirectional Modbus synchronization, ensuring that changes made in the UI are reflected in the controller and vice versa.

## Technical Implementation

The integration communicates with the Lambda controller over a standard network connection using Modbus/TCP (defaulting to port 502). A critical aspect of the technical setup is the handling of 32-bit values, which are often split across multiple 16-bit registers. The integration supports configurable register ordering (high-order register first or low-order register first) to ensure compatibility across different Lambda models and firmware versions.

For performance optimization, the integration utilizes a global register cache and batch reading. This significantly reduces Modbus traffic by eliminating duplicate reads across different modules, leading to faster update cycles and reduced load on the controller's communication interface.

## Solar Integration and PV Surplus Control

One of the most powerful features of this integration is the PV Surplus Control. It allows the heat pump to act as a thermal battery by utilizing excess solar power. By writing current PV power data to Modbus Register 102 (E-Manager Actual Power), the heat pump can intelligently adjust its operation to consume energy when it is most abundant and cost-effective.

## Configuration and Setup

Initial setup is handled through the Home Assistant UI, where users provide the host IP, port, and Slave ID. Advanced fine-tuning is available via a `lambda_wp_config.yaml` file, which allows for:
- Customizing energy consumption source sensors.
- Setting cycling offsets for counter adjustments after hardware replacement.
- Configuring specific Modbus register orders for 32-bit sensors.
- Defining room thermostat offsets and factors for external sensor integration.

This integration transforms a Lambda heat pump from a standalone appliance into a fully integrated component of a smart energy management ecosystem.
