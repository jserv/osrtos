---
title: Non-Blocking One-Wire Library for STM32
summary: A lightweight, asynchronous 1-Wire protocol library for STM32 microcontrollers
  based on the HAL framework. It utilizes a single timer interrupt to provide non-blocking
  communication with devices like the DS18B20 temperature sensor and DS2431 EEPROM
  across any GPIO pins.
slug: non-blocking-one-wire-library-for-stm32
codeUrl: https://github.com/nimaltd/ow
star: 20
lastUpdated: '2025-10-22'
rtos: ''
topics:
- '1'
- 1-wire
- 1-wire-bus
- 1-wire-master
- 1wire
- cubemx
- ds18b20
- hal
- library
- one
- one-wire
- one-wire-protocol
- onewire
- pack
- stm32
- stm32cubemx
- wire
isShow: false
createdAt: '2026-01-12'
updatedAt: '2026-01-12'
---

## Overview

The One-Wire (1-Wire) protocol is a popular choice for low-speed data, signaling, and power over a single conductor. However, many standard implementations rely on blocking delays to meet the protocol's strict timing requirements, which can stall the CPU and degrade system responsiveness. The `ow` library for STM32 addresses this by providing a fully asynchronous, non-blocking implementation driven by a single timer interrupt.

Designed for efficiency and portability across all STM32 families, this library allows developers to manage 1-Wire communication without halting the main application loop. It is particularly well-suited for projects requiring multi-device bus support and robust error handling.

## Key Features

The library is built around a state machine that handles the nuances of the 1-Wire protocol, including reset pulses, presence detection, and bit-level timing. 

**Core capabilities include:**
- **Asynchronous Operation**: Uses a timer interrupt to manage timing, freeing the CPU for other tasks.
- **Multi-Device Support**: Supports multiple devices on a single bus, with configurable limits via `OW_MAX_DEVICE`.
- **Flexible Pin Configuration**: Can run on any GPIO pins. It also supports a dual-pin mode (TX/RX) for use with isolation circuits.
- **ROM Operations**: Full support for standard ROM commands including Read, Match, Skip, and Search ROM.
- **Device Compatibility**: Works with standard Maxim/Dallas devices such as the DS18B20 temperature sensor, DS2431 EEPROM, DS28E17 I²C bridge, and DS1990A iButtons.

## Technical Implementation

The library integrates directly with the STM32 Hardware Abstraction Layer (HAL). It requires a single timer configured for a 1 µs tick. The core logic resides in a timer callback function (`ow_callback`), which advances the internal state machine through the various phases of a 1-Wire transaction.

By moving the timing-critical bit-banging into an interrupt-driven state machine, the library ensures that the 1-Wire bus does not become a bottleneck. This is essential for real-time applications where other peripherals or communication stacks (like USB, Ethernet, or high-speed SPI) must remain active.

## Getting Started

To use the library, a developer defines an `ow_t` handle and configures an `ow_init_t` structure with the appropriate GPIO and timer settings. Once initialized, transfers are initiated using functions like `ow_xfer()` or `ow_xfer_by_id()`. Because the library is non-blocking, the application can check the status using `ow_is_busy()` or wait for an optional completion callback.

### Example: Reading a DS18B20 Sensor

Reading data from a sensor involves initiating a transfer and then retrieving the response once the bus is idle:

```c 
uint8_t data[16];
// Update ROM IDs on the bus
ow_update_rom_id(&ds18);
while (ow_is_busy(&ds18));

// Start temperature conversion
ow_xfer_by_id(&ds18, 0, 0x44, NULL, 0, 0);
HAL_Delay(1000); // Wait for conversion

// Read scratchpad
ow_xfer_by_id(&ds18, 0, 0xBE, NULL, 0, 9);
while (ow_is_busy(&ds18));

// Retrieve the data
ow_read_resp(&ds18, data, 16);
```

## Configuration and Portability

All library limits and timing constants are centralized in `ow_config.h`. This allows users to tune the library for specific hardware constraints, such as adjusting the maximum data length or the number of supported devices. The library's modular design ensures it can be easily ported to any STM32 family by simply providing the correct HAL handles and GPIO configurations.
