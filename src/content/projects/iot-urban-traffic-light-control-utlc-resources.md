---
title: IoT Urban Traffic Light Control (UTLC) Resources
summary: A collection of formal verification models for an IoT-based Urban Traffic
  Light Control (UTLC) system. These Uppaal models simulate the interaction between
  traffic light controllers, slave units, remote triggers, and cloud-based management
  systems to verify real-time behavior and safety properties.
slug: iot-urban-traffic-light-control-utlc-resources
codeUrl: https://github.com/IoT-UTLC/Resources
star: 0
lastUpdated: '2019-01-13'
rtos: ''
topics:
- 6lowpan
- contiki-os
- iot
- mqtt
- qos
- traffic-light-controller
- zolertia
isShow: false
createdAt: '2026-01-04'
updatedAt: '2026-01-04'
---

## Overview

The IoT-UTLC Resources repository provides a set of formal verification models designed for the Uppaal model checker. These models represent an Urban Traffic Light Control (UTLC) system integrated with IoT capabilities, allowing for the simulation and verification of complex real-time interactions between physical traffic infrastructure and cloud-based management services.

Formal modeling is a critical step in the development of safety-critical embedded systems like traffic controllers. By using Uppaal, developers can verify that the system logic adheres to specific safety requirements, such as ensuring that conflicting directions never show green simultaneously and that the system remains free from deadlocks.

## System Architecture

The models within this repository define a multi-layered architecture that captures the various components of a modern smart city traffic system:

### Traffic Light Controllers
Each intersection is managed by a controller template (`TemplateTrafLight`). These models handle the standard state transitions between Red, Yellow, and Green lights. The logic includes timing constraints (using Uppaal clocks) to ensure that lights remain in specific states for the required duration (e.g., a 60-second cycle or a 3-second yellow transition).

### Master-Slave Configuration
The system distinguishes between master controllers and slave units (`TrafficLightSlave`). This reflects real-world hardware setups where a primary controller synchronizes multiple signal heads at an intersection via dedicated signaling channels like `slaveAG` (Slave A Green) or `slaveAR` (Slave A Red).

### Cloud and Remote Interaction
A unique aspect of these models is the inclusion of IoT connectivity. The `Cloud` and `Cloud2` templates model a remote backend that receives requests (`cReq`) and sends confirmations (`confirm`). This allows for the verification of scenarios where traffic patterns might be adjusted remotely or where the system must report its status to a central management hub. Additionally, a `Remote` template simulates external triggers, such as pedestrian touch buttons or emergency vehicle overrides.

## Technical Implementation

The models are provided in XML format compatible with Uppaal 4.1 or later. They utilize several advanced modeling features:

- **Clocks**: Local clocks (e.g., `clock x`) manage the precise timing of signal phases.
- **Channels**: Synchronous communication between the Controller, Cloud, and Slaves is handled via channels and broadcast channels.
- **Invariants**: Locations are decorated with invariants (e.g., `x <= 60`) to enforce progress and timing accuracy.
- **Guard Conditions**: Transitions are protected by logical guards that check the state of global variables like `lightA`, `lightB`, and `inCycle`.

## Verification Queries

The repository includes predefined verification queries to test the robustness of the system. For example, the query `A[] not deadlock` is used to formally prove that the traffic light system will never enter a state where no further transitions are possible, ensuring continuous operation in a real-world deployment.
