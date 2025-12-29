---
title: LAVA (Linaro Automated Validation Architecture)
summary: LAVA is an automated validation architecture designed for testing deployments
  of systems, primarily Linux kernels, on ARM-based hardware. It provides a distributed
  framework for scheduling test jobs and managing physical or virtual devices to execute
  automated validation suites.
slug: lava-linaro-automated-validation-architecture
codeUrl: https://github.com/Linaro/lava
siteUrl: https://docs.lavasoftware.org/lava/
star: 75
version: show
lastUpdated: '2025-12-24'
rtos: ''
topics:
- arm
- automation-framework
- ci
- documentation
- dut
- freesoftware
- kernel
- lava
- linux
- test-automation
- validation
- zephyr
isShow: false
createdAt: '2025-12-29'
updatedAt: '2025-12-29'
---

## Overview

LAVA (Linaro Automated Validation Architecture) is a continuous integration and automated testing framework specifically tailored for the complexities of embedded hardware. Developed by Linaro, it serves as a robust platform for validating system deployments, with a primary focus on the Linux kernel running on ARM devices, specifically ARMv7 and later architectures.

Unlike traditional CI systems that focus on software compilation, LAVA is designed to interact with physical hardware. It manages the lifecycle of a test job, from powering on a device and deploying a bootloader to executing a test suite and capturing the results. This makes it an essential tool for kernel developers, SoC vendors, and embedded systems engineers who need to ensure software stability across a diverse range of hardware targets.

## System Architecture

LAVA is built as a distributed system composed of several specialized components that work together to automate the testing process:

*   **LAVA Server**: The central hub of the architecture. It hosts the web interface, manages the PostgreSQL database, and provides a REST API for job submission and result retrieval. It includes the scheduler, which determines which jobs run on which available devices.
*   **LAVA Dispatcher**: The component that performs the actual work of communicating with the hardware. Dispatchers run on worker nodes and handle the low-level details of serial console interaction, network booting (TFTP/NFS), and power control (PDU management).
*   **LAVA Scheduler**: A sub-component of the server that manages the queue of test jobs, ensuring that hardware resources are utilized efficiently based on device availability and job priority.
*   **LAVA Results App**: A dedicated application for storing and visualizing the output of test runs, allowing developers to track regressions over time.

## Testing Embedded Hardware

The core strength of LAVA lies in its ability to abstract hardware interactions. In a typical LAVA workflow, a user submits a job definition in YAML format. LAVA then takes over the following steps:

1.  **Device Acquisition**: The scheduler reserves a matching piece of hardware.
2.  **Deployment**: The dispatcher prepares the environment, which might involve flashing an SD card, setting up a TFTP boot, or preparing a network-mounted root filesystem.
3.  **Booting**: The dispatcher interacts with the device's bootloader (such as U-Boot or UEFI) to boot the kernel and the test environment.
4.  **Execution**: The LAVA Test Shell runs the specified commands on the target device.
5.  **Reporting**: Results are parsed from the serial console or network logs and sent back to the server.

## Technical Implementation

LAVA is primarily written in Python and leverages the Django web framework for its server-side components. It utilizes Celery for asynchronous task management and Gunicorn for serving the web application. The dispatcher uses a variety of system tools to interact with hardware, including `udev` for device detection and various network protocols for deployment.

For modern deployments, LAVA supports containerization. The project provides Docker configurations that allow users to run dispatchers and servers within containers, simplifying the setup of complex test labs. While it is heavily optimized for Debian-based systems, its flexible architecture allows it to be adapted to various infrastructure requirements.

## Community and Support

As a Linaro project, LAVA benefits from a strong ecosystem of embedded experts. It is used extensively by the kernelCI project and various ARM silicon partners to validate the mainline Linux kernel. Documentation is comprehensive, covering everything from initial installation on Debian to advanced device configuration and custom test shell integration.
