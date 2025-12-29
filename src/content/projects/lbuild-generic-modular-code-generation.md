---
title: 'lbuild: Generic, Modular Code Generation'
summary: A Python-based tool for describing and generating modular codebases using
  Jinja2 templates. It provides a structured way to manage dependencies, configurable
  options, and file generation for complex embedded projects like modm and OUTPOST.
slug: lbuild-generic-modular-code-generation
codeUrl: https://github.com/modm-io/lbuild
star: 41
lastUpdated: '2023-11-18'
rtos: ''
topics:
- jinja2
- jinja2-templates
- lbuild
- modm
- python
isShow: false
createdAt: '2025-12-29'
updatedAt: '2025-12-29'
---

## Overview

The Library Builder, or **lbuild**, is a modular code generation tool written in Python 3. It is designed to manage repositories containing multiple modules that can copy or generate files based on user-provided data and configuration options. By splitting complex code generation projects into smaller, manageable modules, lbuild provides a transparent system for discovery, documentation, and dependency management.

While lbuild is a general-purpose tool, it is deeply rooted in the embedded systems ecosystem. It serves as the core generation engine for projects like **modm**, which generates Hardware Abstraction Layers (HAL) for thousands of microcontroller variants, and **OUTPOST**, an execution platform for mission-critical spacecraft software.

## Core Concepts

lbuild operates on a hierarchical structure of repositories and modules. A repository acts as a container for modules, and each module can define its own options, submodules, and build logic. The system uses a unique naming convention (e.g., `repo:module:option`) to resolve identifiers across the project tree.

### The Build Lifecycle

Each lbuild repository and module follows a specific execution order to ensure that dependencies are resolved and configurations are validated before any files are written to disk:

1.  **init**: Sets the name and basic description of the node.
2.  **prepare**: Discovers submodules and defines configurable options based on the current repository state.
3.  **validate**: An optional step to perform heavy computations or input validation, ensuring the configuration is sane before the build starts.
4.  **build**: The primary step where file operations occur, such as copying static files or rendering Jinja2 templates.
5.  **post_build**: A final step allowing modules to access the global build log, useful for generating build scripts (like Makefiles or SCons scripts) that need a complete list of all generated files.

## Configuration and Discovery

lbuild projects are typically configured using a `project.xml` file. This file declares which repositories to scan, which modules to include, and how to set specific options. 

```xml
<library>
  <repositories>
    <repository><path>path/to/repo.lb</path></repository>
  </repositories>
  <options>
    <option name="modm:target">stm32f407vgt</option>
  </options>
  <modules>
    <module>modm:platform:can</module>
  </modules>
</library>
```

One of lbuild's most powerful features is its command-line interface for discovery. Developers can query a repository to see available modules and their documentation directly from the terminal:

```bash
$ lbuild -r repo.lb discover
Parser(lbuild)
╰── Repository(modm @ ../modm)
    ├── Option(target) = REQUIRED
    ├── Module(modm:build)
    ╰── Module(modm:platform)
```

## Flexible Templating with Jinja2

At its heart, lbuild leverages the **Jinja2** templating engine. This allows developers to write template files (e.g., `.hpp.in` or `.cpp.in`) that are dynamically populated with configuration values during the build process. This is particularly useful in embedded development for generating register maps, peripheral configurations, or interrupt vectors that vary between different hardware targets.

## Real-World Applications

lbuild is the foundation for several sophisticated embedded frameworks:

*   **modm**: Uses lbuild to manage a data-driven pipeline that generates HALs for ARM Cortex-M and AVR microcontrollers.
*   **Taproot**: A control library and framework for RoboMaster robots.
*   **OUTPOST**: An open modular software platform for spacecraft, utilizing lbuild to assemble execution platforms for mission-critical environments.

By providing a standardized way to handle modularity and code generation, lbuild allows embedded developers to focus on hardware logic rather than the complexities of managing thousands of file variations.
