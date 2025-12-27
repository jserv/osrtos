---
title: OOHG (Object Oriented Harbour GUI) Documentation
summary: The official documentation repository for the Object Oriented Harbour GUI
  (OOHG) library, providing extensive technical manuals and guides for Harbour-based
  application development. It covers GUI components, printing systems, and class hierarchies
  required to build desktop applications.
codeUrl: https://github.com/oohg/doc
isShow: false
rtos: ''
libraries: []
topics:
- c
- harbour
- minigui
- object-oriented
- oohg
- windows
- xharbour
star: 3
lastUpdated: '2024-11-17'
createdAt: '2025-12-27'
updatedAt: '2025-12-27'
---

The OOHG (Object Oriented Harbour GUI) project is a comprehensive library designed for developers using the Harbour compiler—a modern, cross-platform implementation of the Clipper language. This repository serves as the central hub for all technical documentation related to OOHG, offering a deep dive into the classes, commands, and controls that make up the framework.

### A Comprehensive Resource for Harbour Developers

OOHG is built to simplify the creation of sophisticated graphical user interfaces. The documentation provided here is structured to be both a reference manual and a set of practical guides. One of the primary goals of this repository is to provide the source files necessary to package the documentation into a `.chm` (Compiled HTML Help) file, which is the standard format for offline help in Windows environments.

### Key Features and Components

The documentation covers a vast array of GUI components and system utilities, including:

- **Standard UI Controls**: Detailed references for common elements like Buttons, Checkboxes, ComboBoxes, Labels, and EditBoxes.
- **Advanced Data Handling**: Extensive guides on the `GRID` and `BROWSE` controls, including specific methods for editing, color management, and handling nested clicks.
- **Printing Systems**: Documentation for multiple printing engines, including `TPrint`, `HBPrinter`, and `MiniPrint`. These sections include command references for drawing, font management, and print job configuration.
- **Class Hierarchy**: A dedicated 'Tree of Classes' (`TreeOfClasses.prg`) and associated documentation to help developers understand the object-oriented structure of the library.
- **Specialized Controls**: Support for modern UI features such as `ACTIVEX` integration, `ANIGIF` (animated GIFs), `IPADDRESS` controls, and `MONTHCALENDAR` pickers.

### Technical Architecture

The repository is organized into two main sections. The `manual` directory contains a massive collection of HTML files, each dedicated to a specific command or control within the OOHG ecosystem. This includes everything from low-level `BOSTAURUS` graphics functions to high-level `TAPPLICATION` management. The `english` directory contains Markdown-based guides that focus on specific implementation details, such as how to configure and use the library, maintenance tips, and deep dives into complex controls like the Grid.

### Getting Started and Maintenance

For developers looking to integrate OOHG into their workflow, the documentation provides clear instructions on installation and updates. It also includes build scripts (`BUILD_CON.HBP`, `BUILD_GUI.HBP`) that demonstrate how to compile projects using the Harbour project builder. 

Community involvement is a core tenet of the OOHG project. The documentation encourages contributors to help expand the manuals, emphasizing the importance of giving credit to authors and maintaining clear licensing (typically under the GPLv2 with Library Exception or CPOL). Whether you are looking for a specific command syntax or trying to understand the underlying class architecture, this repository is the definitive source of truth for OOHG development.
