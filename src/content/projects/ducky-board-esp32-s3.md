---
title: Ducky Board - ESP32-S3
summary: A custom breakout board for the ESP32-S3 microcontroller featuring native
  USB-C support and an integrated Li-Ion battery charger. Designed in KiCad 9, it
  provides a compact form factor with all essential GPIOs accessible for prototyping
  and DIY electronics.
slug: ducky-board-esp32-s3
codeUrl: https://github.com/MakersFunDuck/Ducky-Board-ESP32-S3
star: 77
lastUpdated: '2025-10-14'
rtos: ''
topics:
- breakoutboard
- esp32
- esp32-arduino
- esp32-s3
isShow: false
createdAt: '2026-01-12'
updatedAt: '2026-01-12'
---

## A Versatile Breakout for the ESP32-S3

The Ducky Board is a custom-engineered breakout board designed to unlock the full potential of the ESP32-S3 microcontroller. Created using the KiCad 9 suite, this project provides a robust hardware foundation for developers looking for a compact, reliable, and feature-rich development platform for their firmware projects.

## Integrated Power and Charging

One of the standout features of the Ducky Board is its integrated power management system. It includes a native USB-C port that serves a dual purpose: providing a modern interface for firmware flashing and acting as a power input. 

To support portable applications, the board integrates a dedicated Li-Ion battery charging circuit. Utilizing the MCP73831-2-OT charge management controller, the board can safely charge single-cell Li-Ion or LiPo batteries. The design includes status indicators to provide visual feedback on the charging process, making it an excellent choice for building battery-powered IoT devices and wearables.

## Designed for Prototyping

The Ducky Board is designed with a compact breakout philosophy. Despite its small footprint, it ensures that all key GPIOs from the ESP32-S3 chip are broken out to accessible pins. This makes it an excellent choice for breadboarding or integrating into larger DIY projects where space is at a premium but connectivity is essential.

## Professional Design Standards

The project repository is comprehensive, offering more than just a simple schematic. It includes everything needed for manufacturing and modification:

- **KiCad 9 Source Files**: Full access to schematics and PCB layout files, allowing for easy customization.
- **Manufacturing Assets**: Ready-to-use Gerber files and production-ready PDFs for both the schematic and the PCB layout.
- **Optimized Part Selection**: Components have been chosen with an eye toward ease of manufacturing and general availability, ensuring that the board can be easily replicated by hobbyists or small-scale manufacturers.

## Technical Specifications

- **Microcontroller**: ESP32-S3 SoC
- **Connectivity**: USB-C for power and programming
- **Battery Management**: MCP73831-based Li-Ion/LiPo charger
- **Form Factor**: Compact breakout with standard pin headers
- **Design Software**: KiCad 9

Whether you are building a high-performance IoT gateway or a custom peripheral, the Ducky Board provides the essential infrastructure needed to get an ESP32-S3 project off the ground quickly.
