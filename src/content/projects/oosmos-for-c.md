---
title: OOSMOS for C++
summary: A specialized C++ implementation of the Object-Oriented State Machine Operating
  System (OOSMOS) providing lightweight concurrency. It leverages ProtoThreads to
  implement hierarchical state machines, publish/subscribe event processing, and cooperative
  scheduling for both bare-metal embedded systems and desktop environments.
slug: oosmos-for-c
codeUrl: https://github.com/oosmos/oosmos_cpp
siteUrl: https://www.oosmos.com
star: 0
version: v1.6.6
lastUpdated: '2020-04-14'
rtos: ''
topics:
- async
- async-await
- concurrency
- cpp
- dependency-injection
- mit
- object-oriented
- protothreads
- threading
- threads
isShow: false
createdAt: '2026-01-04'
updatedAt: '2026-01-04'
---

OOSMOS (Object-Oriented State Machine Operating System) for C++ is a specialized, lightweight version of the OOSMOS framework designed to bring advanced concurrency and state machine capabilities to C++ environments. By leveraging the ProtoThreads technique, OOSMOS provides a way to implement multi-threaded logic without the overhead of a traditional preemptive RTOS, making it particularly suitable for resource-constrained microcontrollers like Arduino, PIC32, and STM32, as well as desktop platforms like Windows and Linux.

## Core Concurrency via ProtoThreads

The heart of OOSMOS for C++ is its use of ProtoThreads, a programming trick that uses the C++ preprocessor to transform standard code into a state machine using `switch`, `case`, and `default` statements. This allows developers to write code that looks like linear, blocking logic (using delays and wait conditions) while actually executing as a non-blocking, cooperative thread. 

When a thread encounters a delay or a condition it must wait for, it saves its current execution context (the line number) and returns control to the scheduler. Upon the next invocation, the thread resumes exactly where it left off. This approach eliminates the need for per-thread stacks in the traditional sense, significantly reducing RAM usage.

## Static and Object Threads

OOSMOS for C++ supports two primary types of threading models:

- **Static Threads**: These are threads defined at the file scope, useful for global system tasks like heartbeats or background monitoring.
- **Object Threads**: A more powerful feature where thread functions are defined within the scope of a C++ object. These threads have direct access to all members of their containing class, allowing for a clean, object-oriented approach to embedded software design.

## Solving the ProtoThread Stack Limitation

One of the primary challenges with standard ProtoThreads is that local variables (stack variables) are not preserved across thread re-entries. OOSMOS addresses this by introducing the `cStack` (or "ProtoStack"). Developers can specialize this class to include any variables that need to persist between thread invocations. This provides a reliable and readable way to manage state without resorting to global variables or complex manual state management.

### Example: Object-Oriented Threading

In this example, an object manages two independent threads—one for blinking an LED and one for a beeping counter—all within the same class scope:

```cpp
#include "oosmos.hpp"
#include <iostream>

using namespace std;

struct cMyObject : public OOSMOS::cObject
{
  OOSMOS::cStack BlinkingThread_Stack;

  void BlinkingThread(OOSMOS::cStack& rStack)
  {
    ThreadBegin();
      for (;;) {
        cout << "BlinkingThread: LED On" << endl;
        ThreadDelayMS(250);
        cout << "BlinkingThread: LED Off" << endl;
        ThreadDelayMS(750);
      }
    ThreadEnd();
  }

  OOSMOS::cStack BeepingThread_Stack;
  uint32_t m_BeepCount = 0;

  void BeepingThread(OOSMOS::cStack& rStack)
  {
    ThreadBegin();
      for (;;) {
        m_BeepCount += 1;
        cout << "BeepingThread: Beep " << m_BeepCount << endl;
        ThreadDelaySeconds(2);
      }
    ThreadEnd();
  }

  void Run()
  {
    BlinkingThread(BlinkingThread_Stack);
    BeepingThread(BeepingThread_Stack);
  }
};

int main()
{
  cMyObject MyObject;

  for (;;) {
    OOSMOS::Run();
    OS::DelayMS(1);
  }
}
```

## Portability and Platform Support

OOSMOS is designed to be highly portable. While it includes implementations for Windows and Linux (useful for simulation and testing), it is intended for "bare metal" deployment. To port OOSMOS to a new platform, developers only need to implement a modest interface defined in `os.hpp`, typically involving system time and basic delay functions. On embedded targets like STM32 or Arduino, the system usually runs without throttling to ensure maximum responsiveness.
