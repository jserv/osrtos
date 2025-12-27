---
title: CDroid
summary: CDroid is a C++11-based GUI toolkit for embedded systems that replicates
  the Android UI framework's architecture and component model. It supports multi-layer
  windowing, vector graphics via Cairo, and allows UI design using standard Android
  development tools.
codeUrl: https://github.com/houstudio/cdroid
siteUrl: https://gitee.com/houstudio/cdroid
isShow: false
rtos: ''
libraries: []
topics:
- android
- cairo
- drawable
- embedded
- flutter
- graphics
- gui
- imgui
- lvgl
- qt
- recyclerview
- skia
- wearable
- widget
- wifi
---

CDroid is a sophisticated GUI engine designed to bring the familiar Android development experience to the world of embedded systems. Built on C++11, it provides a cross-platform toolkit that allows developers to create rich, multi-layered user interfaces using the same paradigms found in mobile application development. By bridging the gap between high-level UI design and resource-constrained hardware, CDroid enables the creation of modern, fluid interfaces for a wide range of embedded devices.

### Android-Compatible Architecture
One of the standout features of CDroid is its high degree of compatibility with the Android UI framework. It supports over 50 UI components and 20+ drawable types that mirror their Android counterparts. This includes standard views like `TextView`, `Button`, and `ImageView`, as well as complex containers like `RecyclerView`, `ViewPager2`, and `DrawerLayout`. 

Perhaps most impressively, CDroid allows developers to design their UI layouts using standard tools like Android Studio or Eclipse. This compatibility significantly streamlines the workflow between UI/UX designers and embedded software engineers, as layouts and assets can be prototyped in a familiar environment before being deployed to the target hardware.

### Powerful Graphics and Layouts
Under the hood, CDroid utilizes the Cairo graphics library to provide robust vector graphics support. This ensures that UI elements remain crisp and scalable across different screen resolutions. The toolkit supports a wide array of layout managers, including:

*   **LinearLayout** and **RelativeLayout** for flexible positioning.
*   **FrameLayout** for stacking views.
*   **GridLayout** and **TableLayout** for structured data presentation.
*   **CoordinatorLayout** for advanced interaction behaviors.

In addition to layouts, CDroid implements a comprehensive drawable system. Developers can use `NinepatchDrawable` for scalable bitmaps, `VectorDrawable` for resolution-independent icons, and various state-based drawables like `StateListDrawable` and `AnimationDrawable` to create interactive and animated UI elements.

### Porting and Hardware Support
CDroid is designed with portability in mind. The project structure includes a dedicated `src/porting` directory where chipset-specific implementations are housed. To bring CDroid to a new platform, developers implement the necessary porting APIs for their specific hardware, configure the toolchain in the build system, and compile using the provided CMake scripts. This modular approach allows CDroid to run on various Linux-based embedded systems and other platforms capable of supporting a C++11 environment.

### Getting Started
Setting up a CDroid project involves a few key steps, primarily focused on managing dependencies via `vcpkg` and building with CMake. The repository includes a `build.sh` script to automate the generation of makefiles and the compilation process. 

For those looking to explore the capabilities of the engine, the repository is packed with samples. These range from simple "Hello World" applications to complex demonstrations of `RecyclerView`, `ViewPager`, and custom view animations. Once built, running a sample is as simple as executing the binary and ensuring the necessary resource packages (`.pak` files) are in the working directory.

CDroid represents a powerful option for embedded developers who want to move beyond simple bitmapped displays and embrace a modern, component-based UI architecture without leaving the C++ ecosystem.
