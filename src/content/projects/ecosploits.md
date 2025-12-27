---
title: ECOSPLOITS
summary: A collection of security exploits and proof-of-concept triggers targeting
  the eCos real-time operating system. The project specifically focuses on vulnerabilities
  identified in the ASKEY TCG300 cable gateway, including stack and heap overflow
  exploits.
codeUrl: https://github.com/ecos-wtf/ecosploits
isShow: false
rtos: ''
libraries: []
topics:
- broadcom
- ecos
- exploit-development
- exploits-scripts
star: 9
lastUpdated: '2021-04-25'
createdAt: '2025-12-27'
updatedAt: '2025-12-27'
---

The world of embedded security often focuses on mainstream operating systems like Linux or FreeRTOS, but niche real-time operating systems (RTOS) power a massive amount of critical infrastructure. **ECOSPLOITS** is a specialized repository dedicated to exploring vulnerabilities within **eCos** (Embedded Configurable Operating System), a highly customizable RTOS used in various industrial and consumer devices.

### Targeting the ASKEY TCG300
The primary focus of this repository is the **ASKEY TCG300** (also known as the Siligence TCG300), a cable gateway widely deployed by internet service providers like Orange Belgium. By analyzing the firmware of these devices, the project contributors have identified several critical memory corruption vulnerabilities that can lead to unauthorized access or remote code execution.

### Key Exploits and Triggers
The repository contains functional scripts and payloads designed to demonstrate these security flaws:

*   **Authentication Stack Overflow**: The `auth_stack_overflow_l2tp_exploit.py` script targets the L2TP implementation on the device. It demonstrates how a stack-based buffer overflow can be leveraged during the authentication process to gain control over the execution flow.
*   **Heap Overflow Trigger**: The `heap_overflow_trigger.py` script provides a proof-of-concept for triggering a heap-based overflow. While heap overflows are often more complex to exploit than stack overflows, they represent a significant threat to the stability and security of the RTOS kernel.
*   **ROP Payloads**: To bypass modern security mitigations (or simply to manage the constraints of the eCos environment), the project includes `rop_stage2.bin`. This file likely contains a Return-Oriented Programming (ROP) chain used as a second-stage payload to achieve more complex execution goals after the initial overflow.

### Technical Significance
eCos is known for its "configurable" nature, meaning that every build can be significantly different based on the packages selected by the developer. This makes generic exploit development difficult. However, by targeting specific hardware like the TCG300, ECOSPLOITS provides a concrete look at how memory management issues manifest in real-world eCos deployments.

For security researchers and embedded developers, this repository serves as a valuable case study in RTOS security. It highlights the importance of rigorous input validation and memory safety in low-level networking code, especially in devices that form the backbone of home and office connectivity.
