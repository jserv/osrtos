---
title: MPLAB Harmony 3 Device Family Packs (DFP)
summary: A comprehensive collection of Device Family Packs providing essential headers,
  linker scripts, and CMSIS-compliant files for Microchip 32-bit SAM and PIC microcontrollers.
  It serves as the foundational hardware description layer for the MPLAB Harmony 3
  software framework.
codeUrl: https://github.com/Microchip-MPLAB-Harmony/dev_packs
siteUrl: https://microchip-mplab-harmony.github.io/
isShow: false
rtos: ''
libraries: []
topics:
- c
- cmsis
- dfp
- pic32
- pic32mk
- pic32mx
- pic32mz
- sam
- samc21
- samd21
- same70
- sams70
- samv70
- samv71
star: 14
version: v3.18.1
lastUpdated: '2023-11-10'
createdAt: '2025-12-27'
updatedAt: '2025-12-27'
---

MPLAB Harmony 3 is a modular software framework designed by Microchip to simplify the development of embedded firmware for their 32-bit SAM and PIC microcontroller and microprocessor lines. At the heart of this ecosystem lies the **Device Family Packs (DFP)** repository, which provides the essential hardware-specific definitions required for any project.

### What are Device Family Packs?

In the world of embedded systems, a Device Family Pack (DFP) is a structured collection of files that provide the necessary information for a specific silicon family. Instead of developers manually defining register addresses or bitfields, the DFP provides standardized headers and scripts. This repository acts as the central hub for these packs within the Harmony 3 environment, ensuring that developers have access to the latest silicon definitions, errata-compliant headers, and linker configurations.

### Comprehensive Hardware Support

The `dev_packs` repository covers an extensive range of Microchip's 32-bit portfolio, spanning both MIPS and ARM architectures:

*   **PIC32 Series:** Includes support for the high-performance PIC32MZ, the mainstream PIC32MX, the motor-control optimized PIC32MK, and the low-power PIC32MM families.
*   **SAM Series:** Extensive support for ARM Cortex-M based devices such as the SAMD21 (popular in the maker community), the high-performance SAME54, and the ultra-low-power SAML series.
*   **Microprocessors (MPUs):** Support for ARM Cortex-A based MPUs like the SAMA5D2 and SAMA7G5, providing the necessary files for low-level initialization.
*   **Specialized Controllers:** Packs for specific hardware like the LAN9255 EtherCAT controller and CEC (Consumer Electronics Control) devices.

### Technical Components

Each folder within the repository typically corresponds to a specific device family and contains versioned releases. These packs generally include:

1.  **CMSIS Headers:** For ARM-based devices, the packs include ARM CMSIS (Cortex Microcontroller Software Interface Standard) compliant headers, ensuring a standardized software interface for the processor core and peripherals.
2.  **Device Headers:** C-language header files defining every register and bitfield available on the specific MCU/MPU.
3.  **Linker Scripts:** Essential scripts that tell the compiler how to map code and data into the device's physical memory (Flash and RAM).
4.  **Configuration Files:** Metadata used by the MPLAB X IDE and the Harmony Configurator to understand device capabilities, such as pin counts, peripheral availability, and memory sizes.

### Integration with MPLAB Harmony 3

While these packs can be used standalone in a standard C project, they are designed to work seamlessly with the **MPLAB Harmony Configurator (MHC)**. When a developer selects a specific device in MHC, the system automatically pulls the relevant definitions from the DFP to generate the peripheral libraries (PLIBs) and drivers. This automation significantly reduces the risk of manual configuration errors and speeds up the transition from a datasheet to a working prototype.

For developers working with Microchip's 32-bit ecosystem, this repository is the foundational layer upon which RTOSes (like FreeRTOS or Azure RTOS), middleware, and application code are built.
