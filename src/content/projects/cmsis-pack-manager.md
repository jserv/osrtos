---
title: cmsis-pack-manager
summary: A Python module and Rust crate for managing CMSIS-Pack device information,
  providing access to processor types, flash algorithms, and memory layouts. It serves
  as a foundational tool for embedded debuggers and IDEs to support a vast array of
  microcontrollers.
codeUrl: https://github.com/pyocd/cmsis-pack-manager
siteUrl: https://pyocd.github.io/cmsis-pack-manager/
isShow: false
rtos: ''
libraries: []
topics:
- arm
- cmsis
- python
- rust-crate
lastUpdated: '2025-12-27'
createdAt: '2025-12-27'
updatedAt: '2025-12-27'
---

The CMSIS-Pack standard is a cornerstone of the ARM microcontroller ecosystem, providing a unified way for silicon vendors to distribute device support, including flash programming algorithms, memory maps, and peripheral descriptions. However, parsing and managing these XML-heavy packages can be a daunting task. Enter `cmsis-pack-manager`, a high-performance solution designed to simplify this process for developers and tool creators.

`cmsis-pack-manager` is a multi-faceted project. At its core, it is a Rust crate (`cmsis-pack`) that handles the heavy lifting of downloading, parsing, and indexing CMSIS-Packs. Surrounding this core is a Foreign Function Interface (FFI) layer and a Python module, making the functionality accessible to the wide world of Python-based embedded tools. This architecture allows it to provide the performance of a compiled language with the ease of use of a scripting language.

### Why it Matters
For tools like `pyocd`, having a reliable way to discover device capabilities is essential. Instead of hardcoding support for every new MCU, `cmsis-pack-manager` allows tools to dynamically query the necessary metadata. Whether you need to know the start address of a flash bank, the specific ARM core inside a chip, or the location of a SVD file, this library provides the answers through a clean API.

### Key Components
The repository is structured as a Rust workspace containing several specialized crates:
- **cmsis-pack**: The core logic for managing packs, handling XML parsing and local storage.
- **cmsis-cffi**: The interface layer that exposes Rust functionality to C and Python.
- **cmsis-cli**: A command-line utility for manual pack management and testing.
- **cmsis_pack_manager**: The Python package that wraps the Rust logic for seamless integration into Python environments.

### Getting Started
Building the project requires a stable Rust compiler. For Python users, generating a binary wheel is straightforward using standard tools:

```bash
pip wheel .
```

Alternatively, using `maturin` provides a process closer to the official release builds:

```bash
pip install maturin cffi
maturin build
```

For those who prefer the command line, the `cmsis-cli` allows for quick updates and queries. For example, to update the local pack index from the Rust workspace:

```bash
cargo run -p cmsis-cli -- update
```

### Technical Excellence
By leveraging Rust, `cmsis-pack-manager` ensures memory safety and high performance when processing large volumes of XML data. It utilizes `roxmltree` for efficient parsing, `serde` for serialization, and `tokio` with `reqwest` for handling asynchronous pack downloads. The project also includes a robust CI pipeline that builds wheels for Linux, macOS, and Windows, ensuring broad compatibility across all major development environments.
