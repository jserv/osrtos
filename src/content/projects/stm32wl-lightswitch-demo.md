---
title: STM32WL Lightswitch Demo
summary: A demonstration project for the STM32WL microcontroller using the Rust programming
  language and the stm32wl-hal. It implements a secure wireless lightswitch system
  using GFSK modulation and AES-GCM encryption between two NUCLEO-WL55JC2 boards.
slug: stm32wl-lightswitch-demo
codeUrl: https://github.com/newAM/stm32wl-lightswitch-demo
star: 7
lastUpdated: '2024-03-31'
rtos: ''
isShow: false
createdAt: '2026-01-04'
updatedAt: '2026-01-04'
---

## Overview

The STM32WL Lightswitch Demo is a sophisticated implementation of a wireless control system designed for the STM32WL series of microcontrollers. Built using the Rust programming language and the `stm32wl-hal`, this project demonstrates how to create a secure, low-latency communication link between two NUCLEO-WL55JC2 evaluation boards. 

The project follows a client-server architecture. When a user presses a button (B3) on the client board, it toggles its local LED and sends an authenticated wireless request to the server board. Upon successful authentication, the server board toggles its own LED, effectively acting as a remote-controlled lightswitch.

## Key Features and Capabilities

This demo serves as a comprehensive showcase of the STM32WL's hardware capabilities, particularly its integrated sub-GHz radio and security peripherals. Key features demonstrated include:

*   **Wireless Communication**: Utilizes GFSK (Gaussian Frequency Shift Keying) for transmission and reception.
*   **Hardware Security**: Implements AES-GCM encryption and decryption for secure request authentication.
*   **Peripheral Integration**: Showcases the use of ADC sampling, GPIO control, Random Number Generation (RNG), the Real-Time Clock (RTC), and hardware timers.
*   **Performance**: Achieves an impressive end-to-end latency of approximately 31.3 ms.

## Technical Implementation

The project is organized as a Rust workspace containing three primary packages:
1.  **Client**: The firmware for the initiating device.
2.  **Server**: The firmware for the receiving device.
3.  **Shared**: Common logic and data structures used by both targets.

The system relies on `probe-rs` for flashing and debugging, and it targets the `thumbv7em-none-eabi` architecture, indicating a bare-metal environment without a traditional RTOS. This approach minimizes overhead and allows for precise control over the hardware.

### Security and Nonce Management

A critical aspect of the project is its approach to security. While the demo uses AES-GCM, the author provides important caveats regarding its production readiness. One specific challenge addressed is nonce management. In a real-world scenario, nonces must never be reused to maintain the integrity of the encryption. The project includes a conceptual implementation for a non-volatile counter stored in flash memory to handle this:

```rust
/// Non-volatile u64 stored in the last page of flash
pub struct NonVolatileU64 {
    _priv: (),
}

impl NonVolatileU64 {
    const U64_PER_PAGE: usize = Page::SIZE / size_of::<u64>();
    const PAGE: Page = unsafe { Page::from_index_unchecked(127) };
    const FIRST: *const u64 = Self::PAGE.addr() as *const u64;

    #[inline]
    pub fn fetch_increment(flash: &mut pac::FLASH) -> Result<u64, flash::Error> {
        if let Some((val, offset)) = Self::fetch() {
            let mut flash: Flash = Flash::unlock(flash);
            // ... logic to erase page and program next value ...
            let next_val: u64 = val.wrapping_add(1);
            unsafe { flash.standard_program(&next_val, next)? };
            Ok(next_val)
        } else {
            // ... initialization logic ...
            Ok(0)
        }
    }
}
```

## Getting Started

To run the demo, two NUCLEO-WL55JC2 boards are required. The development environment must have `rustup` and `probe-rs` installed. Because the project uses a workspace, both the server and client can be launched simultaneously using `cargo run` with specific package flags. For a streamlined experience, the project suggests using `tmux` to manage both debug sessions in a single terminal window.

## Future Improvements

As a demonstration project, it highlights several areas for extension in real-world applications, such as implementing more robust error handling (moving away from panics), adding node addressing to support multiple clients, and integrating low-power states to extend battery life for the client device.
