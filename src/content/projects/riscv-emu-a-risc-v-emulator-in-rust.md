---
title: 'riscv-emu: A RISC-V Emulator in Rust'
summary: A RISC-V emulator written in Rust designed to run various operating systems
  including Linux, FreeRTOS, Zephyr, and NuttX. It provides comprehensive emulation
  for RV32/64 instruction sets and targets specific hardware platforms like the SiFive
  FE310 and FU540 SoCs.
slug: riscv-emu-a-risc-v-emulator-in-rust
codeUrl: https://github.com/HidenoriMatsubayashi/riscv-emu
star: 9
lastUpdated: '2023-06-17'
rtos: ''
topics:
- cpu
- emulator
- freertos
- linux
- nuttx
- risc-v
- rust-lang
isShow: false
createdAt: '2026-01-04'
updatedAt: '2026-01-04'
---

## Overview

`riscv-emu` is a high-performance RISC-V emulator developed in Rust, designed to bridge the gap between software development and hardware simulation. By leveraging Rust's memory safety and performance characteristics, the project provides a robust environment for testing and running various operating systems and bare-metal applications without requiring physical RISC-V hardware.

The emulator is particularly versatile, supporting a wide range of operating systems commonly found in the embedded and research space, including Linux, xv6, NuttX, FreeRTOS, and Zephyr. Its ability to target specific SoC architectures makes it a valuable tool for developers working on firmware and kernel-level code.

## Hardware and Architecture Support

The project implements a significant portion of the RISC-V specification, allowing it to handle complex software stacks. It supports both 32-bit and 64-bit architectures with the following instruction set extensions:

- **RV32/64I**: Base Integer Instruction Set
- **RV32/64M**: Standard Extension for Integer Multiplication and Division
- **RV32/64A**: Standard Extension for Atomic Instructions
- **RV32/64C**: Standard Extension for Compressed Instructions

Beyond the CPU, `riscv-emu` emulates critical SoC components and peripherals required for modern OS kernels. This includes support for virtual memory schemes like SV32 and SV39, which are essential for running Linux and xv6. The emulator also models specific hardware platforms:

- **SiFive FE310 (SiFive_e)**: Includes emulation of the UART, PRCI, GPIO, SPI Flash, and DTIM (SRAM).
- **SiFive FU540-C000 (SiFive_u)**: Includes the Core Local Interruptor (CLINT) for timers and the Platform-Level Interrupt Controller (PLIC).
- **QEMU Virt**: A generic virtual machine target supporting Virtio Disk and UART 16550, ideal for Linux and xv6 environments.

## Running Embedded Operating Systems

One of the standout features of `riscv-emu` is its pre-configured support for popular Real-Time Operating Systems (RTOS). Developers can easily boot images for:

- **FreeRTOS**: Running the RTOSDemo on a simulated SiFive_e machine.
- **Zephyr**: Executing Zephyr kernels on the SiFive_e target.
- **NuttX**: Supporting the NuttX RTOS on SiFive_e.
- **Linux**: Booting full Linux kernels using the Qemu_virt machine with Virtio disk support.

## Usage and Integration

The emulator is built using the Rust toolchain and can be compiled for desktop environments or the web. The desktop version provides a command-line interface where users can specify kernel images, device tree binaries (DTB), and filesystem images.

```bash
# Example: Running FreeRTOS on the emulated SiFive_e platform
../target/release/riscv_emu_desktop -k ../artifacts/freertos/RTOSDemo.elf -m SiFive_e
```

For those interested in regression testing, the project integrates with `riscv-tests`, ensuring that the instruction emulation remains compliant with the official RISC-V specifications. The project structure is organized into a workspace that includes the core emulation library, a desktop frontend, and a web-based implementation, showcasing the portability of the underlying Rust code.
