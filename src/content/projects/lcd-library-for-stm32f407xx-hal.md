---
title: LCD Library for STM32F407xx HAL
summary: A lightweight C library for driving 16x2 character LCDs on STM32F407xx microcontrollers
  using the STM32 HAL framework. It provides a simple API for initialization and character
  output, designed to integrate seamlessly with STM32CubeMX generated projects.
slug: lcd-library-for-stm32f407xx-hal
codeUrl: https://github.com/irakr/LCD-lib-STM32F407xx-HAL
star: 11
lastUpdated: '2019-02-27'
rtos: ''
topics:
- arm
- cmsis
- cortex-m4
- hal
- lcd
- lcd-display
- lcd16x2
- library
- stm32
- stm32-hal
- stm32f4
isShow: false
createdAt: '2025-12-29'
updatedAt: '2025-12-29'
---

## Overview

The LCD-lib-STM32F407xx-HAL is a specialized driver library designed to simplify the process of interfacing 16x2 character LCDs with STM32F407xx series microcontrollers. By utilizing the STM32 Hardware Abstraction Layer (HAL), the library ensures compatibility with modern STM32 development workflows, particularly those involving the STM32CubeMX code generator.

Interfacing with character LCDs is a common requirement for embedded systems, providing a simple way to display status information, sensor data, or user menus. This library abstracts the complexities of the LCD's 4-bit communication protocol, allowing developers to focus on their application logic rather than low-level bit-banging.

## Key Features

- **HAL Compatibility**: Specifically built to work with the STM32 HAL library, making it ideal for users of STM32CubeIDE and Keil MDK.
- **Handle-Based API**: Uses an `LCD_TypeDef` pointer as a handle, similar to the design patterns found in the STM32 HAL itself.
- **Flexible Pin Mapping**: Allows users to define which GPIO pins are used for RS, RW, Enable, and Data lines through a simple configuration structure.
- **4-Bit Mode Support**: Operates the LCD in 4-bit mode to conserve GPIO pins on the microcontroller.

## Technical Implementation

The library's architecture revolves around the `PortPin_Map` structure. This structure allows the user to map any GPIO port and pin combination to the LCD's control and data lines. 

```c
typedef struct {
    GPIO_TypeDef* GPIOx;
    uint16_t GPIO_Pin;
} PortPin_Map;
```

When initializing the display, the user passes pointers to these mapping structures for every required pin (RS, RW, E, D4, D5, D6, and D7). The `LCD_init()` function then configures the internal state and returns a handle that is used for all subsequent display operations.

## Getting Started

To use the library, developers should include `lcd.h` in their project's include directory and `lcd.c` in the source directory. If using Keil MDK, it is recommended to add `lcd.c` to the project tree manually.

### Basic Usage Example

After configuring the GPIO pins in STM32CubeMX as outputs, you can initialize and use the LCD in your `main.c` as follows:

```c
// Define pin mappings
PortPin_Map RS = {GPIOA, GPIO_PIN_0};
PortPin_Map RW = {GPIOA, GPIO_PIN_1};
PortPin_Map E  = {GPIOA, GPIO_PIN_2};
PortPin_Map D4 = {GPIOB, GPIO_PIN_12};
PortPin_Map D5 = {GPIOB, GPIO_PIN_13};
PortPin_Map D6 = {GPIOB, GPIO_PIN_14};
PortPin_Map D7 = {GPIOB, GPIO_PIN_15};

// Initialize the LCD
LCD_TypeDef* lcd = LCD_init(&RS, &RW, &E, &D4, &D5, &D6, &D7);

// Print a character
LCD_putchar(lcd, 'A');
```

## Integration with STM32CubeMX

Because the library relies on the HAL, it is highly recommended to generate the base project using STM32CubeMX. This ensures that the system clock, GPIO peripherals, and HAL headers are correctly initialized before the LCD library is called. The library expects the HAL environment to be fully functional, particularly for timing delays and GPIO state management.
