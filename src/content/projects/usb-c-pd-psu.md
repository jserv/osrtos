---
title: USB-C PD PSU
summary: A high-power bidirectional buck-boost DC-DC converter supporting 240W USB
  PD EPR (48V 5A). It features a TI BQ25758A controller and WCH CH32X035 MCU, offering
  wide voltage ranges from 3.3V to 60V and up to 20A output current.
slug: usb-c-pd-psu
codeUrl: https://github.com/LeoDJ/USB-C_PD_PSU
star: 19
version: v1.0
lastUpdated: '2025-07-01'
rtos: ''
topics:
- bq25758a
- buck-boost-converter
- ch32
- ch32v
- ch32x035
- charger
- dcdc
- power-electronics
- st7789
- usb-c
- usb-pd
- usb-pd-epr
- wch
isShow: false
createdAt: '2026-01-17'
updatedAt: '2026-01-17'
---

## Overview

The USB-C PD PSU is an ambitious open-source hardware project designed to bridge the gap between high-power DC-DC conversion and the latest USB Power Delivery standards. At its core, it is a bidirectional buck-boost converter capable of handling the USB PD Extended Power Range (EPR) specification, which allows for up to 48V at 5A (240W) over a Type-C connection.

Beyond just acting as a USB power source, the device is designed for versatility, supporting an input range of 5-60V and an output range of 3.3-60V. With a theoretical maximum current of 20A, it serves as a powerful tool for bench power supply applications, battery charging, and high-power mobile electronics development.

## Hardware Architecture

The project utilizes a sophisticated hardware stack to manage high-power conversion and PD communication:

- **DC-DC Controller**: The TI BQ25758A acts as the primary bidirectional buck-boost controller, managing the power flow and constant-current regulation.
- **USB PD Controller**: A WCH CH32X035 RISC-V microcontroller is tasked with handling the USB Type-C PD protocol negotiation.
- **Protection**: To ensure safety at high voltages, the CC and USB data lines are protected up to 63V using the TI TPD4S480 protection IC.
- **HMI/UI Section**: The PCB includes a separable section dedicated to the user interface, featuring a 1.47" IPS display, a second CH32X035 MCU for UI logic, an encoder, and button controls.

## Design and Connectivity

The physical design is optimized for both high current and compact size. The PCB measures 50x50mm in its full configuration but can be reduced to 50x23mm if the HMI section is removed. For power connectivity, the board uses XT30 connectors, which are well-suited for the high current demands of the converter.

One unique aspect of the design is the separable "HMI" part of the PCB. It is designed to be cut away using a rotary tool, allowing the power stage to function independently or be integrated into tighter enclosures. The board also features a 1.27mm expansion header providing GPIOs and RS485 communication, enabling potential integration with Battery Management Systems (BMS) or other external controllers.

## Technical Implementation

The hardware is designed as an 8-layer PCB to handle the thermal and current requirements of a 20A converter. While the project is currently a work-in-progress, the design considerations reflect a focus on high-density power electronics. The firmware for the CH32X035 is intended to manage the complex PD 3.1 EPR state machine, while the secondary MCU handles the graphical interface on the IPS display.

## Current Status

As a WIP (Work In Progress) project, the USB-C PD PSU is currently in the hardware validation and firmware development phase. The developer notes that while the hardware layout is largely defined, the PD firmware is still being written to fully realize the 240W EPR capabilities. It is a project aimed at advanced users and developers interested in high-power USB-C applications and RISC-V based embedded control.
