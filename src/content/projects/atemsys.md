---
title: atemsys
summary: A Linux kernel module providing usermode access to PCI configuration space,
  device IO memory, contiguous DMA memory, and interrupts. It is specifically designed
  to optimize the performance of real-time Ethernet drivers used in EtherCAT Master
  and Simulation software.
codeUrl: https://github.com/acontis/atemsys
siteUrl: https://www.acontis.com/en/ethercat-master.html
isShow: false
rtos: ''
libraries: []
topics:
- ec-master
- ec-simulator
- ethercat
- ethercat-master
- industrial-automation
- linux
- performance
- realtime
- xenomai
---

The `atemsys` kernel module is a specialized utility designed to bridge the gap between the Linux kernel and userspace applications requiring high-performance hardware access. Developed by acontis technologies, it serves as a critical component for the EtherCAT Master Stack (EC-Master) and EtherCAT Network Simulation (EC-Simulator) by granting direct hardware control to userspace drivers without the overhead typically associated with standard kernel-to-user transitions.

### Core Capabilities

At its heart, `atemsys` provides a set of interfaces that allow a userspace process to interact with hardware as if it were running in kernel mode. This is achieved by providing access to:
- **PCI Configuration Space**: Allowing userspace applications to identify and configure PCI devices.
- **Device IO Memory**: Mapping hardware registers directly into the process's address space.
- **Contiguous DMA Memory**: Allocating physical memory blocks that are contiguous, which is essential for high-speed DMA transfers used by Ethernet controllers.
- **Device Interrupts**: Handling single device interrupts and signaling them to userspace (note: shared interrupts are not supported).

### Architecture and Integration

In a typical real-time Linux environment, `atemsys` acts as the low-level hardware abstraction layer. By moving the Ethernet driver logic into userspace while keeping the hardware access secure and efficient through the kernel module, developers can achieve lower latency and higher throughput for EtherCAT communication. This architecture is particularly beneficial for systems where standard Linux networking stacks introduce too much jitter or latency for industrial automation requirements.

### Installation and Cross-Compilation

Building `atemsys` is straightforward for standard Linux environments. It uses a standard Kbuild-based Makefile. For native builds, the process is as simple as:

```bash
make modules
sudo insmod atemsys.ko
```

For embedded developers working with ARM or ARM64 targets, `atemsys` supports cross-compilation. This requires pointing the build system to the target kernel headers and specifying the architecture and cross-compiler prefix:

```bash
make ARCH=arm64 CROSS_COMPILE=aarch64-linux-gnu- KERNELDIR=<path_to_target_kernel_dir> modules
```

### Advanced Device Tree Usage

One of the more powerful features of `atemsys` is its ability to function as a device tree-based platform device driver. This is particularly useful for modern SoC (System on Chip) designs where Ethernet controllers are integrated directly into the silicon rather than sitting on a PCI bus. 

By modifying the device tree, developers can assign an Ethernet MAC directly to `atemsys`. This allows the module to handle complex power management behaviors and PHY configurations that the userspace EC-Master might not support natively. An example device tree node configuration looks like this:

```dts
ethernet@02188000 {
  compatible = "atemsys";
  atemsys-Ident = "FslFec";
  atemsys-Instance = <0x1>;
  reg = <0x2188000 0x4000>;
  status = "okay";
  // ... other platform specific properties
};
```

This configuration tells the Linux kernel to bind the `atemsys` driver to the specified Ethernet hardware, enabling the acontis Real-time Ethernet Driver to take control of the port with minimal friction. This approach is highly effective for separating MDIO buses between Linux and the real-time stack in multi-port systems.
