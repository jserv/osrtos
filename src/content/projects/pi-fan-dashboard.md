---
title: Pi Fan Dashboard
summary: A multi-node monitoring and control system for Raspberry Pi CPU cooling fans
  using PWM. It provides real-time temperature status, historical usage graphs, and
  fan speed regulation for Raspberry Pi 3 and 4 hardware via a responsive web interface.
slug: pi-fan-dashboard
codeUrl: https://github.com/JustASquirrelinAround/pifandashboard
star: 19
version: 1.2.0
lastUpdated: '2025-05-01'
rtos: ''
topics:
- bootstrap
- bootstrap5
- chartjs
- dashboard
- dietpi
- fan-control
- flask
- gpio
- multi-device-monitoring
- pwm-fan
- raspberry-pi
- raspberrypi
- system-monitor
- temperature-monitoring
- web-interface
isShow: false
createdAt: '2026-01-17'
updatedAt: '2026-01-17'
---

## Overview

Pi Fan Dashboard is a comprehensive solution designed to monitor and manage the thermal performance of Raspberry Pi clusters or individual units. By leveraging Pulse Width Modulation (PWM), the system provides granular control over CPU cooling fans, ensuring optimal temperatures while minimizing noise. The project is specifically optimized for the Noctua NF-A4x10 5V PWM fan, though it supports other 4-pin 5V PWM fans compatible with the Raspberry Pi's GPIO header.

The system is designed to run on Raspberry Pi 3B, 3B+, and Raspberry Pi 4 models. It is compatible with both standard Raspberry Pi OS and DietPi, offering a flexible deployment model for different user environments.

## System Architecture

The project is composed of three primary layers that work together to provide a seamless monitoring experience:

- **Fan Control Logic**: A Python-based service that runs locally on the Pi to read CPU temperature and adjust the fan's PWM duty cycle proportionally. This ensures that cooling intensity scales with the workload.
- **Status API**: A Flask-based API that exposes real-time metrics, including CPU temperature and current fan speed, allowing the dashboard to aggregate data from multiple Pis across a network.
- **Web Dashboard**: A centralized frontend built with Bootstrap and Chart.js. It provides a visual overview of all connected Pis, featuring live gauges, memory usage pie charts, and historical line graphs for temperature tracking.

## Key Features

- **Real-Time Monitoring**: View live CPU temperatures and fan speeds for every Pi in your network from a single interface.
- **Historical Data**: Integrated Chart.js support allows users to toggle historical graphs to identify thermal trends over time.
- **Multi-Pi Management**: The dashboard includes a built-in manager to add, edit, or remove Pis from the monitoring list easily.
- **Automated Installation**: A guided shell script handles the complex setup of Nginx, Python dependencies, and systemd services, making it accessible for users of varying technical levels.
- **Visual Status Indicators**: The interface uses color-coded status dots and red shading on charts to immediately alert users if a specific Pi goes offline.

## Hardware and Wiring

The project utilizes a 3-wire connection strategy to interface with the fan. While 4-pin fans are used, only the 5V Power (Yellow), Ground (Black), and PWM Control (Blue) wires are required. The PWM signal is typically routed to Pin 8 (GPIO14). This setup allows the Pi to control the fan speed without needing the Tachometer (Green) wire for basic proportional control.

## Technical Implementation

The software stack relies on Nginx to serve the web interface and act as a reverse proxy for the Python APIs. For users concerned with environment isolation, the installer provides an option to deploy the Python components within a Virtual Environment (venv), which is particularly useful for systems already running other services like Pi-hole. The system uses systemd to ensure that both the fan control logic and the status APIs remain active as background services, automatically restarting upon reboot.
