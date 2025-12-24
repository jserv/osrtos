---
title: Hubris
slug: hubris
version: sidecar-v1.0.32
codeUrl: https://github.com/oxidecomputer/hubris
siteUrl: https://github.com/oxidecomputer/hubris
date: '2023-08-20'
lastUpdated: '2024-12-26'
star: 3062
components: []
libraries: []
licenses:
- MPL-2.0 license
platforms:
- ARM
summary: Hubris is an open-source operating system designed for deeply-embedded computer
  systems. Developed by Oxide Computer Company, it's an all-Rust system that focuses
  on security, robustness, and efficiency for embedded systems.
---

### Features

- **All-Rust System**: Hubris is developed entirely in the Rust programming language, ensuring memory safety and concurrency.
- **Microkernel-based**: This design allows for enhanced safety and isolation between tasks.
- **Strictly Synchronous Task Model**: Simplifies development and comprehension.
- **Static Task Specification**: Tasks for a specific application are fully specified at build time, eliminating dynamic resource exhaustion issues.
- **Memory Protection**: Even in memory-safe languages like Rust, Hubris ensures memory protection, with tasks, the kernel, and drivers all in separate protection domains.