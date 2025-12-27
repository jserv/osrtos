---
title: Dog Breeds
summary: Dog Breeds is an iOS mobile application developed in Swift 5.1 that provides
  a searchable list of dog breeds and their photos. The project demonstrates modern
  mobile development practices, including Clean Architecture and a comprehensive unit
  testing suite using Cuckoo and Nimble.
codeUrl: https://github.com/HelioMesquita/DogBreeds
isShow: false
rtos: ''
libraries: []
topics:
- clean-architecture
- cuckoo
- nimble
- promisekit
star: 3
lastUpdated: '2020-01-12'
createdAt: '2025-12-27'
updatedAt: '2025-12-27'
---

The Dog Breeds project is a sophisticated iOS application that serves as a prime example of modern mobile development using Swift 5.1. Designed with Clean Architecture at its core, the app provides a seamless interface for users to explore various dog breeds and view high-quality images of them. By prioritizing separation of concerns and testability, this project offers valuable insights for developers looking to build robust and maintainable iOS applications.

### Architectural Excellence
At the heart of Dog Breeds is a Clean Architecture implementation that divides the application into logical layers. The 'Scenes' directory contains the UI logic for the breed list, photo list, and login screens, while the 'Networking' layer handles API communication. This structure not only makes the code easier to navigate but also simplifies the process of adding new features or modifying existing ones without introducing side effects. The use of the Scene pattern suggests a clear separation between the View, Interactor, and Presenter components.

### A Robust Technology Stack
To deliver a high-quality user experience, the project integrates several industry-standard libraries through CocoaPods:

- **SDWebImage**: This library is used for asynchronous image downloading and caching, ensuring that the app remains responsive while loading numerous dog photos.
- **PromiseKit**: By using promises, the app manages complex asynchronous tasks more elegantly than traditional completion handlers, leading to cleaner networking code.
- **IQKeyboardManagerSwift**: This utility automatically handles keyboard appearance and disappearance, preventing UI elements from being obscured during text entry in the login or search screens.
- **R.swift**: This tool provides strong typing for resources, which helps catch potential errors at compile-time rather than runtime by avoiding string-based lookups for images and storyboards.

### Comprehensive Testing
Quality assurance is a major focus of this project. The testing suite, located in the `doglistTests` directory, utilizes **Cuckoo** for boilerplate-free mocking and **Nimble** for writing expressive assertions. This ensures that both the networking logic and the view models are thoroughly validated, leading to a more stable and reliable application. The project includes specific tests for networking errors and scene-specific logic.

### Getting Started
For developers interested in exploring the codebase, the project is easy to set up. It requires Xcode 11.3 and CocoaPods 1.8.4. After cloning the repository, running the following command in the terminal will set up all necessary dependencies:

```bash
pod install
```

The project can then be opened via the `doglist.xcworkspace` file, allowing for immediate exploration of its clean and well-documented Swift code.
