---
title: Contiki OS
slug: contiki-os
version: '3.0'
codeUrl: https://github.com/contiki-os/contiki
siteUrl: http://www.contiki-os.org/
date: '2016-11-29'
lastUpdated: '2018-11-03'
star: 3730
components:
- FileSystem
- Network
- 6LoWPAN
- Command Line Interface
libraries: []
licenses:
- BSD
platforms:
- MSP430
- ARM
- AVR
- '8051'
summary: Contiki is an open source operating system for the Internet of Things. Contiki
  connects tiny low-cost, low-power microcontrollers to the Internet.
---

### Features

- Memory Allocation. Contiki is designed for tiny systems, having only a few kilobytes of memory available.
- Full IP Networking. Contiki provides a full IP network stack, with standard IP protocols such as UDP, TCP, and HTTP, in addition to the new low-power standards like 6lowpan, RPL, and CoAP. The Contiki IPv6 stack, developed by and contributed to Contiki by Cisco, is fully certified under the IPv6 Ready Logo program.
- Power Awareness. Contiki is designed to operate in extremely low-power systems: systems that may need to run for years on a pair of AA batteries. To assist the development of low-power systems, Contiki provides mechanisms for estimating the system power consumption and for understanding where the power was spent.
- 6lowpan, RPL, CoAP. Contiki supports the recently standardized IETF protocols for low-power IPv6 networking, including the 6lowpan adaptation layer, the RPL IPv6 multi-hop routing protocol, and the CoAP RESTful application-layer protocol.
- Dynamic Module Loading. Contiki supports dynamic loading and linking of modules at run-time.
- The Cooja Network Simulator. Contiki devices often make up large wireless networks. Developing and debugging software for such networks is really hard. Cooja, the Contiki network simulator, makes this tremendously easier by providing a simulation environment that allows developers to both see their applications run in large-scale networks or in extreme detail on fully emulated hardware devices.
- Sleepy Routers. In wireless networks, nodes may need to relay messages from others to reach their destination. With Contiki, even relay nodes, so-called routers, can be battery-operated thanks to the ContikiMAC radio duty cycling mechanism which allows them to sleep between each relayed message. Some call this sleeping routers, we call it sleepy routers.
- Hardware Platforms. Contiki runs on a wide range of tiny platforms, ranging from 8051-powered systems-on-a-chip through the MSP430 and the AVR to a variety of ARM devices.
- Protothreads. To save memory but provide a nice control flow in the code, Contiki uses a mechanism called protothreads. Protothreads is a mixture of the event-driven and the multi-threaded programming mechanisms.
- Coffee flash file system. For devices that has an external flash memory chip, Contiki provides a lightweight flash file system, called Coffee.
- The Contiki shell. Contiki provides an optional command-line shell with a set of commands that are useful during development and debugging of Contiki systems.
- Regression Tests. To ensure that the Contiki code works as expected, the Contiki developers use a set of nightly regression tests that test important aspects of Contiki on a daily basis in the Cooja simulator.
- The Rime Stack. In situations when bandwidth is at a premium or where the full IPv6 networking stack is overkill, Contiki provides a tailored wireless networking stack called Rime.
- Build System. The Contiki build system makes it easy to compile applications for any of the available Contiki platforms. This makes it easy to try out applications on a range of different platforms.