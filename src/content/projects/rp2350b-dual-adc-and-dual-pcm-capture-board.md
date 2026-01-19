---
title: RP2350B Dual ADC and Dual PCM Capture Board
summary: A hardware platform for the Raspberry Pi RP2350B designed for high-speed
  data acquisition and multi-channel audio capture. It integrates two AD9226 12-bit
  40MS/s ADCs and two PCM1802 audio boards, optimized for use with the hsdaoh firmware
  on the Pimoroni PGA2350 module.
slug: rp2350b-dual-adc-and-dual-pcm-capture-board
codeUrl: https://github.com/Sev5000/RP2350B_DualADC_DualPCM
star: 13
lastUpdated: '2025-05-10'
rtos: ''
topics:
- ad9226
- adc
- dvi
- fm-rf-capture
- hsdaoh
- hstx
- ld-decode
- ms2130
- ms2131
- ntsc
- pal
- pcm1802
- pga2350
- raspberry-pi-pico
- rp2350
- rp2350b
- sdr
- tape-decode
- vhs-decode
isShow: false
createdAt: '2026-01-19'
updatedAt: '2026-01-19'
---

## High-Speed Data Acquisition for the RP2350B

The RP2350B DualADC DualPCM project is a specialized hardware solution designed to unlock the high-speed data acquisition capabilities of the Raspberry Pi RP2350B microcontroller. By providing a neatly packaged PCB for the Pimoroni PGA2350 (an RP2350B-based module), this project enables users to capture high-frequency signals and multi-channel audio simultaneously. 

The board is specifically tailored for use with **hsdaoh** (High Speed Data Acquisition Over Hardware), a firmware and toolset designed to push the boundaries of what is possible with the PIO (Programmable I/O) blocks on the Raspberry Pi Silicon family. With the move to the RP2350B, the project leverages the increased processing power and enhanced peripheral set of the Cortex-M33 cores.

## Key Hardware Features

The architecture of the board focuses on high-bandwidth signal processing and ease of assembly. It acts as a carrier for several popular breakout boards, allowing for a modular approach to high-performance sensing.

*   **Dual 12-bit ADCs**: The board supports two AD9226 ADC modules. These are capable of sampling at 40MS/s, providing a robust path for capturing RF or high-speed analog signals that exceed the capabilities of standard internal ADCs.
*   **Four-Channel Audio**: Two PCM1802 audio boards are integrated into the design. This setup provides four channels of high-quality audio input, all synchronized with a common clock to ensure phase alignment across channels.
*   **RP2350B Integration**: The design features a socket for the Pimoroni PGA2350, providing access to the RP2350B's extensive GPIO and the high-speed capabilities required to manage the parallel data streams from the ADCs.
*   **Flexible Connectivity**: The board includes footprints for both edge and horizontal SMA/SMB connectors for a protected head switch input, as well as sockets for USB-C and Micro-B breakout boards.

## Design Philosophy: Accessibility and Variants

A standout feature of this project is its focus on accessibility for hobbyists. The PCB is designed to be fully functional using only through-hole soldering. By connecting standard breakout boards for the ADCs and PCM modules, users can build a high-performance data acquisition system without the need for advanced SMD soldering equipment.

For more advanced users, the project offers an **SMD Variant**. This version includes footprints for a regular HDMI connector, micro USB, and various passive components (0402 and 0805) to support experimental features like EDID communication and HPD (Hot Plug Detect). This flexibility makes the board suitable for both quick prototyping and more permanent, compact installations.

## Technical Implementation and Firmware

The project relies on the `hsdaoh-rp2350` firmware, which utilizes the RP2350's PIO state machines to handle the high-speed parallel data coming from the AD9226 modules. The PCM1802 modules provide digital audio data via I2S/PCM interfaces, which are also efficiently handled by the RP2350's peripherals.

One important technical note for builders involves a modification to the PCM1802 breakout boards. Due to a common design error on these third-party boards, users must bridge MODE0 and connect it to 3.3V with a wire to ensure correct operation with the latest firmware releases. This attention to detail in the documentation ensures that users can overcome common hardware pitfalls during assembly.

## Getting Started

To build the project, users need to order the PCB using the provided Gerber files and source the components listed in the Bill of Materials (BOM). The BOM is optimized for parts easily found on sites like AliExpress or from specialized vendors like Pimoroni and Adafruit. Once assembled, the board can be flashed with the `hsdaoh` firmware to begin capturing high-speed data over USB or other supported interfaces.
