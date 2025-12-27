---
title: OOHG Distros
summary: A collection of build tools and Inno Setup scripts designed to automate the
  creation of offline distributions for the Object Oriented Harbour GUI (OOHG) libraries.
  It supports various compiler environments including MinGW and Borland C++ to package
  the core library for developers.
codeUrl: https://github.com/oohg/distros
siteUrl: https://github.com/oohg/core
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
star: 4
lastUpdated: '2025-09-09'
createdAt: '2025-12-27'
updatedAt: '2025-12-27'
---

The **OOHG Distros** project serves as the packaging and distribution hub for the Object Oriented Harbour GUI (OOHG) ecosystem. OOHG itself is a sophisticated library designed for the Harbour language—a modern, cross-platform compiler for the xBase language—allowing developers to create robust graphical user interfaces with an object-oriented approach. This specific repository, however, isn't the library code itself, but rather the machinery that turns that code into usable installers for the community.

### The Role of Distros in the OOHG Ecosystem

For any library to be successful, it needs to be easily accessible and installable. The OOHG Distros repository contains the logic required to build offline installers for different versions of the library and various compiler backends. By providing these tools, the project ensures that developers can get a consistent environment regardless of whether they are using MinGW (32-bit or 64-bit) or Borland C++ (BCC).

### Technical Implementation

The repository relies heavily on **Inno Setup**, a popular open-source script-based installer creator for Windows. You will find several `.iss` files tailored for specific configurations, such as:

*   `hb32mingw.iss`: For 32-bit MinGW environments.
*   `hb3464mingw.iss`: For 64-bit MinGW environments.
*   `xb55.iss` and `xb58.iss`: Likely targeting specific xBase or compiler versions.

To coordinate these scripts, the project uses `MakeDistro.bat`, a Windows batch file that orchestrates the build process. This script references exclusion lists like `MakeExclude.txt` to ensure that only the necessary binaries, headers, and documentation are included in the final package, keeping the distribution clean and lightweight.

### Supporting Multiple Compilers

One of the strengths of OOHG is its flexibility across different C compilers. The repository includes specific information files like `infoafter_bcc.txt` and `infoafter_mingw.txt`. These files likely contain post-installation instructions or environment configuration details specific to the Borland or MinGW toolchains, ensuring that once a user runs the installer, their development environment is correctly configured to link against the OOHG libraries.

### A Call for Automation

Currently, the project maintains a focus on improving the automation of these distribution tasks. As noted in the project documentation, the maintainers are actively seeking help to further streamline the creation of these distros. This makes it an excellent entry point for contributors who are familiar with Windows scripting, installer logic, or the Harbour language ecosystem. By contributing to this repository, developers help ensure that the wider OOHG community has reliable, up-to-date tools to build their applications.
