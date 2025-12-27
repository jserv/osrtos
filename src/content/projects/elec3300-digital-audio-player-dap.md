---
title: ELEC3300 Digital Audio Player (DAP)
summary: A custom-built Digital Audio Player based on the STM32F407xx microcontroller,
  featuring MP3 decoding and FATFS-based file management. The project includes a complete
  hardware design with Altium PCB files and software integration using the STM32 HAL
  framework and USB device stacks.
codeUrl: https://github.com/StardustLID/ELEC3300-DAP
isShow: false
rtos: ''
libraries: []
topics:
- c
- digital-audio-player
- fatfs
- hkust-elec3300
- mp3
- stm32
- wav
star: 0
lastUpdated: '2022-07-10'
createdAt: '2025-12-27'
updatedAt: '2025-12-27'
---

The ELEC3300 Digital Audio Player (DAP) is an embedded systems project developed for the HKUST ELEC3300 course. It represents a comprehensive effort to bridge hardware design and software implementation, resulting in a functional portable music player. While originally conceived with ambitious features like real-time FFT visualization and an interactive user interface, the final project focuses on the core challenge of reliable audio playback and hardware-software interfacing.

### Hardware Evolution
The project's hardware journey is particularly interesting. Initially, the team started with the STM32F103VET6, following the standard course specifications. However, as the project progressed and more powerful hardware became available, they migrated to the STM32F407xx. This transition required significant changes to pinouts and software dependencies, reflecting the real-world challenges of hardware migration in embedded development.

The repository includes a full PCB design created in Altium Designer. The custom board was designed to house the STM32 MCU alongside necessary audio components, though the developers noted that the complexity of the PCB design was a significant time investment that competed with software development cycles.

### Software Architecture and MP3 Decoding
The software is built upon the STM32CubeMX framework, utilizing the HAL (Hardware Abstraction Layer) for peripheral control. Key components of the system include:

*   **MP3 Decoding**: The project integrates an MP3 decoder (likely based on the Helix fixed-point library, given the `mp3dec.c` and `mp3tabs.c` files), which is essential for processing compressed audio on a microcontroller without a dedicated hardware decoder.
*   **File System**: FATFS is employed to manage audio files stored on external media, allowing the system to navigate directories and stream data to the decoder.
*   **USB Connectivity**: The inclusion of the USB_DEVICE stack suggests capabilities for interfacing with a PC, potentially for file transfers or debugging.
*   **Audio Output**: The system interfaces with a Cirrus Logic CODEC (as seen in the Altium library files) to convert digital streams into high-quality analog audio.

### Lessons from Development
The project documentation provides a candid look at the difficulties of university-level embedded projects. The developers highlighted several critical takeaways:
1.  **Timing and Logistics**: Late arrival of custom PCBs can severely bottleneck software development and testing.
2.  **Scope Management**: Initial plans for FFT and advanced UIs had to be scaled back due to the complexities of hardware migration and time constraints.
3.  **Interfacing Focus**: In an academic context, the primary value often lies in how software interfaces with hardware components rather than the aesthetic complexity of the PCB itself.

For those looking to explore the codebase, the project is structured as a standard MDK-ARM Keil project, with core logic residing in the `Core/Src` directory and specialized middleware for MP3 and USB handling located in their respective folders.
