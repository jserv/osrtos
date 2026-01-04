---
title: ROS Control in Orocos
summary: An Orocos RTT hardware interface and component wrapper for the ROS control
  framework. It enables real-time robotic control by bridging Orocos components with
  ROS controller managers and hardware interfaces.
slug: ros-control-in-orocos
codeUrl: https://github.com/kuka-isir/rtt_ros_control_embedded
star: 7
lastUpdated: '2018-12-03'
rtos: ''
topics:
- control
- orocos
- ros
- rtt
- xenomai
isShow: false
createdAt: '2026-01-04'
updatedAt: '2026-01-04'
---

## Overview

The `rtt_ros_control_embedded` package provides a specialized bridge between the Orocos Real-Time Toolkit (RTT) and the ROS `ros_control` ecosystem. Designed for high-performance robotics applications, it allows developers to leverage the real-time execution capabilities of Orocos while maintaining compatibility with standard ROS controllers and hardware interfaces.

This project is an adaptation of the `rtt_ros_control_example` and is specifically tailored for embedded or real-time robotic control scenarios where deterministic timing is critical. By wrapping ROS control logic within Orocos components, it ensures that control loops can be executed with real-time priority and minimal jitter.

## Technical Architecture

The repository is structured to provide both a reusable library and a deployable Orocos component:

- **rtt_hw_interface**: A core library that implements the hardware interface logic required by `ros_control`. It handles the mapping between physical hardware data and the ROS controller manager.
- **rtt_ros_control_embedded**: An Orocos component that wraps the ROS controller manager. This component manages the lifecycle (load, configure, start, stop) of ROS controllers within the Orocos environment.

The project utilizes the Eigen library for mathematical operations and integrates deeply with the ROS Catkin build system. It depends on several key ROS packages, including `controller_manager`, `hardware_interface`, and `rtt_rosclock` to ensure synchronized timing between the real-time domain and the ROS network.

## Real-Time Configuration

One of the primary advantages of this package is its ability to run within a real-time task context. The provided Orocos Program Script (`.ops`) demonstrates how to deploy the control node with real-time scheduling:

```bash
loadComponent("RttRosControl","RttRosControl")
setActivity("RttRosControl",0.001,LowestPriority,ORO_SCHED_RT)
configureComponent("RttRosControl")
startComponent("RttRosControl")
```

In this configuration, the control loop is set to run at 1kHz (0.001s period) using the `ORO_SCHED_RT` scheduler, which is essential for maintaining stability in physical robotic systems.

## Key Features

- **Seamless ROS Integration**: Allows the use of standard ROS controllers within an Orocos RTT deployment.
- **Hardware Abstraction**: Provides a clean interface for implementing custom hardware drivers that are compatible with `ros_control`.
- **Real-Time Performance**: Designed to run on real-time operating system backends supported by Orocos, such as Linux with PREEMPT_RT or Xenomai.
- **Modular Design**: Separates the hardware interface logic from the Orocos component wrapper, facilitating code reuse across different robotic platforms.
