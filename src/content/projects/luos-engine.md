---
title: Luos-engine
summary: Luos-engine is an open-source, lightweight framework designed to manage hardware
  products as a collection of independent software microservices. It enables distributed
  communication across multiple microcontrollers and computers, facilitating the development
  of modular and scalable embedded systems.
slug: luos-engine
codeUrl: https://github.com/Luos-io/luos_engine
siteUrl: https://luos.io
star: 534
version: 3.0.0
lastUpdated: '2023-12-13'
rtos: ''
topics:
- arduino
- cicd
- communication-protocol
- cyber-physical-systems
- cyberphysical-systems
- digital-twins
- digitaltwins
- edge
- embedded
- embedded-systems
- freertos
- iot
- luos
- micro-ros
- microservice
- platformio
- raspberry-pi
- real-time
- realtime
- ros
isShow: false
createdAt: '2025-12-30'
updatedAt: '2025-12-30'
---

## Empowering Embedded Development with Microservices

Luos-engine introduces a modern architectural approach to the embedded world by providing a simple and efficient way to manage hardware products as a collection of independent software features. By treating hardware functionalities as microservices, developers can easily create, share, and reuse features across different projects, teams, or the wider community. This modularity breaks down the traditional monolithic firmware structure, enabling a more flexible and scalable development process.

As an open-source lightweight library, Luos-engine is designed to be hardware-agnostic. It can be utilized on virtually any microcontroller or computer and is compatible with various network protocols. This versatility allows for the rapid development of multi-electronic-board connected products, where services on different nodes can communicate seamlessly as if they were on the same chip.

## Key Benefits and Features

The core philosophy of Luos-engine is to promote organized and effective development practices. By encapsulating features into services, the engine ensures that applications remain adaptable from the initial prototyping phase through to the maintenance of an industrialized fleet. 

**Core capabilities include:**
- **Microservice Architecture**: Decouples hardware features into independent, reusable software components.
- **Distributed Communication**: Enables services to interact across different boards and networks without complex manual routing.
- **Hardware Agnostic**: Supports a wide range of platforms including STM32, ESP32, Arduino, and native environments.
- **Scalability**: Simplifies the process of adding or removing hardware features without rewriting the entire system logic.
- **Developer Ecosystem**: Provides tools for debugging, validating, monitoring, and managing fleets from anywhere.

## Technical Architecture

Luos-engine operates as a middleware layer that sits between the hardware abstraction layer (HAL) and the application logic. It manages service registration, message routing, and network orchestration. The engine includes a core set of profiles (such as motor, servo, voltage, and state) that standardize how different types of hardware interact with the system. 

The project is well-integrated into the PlatformIO ecosystem, making it easy to manage dependencies and build targets for various environments. It also includes a robust testing framework using Unity, ensuring that the core engine and its communication protocols remain stable across updates.

## Getting Started with Luos

Integrating Luos-engine into a project typically involves defining services that represent specific hardware or software features. For example, a developer might create a 'Motor' service and a 'Control' service. These services communicate via messages, allowing the control logic to remain independent of the specific motor driver implementation.

```c
// Example of a simple service initialization
#include "luos_engine.h"

void main(void) {
    Luos_Init();
    // Create a service representing a specific feature
    service_t* my_service = Luos_CreateService(0, STATE_TYPE, "my_feature");
    
    while (1) {
        Luos_Loop();
    }
}
```

The project provides extensive documentation and a "Get Started" tutorial to help developers transition from traditional firmware development to a service-oriented architecture. By leveraging the work of the Luos community, developers can significantly accelerate their time-to-market while ensuring the robustness of their embedded applications.
