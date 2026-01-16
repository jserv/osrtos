---
title: Flappy Bird Game on ESP32 with OLED Display
summary: A Rust-based implementation of Flappy Bird for the ESP32 microcontroller,
  utilizing the Embassy async framework. It features SSD1306 OLED display integration
  via I2C, physical button controls, and optional buzzer support for audio feedback.
slug: flappy-bird-game-on-esp32-with-oled-display
codeUrl: https://github.com/ImplFerris/esp32-flappy-bird
siteUrl: https://esp32.implrust.com/
star: 13
lastUpdated: '2025-02-03'
rtos: ''
topics:
- arudino
- embedded
- embedded-rust
- embedded-systems
- esp32
- flappy-bird
- flappy-bird-game
- game
- oled
- oled-display-ssd1306
- rust
- rustlang
isShow: false
createdAt: '2026-01-16'
updatedAt: '2026-01-16'
---

# Flappy Bird on ESP32: A Rust and Embassy Implementation

This project brings the classic Flappy Bird experience to the ESP32 microcontroller, written entirely in Rust. By leveraging the Embassy framework, the game demonstrates how to build responsive, asynchronous embedded applications on the ESP32 platform. The game utilizes an SSD1306 OLED display for graphics and a simple push button for gameplay mechanics.

## Hardware and Circuitry

The project is designed to run on the ESP32 (specifically the WROOM Dev Kit 1). The visual output is handled by a 128x64 SSD1306 OLED display connected via the I2C protocol. For input, a standard push button is used to control the bird's flight.

The wiring is straightforward:
- **OLED Display**: SDA connects to GPIO 23, SCL to GPIO 18.
- **Input**: A push button is connected between GPIO 32 and Ground.
- **Audio (Optional)**: An active buzzer can be added to GPIO 33 to provide sound effects when the player scores.

## The Power of Rust and Embassy

One of the standout features of this project is its use of the **Embassy** framework. Embassy provides an asynchronous runtime for embedded systems, allowing for efficient task management without the overhead of a traditional RTOS. This is particularly useful for handling concurrent operations like updating the display, monitoring button presses, and generating buzzer tones simultaneously.

The project relies on several key crates in the Rust embedded ecosystem:
- `esp-hal`: Provides the hardware abstraction layer for the ESP32.
- `embassy-executor`: Manages the async tasks and the task arena.
- `ssd1306`: A driver for the OLED display, used in its asynchronous mode to prevent blocking the main loop.
- `embedded-graphics`: Used for drawing the bird, pipes, and score on the screen.

## Gameplay and Features

The game logic follows the traditional Flappy Bird formula. The player must navigate the bird through gaps in moving pipes. Each successful pass increments the score. If the optional buzzer is enabled, a sound triggers upon scoring.

The project is highly configurable through Rust features. For instance, buzzer support can be toggled during the build process:

```sh
cargo run --release -F buzzer
```

## Technical Implementation

The project uses a `static_cell` for memory management of the Embassy executor and other long-lived peripherals. The display is driven via I2C at a standard address, and the game loop is structured to handle frame updates and physics calculations within an async context. This ensures that even while the display is being updated, the system remains responsive to user input.

## Learning Resources

This repository serves as a practical example for those following the "impl Rust on ESP32" book. It provides a real-world application of concepts like I2C communication, GPIO handling, and async programming in an embedded context. For developers looking to transition from C/C++ to Rust for ESP32 development, this project offers a clear, functional template for game development and hardware interfacing.
