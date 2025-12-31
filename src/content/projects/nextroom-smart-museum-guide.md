---
title: 'NextRoom: Smart Museum Guide'
summary: NextRoom is an IoT-based museum guidance system that uses Bluetooth beacons
  and edge devices to track visitor dwell time. It provides personalized exhibit recommendations
  via a smartphone app while dynamically managing crowd density to ensure social distancing.
slug: nextroom-smart-museum-guide
codeUrl: https://github.com/LuigiSigillo/NextRoom
siteUrl: https://www.linkedin.com/pulse/nextroom-smart-museum-guide-guarantees-social-nicol%25C3%25B3-palmiero/
star: 1
lastUpdated: '2020-09-21'
rtos: ''
topics:
- azure
- bluetooth-low-energy
- flutter
- iot
- mbed-os
- mqtt
- nodejs
isShow: false
createdAt: '2025-12-31'
updatedAt: '2025-12-31'
---

NextRoom is an innovative IoT solution designed to transform the museum-going experience by personalizing visitor paths and managing crowd flow. Developed as a response to the challenges of the COVID-19 pandemic, the system focuses on two primary goals: enhancing visitor engagement through tailored suggestions and ensuring safety through real-time social distancing management.

### The Core Concept
The system operates on the principle of tracking visitor interest based on the time spent in specific museum sections. Rather than relying on a static tour guide or a random path, NextRoom uses dwell time as a proxy for interest. If a visitor spends a significant amount of time in a Renaissance art wing, the system recognizes this preference and suggests related sections for the next part of the visit.

### Technical Architecture
NextRoom relies on a distributed architecture consisting of three main components:

1.  **IoT Edge Devices**: Each museum section is equipped with an IoT device. These devices act as local hubs that detect the presence of visitors' smartphones.
2.  **Beacon Technology**: Communication between the visitor's smartphone and the IoT device is facilitated via Bluetooth Beacons. This allows the system to accurately measure how long a user remains within the proximity of a specific exhibit without requiring active manual check-ins.
3.  **Cloud Backend**: The data collected by the edge devices—specifically the duration of each visit per section—is transmitted to the cloud. A specialized processing function analyzes this data alongside historical patterns from other visitors to generate a sorted list of recommendations.

### Social Distancing and Crowd Management
A standout feature of NextRoom is its ability to incorporate real-time occupancy data into its recommendation engine. To prevent overcrowding, the system doesn't just suggest the most relevant section; it also considers the current number of people in each room. By intelligently splitting the crowd based on individual tastes, the system naturally distributes visitors across the museum, reducing bottlenecks and maintaining social distancing.

### User Interaction
The visitor interacts with NextRoom through a dedicated smartphone application. Every time a visitor leaves a section, the app receives a new set of suggestions. If the primary suggestion doesn't appeal to the user, they have the option to request alternative recommendations until they find a section that matches their current interest.

### Project Documentation and Development
The project is well-documented, with detailed reports covering its design, architecture, and evaluation phases. The development process was structured into multiple deliveries, showcasing the evolution from a conceptual product to a functional IoT demo. The authors have also provided video presentations and a blog post to demonstrate the system's capabilities in a real-world context.
