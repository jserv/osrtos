---
title: STM32 File Manager with SD Card and FATFS Support
summary: A comprehensive file manager application for STM32 microcontrollers utilizing
  the FATFS library and SPI-based SD card storage. It features a customizable windowed
  interface, support for nested directories, and flexible input handling via buttons,
  encoders, or touchscreens.
slug: stm32-file-manager-with-sd-card-and-fatfs-support
codeUrl: https://github.com/vadrov/stm32-filemanager-sd-fatfs-display-buttons
star: 5
lastUpdated: '2025-02-01'
rtos: ''
topics:
- buttons
- fatfs
- filemanager
- lcd
- sd-card
- spi
- stm32
isShow: false
createdAt: '2026-01-04'
updatedAt: '2026-01-04'
---

The STM32 File Manager project is a sophisticated implementation of a graphical file browser designed for resource-constrained microcontrollers. Built around the widely-used FATFS library, this project demonstrates how to create a functional and aesthetically pleasing user interface for navigating files and directories on an SD card.

### A Versatile User Interface
One of the standout features of this file manager is its flexible display system. The manager operates within a user-defined window, allowing developers to specify coordinates, dimensions, fonts, and color schemes. This makes it easy to integrate the file manager into larger applications without taking over the entire screen. To handle long filenames on small displays, the system implements an abbreviation logic similar to Total Commander, ensuring that users can still distinguish between files even when space is limited.

The interface is not just functional but also intuitive. It includes support for file and directory icons (badges) and maintains cursor positions when navigating between parent and child directories. This "memory" feature significantly improves the user experience when browsing deep folder structures.

### Technical Architecture and Performance
Under the hood, the project is optimized for the STM32F4 series, specifically targeting the STM32F401CCU6. It leverages high-performance drivers that utilize SPI with Direct Memory Access (DMA) for both the display and the SD card interface. This offloads data transfer tasks from the CPU, ensuring smooth UI updates and efficient file operations.

The project is modular, relying on several specialized libraries developed by the author:
- **SD Card Driver**: High-speed SPI communication using DMA.
- **Display Driver**: Optimized for SPI displays with DMA support.
- **Keyboard Module**: A robust input handler featuring debounce filters, auto-repeat functionality, and input buffering.
- **String Utilities**: Custom procedures for efficient string manipulation in an embedded context.

### Flexible Control Schemes
A key design philosophy of this project is the abstraction of user input. The file manager logic is decoupled from the physical input hardware. By using a central keyboard buffer (`KEYB_key_buff`), the system can be controlled via physical buttons, rotary encoders, or touchscreens without modifying the core file manager code. Developers can simply populate the buffer from their own polling routines or interrupts, effectively emulating button presses.

### Resource Management
While the system supports deeply nested directories, the maximum nesting level is primarily limited by the available RAM of the microcontroller. This makes the project highly scalable across different STM32 chips, from the entry-level F401 to more powerful variants with larger memory footprints. The project configuration is managed via STM32CubeMX, providing a clear path for porting to other hardware if necessary.

### Conclusion
This project serves as an excellent reference for developers looking to implement file system navigation in their embedded projects. Its combination of optimized drivers, modular design, and flexible UI makes it a robust foundation for data loggers, media players, or any STM32-based device requiring local storage management.
