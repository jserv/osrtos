---
title: SankOS
summary: A specialized subsystem of the BathHouseOS project designed for advanced
  sink automation and management. It features water temperature monitoring across
  multiple scales, automatic shutoff timers, and control modules for soap and towel
  dispensers.
slug: sankos
codeUrl: https://github.com/seanpm2001/SankOS
star: 2
lastUpdated: '2022-05-13'
rtos: ''
topics:
- bath-house-os
- bathhouse-os
- bathhouseos
- bathroom
- gpl3
- gplv3
- md
- nesc
- operating-system
- sankos
- sink
- sink-os
- subsystem
- tinyos
- txt
- verilog
isShow: false
createdAt: '2026-01-04'
updatedAt: '2026-01-04'
---

## Overview

SankOS is a dedicated subsystem within the BathHouseOS operating system family, specifically engineered to modernize and automate sink functionality. While the name is a play on "SinkOS" (modified to avoid confusion with synchronization software), its purpose is strictly focused on the embedded control of plumbing fixtures. SankOS is designed to handle the logic required for smart sinks, whether they are located in residential bathrooms, kitchens, or commercial environments.

The project is currently maintained as a "guesthouse" repository, meaning that while it exists as a standalone entity for organizational purposes, the primary development and core logic are often integrated directly into the main BathHouseOS development branch. This architecture allows SankOS to benefit from the broader home automation frameworks provided by the parent project while maintaining a specific focus on sink-related hardware and sensors.

## Key Features and Capabilities

SankOS provides a comprehensive suite of features aimed at improving water efficiency, hygiene, and user experience. The system is designed to interface with various sensors and actuators to provide real-time feedback and automated control.

### Advanced Temperature Monitoring
One of the core components of SankOS is its sophisticated temperature gauge system. Unlike standard mixers, SankOS can independently monitor the temperatures of cold and hot water lines before they are combined. The system provides a combined temperature output and supports a wide array of measurement units, including Celsius, Fahrenheit, Rankine, and Kelvin. Additionally, it features a threshold-based average washing temperature meter, which helps users maintain consistent water heat for specific tasks.

### Automated Hardware Control
To enhance hygiene and resource management, SankOS includes several automation modules:
- **Automatic Turnoff:** A safety and conservation feature that automatically shuts off water flow after a user-defined duration.
- **Dispenser Management:** Integrated logic for enabling or disabling automated soap and towel dispensers. The towel dispenser module is designed to be versatile, supporting paper, cloth, or undefined dispenser types.
- **Flushing Direction:** A specialized feature for changing the flushing direction, likely intended for specific industrial or high-end residential basin designs.

## Technical Implementation

The project structure includes standard build and configuration files such as a `makefile.mk` and `.editorconfig`. Interestingly, the `INSTALL` documentation suggests that the current iteration of the project may be viewed or interacted with as a web-compliant interface. It mentions compliance with WHATWG standards and the use of HTML5 frameworks, suggesting that the user interface for these embedded controls is designed to be cross-platform and accessible via a browser.

From a licensing perspective, the project is released under the GPL (GNU General Public License), emphasizing an open-source approach to home automation. The repository also maintains a strict versioning history for its documentation and snapshots of previous versions in an `OldVersions` directory, ensuring that development progress is well-documented.

## Community and Development

As a part of the @seanpm2001 ecosystem, SankOS follows a specific set of contribution guidelines outlined in its extensive `CONTRIBUTING.md` file. The project emphasizes professional conduct, efficient code (targeting performance even on low-bandwidth connections), and a strict "no-tracking" policy to ensure user privacy. While the project is currently in a development phase where it retreats to its "guesthouse" repository at times, it remains a key piece of the larger BathHouseOS vision for a fully automated and intelligent home environment.
