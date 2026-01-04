---
title: Zephyr Programming Language
summary: A programming language designed to compile to WebAssembly with a focus on
  portable runtime interfaces. It allows the same code to run across diverse environments,
  from CLI and web browsers to embedded systems like Arduino, by abstracting environment-specific
  implementations.
slug: zephyr-programming-language
codeUrl: https://github.com/CharlyCst/zephyr
star: 12
version: v0.0.1
lastUpdated: '2021-04-10'
rtos: ''
topics:
- language
- programming-language
- wasm
- webassembly
- zephyr
isShow: false
createdAt: '2026-01-04'
updatedAt: '2026-01-04'
---

## Overview

Zephyr is a programming language specifically designed to compile to WebAssembly (Wasm). While many languages can target Wasm, Zephyr distinguishes itself by introducing the concept of `runtime interfaces` as a core language feature. This architectural choice is intended to solve a common problem in the WebAssembly ecosystem: how to write portable code that behaves correctly across vastly different runtimes.

The project is currently a work in progress, implemented primarily in Rust, and provides a toolchain for compiling Zephyr source files into Wasm modules. It aims to empower developers to write logic once and deploy it anywhere a Wasm runtime exists, whether that is a high-powered server, a web browser, or a resource-constrained microcontroller.

## The Power of Runtime Interfaces

The central philosophy of Zephyr is that the behavior of fundamental operations, such as printing text or accessing hardware, should be determined by the environment rather than hardcoded into the compiler or standard library. 

For example, a `print` function in Zephyr doesn't have a single fixed implementation. Instead, Zephyr defines a standard `Printer` interface. When compiling for a Command Line Interface (CLI), the implementation might target `stdout`. When targeting a web browser, it might map to `console.log`. Crucially for the embedded space, the same code could be linked against an implementation that writes to an LCD screen or sends logs over a serial wire on an Arduino. This allows developers to extend the language's capabilities to new hardware without needing to modify the compiler itself.

## Technical Architecture and Syntax

Zephyr's syntax and grammar are designed for clarity and ease of use, drawing inspiration from modern languages like Rust and Go. It features a recursive descent parser and a type system built on top of WebAssembly's native types.

### Type System
Zephyr currently supports several built-in types that map directly to Wasm primitives:
- `i32` and `i64` (integers)
- `f32` and `f64` (floating point)
- `bool` (boolean)

Functions are treated as composite types, and the language is evolving to include support for structs, tuples, and sum types. It also includes a built-in memory allocator to handle dynamic data within the Wasm linear memory space.

### Grammar and Structure
The language uses a package-based system. A typical program defines a package, imports necessary interfaces (like WASI), and exposes functions to the runtime. Interestingly, Zephyr does not require explicit semicolons; instead, it employs a scanner that inserts them following rules similar to the Go programming language.

## Getting Started

To use Zephyr, developers typically clone the repository and use the Rust-based compiler (`zephyrc`). The compilation process generates a `.wasm` file that can be executed by any standard WebAssembly runtime, such as Wasmtime.

```rust
standalone package hello

use std.r.wasi

expose hello as _start

fun hello() {
    wasi.print("Hello, world!\n")
}
```

In this example, the code uses the `wasi` (WebAssembly System Interface) implementation of a runtime interface to print to the console. By swapping the `use` statement or providing a different implementation at link-time, the same `hello` logic could be redirected to different hardware outputs.

## Project Status

Zephyr is in early development. While core features like type inference, the package system, and the memory allocator are functional, several advanced features such as automatic memory management, full struct support, and sum types are currently under development. The project represents an experimental approach to making WebAssembly a truly universal target for cross-platform and embedded development.
