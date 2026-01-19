---
title: 'HARP-NeXt: High-Speed and Accurate Range-Point Fusion Network for 3D LiDAR
  Semantic Segmentation'
summary: HARP-NeXt is a high-speed deep learning framework designed for 3D LiDAR semantic
  segmentation, optimized for both high-end GPUs and embedded platforms like the NVIDIA
  Jetson AGX Orin. It utilizes a novel range-point fusion backbone and the Conv-SE-NeXt
  block to achieve real-time performance while maintaining high accuracy on benchmarks
  like nuScenes and SemanticKITTI.
slug: harp-next-high-speed-and-accurate-range-point-fusion-network-for-3d-lidar-semantic-segmentation
codeUrl: https://github.com/SamirAbouHaidar/HARP-NeXt
siteUrl: https://docs.nvidia.com/deeplearning/frameworks/install-pytorch-jetson-platform/index.html
star: 12
lastUpdated: '2025-12-22'
rtos: ''
topics:
- artificial-intelligence
- deep-learning
- embedded-systems
- lidar-point-cloud
- robotics
- semantic-segmentation
isShow: false
createdAt: '2026-01-19'
updatedAt: '2026-01-19'
---

## Overview

HARP-NeXt (High-Speed and Accurate Range-Point Fusion Network) is a state-of-the-art deep learning architecture designed for 3D LiDAR semantic segmentation. Developed for real-time robotics and autonomous driving applications, the project addresses the critical challenge of balancing high-resolution spatial understanding with the strict latency requirements of embedded hardware. 

LiDAR semantic segmentation is essential for autonomous systems to understand their surroundings by labeling every point in a 3D point cloud. While many existing models achieve high accuracy, they often require massive computational resources that are unavailable on mobile or embedded platforms. HARP-NeXt bridges this gap by introducing a novel pre-processing methodology and an efficient feature extraction block that significantly reduces computational overhead without sacrificing precision.

## Technical Architecture

The core of HARP-NeXt lies in its multi-scale range-point fusion backbone. This architecture leverages information at multiple abstraction levels to preserve essential geometric details. Key technical components include:

- **Conv-SE-NeXt Block**: A custom feature extraction block designed to capture complex representations efficiently. It avoids the need for deep layer stacking within each network stage, which typically slows down inference.
- **Range-Point Fusion**: By combining range-view representations (which are computationally efficient) with point-based features (which preserve 3D geometry), the network achieves a superior balance of speed and accuracy.
- **Optimized Pre-processing**: The project implements a methodology that minimizes the initial data handling bottleneck, allowing the model to ingest LiDAR data faster.

## Embedded Performance and Hardware Support

A standout feature of HARP-NeXt is its performance on embedded systems. While it achieves a blistering 100 FPS on an NVIDIA RTX 4090 GPU, it is specifically optimized for the **NVIDIA Jetson AGX Orin** platform. On the Jetson AGX Orin, the model delivers near real-time performance, making it a viable candidate for deployment on actual robotic platforms and autonomous vehicles where power and space are limited.

The project supports execution on both CPU and GPU for pre-processing, configurable via YAML files. It is built on PyTorch and utilizes CUDA for hardware acceleration, with specific installation paths provided for JetPack-based environments (L4T).

## Benchmarks and Results

HARP-NeXt has been rigorously tested on industry-standard datasets:
- **nuScenes**: Achieves high mIoU (Mean Intersection over Union) with significantly fewer parameters (5.4M) compared to models like Cylinder3D (55.9M) or SPVCNN (21.8M).
- **SemanticKITTI**: Demonstrates robust performance across diverse outdoor environments.

## Getting Started

The repository provides a complete pipeline for training and evaluation. It includes configurations for different datasets and hardware targets. For embedded users, the project outlines a specific workflow using Python virtual environments on Jetson platforms to manage dependencies like `torch-scatter` and specialized PyTorch builds for AArch64 architecture.

```python
# Example of running evaluation on nuScenes
python main.py \
--net harpnext \
--dataset nuscenes \
--path_dataset /path/to/nuscenes \
--mainconfig ./configs/main/main-config.yaml \
--netconfig ./configs/net/harpnext-nuscenes.yaml \
--log_path ./pretrained/harpnext-nuscenes-32x480 \
--gpu 0 \
--fp16 \
--eval
```

By providing pre-trained weights and detailed configuration files, HARP-NeXt allows researchers and engineers to quickly integrate high-performance 3D perception into their embedded robotics stacks.
