---
title: AMoDE-RT Case Studies
summary: A collection of artifacts and case studies validating the Aspect-Oriented
  Model-Driven Engineering for Real-Time systems (AMoDE-RT) approach. It includes
  UML/MARTE models, DERCS models, and automatically generated C++ code for ROS-based
  robotic systems such as industrial packing cells and UAVs.
codeUrl: https://github.com/lesc-utfpr/amode-rt-case-studies
isShow: false
rtos: ''
libraries: []
topics:
- model-driven-engineering
- uml
- marte
- code-generation
- aspect-oriented-software
---

The development of real-time embedded systems often faces a significant challenge: managing the complexity of cross-cutting concerns like timing, synchronization, and hardware constraints without cluttering the core functional logic. The **AMoDE-RT** (Aspect-Oriented Model-Driven Engineering for Real-Time systems) project addresses this by leveraging model-driven engineering and aspect-oriented design to separate these concerns effectively.

This repository serves as a comprehensive collection of case studies used to validate the AMoDE-RT methodology. It provides a bridge between high-level UML modeling and executable code, specifically targeting robotic and industrial automation platforms.

### Bridging Models and Reality

At the heart of this project is the use of **UML/MARTE** (Modeling and Analysis of Real-Time and Embedded Systems) profiles. These models allow developers to specify timing requirements and hardware mappings at a high level of abstraction. The repository includes several complex system models, such as:

- **Industrial Packing System**: Models for both Object-Oriented (OO) and Aspect-Oriented (AOSD) implementations.
- **Unmanned Aerial Vehicles (UAV)**: Comparative models showing how aspect-oriented design simplifies the architecture.
- **Automated Wheelchair**: Real-world application models for assistive technology.
- **Line-Following Robots and Assembly Cells**: Practical examples of industrial automation.

### Technical Architecture and Code Generation

One of the most interesting aspects of this project is the integration with the **GEnERTiCA** code generation tool. Rather than manually writing boilerplate code for real-time tasks, the project demonstrates how source code can be automatically derived from UML models. 

The repository includes a dedicated `uml_to_ros` directory, which showcases how these models are mapped to the **Robot Operating System (ROS)**. This includes:

- **Message Definitions**: Automatic generation of `.msg` files for components like `ArmJoint`, `Gripper`, and `RFIDReader`.
- **Service Definitions**: Mapping model operations to ROS services (`.srv`), such as `moveForward`, `openGripper`, and `addProduct`.
- **C++ Implementation**: Generated source and header files that implement the logic defined in the UML diagrams, utilizing `roscpp` for communication.

### Project Structure

The repository is organized to support different modeling environments and implementation stages:

- **uml-models-md**: Contains models compatible with MagicDraw.
- **uml-models-papyrus**: Contains models and profiles for the Eclipse Papyrus environment, including the custom AMoDE-RT profile.
- **embedded-software-ccop-samples**: Provides specifications for Context-oriented Component-based Programming (CCOP).
- **uml_to_ros**: The bridge to the ROS ecosystem, including CMake configuration for building the generated nodes.

### Getting Started with the Models

To explore the case studies, users typically need a UML modeling tool like Papyrus or MagicDraw. The project provides `.mdzip` files for MagicDraw and a suite of `.uml`, `.notation`, and `.di` files for Papyrus. For those interested in the implementation side, the `uml_to_ros` folder contains a standard Catkin package. By placing this in a ROS workspace, developers can see how the high-level model definitions translate into functional C++ nodes and ROS communication interfaces.

By providing the complete pipeline from MARTE-annotated models to generated ROS code, AMoDE-RT offers a powerful template for researchers and engineers looking to apply formal model-driven techniques to modern robotics and real-time systems.
