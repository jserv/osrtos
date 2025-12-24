---
title: ChibiOS/RT
slug: chibios-rt
version: 20.3.2
codeUrl: https://github.com/ChibiOS/ChibiOS
siteUrl: http://www.chibios.org/dokuwiki/doku.php
date: '2016-11-29'
lastUpdated: '2024-12-29'
star: 725
components:
- FileSystem
- Network
- USBHost
- USBDevice
libraries:
- lwIP
licenses:
- Modified GPL or Apache
platforms:
- MSP430
- AVR
- ColdFire
- PowerPC
- STM32
summary: ChibiOS is a complete development environment for embedded applications including
  RTOS, an HAL, peripheral drivers, support files and a development environment.
---

### Features

- Efficient and portable preemptive kernel.
- Best in class context switch performance.
- Many supported architectures and platforms.
- Static architecture, everything is statically allocated at compile time.
- Dynamic extensions, dynamic objects are supported by an optional layer built on top of the static core.
- Rich set of primitives: threads, virtual timers, semaphores, mutexes, condition variables, messages, mailboxes, event flags, queues.
- Support for priority inheritance algorithm on mutexes.
- HAL component supporting a variety of abstract device drivers: Port, Serial, ADC, CAN, EXT, GPT, I2C, ICU, MAC, MMC, PWM, RTC, SDC, SPI, UART, USB, USB-CDC.
- Extensive test suite with benchmarks.