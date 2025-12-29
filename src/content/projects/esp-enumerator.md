---
title: ESP Enumerator
summary: A Linux utility that enumerates ESP8266 and ESP32 microcontrollers by their
  MAC address and chip ID. It creates persistent symlinks in /dev/esp/ to ensure consistent
  device addressing across reboots and reconnections.
slug: esp-enumerator
codeUrl: https://github.com/Spiritdude/esp-enum
star: 1
lastUpdated: '2018-02-19'
rtos: ''
topics:
- esp32
- esp8266
- esptool
- mongoose-os
- nodemcu
- nodemcu-tool
isShow: false
createdAt: '2025-12-28'
updatedAt: '2025-12-28'
---

## Managing Multiple ESP Devices with Ease

Developing for the ESP8266 and ESP32 often involves juggling multiple boards connected to a single workstation. A common frustration in this environment is the unpredictable nature of Linux device nodes; a device that was `/dev/ttyUSB0` a moment ago might become `/dev/ttyUSB4` after a reconnect or a hub reset. ESP Enumerator (esp-enum) solves this by creating stable, human-readable symlinks based on the unique hardware identifiers of the chips.

## How It Works

The tool is a Perl-based utility that probes all connected serial devices. It leverages standard tools like `esptool.py` to read the MAC address directly from the ESP hardware. Once the MAC address is retrieved, the script calculates the chip ID and creates symbolic links in a dedicated `/dev/esp/` directory.

For example, a device might be mapped to:
- `/dev/esp/xx:xx:xx:4d:98:d0` (Full MAC address)
- `/dev/esp/0x4d98d0` (Shortened Chip ID)

This allows developers to physically label their boards with the last few digits of the MAC address and always know exactly which device file to target in their build scripts or terminal emulators.

## Integration with Development Workflows

ESP Enumerator is designed to sit between the hardware and your existing toolchains. It works seamlessly with popular ESP development environments:

### NodeMCU
When using the NodeMCU firmware, you can target specific boards without checking `dmesg`:
```bash
nodemcu-tool --port /dev/esp/0x9f7082 terminal
```

### Mongoose OS
Similarly, for Mongoose OS users, the stable paths simplify console access and file transfers:
```bash
mos --port /dev/esp/0x4d98d0 console
```

## Technical Considerations

The tool requires `nodemcu-tool` and `esptool.py` to be installed on the host system. Because it interacts with system device nodes, the initial setup requires root privileges to create the `/dev/esp` directory and set appropriate permissions for the `dialout` group.

One important side effect to note is that `esp-enum` triggers a reset/reboot of each device during the probing process. This is a necessary step for `esptool.py` to enter the bootloader and read the MAC address. Consequently, the tool is best used at the start of a development session or whenever new hardware is plugged in.

By abstracting the volatile `/dev/ttyUSB` assignments into persistent hardware-linked paths, ESP Enumerator provides a much more robust foundation for automated testing and multi-device development environments.
