---
title: Object Oriented Harbour GUI (OOHG)
summary: Object Oriented Harbour GUI (OOHG) is a framework for developing Windows
  applications using the Harbour or xHarbour compilers. It provides an object-oriented
  wrapper for Microsoft's Common Controls, allowing developers to create native desktop
  interfaces with ease.
codeUrl: https://github.com/oohg/core
siteUrl: http://www.teycen.com/pages/minigui/programas_harbour.php
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
lastUpdated: '2025-12-27'
createdAt: '2025-12-27'
updatedAt: '2025-12-27'
---

## Introduction to OOHG

Object Oriented Harbour GUI, commonly known as OOHG, is a powerful graphical interface library designed for developers working with the Harbour and xHarbour programming languages. Harbour is a modern, open-source compiler for the xBase language (originally Clipper), and OOHG extends its capabilities into the realm of modern Windows desktop application development.

The primary goal of OOHG is to provide a seamless way to build applications that are consistent with the Microsoft Windows "Common Controls" look and feel. By utilizing an object-oriented approach, it abstracts the complexities of the Windows API, allowing developers to focus on application logic and user experience rather than low-level window management.

## Key Features and Architecture

OOHG is built around a comprehensive set of header files and command definitions that map Harbour code to Windows GUI elements. The repository's `include` directory reveals a vast array of supported controls and functionalities, including:

- **Standard UI Elements**: Buttons, Checkboxes, Labels, and Textboxes.
- **Advanced Data Handling**: Grids, Listboxes, and Browse controls for managing large datasets.
- **Specialized Pickers**: Datepickers, Month calendars, and Color seekers.
- **Multimedia and Graphics**: Support for images, graphs, and even animated GIFs via specialized headers like `i_anigif.ch` and `i_graph.ch`.
- **System Integration**: Registry access, INI file handling, and shell execution capabilities.

The project is designed to be modular. While the `core` repository contains the essential library files, the OOHG ecosystem includes dedicated repositories for an Integrated Development Environment (IDE), code formatters, and extensive samples to help developers get up to speed quickly.

## Technical Requirements and Setup

To use OOHG, developers typically need a Windows environment (Windows 7 or later) and a compatible C compiler. Supported compilers include:
- MinGW
- Borland C++ (BCC)
- Pelles C
- Visual Studio

The library is intended to be installed in a specific directory structure (usually `C:\OOHG`) to ensure that the provided build scripts work correctly. The repository includes several batch files for compiling applications and the library itself, such as `compile_MINGW.BAT` and `compile_bcc.bat`. These scripts automate the process of linking the Harbour code with the OOHG library and the underlying C compiler.

## Community and Ecosystem

OOHG is a community-driven project with a long history, evidenced by the extensive list of contributors and detailed changelogs spanning several versions. For developers seeking assistance, there is an active users group hosted on Google Groups, and comprehensive documentation is maintained in a separate repository. 

Whether you are migrating a legacy Clipper application to Windows or building a new desktop tool from scratch using the xBase language, OOHG provides the necessary infrastructure to create professional, native-looking applications with minimal overhead.
