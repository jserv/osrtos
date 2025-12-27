---
title: Cross-Compiling MiniGUI
summary: A dedicated build system and collection of scripts designed to simplify the
  cross-compilation of the MiniGUI library and its dependencies. It provides automated
  workflows for targeting HiSilicon Hi35xx SoCs and Ubuntu-based development environments.
codeUrl: https://github.com/gnsyxiang/cross-compiling-minigui
isShow: false
rtos: ''
libraries: []
topics:
- build-minigui
- cross-compile
- cross-minigui
- hi3536
- minigui
- minigui-5-0-3
---

Building graphical user interfaces for embedded systems often involves navigating complex dependency chains and cross-compilation toolchains. The **cross-compiling-minigui** project addresses this challenge by providing a structured environment to build MiniGUI, a popular lightweight graphics system, along with its essential third-party libraries.

### Project Overview

This repository acts as a wrapper and build orchestrator. Instead of manually configuring and compiling every component, developers can use the provided shell scripts to automate the process. The project is organized into several key directories:

*   **shell/**: Contains platform-specific configuration scripts. This includes `platform.sh` for selection, `hi35xx.sh` for HiSilicon platforms, and `ubuntu.sh` for local Linux builds.
*   **3rd_party/**: Manages the compilation of essential dependencies including `zlib`, `libpng`, `jpegsrc`, and `freetype`.
*   **minigui/**: Handles the core `libminigui` and `minigui-res` (resource) components.
*   **example/**: Provides a `hello_world` demonstration to verify the build and deployment.

### Targeted Platforms

The project primarily targets two environments:
1.  **Ubuntu**: Useful for local development and testing. On Ubuntu, the system typically uses native third-party libraries, focusing only on building MiniGUI and the examples.
2.  **HiSilicon Hi35xx**: A common family of SoCs used in IP cameras and DVRs. For this platform, the scripts handle the full cross-compilation of all third-party dependencies using the appropriate toolchain.

### Getting Started

The build process is driven by the `build_all.sh` script. Before running it, users must configure their target platform in `shell/platform.sh`. If targeting an embedded system, you must specify the path to your cross-compilation toolchain.

To perform a full build for the selected platform, simply run:

```bash
./build_all.sh
```

You can also build specific modules individually:

```bash
./build_all.sh 3rd_party
./build_all.sh minigui
./build_all.sh example
```

### Configuration and Troubleshooting

One of the most common issues when running MiniGUI applications is locating the configuration and resource files. The project documentation highlights that if you encounter errors like `Can not locate your MiniGUI.cfg file`, you need to export the configuration path:

```bash
export MG_CFG_PATH=../etc
./mginit
```

Furthermore, if resource files (like cursors or fonts) are not found, you may need to edit the `MiniGUI.cfg` file to point to the correct absolute paths on your target filesystem:

```ini
[cursorinfo]
cursorpath=/usr/local/share/minigui/res/cursor/

[resinfo]
respath=/usr/local/share/minigui/res/
```

By centralizing these configurations and providing a unified build entry point, this project significantly lowers the barrier to entry for developers looking to implement MiniGUI on HiSilicon hardware or standard Linux distributions.
