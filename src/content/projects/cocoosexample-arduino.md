---
title: cocoOSExample-arduino
summary: A sample multitasking application for Arduino Uno that demonstrates sensor
  data handling using the cocoOS task scheduler. It integrates temperature and gyroscope
  sensors into a cooperative multitasking environment, providing a template for building
  complex embedded systems on 8-bit microcontrollers.
codeUrl: https://github.com/lupyuen/cocoOSExample-arduino
siteUrl: http://www.cocoos.net/
isShow: false
rtos: ''
libraries: []
topics:
- arduino
- cocoos
- iot
---

Developing complex applications on the Arduino Uno often hits a wall when trying to manage multiple sensors and displays simultaneously using only the standard `loop()` function. The `cocoOSExample-arduino` project provides a practical solution by porting a sample multitasking sensor handling program from cocoOS to the Arduino platform.

### What is cocoOS?
cocoOS is a free, open-source, cooperative multitasking operating system specifically designed for microcontrollers. Unlike preemptive RTOSes that require significant overhead and complex context switching, cocoOS uses a cooperative model that is highly efficient for small 8-bit MCUs like the ATmega328P found in the Arduino Uno. It allows developers to define tasks, events, and semaphores to manage system flow without the complexity of a full-scale kernel.

### Project Structure and Logic
The repository demonstrates a modular approach to embedded software. Instead of a monolithic sketch, the logic is divided into specific components that represent a real-world sensing application:

- **Sensors**: Dedicated modules for temperature (`temp_sensor.cpp`) and gyroscope (`gyro_sensor.cpp`) data handling.
- **Display**: A separate module (`display.cpp`) to handle data visualization or output.
- **Task Management**: The `main.c` and the `.ino` file coordinate the initialization of the OS and the creation of tasks.

As seen in the project's sample logs, the system follows a clear lifecycle: it initializes the display, starts the OS, creates events, and then spawns tasks. The scheduler then takes over, alternating between servicing the temperature sensor and the gyroscope sensor based on defined intervals or events.

### Technical Implementation
The project uses a mix of C and C++. The `cocoOSExample-arduino.ino` file acts as the entry point, providing a `debug` function that bridges the C-based cocoOS tasks with the C++ Arduino `Serial` API. This allows developers to use standard RTOS features like events and task services while still having access to the familiar Arduino ecosystem.

```cpp
// Example of the debug bridge in the .ino file
void debug(const char *s) {
  // Print a message to the Arduino serial console.
  // Declared in sensor.h, implemented here for C++ Serial API access.
  Serial.begin (9600);
  Serial.println (s);
  Serial.flush (); 
}
```

### Getting Started
To run this example, you'll need an Arduino Uno and a few specific libraries. The project depends on the `Time` library (available via the Arduino Library Manager) and `cocoOS` version 5.0.1.

Because cocoOS is a generic C library and not a pre-packaged Arduino library, there is a manual setup step: you must download the source from the cocoOS website, move the files from the `inc` and `src` directories to a top-level folder, and then zip it up to add it to the Arduino IDE. This process ensures that the Arduino compiler can correctly locate the headers and source files for the multitasking kernel.

This example is an excellent starting point for developers looking to move beyond simple "Super Loop" architectures into the world of structured multitasking on resource-constrained hardware.
