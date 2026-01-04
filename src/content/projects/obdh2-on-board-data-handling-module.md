---
title: OBDH2 On-Board Data Handling Module
summary: The OBDH2 (On-Board Data Handling 2.0) is the central on-board computer module
  for the FloripaSat-2 CubeSat mission. It manages data flow between subsystems, processes
  ground commands, and handles telemetry storage and transmission for the satellite.
slug: obdh2-on-board-data-handling-module
codeUrl: https://github.com/spacelab-ufsc/obdh2
siteUrl: https://spacelab.ufsc.br/en/home/
star: 27
version: v0.10
lastUpdated: '2022-11-03'
rtos: ''
topics:
- cubesat
- flight-software
- freertos
- obdh
- onboard-computer
- satellite
isShow: false
createdAt: '2026-01-04'
updatedAt: '2026-01-04'
---

The SpaceLab OBDH2 (On-Board Data Handling 2.0) serves as the primary intelligence for the FloripaSat-2 CubeSat mission. Developed by SpaceLab at the Federal University of Santa Catarina (UFSC), this module is designed to orchestrate the complex interactions between various satellite subsystems and the ground segment.

### Mission Role and Functionality

As the central processing unit of the satellite, the OBDH2 is responsible for synchronizing actions and managing the data flow between modules such as the Electrical Power System (EPS) and various scientific payloads. Its core duties include:

- **Data Management**: Packing generated data into standardized frames for transmission.
- **Communication**: Interfacing with the TTC (Telemetry, Tracking, and Command) module to receive commands from Earth and transmit telemetry back.
- **Storage**: Utilizing non-volatile memory to store data for later retrieval, ensuring mission data is preserved even during communication gaps.
- **Command Processing**: Redirecting commands received from the radio transceivers to the appropriate internal modules or executing them directly.

### Open Source Hardware and Software

The project is notable for its commitment to open-source principles, utilizing a triple-licensing scheme to ensure accessibility for the global space community:

- **Firmware**: Licensed under the GNU General Public License v3.0.
- **Hardware**: Design files are provided under the CERN Open Hardware License v2.0.
- **Documentation**: Technical guides and manuals are available under Creative Commons BY-SA 4.0.

This approach allows other space research organizations and hobbyists to study, modify, and improve upon the design, fostering a collaborative environment for small satellite development.

### Technical Organization

The repository is structured to provide a complete view of the module's lifecycle, from initial hardware design to the final firmware implementation:

- **Firmware**: Contains the source code and configuration files necessary to run the on-board computer.
- **Hardware**: Includes the PCB designs, schematics, and manufacturing outputs.
- **Documentation**: Comprehensive technical manuals, datasheets, and user guides to assist in integration and operation.

The OBDH2 represents a significant step forward from its predecessor, offering refined data handling capabilities and robust integration for modern CubeSat missions. It is a critical component of the FloripaSat-2 mission, ensuring that the satellite remains responsive to ground control while efficiently managing its scientific and operational data.
