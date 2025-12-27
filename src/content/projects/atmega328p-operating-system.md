---
title: ATMega328P Operating System
summary: A lightweight, experimental round-robin operating system for the ATMega328P
  microcontroller. It features a simple task scheduler using Timer0 for context switching
  and provides a basic API for task creation and management.
codeUrl: https://github.com/boomer41/ATMega328P-OperatingSystem
isShow: false
rtos: ''
libraries: []
topics:
- atmega328p
- atmel
- femto
- femto-os
- microcontroller
- nano
- nano-os
- operating-system
- operating-systems
- os
- scheduler
- small
lastUpdated: '2025-12-27'
createdAt: '2025-12-27'
updatedAt: '2025-12-27'
---

Developing for microcontrollers often involves managing multiple tasks simultaneously. While many developers reach for heavy-duty RTOS solutions, there is significant educational and practical value in minimalist kernels. The **ATMega328P Operating System** is a project that provides a simple, round-robin scheduler specifically tailored for the AVR architecture, commonly found in the Arduino Uno.

### How the Scheduler Works
At its core, the OS utilizes a very simple round-robin scheduler. It performs a context switch every 262,144 clock cycles, ensuring that every task gets a fair share of CPU time. This behavior is driven by **Timer0**, which is reserved exclusively for the scheduler. By adjusting `OCR0A` and the Timer0 prescalers, developers can control the frequency of context switches. 

The low-level mechanics of saving and restoring CPU registers during these switches are handled by a combination of C and assembly code (`os_asm.S`), ensuring that the state of each task is preserved accurately between its execution windows.

### Getting Started
Using this OS in a project is designed to be straightforward. You simply include the files starting with `os` in your project and call the initialization routines in your `main()` function. 

```c
#include "os.h"

void my_task(void* data) {
    while(1) {
        // Perform task logic here
    }
}

int main() {
    os_init();
    os_task_add(my_task, NULL);
    os_run(); // This call never returns
    return 0;
}
```

### Task Management and Constraints
Tasks in this operating system have a few specific requirements:
- **Termination**: Tasks cannot simply return. They must be explicitly terminated using `os_current_task_kill()` if they finish their work.
- **Data Access**: To access the void-pointer passed during task creation, tasks should call `os_current_task_get_data()`.
- **Stack Limits**: Because the ATMega328P has limited RAM, the OS uses a fixed stack size per task. Users are cautioned against using recursion or deep call stacks to avoid memory corruption.

### Configuration
The operating system can be tuned at compile time via `os_config.h`. Two primary macros control the system's footprint:
- `OS_STACK_SIZE`: Defines the stack size allocated for each individual task.
- `OS_TASK_COUNT`: Sets the maximum number of tasks that can exist simultaneously.

This project serves as an excellent reference for anyone looking to understand the fundamentals of context switching and kernel design on 8-bit AVR microcontrollers. While experimental, it provides the essential building blocks for multitasking in resource-constrained environments.
