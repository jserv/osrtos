---
title: Board Taxonomy Definitions
summary: A comprehensive guide and terminology reference for categorizing embedded
  computing boards. It defines various classes of hardware including Single Board
  Computers (SBC), Compute Modules (CM), and Embedded System Boards (ESB), while providing
  standard form factor specifications and examples for each category.
slug: board-taxonomy-definitions
codeUrl: https://github.com/platima/Board-Taxonomies
star: 22
lastUpdated: '2025-06-18'
rtos: ''
topics:
- arduino
- devboard
- esp32
- linux
- raspberry-pi
- raspberrypi
- rtos
- sbc
- singleboardcomputer
- stm32
isShow: false
createdAt: '2026-01-12'
updatedAt: '2026-01-12'
---

## Standardizing the Language of Embedded Computing

In the rapidly evolving world of embedded hardware, the terminology used to describe different types of boards can often be ambiguous. The Board Taxonomy Definitions project aims to solve this by providing a clear, structured framework for categorizing embedded computing platforms. Whether you are a developer choosing hardware for a project or an engineer documenting a new system, having a shared vocabulary is essential for clear communication.

## The Five Core Categories

The taxonomy breaks down embedded boards into five primary categories based on their capabilities, intended use, and software support:

### Single Board Computer (SBC)
An SBC is a complete computer system on one board, capable of running a full multi-tasking operating system like Linux or Windows. These boards typically feature standard PC interfaces such as USB, Ethernet, and dedicated display outputs (HDMI/DisplayPort). Familiar examples include the Raspberry Pi series and the BeagleBone Black.

### Compute Module (CM)
Compute Modules contain the core computing elements—CPU, RAM, and storage—but lack fixed I/O ports. They are designed to be integrated into custom carrier boards, offering high flexibility for commercial product development. This category includes the Raspberry Pi CM series and NVIDIA Jetson modules.

### Embedded Single Board Computer (eSBC)
Similar to a standard SBC, an eSBC runs a full OS but is designed for headless operation. These boards often lack display outputs and are accessed via SSH or UART. They frequently appear in compact form factors like "gumsticks" or "stamps," such as the Milk-V Duo or Luckfox Pico.

### Embedded System Board (ESB)
ESBs are general-purpose boards built around microcontrollers (MCUs) or simple SoCs. Unlike SBCs, they cannot run a full multi-tasking OS; instead, they run RTOS environments, MicroPython, or bare-metal firmware. This category encompasses the Arduino ecosystem, ESP32 development boards, and the Raspberry Pi Pico.

### Development/Evaluation Board (DevBoard/EvalBoard)
These boards are specifically designed by chip manufacturers to showcase and evaluate the capabilities of a particular silicon product. They often expose every pin of the chip and include specialized debugging features. Examples include STM32 Nucleo boards and Nordic nRF52 Development Kits.

## Form Factors and Physical Standards

Beyond functional categories, the project documents the physical dimensions that have become industry standards. This includes the ubiquitous "Credit Card" size (~85 × 56 mm) used by many SBCs and the "SODIMM" or "CM4" form factors used by compute modules. 

A particularly interesting trend highlighted in the taxonomy is the emergence of "Cracker" form factors (roughly 43 × 43 mm to 50 × 50 mm). These ultra-compact boards, often utilizing RISC-V architecture, represent a push toward smaller, Linux-capable hardware that bridges the gap between traditional microcontrollers and full-sized computers.

## Real-World Application: Consumer Electronics

The taxonomy also provides a lens through which to view modern consumer electronics. Many devices, from Smart TVs to streaming sticks, contain boards that fit these definitions. By applying this taxonomy, developers can better identify the capabilities of hardware found in consumer devices, facilitating the recycling and repurposing of electronics for new embedded projects.

This project serves as a living document, evolving alongside the hardware landscape to ensure that the terminology remains relevant as new architectures and form factors emerge.
