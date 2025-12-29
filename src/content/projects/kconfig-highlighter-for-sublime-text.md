---
title: Kconfig Highlighter for Sublime Text
summary: A syntax highlighting script for Sublime Text 3 that supports the Kconfig
  configuration language. It provides visual formatting for keywords, types, and menu
  attributes used in Linux-style build configuration systems often found in embedded
  development.
slug: kconfig-highlighter-for-sublime-text
codeUrl: https://github.com/fallrisk/Kconfig-Highlighter
star: 4
version: v0.5.0
lastUpdated: '2016-09-15'
rtos: ''
topics:
- kconfig
- kconfig-language
- linux
- zephyr
- zephyros
isShow: false
createdAt: '2025-12-29'
updatedAt: '2025-12-29'
---

Kconfig is the configuration language used by the Linux kernel and many modern Real-Time Operating Systems (RTOS) like Zephyr, NuttX, and AliOS Things. Managing complex configuration files can be challenging without proper visual aids. The Kconfig Highlighter project provides a syntax highlighting solution for Sublime Text 3, making it significantly easier for embedded developers to navigate and edit these files.

## Overview

The highlighter covers a wide range of Kconfig syntax elements. It identifies core menu entries such as `config`, `menuconfig`, `choice`, and `source`. It also provides distinct coloring for type definitions like `bool`, `tristate`, `string`, `hex`, and `int`. Beyond basic types, the script recognizes menu attributes including `default`, `prompt`, `depends on`, and `select`, as well as flow control keywords like `if` and `endif`. It even includes support for help text blocks and numeric values in both decimal and hexadecimal formats.

## Development Workflow

One of the interesting aspects of this project is its development workflow. The source of truth is a YAML-based definition (`Kconfig.YAML-tmLanguage`). This file is designed to be more human-readable and maintainable than the standard XML-based Property List format. 

To generate the final highlighter, developers use the PackageDev tool within Sublime Text to convert the YAML file into the standard `.tmLanguage` format. This process involves:
- Editing the `Kconfig.YAML-tmLanguage` file.
- Using the "Convert to Property List" build tool (accessible via F7).
- Verifying the syntax highlighting visually against a sample Kconfig file.

## Technical Implementation

The highlighter uses regular expressions to match Kconfig patterns. For example, it identifies help text by looking for the `help` keyword followed by a newline and capturing the subsequent indented block until it encounters a new `config` entry. It also handles case-insensitive matching for many keywords, ensuring compatibility with various Kconfig styles.

For developers working on firmware, kernel modules, or RTOS-based applications, having accurate syntax highlighting for Kconfig files is essential. It helps prevent syntax errors in configuration logic and improves the overall readability of the build system's configuration layer, which is critical for managing the feature sets of resource-constrained embedded devices.
