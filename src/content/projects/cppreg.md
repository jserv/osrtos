---
title: cppreg
summary: cppreg is a header-only C++11 library designed to simplify and secure memory-mapped
  I/O (MMIO) register manipulation in embedded systems. It provides an expressive,
  type-safe syntax that eliminates common errors like bit-shifting mistakes or invalid
  access to read-only fields, all while maintaining performance parity with traditional
  C implementations.
codeUrl: https://github.com/nicocvn/cppreg
isShow: false
rtos: ''
libraries: []
topics:
- cmsis
- cpp
- mcu
- register
lastUpdated: '2025-12-27'
createdAt: '2025-12-27'
updatedAt: '2025-12-27'
---

In the world of embedded systems, interacting with hardware often means wrestling with memory-mapped I/O (MMIO) registers. Traditionally, this is done using C-style macros, bitwise shifts, and masks—a process that is notoriously error-prone and difficult to read. `cppreg` is a header-only C++11 library that aims to modernize this workflow, providing a type-safe and expressive way to manipulate hardware registers without sacrificing performance.

### The Problem with Traditional Register Access

Most embedded developers are familiar with code that looks like this:

```c
// Enable the PLL as source for MCGCLKOUT
MCG->C6 |= (1u << MCG_C6_PLLS_SHIFT);

// Wait for the MCG to use the PLL as source clock
while ((MCG->S & MCG_S_PLLST_MASK) == 0)
    __NOP();
```

While functional, this approach has several drawbacks. The intent is buried under bitwise logic, requiring constant reference to the MCU's manual. It is also dangerous: a single missing `|` in an `|=` operation can lead to hours of debugging. Furthermore, there is no compile-time protection against writing to read-only fields or overflowing a field's bit-width.

### Modernizing Register Manipulation

`cppreg` solves these issues by leveraging C++11 features to create a high-level abstraction over raw memory. It allows developers to define registers and fields with specific access policies (such as read-only or read-write). This ensures that ill-defined operations are caught by the compiler rather than failing silently at runtime.

Key features of the library include:
- **Expressive Syntax**: Code clearly shows the intent, making it easier to maintain and review.
- **Zero Overhead**: When compiler optimizations are enabled, `cppreg` generates assembly that is on par with, or sometimes better than, traditional CMSIS C code.
- **Compile-time Safety**: Detects field overflows and invalid access patterns during the build process.
- **Mocking for Testing**: Because the register memory is abstracted, it can be easily mocked, allowing for unit testing of low-level drivers on a host machine.

### Performance and Efficiency

A common concern when moving from C to C++ in embedded environments is the "C++ tax"—the fear that abstractions will lead to bloated binaries and slower execution. `cppreg` was designed specifically to address this. By using template metaprogramming and inline functions, the library ensures that the abstraction exists only in the source code. The generated machine code remains a series of efficient load, mask, and store instructions.

### Requirements and Hardware Support

`cppreg` is designed to be hardware-agnostic. It works on any platform where:
- MMIO register sizes are integral numbers of bytes (e.g., 8, 16, 32, or 64 bits).
- Registers are properly aligned (e.g., a 32-bit register is aligned on a 32-bit boundary).

The library is compatible with GCC 4.8+ and Clang 3.3+. Since it is a header-only library, integration is as simple as including the headers in your project and ensuring your compiler is set to C++11 mode or higher.

### Project Structure

The repository is organized into several logical components:
- **Policies**: Defines `AccessPolicy.h` to enforce read/write permissions.
- **Register**: Contains the core logic for `Field`, `Mask`, `Memory`, and `Register` abstractions.
- **Single**: Provides a convenient `cppreg-all.h` header for quick integration.

By moving away from brittle macros and embracing the type safety of modern C++, `cppreg` allows embedded developers to write more robust, readable, and maintainable firmware without giving up the performance that hardware-level programming demands.
