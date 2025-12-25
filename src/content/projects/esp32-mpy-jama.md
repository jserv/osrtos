---
title: ESP32 MPY-Jama
summary: ESP32 MPY-Jama is a cross-platform desktop management tool and IDE designed
  for Espressif ESP32 microcontrollers running MicroPython. It provides real-time
  system dashboards, a file manager, terminal access, and a suite of pre-configured
  'Jama Funcs' for rapid hardware testing and deployment.
codeUrl: https://github.com/jczic/ESP32-MPY-Jama
siteUrl: https://github.com/jczic/ESP32-MPY-Jama
isShow: false
rtos: ''
libraries:
- micropython
topics:
- esp32
- ide
- macos
- micropython
- repl
- serial
- windows
- esptool
- firmware
- flash
- mip
- pypi
- python
- app
- linux
- mac
- wifi
- ethernet
- sdcard
- boot
---

Developing for the ESP32 with MicroPython often involves juggling multiple tools for flashing, coding, and monitoring. **ESP32 MPY-Jama** aims to consolidate this workflow into a single, user-friendly graphical interface. Built by Jean-Christophe Bos, this cross-platform tool works across MacOS, Windows, and Linux, providing a lightweight environment that handles everything from initial firmware flashing to real-time hardware debugging.

## A Comprehensive Dashboard for IoT Development

One of the standout features of ESP32 MPY-Jama is its real-time system dashboard. Developers can monitor the MCU frequency, check the status of specific GPIOs, and view flash memory partitions at a glance. The tool also includes a dedicated networks dashboard, allowing users to configure Wi-Fi and Ethernet interfaces, set up Access Points, and even manage Bluetooth Low Energy (BLE) states with just a few clicks. This visual approach to network configuration significantly lowers the barrier to entry for complex IoT connectivity tasks.

## The Integrated IDE and File Manager

At the heart of the application is a lightweight IDE designed specifically for MicroPython. It features a code editor with standard shortcuts (save, undo, search) and a built-in terminal that maintains command history. The IDE is tightly integrated with a file manager that supports both the internal flash memory of the ESP32 and external SD cards. This makes transferring scripts, managing libraries, and organizing project assets straightforward. For hardware enthusiasts, the inclusion of interactive pinout diagrams for popular ESP32 boards is a thoughtful touch that prevents the constant need to refer to external documentation.

## Rapid Prototyping with Jama Funcs

Perhaps the most unique aspect of the project is the concept of **Jama Funcs**. These are small, dedicated MicroPython functions that run on the device to perform specific tasks. The software comes pre-loaded with a variety of these functions, including:

- **Sensor Scanning**: 1-Wire device scanning, I2C slave detection, and BLE scanning.
- **Hardware Testing**: ADC/DAC readers, PWM controllers for servos, and UART bus testers.
- **Peripheral Control**: Drivers for NeoPixel and DotStar RGB strips, as well as KT403A MP3 players.
- **System Utilities**: NTP time synchronization and memory allocation checks.

Users can configure the parameters for these functions directly within the GUI before execution, making it incredibly fast to verify that external components are wired correctly and functioning as expected.

## Technical Architecture and Setup

ESP32 MPY-Jama is built using Python and leverages `pywebview` to render its graphical interface. It communicates with the ESP32 via `pyserial` and utilizes the standard `esptool` for firmware operations like flashing new binary images or erasing the chip. 

To run the application from source, you will need Python installed along with several dependencies. On Linux (Ubuntu), the setup involves installing system-level libraries for web rendering and then setting up a virtual environment:

```bash
# Install system dependencies
sudo apt install libcairo2-dev libgirepository1.0-dev python3-pyqt5 python3-pyqt5.qtwebengine

# Initialize and activate venv
python3 -m venv venv
. venv/bin/activate

# Install Python requirements
pip3 install pyserial pywebview[qt] pycairo PyGObject

# Run the app
python3 src/app.py
```

For those who prefer a standalone experience, the project includes a `create_binary.sh` script to package the application into a single executable using PyInstaller. Whether you are a beginner looking for an easy way to start with MicroPython or an experienced developer needing a quick tool for field testing, ESP32 MPY-Jama provides a robust, all-in-one solution for the ESP32 ecosystem.
