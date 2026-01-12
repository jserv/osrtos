---
title: STM32N6 Face Recognition System
summary: A real-time face detection and recognition system for the STM32N6570-DK development
  board. It utilizes the STM32N6's Neural Processing Unit (NPU) for hardware-accelerated
  AI inference using CenterFace and MobileFaceNet models, featuring multi-face tracking
  and ISP-processed camera input.
slug: stm32n6-face-recognition-system
codeUrl: https://github.com/PeleAB/STM32N6-FaceRecognition
star: 57
lastUpdated: '2025-07-29'
rtos: ''
topics:
- edge-ai
- face-recognition
- stm32
- stm32n6
isShow: false
createdAt: '2026-01-12'
updatedAt: '2026-01-12'
---

## High-Performance Embedded AI on STM32N6

The STM32N6 Face Recognition System is a sophisticated embedded application designed to showcase the capabilities of the STM32N6570-DK development board. By leveraging the on-chip Neural Processing Unit (NPU) and the Digital Camera Interface Pixel Pipeline (DCMIPP), the project achieves real-time face detection and recognition performance that was previously difficult to reach on traditional microcontrollers.

## Advanced AI Pipeline

The system implements a multi-stage AI pipeline that processes live video feed through two distinct neural networks:

*   **Face Detection**: Utilizing the CenterFace model (128x128 input), the system identifies face bounding boxes and keypoints. Thanks to NPU acceleration, this stage achieves an inference time of approximately 9ms, enabling a detection rate of roughly 17 FPS including preprocessing.
*   **Face Recognition**: Once a face is detected and cropped, it is passed to a MobileFaceNet model. This model generates 128-dimensional embeddings used for identity verification via cosine similarity. The recognition stage is optimized for INT8 quantization, running in about 120ms on the NPU.

## Intelligent Multi-Face Tracking

One of the standout features of this project is its robust multi-face tracking implementation. To solve the common problem of similarity "jumps" when multiple people are in the frame, the system employs a tracking context that manages up to three simultaneous faces. 

Key tracking mechanisms include:
*   **Intersection over Union (IoU)**: Used to match detections across frames and maintain consistent Face IDs.
*   **Similarity Voting**: Each tracked face maintains its own similarity history buffer, preventing cross-contamination between different individuals.
*   **Primary Face Selection**: The system uses hysteresis-based logic to select a primary face for recognition, ensuring stable visual feedback and reducing jitter in the UI.

## Hardware-Accelerated Architecture

The project is built around the STM32N6's advanced hardware blocks. The camera input is handled by the DCMIPP, which uses dual pipes: one for continuous LCD display and a second snapshot pipe for AI inference. The Image Signal Processor (ISP) provides automatic enhancement based on lighting conditions, ensuring the AI models receive high-quality input regardless of the environment.

The software architecture follows a clear state machine consisting of Search, Verify, and Track states. This allows the system to efficiently scan for faces, perform deep recognition only when necessary, and maintain a high-speed tracking loop for verified identities.

## Development and Deployment

Developed using STM32CubeIDE and the STEdgeAI toolchain, the project provides a complete workflow for model deployment. It includes scripts for converting TFLite and ONNX models into NPU-optimized code and binaries. The system also supports a PC streaming interface via UART, allowing for remote monitoring and control through a Python-based GUI.

For developers looking to explore the STM32N6 platform, the repository includes comprehensive documentation covering the boot process, memory layout (utilizing 128MB of external PSRAM), and coding standards for high-performance embedded C development.
