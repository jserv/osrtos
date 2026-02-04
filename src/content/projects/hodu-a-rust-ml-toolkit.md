---
title: 'Hodu: A Rust ML Toolkit'
summary: Hodu is a comprehensive machine learning toolkit for Rust that unifies tensor
  operations, model building, and deployment into a single ecosystem. It supports
  AOT compilation and cross-compilation for embedded targets like ARM Cortex-M, providing
  a streamlined path from prototyping to production on constrained hardware.
slug: hodu-a-rust-ml-toolkit
codeUrl: https://github.com/daminstudio/hodu
star: 107
version: v0.2.4
lastUpdated: '2025-12-19'
rtos: ''
topics:
- autograd
- deep-learning
- embedded
- gpu
- hodu
- machine-learning
- model
- neural-network
- rust
- tensor
- toolkit
isShow: true
createdAt: '2026-02-04'
updatedAt: '2026-02-04'
---

## Overview

Hodu (호두), meaning "walnut" in Korean, is a machine learning toolkit built entirely in Rust. It was developed to address the fragmentation often found in ML workflows, where developers typically juggle Python for training, ONNX for exchange, and C++ or platform-specific SDKs for deployment. Hodu unifies this pipeline, allowing developers to move from model definition to native binary deployment within a single language and ecosystem.

The project is designed with a focus on memory safety, zero-cost abstractions, and high-level usability. By leveraging Rust's ownership model, Hodu eliminates common deployment issues like memory leaks and data races, which are critical in embedded and real-time environments.

## Key Components

The Hodu ecosystem is divided into three primary packages:

### Hodu Lib
This is the core library providing a familiar, PyTorch-style API for tensor operations and neural network layers. It supports multiple data types (including specialized formats like `f8e4m3` and `bf16`) and allows operations to be captured into a computation graph for optimization. Notably, every kernel is implemented from scratch to avoid external ML runtime dependencies.

### Hodu CLI
The command-line interface serves as the Swiss Army knife for the toolkit. It enables users to run inference, convert between model formats, and perform Ahead-of-Time (AOT) compilation. For embedded developers, the `hodu build` command is particularly powerful, as it can generate native artifacts such as object files or static libraries for specific target triples.

### Hodu Plugin SDK
To remain extensible, Hodu utilizes a plugin architecture where backends and format loaders run as separate processes communicating via JSON-RPC. This allows the community to add support for new hardware backends or proprietary model formats without modifying the core library.

## Embedded and Hardware Support

Hodu is built to be highly portable. It supports various execution backends:
- **CPU**: Optimized linear algebra via OpenBLAS or standard SIMD kernels.
- **GPU**: Native acceleration through NVIDIA CUDA and Apple Metal.
- **Embedded**: Support for cross-compilation to targets such as `thumbv7em-none-eabihf` (ARM Cortex-M4/M7).

The toolkit's ability to compile models into native object files (`.o`) or static libraries (`.a`) makes it an excellent choice for integrating machine learning into firmware projects where a full Python runtime or heavy C++ engine is not feasible.

## Technical Implementation

At its core, Hodu manages tensors across different device memories. Users can switch between devices with a simple configuration change:

```rust
use hodu::prelude::*;

fn main() -> Result<(), Box<dyn std::error::Error>> {
    // Easily switch between Device::CPU, Device::CUDA(0), or Device::Metal
    set_runtime_device(Device::CPU);

    let a = Tensor::randn(&[2, 3], 0f32, 1.)?;
    let b = Tensor::randn(&[3, 4], 0f32, 1.)?;
    let c = a.matmul(&b)?;

    println!("{}", c);
    Ok(())
}
```

## Ahead-of-Time Compilation

One of Hodu's standout features for embedded systems is its AOT compilation capability. Using the CLI, a model snapshot (`.hdss`) can be compiled directly into a native artifact for a specific target:

```bash
# Cross-compile for an embedded target
$ hodu build model.hdss -o model.o -t thumbv7em-none-eabihf -f object
```

This approach allows for the deployment of highly optimized, standalone binaries that do not require a complex runtime environment, making it suitable for IoT devices, robotics, and edge computing applications.
