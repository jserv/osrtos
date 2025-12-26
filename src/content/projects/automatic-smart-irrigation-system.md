---
title: Automatic Smart Irrigation System
summary: An automated irrigation solution built on Arduino and NodeMCU that measures
  soil moisture and water levels to optimize plant hydration. The system features
  real-time monitoring via a 16x2 LCD and remote data logging to the ThingSpeak IoT
  platform using Wi-Fi.
codeUrl: https://github.com/uzairmukadam/Automatic-Smart-Irrigation-System
isShow: false
rtos: ''
libraries: []
topics:
- arduino-uno
- iot
- protothreads
- soil-moisture-sensor
- water-depth-sensor
---

Maintaining a healthy garden or farm requires consistent attention, particularly when it comes to irrigation. The **Automatic Smart Irrigation System** is an open-source project designed to eliminate the guesswork and manual labor involved in watering plants. By leveraging affordable microcontrollers and sensors, this system ensures that plants receive water only when necessary, preventing both dehydration and water waste.

### System Overview and Hardware
At its core, the project uses a dual-controller architecture. An **Arduino Uno** serves as the primary logic controller, interfacing with the physical sensors and the relay module. A **NodeMCU (ESP8266)** acts as the IoT gateway, providing Wi-Fi connectivity to transmit sensor data to the cloud. 

The hardware suite includes:
- **Soil Moisture Sensor**: Measures the volumetric water content in the soil.
- **Water Depth Sensor**: Monitors the available water supply in the reservoir.
- **DS1307 Real-Time Clock (RTC)**: Keeps track of time for scheduled watering cycles.
- **16x2 LCD**: Provides a local interface to view current moisture levels, water status, and time.
- **Relay Module**: Acts as the switch for the water pump.

### Intelligent Irrigation Logic
The system is designed to be modular and easy to configure. The Arduino code monitors the soil moisture level in real-time. When the moisture drops below a predefined threshold, the system triggers a relay to activate the water pump. To prevent over-watering, the system can be configured with specific pump durations and wait times.

One of the key features is the integration of the DS1307 RTC, which allows the system to maintain a consistent schedule, such as watering only during the early morning hours when evaporation is at its lowest. 

### IoT Integration with ThingSpeak
What makes this system "smart" is its ability to be monitored from anywhere in the world. The NodeMCU reads digital signals from the Arduino representing the pump status, moisture levels, and water supply levels. This data is then pushed to a **ThingSpeak** channel. 

```cpp
void loop() {
  // Sending data to ThingSpeak fields
  ThingSpeak.writeField(ChannelNo, 1, digitalRead(D1), API_Key);
  ThingSpeak.writeField(ChannelNo, 2, digitalRead(D2), API_Key);
  ThingSpeak.writeField(ChannelNo, 3, digitalRead(D3), API_Key);
  Serial.println("Data Sent to Cloud");
  delay(1000);
}
```

By using ThingSpeak, users can visualize their garden's health through real-time graphs and historical data, making it easier to adjust watering schedules based on seasonal changes.

### Setup and Configuration
To get started with the project, users need to configure both the Arduino and the NodeMCU. The Arduino requires the `TimeLib` and `DS1307RTC` libraries to manage the clock module. Users must set their specific moisture thresholds in the `Arduino_Code_Final.ino` file to match the needs of their specific plants.

For the NodeMCU, users simply need to provide their Wi-Fi credentials and their ThingSpeak API keys:

```cpp
const char* ssid = "your-wifi-name";
const char* password = "your-wifi-password";
unsigned long ChannelNo = 123456; // Your ThingSpeak Channel ID
const char * API_Key = "YOUR_API_KEY";
```

### Conclusion
The Automatic Smart Irrigation System is a practical application of IoT in agriculture. By combining local sensor logic with cloud-based monitoring, it provides a robust solution for home gardeners and small-scale farmers looking to modernize their irrigation practices while conserving water and energy.
