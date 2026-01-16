---
title: Pad-O-Matic
summary: A stand-alone cryptographic one-time pad generator built on the Arduino Uno
  R4. It interfaces with a hardware noise source to collect entropy, processes it
  into unbiased random digits, and prints physical codebooks using a thermal printer.
slug: pad-o-matic
codeUrl: https://github.com/IEEESpectrumHandsOn/Pad-O-Matic
siteUrl: https://spectrum.ieee.org/diy-one-time-pad-machine
star: 16
lastUpdated: '2025-01-29'
rtos: ''
topics:
- arduino
- crytography
isShow: false
createdAt: '2026-01-16'
updatedAt: '2026-01-16'
---

## Overview

The Pad-O-Matic is a dedicated hardware solution for generating and printing cryptographic one-time pads (OTPs). Developed for the IEEE Spectrum "Hands On" column, this project provides a tangible way to implement theoretically unbreakable encryption. By combining an Arduino Uno R4 with a thermal printer and an external hardware entropy source, the Pad-O-Matic automates the tedious process of creating high-quality random codebooks.

## How it Works

The system relies on a digitized and debiased noise source to provide true randomness. The Arduino reads 8-bit random numbers from this source through a parallel interface. To ensure a uniform distribution of digits (0-9), the software implements a simple but effective filtering mechanism: it discards any byte greater than 250 and performs modular division by 10 on the remaining values. This prevents the statistical bias that would occur if a full 0-255 range were mapped directly to ten digits.

Once the digits are generated, they are organized into blocks of five for readability. A standard codebook consists of 50 pads, each containing 250 digits. The software manages the printing process to ensure that two identical copies of each codebook are produced—one for each party in the secure communication link.

## Technical Implementation

The project is designed for the Arduino Uno R4. Because the Uno R4 uses a Renesas RA4M1 microcontroller rather than the traditional AVR architecture, the code utilizes bit-banging to read the 8-bit parallel output from the random number generator hardware. 

### Hardware Interface

The sketch defines several digital pins for communication with the entropy source and the printer:
- **Data Pins (4-11):** Used to read the 8-bit random byte.
- **Control Pins (12-13):** Manage the handshake with the noise source (`BYTE_AVAIL` and `BYTE_READ`).
- **Printer Interface:** Uses `SoftwareSerial` on pins 2 and 3 to communicate with a standard small thermal printer.
- **User Input:** A simple "Go" button on pin 14 (A0) triggers the generation process.

### Code Structure

The main loop waits for a button press before initiating the `create_book()` function. This function fills an internal array with random digits. The system then prints two copies of the codebook. Each copy includes "IN" and "OUT" sections to facilitate bidirectional communication. To assist the user, the printer also outputs a conversion table that maps letters and common symbols to two-digit codes, allowing for manual encryption and decryption without the need for a computer.

## Key Features

- **True Randomness:** Designed to work with hardware entropy sources rather than pseudo-random software algorithms.
- **Bias Correction:** Implements range-limiting to ensure digits 0-9 appear with equal probability.
- **Physical Security:** Prints physical pads intended to be "torn off and burned after use," adhering to the core principles of one-time pad security.
- **Diagnostic Mode:** Includes a compile-time flag to generate one million digits and print frequency statistics to verify the quality of the entropy source.

## Getting Started

To build a Pad-O-Matic, users need an Arduino Uno R4, a compatible thermal printer, and the Adafruit Thermal Printer library. The hardware noise source must be capable of providing a debiased 8-bit signal with a "data ready" strobe. Once the hardware is connected, the sketch handles the logic of gathering entropy, formatting the pads, and managing the thermal printer's buffer.
