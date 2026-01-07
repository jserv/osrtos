---
title: OpenRover Robotic Platform
summary: A modular, open-source 3D-printed robotic platform modeled after NASA's Perseverance
  rover. It employs a distributed control system using Arduino Mega, ESP32-S3, and
  Raspberry Pi Zero 2W, featuring a custom LVGL-based touchscreen interface and a
  Flask-powered web dashboard for remote monitoring.
slug: openrover-robotic-platform
codeUrl: https://github.com/pol-valero/openrover-robotic-platform
star: 2
lastUpdated: '2025-12-30'
rtos: ''
libraries:
- lvgl
- platformio-platformio-core
topics:
- 3d-printing
- arduino
- camera
- dashboard
- esp32
- lvgl
- nrf24l01
- perseverance-rover
- platformio
- raspberry-pi
- remote-control
- robotics
- touchscreen
- wifi
isShow: true
image: /202601/finished_rover_on_desk.webp
createdAt: '2026-01-07'
updatedAt: '2026-01-07'
---

## Overview

The OpenRover project is a sophisticated, open-source robotic platform designed as a functional 3D-printed replica of NASA's Perseverance Mars rover. Developed as a final computer engineering degree project, it serves as a comprehensive educational resource for learning about hardware integration, distributed systems, and embedded software development. Unlike many DIY robotics projects that rely on a single controller, OpenRover utilizes a multi-processor architecture to handle its various complex subsystems, ranging from motor control to high-level web connectivity.

## System Architecture & Modules

The platform is organized into three primary functional modules, each leveraging the strengths of different development boards:

### Central Rover Module
At the heart of the rover is an **Arduino Mega**. This board is responsible for the low-level hardware abstraction, managing the 6-wheel drive system (including 4 steerable wheels), the 4-axis robotic arm, and the tiltable camera head. It also interfaces with environmental sensors to monitor temperature, humidity, pressure, and altitude, while handling radio frequency (RF) communication for remote operation.

### Remote Control & Touchscreen Module
User interaction is handled by a custom-built remote control unit. This module features an **ESP32-S3** dedicated to driving a touchscreen interface designed with **SquareLine Studio** and the **LVGL** library. An auxiliary **Arduino Nano** within the same unit handles the reading of RC channel values, battery monitoring, and RF signal transmission, offloading these real-time tasks from the UI processor.

### Camera & Webserver Module
For high-level telemetry and vision, a **Raspberry Pi Zero 2W** is housed within the rover's head. This board generates its own WiFi network and hosts a **Flask-based** web dashboard. It provides a live video feed from the onboard camera and displays real-time status values, allowing for remote monitoring from any browser-enabled device.

## Key Features

- **Advanced Locomotion:** A 6-wheel drive platform with 4-wheel steering, enabling complex maneuvers like 360º stationary turns.
- **Robotic Articulation:** Includes a 4-axis foldable robotic arm with a functional gripper and a dual-axis rotary head.
- **Sophisticated UI:** A custom embedded touchscreen interface for selecting operation modes (Driving, Arm Control, Head Control) and viewing telemetry.
- **Environmental Monitoring:** Integrated sensors for atmospheric data and battery health for both the rover and the remote.
- **Web Integration:** A dedicated dashboard for video streaming and status monitoring via WiFi.

## Technical Implementation

The software stack is as diverse as the hardware. The microcontrollers (Arduino and ESP32) are programmed using the **PlatformIO** IDE within the **Arduino Framework**. The touchscreen UI leverages the **LVGL** (Light and Versatile Graphics Library) to provide a responsive, modern user experience on the embedded display. On the Raspberry Pi side, Python and Flask are used to bridge the gap between the embedded hardware and web-based user interfaces.

## Build & Extensibility

Building an OpenRover is a significant undertaking, estimated at approximately 140 hours of assembly and wiring, plus roughly 400 hours of 3D printing. The project is designed to be modular and extensible; the author encourages builders to "take it to the next level" by adding computer vision for autonomous navigation, recording robotic arm sequences, or designing custom PCBs to replace the point-to-point wiring. The codebase is distributed across several specialized repositories linked via Git subtrees, ensuring that each module can be developed or improved independently.
