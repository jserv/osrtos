---
title: BLE LED Display Toolkit
summary: A Python-based toolkit for controlling BK-Light ACT1026 32x32 RGB LED matrices
  via Bluetooth Low Energy (BLE). It provides a high-level interface for rendering
  text, images, and animations across single or multi-panel layouts using the Bleak
  and Pillow libraries.
slug: ble-led-display-toolkit
codeUrl: https://github.com/Pupariaa/Bk-Light-AppBypass
star: 51
lastUpdated: '2026-01-11'
rtos: ''
topics:
- 32x32-led
- action
- asyncio
- bk-light
- bleak
- bluetooth-low-energy
- bypass-app
- bypassing
- graphics
- hack
- hardware-control
- iot
- led-matrix
- pixel-art
- pixel-board
- product
- python3
- without
- without-app
isShow: false
createdAt: '2026-01-19'
updatedAt: '2026-01-19'
---

## Overview

The BLE LED Display Toolkit is a specialized utility designed to drive the BK-Light ACT1026, a 32×32 RGB LED matrix, over Bluetooth Low Energy. By reverse-engineering the command sequences from original device logs, this project allows developers to bypass proprietary apps and control their hardware directly from a PC or embedded host running Python. 

The toolkit is built with flexibility in mind, moving away from hardcoded logic to a configuration-driven approach. Through a central YAML configuration, users can define complex multi-panel layouts, runtime modes, and visual presets without modifying the underlying source code.

## Technical Capabilities

At its core, the project handles the complexities of BLE communication with embedded display hardware. It manages the GATT/ATT transport layer, including MTU negotiation and L2CAP fragmentation, which is essential for sending large image payloads to the matrix. The software is designed to work with the BK-Light firmware (advertising as `LED_BLE_*`) and supports advanced BLE features such as Write-with-response handling for fragmented payloads.

### Key Features
- **Multi-Panel Orchestration**: Supports tiling multiple 32x32 panels into a larger logical display. The `PanelManager` automatically handles image slicing and distribution across different BLE MAC addresses.
- **Dynamic Rendering**: Uses the Pillow library to render text with antialiasing, process images (fit/cover/scale), and generate animations.
- **Robust Transport**: The `BleDisplaySession` includes features for handshake management, ACK tracking, brightness control, and automatic reconnection if a panel loses power or signal.
- **Preset System**: Highly configurable presets for different modes like clocks, scrolling marquees, and image signage.

## Project Architecture

The repository is organized into several functional modules:
- `display_session.py`: Manages the low-level BLE transport and hardware-specific protocols.
- `panel_manager.py`: Acts as a high-level orchestrator for single or multi-panel setups.
- `production.py`: The main entry point for running the display in a continuous mode based on the YAML configuration.
- `scripts/`: A collection of standalone tools for specific tasks like scanning for devices on macOS, listing available fonts, or running smoke tests.

## Getting Started

To use the toolkit, you define your hardware setup in `config.yaml`. For a single panel, you simply provide the BLE MAC address. For more complex setups, you can define a grid:

```yaml
panels:
  tile_width: 32
  tile_height: 32
  layout:
    columns: 2
    rows: 1
  list:
    - name: left
      address: "F0:27:3C:1A:8B:C3"
      grid_x: 0
      grid_y: 0
    - name: right
      address: "F0:27:3C:1A:8B:C4"
      grid_x: 1
      grid_y: 0
```

Once configured, you can launch the production script to start the display. Developers looking to build custom effects can use the `PanelManager` API to send raw Pillow images directly to the display cluster:

```python
async with PanelManager(load_config()) as manager:
    # 'image' is a Pillow Image object sized to the total grid dimensions
    await manager.send_image(image)
```

## Hardware Requirements

The toolkit requires a Bluetooth adapter with BLE 4.0 or newer support. It specifically targets the Central role (GATT client) and requires a system capable of LE 1M PHY. While discovery works on most platforms, connection by MAC address is best supported on Linux and Windows due to CoreBluetooth limitations on macOS.
