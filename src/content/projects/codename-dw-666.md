---
title: Codename DW-666
summary: DW-666 is an embedded MIDI routing application designed to interface an Arturia
  Beatstep with a vintage Korg DW-6000 synthesizer. Built in Rust for the STM32F4
  'blackpill' board, it provides a modern tactile interface for controlling over 50
  synthesizer parameters through a paged knob system.
codeUrl: https://github.com/fralalonde/DW-666
isShow: false
rtos: ''
libraries: []
topics:
- midi
- rtic
- stm32
star: 0
lastUpdated: '2023-09-09'
createdAt: '2025-12-27'
updatedAt: '2025-12-27'
---

Codename DW-666 is a specialized embedded project that breathes new life into vintage hardware. Specifically, it acts as a MIDI bridge and controller interface between the [Arturia Beatstep](https://www.arturia.com/products/hybrid-synths/beatstep) and the [Korg DW-6000](https://www.vintagesynth.com/korg/dw6000.php), a classic but notoriously 'knobless' synthesizer from the 1980s. By leveraging modern microcontrollers and the Rust programming language, DW-666 provides the immediate, tactile control that modern sound designers crave.

### Bridging the Gap Between Eras
The Korg DW-6000 is known for its lush NJM2069 analog filters, but editing its sounds originally required tedious menu diving. DW-666 solves this by mapping the Arturia Beatstep's encoders and pads to the DW-6000's internal parameters. 

One of the standout features is the dedicated control scheme: the big top-left knob on the Beatstep is hard-coded to control the filter cutoff frequency, allowing for expressive sweeps at any time. Similarly, the top-right knob is dedicated to filter resonance. Because the DW-6000 has over 50 parameters but the Beatstep has only 16 knobs, the project implements a 'paging' system. Users can quickly switch between parameter pages using the top pads, or hold a pad for 'quick-edits' before snapping back to their previous page.

### Technical Architecture
The project is built for the **STM32F411 "Blackpill"** development board. It is written in **Rust** using a `no_std` environment, showcasing the power of the language for real-time MIDI processing. 

Key technical components include:
- **Async Rust**: The project utilizes the `woke` crate to provide cooperative multitasking and async support, which is particularly useful for handling concurrent MIDI streams and UI updates.
- **Custom Runtime**: A bespoke runtime implementation handles memory allocation (via `buddy-alloc`), task execution, and time management.
- **Embedded MIDI Library**: A local `embedded-midi` crate handles the parsing and generation of MIDI messages, including the System Exclusive (SysEx) messages required to communicate with the DW-6000.
- **Defmt Logging**: Modern deferred formatting (`defmt`) is used for efficient debugging over RTT (Real-Time Transfer).

### Patch Management and UI
Beyond parameter control, DW-666 simplifies patch management. By holding one of the eight lower pads and tapping an upper pad, users can access all 64 patches on the DW-6000 instantly. While the project currently relies on an external computer to route USB MIDI between the Beatstep and the Blackpill, there are ongoing efforts to integrate a native USB Host co-processor (using a SAM D21) to make the system entirely standalone.

### Getting Started
To build the project, you will need a nightly Rust toolchain and an SWD probe like an STLink/v2. 

```bash
# Add the target
rustup +nightly target add thumbv7em-none-eabihf

# Run the project (requires a connected probe)
cargo run
```

The repository includes configuration files for OpenOCD and udev rules to ensure smooth deployment on Linux systems. While still under active development, DW-666 serves as an excellent example of using Rust for complex MIDI routing and hardware interfacing.
