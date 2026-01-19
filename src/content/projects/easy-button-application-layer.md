---
title: Easy Button Application Layer
summary: An entry-level application layer wrapper for the easy_button library, designed
  for STM32 and CH32V microcontrollers. It provides a structured framework for handling
  complex button interactions like multi-clicks, long presses, and combo keys through
  a clean separation of hardware abstraction and application logic.
slug: easy-button-application-layer
codeUrl: https://github.com/Sighthesia/easy_button-Application
star: 13
version: '20250920'
lastUpdated: '2025-09-20'
rtos: ''
topics:
- button
- embedded
- embedded-systems
- key
- stm32
isShow: false
createdAt: '2026-01-19'
updatedAt: '2026-01-19'
---

## Overview

The Easy Button Application Layer is a specialized wrapper for the powerful [easy_button](https://github.com/bobwenstudy/easy_button) library. It is designed to simplify the integration of complex button logic into embedded systems, specifically targeting platforms like STM32 and CH32V. By providing a structured approach to button management, it allows developers to focus on application-level logic rather than low-level GPIO polling and state machine management.

The project emphasizes a clean architectural separation between the Hardware Abstraction Layer (HAL), the adaptation layer (pin configuration), and the application layer (event handling). This design ensures high portability across different microcontroller architectures.

## Key Features

This wrapper exposes the most commonly used features of the underlying easy_button core while streamlining the setup process:

- **Multi-click Detection**: Supports single, double, and triple clicks out of the box.
- **Long Press Management**: Includes multi-level long press detection through a keep-alive counter mechanism.
- **Combo Keys**: Allows for the definition of multi-button combinations (e.g., Key 1 + Key 2) to trigger specific events.
- **Hardware Debouncing**: Configurable software-based debouncing to ensure reliable input signal processing.
- **Low Power Support**: Provides interfaces to check if the button processing engine is active, enabling safe entry into deep sleep modes.

## Technical Architecture

The library is organized into four distinct components to maintain modularity:

1.  **ebtn_APP_HAL**: The Hardware Abstraction Layer where platform-specific functions like `GPIO_ReadPin` and `Get_Tick` are implemented.
2.  **ebtn_APP_Keys**: The adaptation layer where hardware pin mappings, active-low/high logic, and timing parameters are defined.
3.  **ebtn_APP_Event**: The application layer where developers implement custom logic for specific button events.
4.  **ebtn_APP**: The main interface providing initialization and periodic processing routines.

## Getting Started

Integrating the library involves a straightforward four-step process. First, the HAL must be adapted to the specific MCU (e.g., STM32 HAL or CH32V peripheral library). Second, the button IDs and hardware mappings are defined in the configuration files. Third, the event callback is implemented to handle actions like `EBTN_EVT_ONCLICK` or `EBTN_EVT_KEEPALIVE`.

Finally, the module is initialized and called within the main loop or a timer interrupt:

```c
#include "ebtn_APP.h"

int main(void)
{
    // System and Peripheral Initialization
    ebtn_APP_Keys_Init();

    while (1)
    {
        // Process button events periodically (recommended 5-20ms)
        ebtn_APP_Process();
        
        HAL_Delay(10);
    }
}
```

## Advanced Configuration

For specialized hardware requirements, the library supports custom timing parameters per button. This is useful for applications requiring different debounce times or long-press thresholds for specific inputs. Developers can define a `ebtn_btn_param_t` structure and apply it to specific keys in the configuration list, allowing for granular control over the user interface behavior.

## Supported Platforms

The library has been verified on several popular microcontrollers, including:
- **STM32G030**
- **STM32H750**
- **CH32V203**

Because of its HAL-centric design, porting to other C99-compatible environments with a system tick and GPIO access is trivial.
