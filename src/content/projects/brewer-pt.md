---
title: brewer_pt
summary: A fermentation monitoring firmware for the TI Tiva Launchpad (TM4C123GH6PMI)
  that uses Protothreads for lightweight multitasking. It integrates multiple sensors
  for weight, temperature, and gas detection, providing data logging and wireless
  communication via NRF24L01.
codeUrl: https://github.com/zanppa/brewer_pt
isShow: false
rtos: ''
libraries: []
topics:
- ds18b20
- energia-ide
- fermentation
- hx711
- nrf24l01
- protothreads
- tiva-c-series
lastUpdated: '2025-12-27'
createdAt: '2025-12-27'
updatedAt: '2025-12-27'
---

Monitoring a fermentation process requires precision and consistency, often involving long-duration tracking of temperature, weight, and gas production. **brewer_pt** is a specialized firmware project designed to turn a TI Tiva Launchpad (TM4C123GH6PMI) into a comprehensive fermentation monitoring gadget. By leveraging a unique multitasking approach, it allows hobbyists and brewers to keep a close eye on their brew's progress without the overhead of a full-blown RTOS.

### Hardware and Sensor Integration
The project is built around the TI Tiva C Series Launchpad, a robust ARM Cortex-M4 platform. It interfaces with a wide array of sensors to capture every relevant metric of the fermentation cycle:

*   **Weight Tracking:** Uses the HX711 24-bit ADC to interface with load cells, allowing for precise measurement of weight changes (often used to estimate gravity drop).
*   **Temperature Monitoring:** Employs the ubiquitous DS18B20 1-wire sensor for accurate liquid or ambient temperature readings.
*   **Activity Sensing:** A custom bubble sensor is implemented using an LED and a photoresistor (LDR) to count airlock activity. Additionally, a Hall effect switch can be used for CO2 volume sensing.
*   **Gas Detection:** An MQ-3 sensor is integrated to detect ethanol or gas concentrations.

### Virtual Multitasking with Protothreads
One of the most interesting technical aspects of `brewer_pt` is its use of **Protothreads**. Protothreads are extremely lightweight, stackless threads designed for memory-constrained systems. They provide a linear code execution style (similar to standard threads) but without the memory overhead of individual stacks.

In this project, Protothreads simplify the scheduling of various sensor readings. The developer has also implemented a custom derivative called "Timed functions." This allows for precise timing and non-blocking waits within functions, which is critical when handling serial communication or bit-banging protocols while other background tasks (like sensor polling) continue to run.

### Communication and Data Persistence
Data is only useful if it can be accessed. `brewer_pt` supports two primary communication channels:
1.  **USB-UART:** Utilizing the Launchpad's built-in debug interface for local configuration and data dumping.
2.  **Wireless (NRF24L01):** Support for Nordic NRF24L01 radio modules allows the device to transmit data packets wirelessly to a central hub or gateway.

To protect against data loss during power outages, the firmware periodically stores results to the MCU's internal EEPROM. Users can configure the write interval (e.g., every 1 to 99 minutes) via UART or RF commands.

### Command Interface
The firmware includes a robust set of commands for both UART and RF interfaces. For example, users can request an EEPROM dump, set configuration flags, or adjust the bubble sensor threshold. 

```text
// Example RF messages
// BAAAABBBBCCCCDDDD -> Bubble sensor: raw value, threshold, max, and min
// DAAAAAAAABBBBCCCCDDDD -> Data packet: weight, temperature, ethanol, bubble integral
```

By combining low-cost sensors with an efficient software architecture, `brewer_pt` provides a powerful tool for DIY brewers looking to modernize their fermentation tracking.
