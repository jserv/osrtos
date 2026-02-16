---
title: 'pyespargos: Python Client Library for ESPARGOS WiFi Channel Sounder'
summary: A Python library and application framework for the ESPARGOS WiFi channel
  sounder, a phase-synchronous antenna array built from ESP32 microcontrollers. It
  facilitates real-time Channel State Information (CSI) extraction, multi-board calibration,
  and advanced spatial sensing applications like Angle of Arrival (AoA) estimation.
slug: pyespargos-python-client-library-for-espargos-wifi-channel-sounder
codeUrl: https://github.com/ESPARGOS/pyespargos
siteUrl: https://espargos.net/
star: 882
lastUpdated: '2026-02-15'
rtos: ''
topics:
- angle-of-arrival
- channel-state-information
- csi
- esp32
- music-algorithm
- python
- wifi
isShow: true
createdAt: '2026-02-16'
updatedAt: '2026-02-16'
---

## Overview

**pyespargos** is the primary Python library and demonstration suite for the ESPARGOS WiFi channel sounder. ESPARGOS is a sophisticated, real-time-capable hardware platform designed for WiFi sensing research and deployment. It features a phase-synchronous 2 × 4 antenna array constructed from Espressif ESP32 chips. By maintaining phase synchronicity across multiple receivers, the system allows researchers to perform advanced signal processing tasks such as spatial spectrum analysis and localization.

The library provides the necessary abstractions to interface with the hardware, manage data streams, and process raw Channel State Information (CSI). It is designed to be flexible, supporting both single-board setups and large-scale combined arrays consisting of multiple ESPARGOS units.

## Key Capabilities and WiFi Sensing

At its core, pyespargos extracts CSI from 802.11g/n/ax frames. Because the ESPARGOS hardware operates in a passive, promiscuous mode, it can capture and analyze WiFi frames from any nearby transmitter as long as they share the same channel. The library supports several CSI preamble formats:

- **L-LTF (Legacy Long Training Field):** Standard in 802.11g/n frames, providing 52 subcarriers.
- **HT20 (High Throughput 20MHz):** Found in 802.11n frames, providing 56 subcarriers.
- **HT40 (High Throughput 40MHz):** Utilizes channel bonding to provide 114 subcarriers for higher resolution sensing.

To handle the inherent noise in individual WiFi packets, pyespargos implements a **CSI Backlog** system. This functionality acts as a ring buffer, caching the last N packets to allow for temporal averaging and filtering, which significantly improves the reliability of the resulting spatial measurements.

## Technical Architecture

The communication between the Python client and the ESPARGOS hardware is handled via a hybrid API. Control commands, such as configuration and calibration requests, are issued over HTTP. For the high-throughput requirements of CSI streaming, the system prefers **UDP** to minimize latency, with a **WebSocket** fallback for environments with restrictive firewalls.

One of the most critical technical challenges in multi-antenna sensing is phase synchronization. ESPARGOS solves this by clocking all ESP32 chips from a shared 40MHz reference clock. However, to resolve PLL phase ambiguity, the system uses a known calibration signal distributed over PCB traces. The `pyespargos` library automates this complex calibration process with simple API calls, ensuring that the local oscillators across all antennas are perfectly aligned.

## Multi-Board Integration

For applications requiring higher spatial resolution, pyespargos supports combining multiple hardware units into a single logical antenna array. The library includes specialized classes for multi-board phase calibration, accounting for differences in cable lengths and signal velocity factors. This allows for the creation of massive virtual arrays (e.g., 8 × 4 or larger) that function as a single synchronized receiver.

## Demo Applications and Framework

The repository includes a comprehensive set of demo applications built on a common PyQt6 and QML framework. These demos serve as both testing tools and reference implementations for custom development:

- **MUSIC Spatial Spectrum:** Implements the MUltiple SIgnal Classification algorithm to estimate the Angle of Arrival (AoA) of incoming signals.
- **Instantaneous CSI:** Provides real-time visualization of the channel transfer function in both frequency and time domains.
- **Azimuth-Delay Diagrams:** Uses beamspace processing to generate 2D diagrams (requires compiled shaders).
- **Polarization Visualization:** Analyzes signal polarization using constellation diagrams and ellipses.

## Getting Started

Developers can integrate ESPARGOS into their own projects by using the `espargos.Pool` and `espargos.Board` abstractions. A typical workflow involves initializing a pool of boards, starting the data stream, performing a quick calibration, and then accessing the CSI data through the backlog system. The library requires Python 3.11 or newer and relies on NumPy for high-performance numerical processing and WebSockets for hardware communication.
