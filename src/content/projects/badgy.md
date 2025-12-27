---
title: Badgy
summary: Badgy is an open-source, ESP8266-based IoT badge featuring a 2.9-inch e-paper
  display. It supports WiFi connectivity, Over-the-Air (OTA) updates, and is programmable
  via the Arduino IDE, offering a versatile platform for creating custom digital name
  tags and low-power IoT displays.
codeUrl: https://github.com/sqfmi/badgy
siteUrl: https://github.com/sqfmi/badgy
isShow: false
rtos: ''
libraries: []
topics:
- arduino
- badgy
- esp8266
- iot
- micropython
- python
lastUpdated: '2025-12-27'
createdAt: '2025-12-27'
updatedAt: '2025-12-27'
---

Badgy is an open-source IoT badge that combines the versatility of the ESP8266 microcontroller with the low-power readability of a 2.9-inch e-paper display. Designed by Squarofumi (SQFMI), it serves as a highly customizable platform for makers, hackers, and conference attendees who want more than just a static name tag. Whether you want to display your Twitter handle, a QR code, or live data from a web API, Badgy provides the hardware and software framework to make it happen.

### Hardware Evolution and Capabilities

The project has seen several iterations, each improving upon the last. The latest version, **Rev 2C**, introduced a display that supports 2-bit grayscale, allowing for four distinct shades (Black, Dark Gray, Light Gray, and White). This is a significant upgrade from the traditional monochrome e-ink screens, enabling more detailed graphics and better UI depth.

At its core, Badgy uses the **ESP8266-12E** module, which provides built-in WiFi. The board also features five tactile buttons (Up, Down, Left, Right, and Center) for user interaction and a power slide switch. For portability, it is designed to run on a **LIR2450** rechargeable coin cell battery. It is important to note that standard CR2450 batteries are undervoltage (3.0V) and will not work; the system requires the 3.6V-3.7V provided by rechargeable lithium chemistry.

### Technical Specifications
- **Microcontroller**: ESP8266-12E
- **Display**: 2.9" E-ink (296x128 resolution)
- **Connectivity**: WiFi 802.11 b/g/n
- **Programming**: USB-to-Serial (CP2104 on Rev 2B/2C) or WiFi OTA
- **Interaction**: 5-way tactile buttons
- **Power**: LIR2450 or 1S LiPo via battery pads

### Software Ecosystem

Badgy is fully compatible with the Arduino IDE, making it accessible to anyone familiar with the ESP8266 Arduino core. It relies on several key libraries to manage its unique hardware:
- **GxEPD**: A specialized library for driving e-paper displays.
- **Adafruit GFX**: For drawing shapes, text, and managing fonts.
- **WiFiManager**: To handle WiFi credentials via a captive portal, eliminating the need to hardcode SSIDs.
- **ArduinoJson**: For parsing data from web APIs (essential for weather or social media integrations).

### Getting Started with Development

Setting up Badgy is straightforward. After installing the ESP8266 board support in the Arduino IDE, you can target the "NodeMCU 1.0 (ESP-12E Module)." One of the most powerful features of Badgy is its **Over-the-Air (OTA) update** capability. By holding the center button during boot, the device enters an update mode, allowing you to upload new firmware via a web browser without ever plugging in a cable.

Here is a snippet of how the display and buttons are typically initialized in a Badgy sketch:

```cpp
#include <GxEPD.h>
#include <GxGDEW029T5/GxGDEW029T5.h> // For Rev 2C
#include <GxIO/GxIO_SPI/GxIO_SPI.h>
#include <GxIO/GxIO.h>

// Configure pins for display
GxIO_Class io(SPI, SS, 0, 2);
GxEPD_Class display(io);

void setup() {
  display.init();
  
  // Initialize buttons with internal pullups
  pinMode(1, INPUT_PULLUP);  // Down
  pinMode(3, INPUT_PULLUP);  // Left
  pinMode(5, INPUT_PULLUP);  // Center
  pinMode(12, INPUT_PULLUP); // Right
  pinMode(10, INPUT_PULLUP); // Up
  
  display.setRotation(1);
  display.fillScreen(GxEPD_WHITE);
  display.update();
}
```

### Creative Use Cases

The repository includes several examples that demonstrate the badge's potential:
- **Weather Station**: Fetches local weather data and displays it with custom icons.
- **Spotify Controller**: Shows the currently playing track and allows for basic playback control.
- **Hourly Quote**: Connects to a quote API to refresh the screen with daily inspiration.
- **Websocket Draw**: A collaborative drawing application where users can draw on a web interface and see the result appear on the badge.

Badgy is more than just a name tag; it is a compact, connected development kit that leverages the best of low-power display technology and the ubiquitous ESP8266 ecosystem.
