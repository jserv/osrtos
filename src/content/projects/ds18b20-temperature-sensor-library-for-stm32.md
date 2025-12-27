---
title: DS18B20 Temperature Sensor Library for STM32
summary: A lightweight, non-blocking C library for interfacing DS18B20 temperature
  sensors with STM32 microcontrollers via the HAL. It supports multiple devices on
  a single 1-Wire bus and allows for temperature acquisition without stalling the
  CPU.
codeUrl: https://github.com/nimaltd/ds18b20
isShow: false
rtos: ''
libraries: []
topics:
- 1wire
- cubemx
- ds18b20
- freertos
- hal
- interrupt
- library
- non-blocking
- project
- sensor
- stm32
- stm32cube
- stm32f0
star: 164
version: v1.0.0
lastUpdated: '2025-10-23'
createdAt: '2025-12-27'
updatedAt: '2025-12-27'
---

The DS18B20 is a staple in the embedded world, known for its precision and the convenience of the 1-Wire protocol. However, many drivers for this sensor rely on blocking delays to manage the strict timing requirements of the 1-Wire bus, which can significantly degrade the performance of real-time applications. The **ds18b20** library for STM32 addresses this by providing a fully non-blocking driver built on top of a specialized 1-Wire library.

### Non-Blocking Architecture

Most DS18B20 drivers use `HAL_Delay()` or busy-wait loops to handle the 750ms conversion time required for 12-bit resolution. This library takes a different approach by utilizing timer callbacks. By integrating with the STM32 hardware timers, the driver can initiate a temperature conversion and then yield control back to the main application. Once the conversion is complete or a bus operation finishes, a callback is triggered, allowing the CPU to perform other tasks in the interim.

### Key Features and Capabilities

- **Multi-Device Support**: The library is designed to handle multiple sensors on a single 1-Wire bus. Users can update ROM IDs and address specific sensors individually.
- **Configurable Resolution**: Supports 9 to 12-bit resolution, allowing developers to balance between speed and precision.
- **Alarm Thresholds**: Includes support for high and low temperature alarm triggers.
- **Hardware Agnostic GPIO**: While built for STM32 HAL, it can be configured to work with any GPIO pins.
- **Unit Conversion**: Provides built-in functions to read data in both Celsius and Fahrenheit.

### Getting Started with STM32

To use the library, you need to provide a timer handle and a GPIO pin. The integration is handled through an initialization structure. A critical component is the timer callback, which ensures the 1-Wire protocol timing is maintained without blocking the main loop.

```c
// Define the handle
ds18b20_t ds18;

// Timer callback to drive the 1-Wire state machine
void ds18_tim_cb(TIM_HandleTypeDef *htim)
{
    ow_callback(&ds18.ow);
}

// Initialization in main.c
ow_init_t ow_init_struct;
ow_init_struct.tim_handle = &htim1;
ow_init_struct.gpio = GPIOC;
ow_init_struct.pin = GPIO_PIN_8;
ow_init_struct.tim_cb = ds18_tim_cb;
ow_init_struct.rom_id_filter = DS18B20_ID;

ds18b20_init(&ds18, &ow_init_struct);
```

### Efficient Data Acquisition

Reading temperature data involves a simple state-check pattern. Because the library is non-blocking, you check if the bus is busy before proceeding to the next step. This is ideal for applications running a main loop or an RTOS task where responsiveness is critical.

```c
while(1) {
    // Start conversion for all devices
    ds18b20_cnv(&ds18);
    while(ds18b20_is_busy(&ds18));
    while(!ds18b20_is_cnv_done(&ds18));

    // Request read from a specific device index
    ds18b20_req_read(&ds18, 0);
    while(ds18b20_is_busy(&ds18));
    int16_t temp = ds18b20_read_c(&ds18);
}
```

### Integration Requirements

This library is designed to work alongside the [nimaltd/ow](https://github.com/nimaltd/ow) 1-Wire library. It is compatible across all STM32 families (F0, F1, F4, L4, etc.) as long as the STM32 HAL is used. This makes it a versatile choice for developers looking for a professional-grade sensor interface that won't compromise system timing.
