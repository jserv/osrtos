---
title: 'CMix-NN: Mixed Low-Precision CNN Library'
summary: CMix-NN is an open-source mixed-precision inference library designed for
  deploying quantized neural networks on ARM Cortex-M microcontrollers. It supports
  convolutional kernels with 2, 4, and 8-bit precision for inputs, weights, and outputs,
  enabling efficient Deep Learning on memory-constrained IoT edge devices.
codeUrl: https://github.com/EEESlab/CMix-NN
siteUrl: https://arxiv.org/abs/1905.13082
isShow: false
rtos: ''
libraries: []
topics:
- arm
- arm-cortex-m4
- arm-cortex-m7
- cmsis
- cmsis-nn
- cnn
- edge-ai
- edge-computing
- inference
- iot
- mixed-precision
- quantized-neural-networks
- stm32
- stm32f4
- stm32f7
- stm32h7
- stm32l4
- tinyml
---

Running deep learning inference at the edge is a transformative capability for IoT, but it faces a significant hurdle: the extreme resource constraints of Microcontroller Units (MCUs). Most MCUs feature less than 1 MB of RAM and lack hardware support for floating-point arithmetic. To bridge this gap, **CMix-NN** provides a specialized C inference library tailored for ARM Cortex-M targets, focusing on mixed-precision quantization to squeeze maximum performance out of minimal memory.

### The Challenge of Sub-Byte Quantization
While 8-bit quantization has become a standard for edge AI, many applications require even lower precision to fit within the FLASH and RAM limits of devices like the STM32 series. CMix-NN goes beyond standard 8-bit implementations by supporting heterogeneous mixed-precision. This allows developers to cut the number of bits for individual weight or activation tensors down to 4 or even 2 bits. By using sub-byte precision, the library minimizes accuracy drops while drastically reducing the memory footprint compared to full-precision or even standard 8-bit networks.

### Core Features and Capabilities
CMix-NN is designed to be flexible and highly optimized for the ARM Cortex-M architecture. Its primary strengths include:

*   **Flexible Bit-Widths**: Supports any combination of 2, 4, and 8-bit precision for inputs, outputs, and weights.
*   **Optimized Kernels**: Includes a vast array of pre-generated convolutional kernels, including standard HWC (Height-Width-Channel) convolutions and depthwise separable convolutions.
*   **Quantization Flavors**: Supports different quantization strategies such as Per-Layer (PL), Per-Channel (PC), and In-Channel Normalization (ICN).
*   **Hardware Targeting**: Specifically optimized for popular MCUs including the STM32H7, STM32F7, STM32L4, and STM32F4.

### Automated Code Generation
One of the most powerful aspects of the CMix-NN project is its inclusion of a code generation framework. Located in `scripts/codegen`, the library provides Python scripts (`cmix-nn-function-gen.py`) and templates that allow developers to generate specific C kernels based on their required bit-widths and quantization schemes. This ensures that the resulting binary only contains the code necessary for the specific model being deployed, further saving precious FLASH memory.

### Library Structure
The repository is organized to be easily integrated into existing ARM embedded projects:
*   **inc/**: Contains the public header files (`arm_cmixnn.h` and `arm_cmixnn_support.h`) which define the API for the mixed-precision functions.
*   **src/ConvolutionFunctions/**: A comprehensive collection of implementation files for various bit-width combinations (e.g., `arm_convolve_HWC_u2_u4_u8.c` for 2-bit input, 4-bit output, and 8-bit weights).
*   **scripts/codegen/**: The Python-based toolchain for generating custom kernels.

### Getting Started
To use CMix-NN, developers typically identify the required precision for each layer of their model and include the corresponding source files in their build system. The function signatures follow a convention similar to the well-known CMSIS-NN library, making it familiar to developers already working within the ARM ecosystem. For example, a 2-bit input/weight/output convolution is invoked via:

```c
arm_status arm_convolve_HWC_u2_u2_u2(
    const uint8_t *Im_in,
    const uint16_t dim_im_in_x,
    const uint16_t dim_im_in_y,
    const uint16_t ch_im_in,
    const uint8_t *wt,
    const uint16_t ch_im_out,
    const uint16_t dim_kernel_x,
    const uint16_t dim_kernel_y,
    const uint16_t padding_x,
    const uint16_t padding_y,
    const uint16_t stride_x,
    const uint16_t stride_y,
    const int32_t *bias,
    const uint16_t bias_shift,
    const uint16_t out_shift,
    uint8_t *Im_out,
    const uint16_t dim_im_out_x,
    const uint16_t dim_im_out_y,
    q15_t *bufferA,
    q7_t *bufferB
);
```

By providing these fine-grained controls over data types, CMix-NN enables the deployment of sophisticated models like MobileNet on devices that were previously considered too small for deep learning tasks.
