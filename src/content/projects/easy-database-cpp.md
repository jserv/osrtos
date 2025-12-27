---
title: Easy_DataBase_CPP
summary: A lightweight C++ database library designed for ARM microcontrollers utilizing
  the FatFS file system. It implements a circular buffer storage mechanism to manage
  fixed-size tables and includes built-in checksum verification for data integrity.
codeUrl: https://github.com/SergeyLadanov/Easy_DataBase_CPP
isShow: false
rtos: ''
libraries: []
topics:
- arm
- cpp
- database
- embedded
- fatfs
- stm32
star: 3
version: 1.0.3
lastUpdated: '2021-11-23'
createdAt: '2025-12-27'
updatedAt: '2025-12-27'
---

## Overview

Easy_DataBase_CPP is a specialized C++ library designed to provide simple database functionality for embedded systems, particularly those based on ARM microcontrollers. In many embedded applications, logging data or maintaining state across reboots is a critical requirement, but full-scale database engines are often too resource-heavy. This project fills that gap by offering a lightweight, file-based storage system that integrates seamlessly with the widely-used FatFS library.

## Key Features and Architecture

The library is built around the concept of a circular buffer. This design choice is particularly well-suited for microcontrollers where storage space (such as SD cards or SPI Flash) is finite. 

### Circular Buffer Storage
When a database table is initialized, the user configures a maximum number of rows. Once the table reaches this limit, the library automatically overwrites the oldest entries with new data. This ensures that the system never runs out of space and maintains the most recent records without requiring manual maintenance or complex garbage collection routines.

### Data Integrity
Reliability is paramount in embedded environments. Easy_DataBase_CPP addresses this by accompanying every row in the database with a checksum. This checksum is automatically calculated during the write process and verified whenever the data is read back, allowing the application to detect and handle potential data corruption effectively.

### C++ Implementation
The project is written in C++ but is optimized for the constraints of embedded development. The Makefile indicates that it is compiled with `-fno-exceptions` and `-fno-rtti`, ensuring a small footprint and avoiding the overhead typically associated with standard C++ features that are often unsuitable for real-time systems.

## Technical Components

The library is organized into several modular components:
- **easy_db**: The core engine managing the database logic.
- **easy_db_row**: Represents a single entry in the database.
- **easy_db_cell**: Manages individual data units within a row.
- **easy_db_datetime**: Provides specialized handling for time-stamping entries, a common requirement for logging applications.
- **easy_db_string**: A custom string implementation tailored for the database's storage requirements.

## Getting Started

To integrate Easy_DataBase_CPP into a project, developers typically interact with the `easy_db_if.cpp` (interface) file. This file acts as the bridge between the core database logic and the specific hardware/file system implementation. 

Because the project is designed for ARM MCUs, it is often used within the STM32 ecosystem (as evidenced by the `Core/` directory structure typical of STM32CubeIDE projects). The build process is managed via a standard Makefile, making it easy to integrate into various toolchains using `arm-none-eabi-gcc` or standard `g++` for testing.

```cpp
// Example conceptual usage based on the library structure
// Initialize the database interface
Easy_DB_Interface db;

// Create a row and add data
DB_Row row;
row.addCell(some_data);

// Write to the circular buffer
db.writeRow(row);
```

## Target Platforms

While the library is primarily targeted at ARM microcontrollers using FatFS, its modular C++ design allows for portability to other platforms that provide a basic file system interface. It is an ideal choice for developers building data loggers, telemetry systems, or any embedded device that needs to store structured data reliably over time.
