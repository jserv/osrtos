---
title: stm32pe-midi controller
summary: An expressive MIDI controller based on the STM32H7 microcontroller that utilizes
  the MIDI Polyphonic Expression (MPE) protocol. It features a unique 3D-printed flexure
  mechanism and Hall effect sensors to capture nuanced gestures like velocity, pitch,
  and aftertouch. The project integrates the TinyUSB library for USB-C connectivity
  and includes per-key PWM LED indication.
slug: stm32pe-midi-controller
codeUrl: https://github.com/udu3324/stm32pe-midi
star: 24
lastUpdated: '2025-08-06'
rtos: ''
topics:
- controller
- midi
- midi-controller
- mpe
- music
- stm32
isShow: false
createdAt: '2026-01-12'
updatedAt: '2026-01-12'
---

## Overview

The stm32pe-midi is an expressive MIDI controller designed to make high-end music technology more accessible. While most MIDI Polyphonic Expression (MPE) controllers on the market range from $500 to $2,000, this project leverages the STM32 ecosystem and 3D-printed compliant mechanisms to provide a professional-grade experience at a fraction of the cost. By using the MPE protocol, the controller can pass through complex gestures—including velocity, pitch bend, and aftertouch—on a per-note basis to digital audio workstations like Ableton.

## Innovative Mechanical Design

One of the most striking features of the stm32pe-midi is its use of a compliant mechanism, or flexure, for the keys. Traditional MIDI keyboards rely on complex assemblies of springs, hinges, and multiple parts. To reduce production costs and labor, this project uses a single-part 3D-printed flexure design. 

Each key contains an embedded 5mm cube neodymium magnet. As the key is pressed or tilted, a TMAG5273 Hall effect sensor on the PCB measures the change in the magnetic field. This allows the system to detect not just the vertical press (velocity and aftertouch) but also the lateral rotation of the key, which is mapped to pitch changes. This design provides a unique tactile feel and high-resolution data capture without the mechanical wear of traditional potentiometers.

## Hardware Architecture

The controller is powered by the high-performance **STM32H743VIH** microcontroller. The hardware stack includes:
- **TMAG5273 Hall Effect Sensors**: Used for high-precision magnetic sensing on every key.
- **TCA9548A I2C Multiplexer**: Manages the communication with multiple sensors that share the same I2C addresses.
- **TLC5940 PWM LED Drivers**: Controls per-key LEDs for visual feedback and status indication.
- **USB-C OTG**: Provides a modern connection for both power and MIDI data transmission.

The PCB design is a low-profile, one-sided layout optimized for compactness, featuring two octaves plus an extra key. 

## Firmware and MPE Implementation

The firmware is developed using **STM32CubeIDE** and utilizes the **TinyUSB** library to implement the USB MIDI class. Because MPE requires handling multiple MIDI channels simultaneously (where each note is assigned its own channel to allow for independent pitch and pressure data), the firmware includes a dedicated MPE logic layer. 

Key firmware features include:
- **Velocity Sensing**: Calculated by measuring the time delta between specific magnetic distance thresholds.
- **Per-Key Pitch Bend**: Mapped from the rotational angle of the key flexure.
- **Aftertouch**: Derived from the final compression of the flexure after the initial note trigger.
- **Octave Management**: A specialized mode that allows users to shift octaves by holding specific key combinations.

## Development Challenges

The project documentation provides a transparent look at the difficulties of building custom expressive hardware. The developer encountered several hurdles, such as I2C address conflicts with the TMAG5273 sensors, which required manual address rewriting and the use of multiplexers. Additionally, the project highlights the importance of 3D printing tolerances, as thermal deformation and printer accuracy can significantly impact the fit between the PCB, magnets, and the printed case. 

Despite these challenges, the stm32pe-midi stands as a successful example of how modern microcontrollers and additive manufacturing can be combined to create sophisticated musical instruments.
