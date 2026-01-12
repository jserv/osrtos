---
title: Uprintf Library
summary: A universal, platform-independent printf implementation for C designed for
  bare-metal microcontrollers and resource-constrained embedded systems. It provides
  a header-only, zero-dependency solution with advanced features like multi-output
  streaming, template substitution, and custom format handlers.
slug: uprintf-library
codeUrl: https://github.com/Ferki-git-creator/Uprintf
siteUrl: https://ko-fi.com/ferki
star: 24
lastUpdated: '2025-09-08'
rtos: ''
topics:
- arduino
- c
- debugging
- driver
- embedded
- esp32
- firmware
- formatting
- kernel
- library
- lightweight
- mit-license
- no-dependencies
- opensource
- osdev
- platform-independent
- portable
- printf
- single-header
- stm32
isShow: false
createdAt: '2026-01-12'
updatedAt: '2026-01-12'
---

## Overview

Uprintf is a comprehensive, single-header C library that provides a platform-independent implementation of the `printf` family of functions. Specifically designed for the embedded world, it bridges the gap between bare-metal microcontrollers and modern operating systems by removing all platform dependencies and preprocessor directives. This makes it an ideal choice for firmware developers who need a reliable formatting tool that can be ported across different architectures—from 8-bit AVRs to 32-bit ARM Cortex-M or RISC-V SoCs—without modification.

## Core Features and Embedded Optimization

At its heart, Uprintf offers full standard `printf` functionality, including support for integers, hex, octal, strings, and floating-point numbers. However, unlike standard C library implementations which can be bloated or rely on complex system calls, Uprintf is optimized for the constraints of embedded systems:

- **Zero Dependencies**: It does not rely on `libc` or specific OS headers.
- **No Dynamic Memory**: By default, the library avoids dynamic allocation, though it offers optional support for advanced features like dynamic string building.
- **Header-Only Implementation**: Integration is as simple as including a single file and defining a implementation macro in one source file.
- **Configurable Footprint**: Developers can enable or disable floating-point support and adjust internal buffer sizes via preprocessor definitions to save flash and RAM.

## Advanced Capabilities in Version 1.3

The latest version of Uprintf introduces several "revolutionary" features for an embedded formatting library. One of the most powerful is the **Multi-output Streaming** system, which allows a single broadcast to be sent to multiple destinations simultaneously—for example, logging to both a UART console and an SD card file at the same time.

Other advanced features include:
- **Template System**: Support for variable substitution using `{{key}}` placeholders.
- **Custom Format Handlers**: Developers can register their own specifiers (e.g., `%T` for a system timer) to handle domain-specific data types.
- **Text Processing**: Built-in utilities for text alignment (left, right, center), transformation (uppercase, lowercase, ROT13), and word wrapping.
- **Position-Aware Output**: Functions for terminal control, such as moving the cursor or clearing lines, which are useful for creating simple CLI interfaces.
- **Event System**: Output hooks and stream processors allow for character transformation pipelines or monitoring output in real-time.

## Integration and Usage

Using Uprintf in an embedded project requires implementing a simple character output callback. This callback acts as the bridge to your hardware peripheral, such as a UART or SPI display.

```c
#define UPRINTF_IMPLEMENTATION
#include "uprintf.h"

// Hardware-specific output function
void uart_putchar(char c, void* ctx) {
    while (!(USART1->SR & USART_SR_TXE));
    USART1->DR = c;
}

void main() {
    // Set the default output for simplified usage
    u_set_default_output(uart_putchar, NULL);
    
    // Standard-style formatting
    u_printf_simple("System initialized. Uptime: %d seconds\n", 42);
    
    // Advanced alignment and formatting
    u_text_align(uart_putchar, NULL, "STATUS: OK", 20, U_ALIGN_CENTER);
}
```

## Technical Implementation

The library is designed with safety in mind, featuring enhanced error checking and protection against null pointers or buffer overflows. Functions like `u_snprintf` are implemented to return the actual number of characters written to the buffer, ensuring predictable behavior in memory-sensitive applications. For developers working on complex workflows, the library even includes a lightweight state machine and a string builder utility, making it more than just a formatting tool—it is a complete text-handling suite for embedded C.
