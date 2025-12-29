---
title: 'Cryptography Technology and IoT Security: mbedtls in Practice'
summary: 'A comprehensive resource and code repository for the book ''Cryptography
  Technology and IoT Security: mbedtls in Practice''. It provides practical examples,
  performance analysis, and implementation details for cryptographic algorithms, TLS/DTLS
  protocols, and CoAPs specifically optimized for embedded systems and IoT hardware.'
slug: cryptography-technology-and-iot-security-mbedtls-in-practice
codeUrl: https://github.com/iotwuxi/iot_security
star: 160
lastUpdated: '2023-03-08'
rtos: ''
topics:
- coaps
- cryptography
- dtls
- mbedtls
- tls
- zephyr
isShow: false
createdAt: '2025-12-29'
updatedAt: '2025-12-29'
---

## Overview

This repository serves as the official code companion for the book *Cryptography Technology and IoT Security: mbedtls in Practice* (《密码技术与物联网安全:mbedtls实战》). Developed by experts from Alibaba IoT and Tsinghua University, the project aims to bridge the knowledge gap between embedded engineering and modern web security. It provides a practical, hands-on approach to implementing robust security measures on resource-constrained IoT devices using the mbedtls library.

## Key Features

The project is designed with the specific constraints of embedded systems in mind, focusing on both theoretical foundations and practical implementation. Key highlights include:

- **Comprehensive Cryptographic Coverage**: Includes examples for Hash functions, AES (including CCM and GCM modes), Message Authentication Codes (MAC), Random Number Generators (RNG), RSA, Diffie-Hellman (DH), and Elliptic Curve Cryptography (ECDH/DSA).
- **IoT-Specific Protocols**: Detailed implementations and analysis of TLS and DTLS protocols from the perspective of an IoT terminal, as well as the CoAPs (CoAP over DTLS) protocol.
- **Performance & Resource Analysis**: The repository includes tools and examples to analyze the performance and resource consumption (RAM/Flash) of various algorithms on embedded hardware platforms.
- **Practical Guidance**: Beyond simple code snippets, the project provides suggestions for selecting algorithms and protocols based on the specific needs and constraints of IoT applications.

## Technical Implementation

The repository is organized into numbered modules that correspond to the book's chapters, making it easy to follow the learning path from basic number theory to complex security protocols:

- **Foundational Security**: Modules covering hashing, symmetric encryption (AES), and message authentication.
- **Asymmetric Cryptography**: Implementation of RSA and Elliptic Curve algorithms, including key exchange and digital signatures.
- **Certificate Management**: Handling X.509 certificates in an embedded context.
- **Secure Transport**: Full implementations of TLS and DTLS, broken down into key exchange, secret calculation, and symmetric encryption phases.
- **Application Layer Security**: Implementation of CoAPs, which provides secure connectivity with minimal resource overhead.

## About the Authors

The project is maintained by industry veterans with deep roots in the IoT ecosystem:

- **Xu Kai (Left Phase)**: An IoT Development Engineer at Aliyun (Alibaba Cloud) with extensive experience in terminal devices, edge computing, and IoT platforms. He is also the author of *IoT Development Practice: CoAP Volume*.
- **Cui Hongpeng**: A senior embedded software engineer at the Wuxi Research Institute of Applied Technologies, Tsinghua University. He is a contributor to open-source projects like GmSSL and Zephyr RTOS, specializing in hardware security monitoring and cryptographic SDK development.

## Getting Started

Developers can explore the various directories (e.g., `05_aes`, `10_ecdh`, `14_tls`) to find specific implementation examples. Each module is designed to demonstrate how to utilize the mbedtls library effectively within an embedded environment, providing a template for integrating these security features into custom firmware projects.
