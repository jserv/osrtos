---
title: 'andino-rs: Rust-based Ecosystem for the Andino Robot'
summary: A Rust-based implementation of the Andino robot ecosystem, providing a hardware
  abstraction layer (HAL) and integration with the dora-rs dataflow framework. It
  supports both physical Raspberry Pi 4B-based robots and MuJoCo simulations, featuring
  differential drive control, teleoperation, and LLM-based navigation.
slug: andino-rs-rust-based-ecosystem-for-the-andino-robot
codeUrl: https://github.com/Ekumen-OS/andino-rs
siteUrl: https://github.com/Ekumen-OS/andino
star: 10
lastUpdated: '2025-08-13'
rtos: ''
topics:
- andino
- diff-drive-robot
- dora
- robotics
- rust
- sensors
- simulation
isShow: false
createdAt: '2026-01-15'
updatedAt: '2026-01-15'
---

## Overview

andino-rs is a comprehensive Rust-based ecosystem designed for the Andino robot, an open-source differential drive platform used for education and low-cost robotics applications. This project serves as the "oxidized" version of the original Andino software, leveraging Rust's safety and performance characteristics to provide a robust hardware abstraction layer (HAL) and seamless integration with modern robotics frameworks.

The project is built around the dora-rs dataflow framework, which allows developers to create complex robotic behaviors by connecting modular nodes. Whether running on a physical Raspberry Pi 4B or within a high-fidelity simulation, andino-rs provides the tools necessary to control, navigate, and interact with the robot.

## Key Components and Architecture

The repository is structured into several specialized packages that handle different aspects of the robot's operation:

- **andino (Core HAL)**: This is the foundational library that provides the hardware abstraction layer. It communicates directly with the robot's hardware, abstracting the complexities of serial communication and motor control into a clean Rust API.
- **dora_node_hub**: A collection of modular nodes for the dora-rs framework. These include a differential drive controller, a teleoperation node for keyboard control, and a HAL integration node.
- **Simulation Support**: Through the `dora_andino_mujoco_sim` node, the project supports the MuJoCo physics engine, allowing for rapid development and testing without the need for physical hardware.
- **Advanced Navigation**: The ecosystem includes experimental nodes like `dora_gemini_diff_drive_navigation`, which explores the use of Google's Gemini LLM for high-level robot navigation tasks.

## Technical Implementation

andino-rs utilizes a hybrid development environment, combining the performance of Rust with the flexibility of Python. The build system leverages `cargo` for Rust packages and `uv` for Python-based nodes, ensuring a streamlined dependency management process.

The integration with dora-rs is a central feature. Dora-rs is a low-latency dataflow framework that simplifies the creation of robotic applications by treating components as nodes in a graph. By providing specialized Dora nodes for the Andino robot, this project enables developers to build sophisticated pipelines—such as combining sensor fusion, path planning, and motor control—with minimal boilerplate.

## Hardware and Platform Support

The project is optimized for Ubuntu 22.04 (Jammy Jellyfish) and specifically targets the Raspberry Pi 4B running Ubuntu Mate for real-world deployments. For users without access to a physical robot, the MuJoCo-based simulation environment provides a high-fidelity alternative that mirrors the behavior of the real differential drive system.

## Getting Started

The project is designed to be developer-friendly, offering a pre-configured `.devcontainer` to ensure a consistent environment across different machines. Once the workspace is set up, users can build the Rust components using standard Cargo commands and manage Python dependencies through the `uv` tool. Running the robot is typically handled through Dora dataflows, which can be launched locally or distributed across multiple daemons using the `dora-cli`.
