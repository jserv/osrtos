---
title: GitHub Actions Dockerfiles
summary: A collection of specialized Dockerfiles and entrypoint scripts designed for
  GitHub Actions. The repository provides containerized environments for security
  scanning, infrastructure testing, and specific language runtimes like Java and Nim.
codeUrl: https://github.com/ChristianWitts/actions
isShow: false
rtos: ''
libraries: []
topics:
- actions
- nim-lang
- nim
- nimble
- trufflehog
- secrets-detection
- gitleaks
---

## Streamlining CI/CD with Custom GitHub Actions

In the modern DevOps landscape, GitHub Actions has become a cornerstone for automating software workflows. However, the default runners often require significant setup time to install specific tools or runtimes. The `ChristianWitts/actions` repository addresses this by providing a suite of pre-configured Dockerfiles tailored for common development and security tasks.

This repository serves as a centralized hub for containerized tools, ensuring that environments remain consistent across different workflow runs. By using these Dockerfiles, developers can avoid the "it works on my machine" syndrome within their CI/CD pipelines.

### Security and Secret Scanning

A significant portion of this repository is dedicated to security. In an era where accidental credential leaks can lead to major breaches, having automated scanning is essential. The project includes configurations for:

*   **Gitleaks**: A SAST tool for detecting hardcoded secrets like passwords, API keys, and tokens in git repos.
*   **TruffleHog**: Searches through git repositories for high entropy strings and secrets, digging deep into commit history.
*   **Snyk**: Provides a containerized environment to run Snyk scans, helping identify vulnerabilities in dependencies and container images.

### Language Runtimes and Infrastructure Testing

Beyond security, the repository provides environments for specific development needs. For those working with older enterprise stacks, there is a dedicated **Java JDK 8** environment. For developers exploring modern systems programming, a **Nim** environment is available.

Infrastructure-as-Code (IaC) practitioners will find the **Molecule** configuration particularly useful. Molecule is designed to aid in the development and testing of Ansible roles, and having it ready to run in a GitHub Action simplifies the testing of complex automation scripts.

### Repository Structure

The project is organized logically, with each tool residing in its own directory. A typical tool directory includes:

*   `Dockerfile`: Defines the environment and installs necessary dependencies.
*   `entrypoint.sh`: A shell script that handles the execution logic when the GitHub Action starts.
*   `README.md`: Specific documentation for that particular tool.

For example, the `diff_root` utility includes a specialized filter script located in `bin/filter`, demonstrating how custom logic can be baked directly into the action container.

### Getting Started

To use these actions in your own workflow, you can reference them directly via their Dockerfile path within your `.github/workflows/main.yml`. This approach allows for high customization, as you can fork the repository and tweak the Dockerfiles to meet your specific project requirements. Whether you are looking to harden your security posture or standardize your build environments, this collection provides a solid foundation for robust GitHub Actions workflows.
