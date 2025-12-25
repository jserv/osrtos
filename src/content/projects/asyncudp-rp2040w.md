---
title: AsyncUDP_RP2040W
summary: A fully asynchronous UDP library designed for the Raspberry Pi Pico W using
  the CYW43439 WiFi chip. It enables non-blocking unicast, broadcast, and multicast
  communication, allowing developers to handle multiple simultaneous connections without
  stalling the main execution loop.
codeUrl: https://github.com/khoih-prog/AsyncUDP_RP2040W
siteUrl: https://github.com/khoih-prog/AsyncUDP_RP2040W
isShow: false
rtos: ''
libraries:
- lwip
topics:
- arduino-pico
- async
- async-udp
- broadcast
- cyw43439
- lwip
- multicast
- ntp
- ntp-client
- rp2040
- rp2040w
- time
- time-server
- udp-broadcast
- udp-client
- udp-multicast
- udp-multicast-server
- udp-server
- unicast
---

The Raspberry Pi Pico W has become a staple for IoT developers, but efficient networking often requires moving beyond standard blocking libraries. The **AsyncUDP_RP2040W** library brings the powerful asynchronous networking capabilities originally found in the ESP32 ecosystem to the RP2040 platform. By leveraging the `arduino-pico` core, this library allows for high-performance UDP communication that doesn't require the processor to wait for packets in a tight loop.

### Why Asynchronous UDP Matters
In traditional synchronous networking, your code must frequently poll the hardware to check if a packet has arrived. If your application is busy performing sensor calculations or driving a display, you might miss packets or introduce significant latency. 

AsyncUDP changes this paradigm. It is event-driven; you define a callback function that is triggered automatically when data arrives. This means your main `loop()` remains free to handle other tasks, and the network stack handles the heavy lifting in the background. This architecture is particularly beneficial for multi-connection environments where a device might be acting as both a client and a server simultaneously.

### Key Features and Capabilities
- **Full Asynchronous Support**: Handle multiple connections at once without blocking execution.
- **Versatile Communication**: Built-in support for Unicast, Broadcast, and Multicast environments.
- **Speed**: By operating asynchronously, the library maximizes the throughput of the CYW43439 WiFi chip.
- **Ease of Use**: Despite its technical complexity, the API is designed to be intuitive, using modern C++ lambda functions for packet handling.

### Technical Architecture
This library is a port and modification of Hristo Gochkov's well-known `ESPAsyncUDP` and Khoi Hoang's `AsyncUDP_STM32`. It is specifically optimized for the **Raspberry Pi Pico W** using the [arduino-pico core](https://github.com/earlephilhower/arduino-pico). Because it relies on the underlying lwIP stack, it provides a robust foundation for complex networking tasks like NTP synchronization or real-time data streaming.

### Getting Started
To use the library, you must include the header in your main project file. A unique aspect of this library's implementation is its approach to avoiding linker errors in multi-file projects. You should include `AsyncUDP_RP2040W.h` in only one file (usually your main `.ino`), while using `AsyncUDP_RP2040W.hpp` in any other files that need access to the library classes.

Here is a basic example of setting up an asynchronous UDP server:

```cpp
#include <WiFi.h>
#include <AsyncUDP_RP2040W.h>

AsyncUDP udp;

void setup() {
  Serial.begin(115200);
  WiFi.begin("your_ssid", "your_password");

  if(udp.listen(1234)) {
    Serial.println("UDP Listening on port 1234");
    udp.onPacket([](AsyncUDPPacket packet) {
      Serial.print("Data received: ");
      Serial.write(packet.data(), packet.length());
      Serial.println();
      
      // Reply to the sender
      packet.print("ACK");
    });
  }
}

void loop() {
  // Your main code runs here without needing to check for UDP packets manually
}
```

### Advanced Usage: NTP and Multicast
The library includes comprehensive examples for real-world scenarios. The `AsyncUdpNTPClient` example demonstrates how to fetch time from global NTP servers and process the 48-byte response packet asynchronously. For developers working on discovery protocols or smart home integration, the `AsyncUDPMulticastServer` shows how to join multicast groups and handle traffic efficiently.

### Debugging and Optimization
For developers who need to peek under the hood, the library includes a configurable logging system. By adjusting the `_AUDP_RP2040W_LOGLEVEL_` define, you can increase the verbosity of the debug output to the Serial monitor, which is invaluable for troubleshooting complex network routing or packet loss issues.
