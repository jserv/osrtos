---
title: ShunkoBot
summary: An omnidirectional autonomous robot platform designed for research and education
  in mobile robotics. It utilizes an STM32 microcontroller for low-level control and
  a Raspberry Pi running ROS2 for advanced perception and navigation. The project
  is fully modular, featuring custom hardware, 3D-printed parts, and a Gazebo simulation
  environment.
slug: shunkobot
codeUrl: https://github.com/murcie443/ShunkoBot
star: 20
version: v1.0
lastUpdated: '2025-08-23'
rtos: ''
topics:
- 3d-printing
- docker
- kikad
- mobile-robotics
- modeling-and-simulation
- raspberry-pi-5
- robotic-arm
- ros2
- schematics
- stm32
- uart-bridge
isShow: false
createdAt: '2026-01-12'
updatedAt: '2026-01-12'
---

# ShunkoBot: A Modular Omnidirectional Robotics Platform

ShunkoBot is a sophisticated omnidirectional autonomous robot developed as an academic project by students at the Polytechnic University of Bari. Designed for the Mobile Robotics course in the Automation Engineering Master's program, it serves as a modular, scalable, and replicable platform for research and teaching. The project provides a comprehensive testing ground for advanced perception, planning, and control algorithms in the field of mobile robotics.

## System Architecture and Modularity

The architecture of ShunkoBot is intentionally modular, allowing for independent development and maintenance of its various components. The repository is structured using Git submodules to keep the core code lightweight while providing access to specialized modules:

- **Low-Level Control**: The `ShunkoBot_STM32Code` module contains the firmware for the STM32 microcontroller, which handles real-time motor control and sensor interfacing.
- **Custom Hardware**: The `ShunkoBot_Shield` provides the electrical interface between the STM32 and the robot's actuators and sensors.
- **High-Level Autonomy**: The `ShunkoBot_ROS2` module runs on a Raspberry Pi or a connected PC, providing the software foundation for autonomous navigation, SLAM, and path planning.
- **Simulation**: A dedicated Gazebo simulation environment (`ShunkoBot_GazeboSim`) allows for virtual testing and validation of algorithms before they are deployed on physical hardware.

## Operating Modes

ShunkoBot is designed to be versatile, offering two distinct operating modes:

1.  **Teleoperated Mode**: This mode allows for manual control of the robot and its integrated robotic arm. It is designed to function independently of the Raspberry Pi, relying on the STM32 and a custom RF controller.
2.  **Autonomous Mode**: By leveraging ROS2 on a Raspberry Pi, the robot can perform complex autonomous tasks. While the robotic arm integration in this mode is still in development, the software infrastructure is already in place to support it.

## Hardware and Mechanical Design

The physical robot features an omnidirectional drive system, allowing for high maneuverability in tight spaces. The mechanical design is fully documented through 3D models, making the platform replicable for other researchers. Additionally, the project includes a custom DIY radio controller based on an Arduino, providing a complete end-to-end solution for robot interaction.

## Getting Started with ShunkoBot

Because the project relies heavily on submodules, cloning the repository requires a recursive approach to ensure all components are downloaded:

```bash
git clone --recurse-submodules https://github.com/murcie443/Shunko_Bot
```

For those who have already cloned the main repository, the submodules can be initialized using:

```bash
git submodule update --init --recursive
```

Detailed documentation for each component, including the STM32 firmware and the ROS2 stack, is available within the respective module directories. A full project report is also provided in the `utilities` folder for those seeking a deep dive into the system's design and implementation.

## Research and Educational Impact

ShunkoBot stands as a testament to the power of open-source collaboration in robotics education. By providing a fully integrated stack—from PCB design and 3D modeling to real-time firmware and high-level ROS2 navigation—it offers a holistic view of modern robotic system integration. Whether used for teaching mobile robotics fundamentals or as a base for advanced research in autonomous navigation, ShunkoBot provides a robust and flexible foundation.
