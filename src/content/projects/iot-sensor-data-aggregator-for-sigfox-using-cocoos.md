---
title: IoT Sensor Data Aggregator for Sigfox using cocoOS
summary: An IoT application for Arduino Uno and STM32 Blue Pill that reads BME280
  sensor data and transmits it to the Sigfox network. It utilizes the cocoOS task
  scheduling framework for multitasking and supports both sensor data aggregation
  and Sigfox downlink communication.
slug: iot-sensor-data-aggregator-for-sigfox-using-cocoos
codeUrl: https://github.com/lupyuen/send_altitude_cocoos
siteUrl: http://www.cocoos.net
star: 25
lastUpdated: '2018-11-27'
rtos: ''
topics:
- arduino
- bme280
- cocoos
- dma
- iot
- libopencm3
- sigfox
- spi
- stm32
- uart
- wisol
isShow: false
createdAt: '2026-01-04'
updatedAt: '2026-01-04'
---

The project demonstrates how to handle multiple concurrent tasks on resource-constrained microcontrollers like the Arduino Uno and STM32 Blue Pill. By leveraging cocoOS, a portable task scheduling framework, the application manages sensor polling, data aggregation, and network communication without the complexity of a full preemptive RTOS.

## Multitasking with cocoOS

At the heart of the project is cocoOS, which provides a cooperative multitasking environment. This allows the system to "juggle" various sensors—such as temperature, humidity, and altitude—by assigning each to its own task. Tasks are assigned priorities, ensuring that time-critical operations like UART communication for the Sigfox module receive higher precedence than routine sensor polling. This cooperative approach is particularly well-suited for 8-bit and 32-bit microcontrollers where memory and processing power are limited.

## Sensor Integration and Aggregation

The application specifically targets the BME280 sensor via I2C. It includes a sophisticated aggregation layer that collects data from multiple sensor tasks before deciding when to transmit the payload to the Sigfox network. This approach optimizes battery life and bandwidth by reducing the frequency of network transmissions. The system supports multiple sensor types, including:
- **Altitude Sensor**: Derived from BME280 pressure readings.
- **Humidity and Temperature**: Standard environmental monitoring.
- **Gyroscope**: Supported via simulation for testing motion-based logic.

## Sigfox Connectivity

Connectivity is handled via a Wisol Sigfox module connected over UART. The project includes a dedicated Network Task and UART Task to manage the AT command interface of the Wisol module. Notably, it supports Sigfox downlink, allowing the device to receive data back from the cloud, which is essential for remote configuration or control. The implementation includes logic for handling Sigfox callbacks and JSON-formatted downlink responses from services like AWS Lambda.

## Cross-Platform Support

The codebase is designed to be highly portable. It supports the Arduino IDE for the Uno and PlatformIO (using libopencm3) for the STM32 Blue Pill. For developers without physical hardware, the project includes simulation modes for both the BME280 sensor and the Wisol module, allowing for logic testing on the STM32 platform without external components. It also features ARM Semihosting support for advanced debugging on the Blue Pill.

## Getting Started

The project is structured around a series of tutorials that guide the user from basic sensor reading to complex Sigfox integration. The `main.cpp` file serves as the entry point, where tasks are initialized and the cocoOS scheduler is started:

```cpp
int main(void) {
  // Init the platform, cocoOS and create any system objects.
  platform_setup();
  os_init();
  system_setup();

  // Start the Network Task and UART Task
  uint8_t task_id = network_setup();
  
  // Start the Sensor Task for each sensor
  sensor_setup(task_id);

  // Start the timer to generate ticks for cocoOS
  platform_start_timer(os_tick);

  // Start cocoOS task scheduler
  os_start();  
  return EXIT_SUCCESS;
}
```

Developers can configure the project for different tutorial stages by modifying `platform.h`, enabling specific features like SPI DMA or Sigfox downlink support. The project also provides scripts for linking source files and installing dependencies like the Boost libraries for specific simulation environments.
