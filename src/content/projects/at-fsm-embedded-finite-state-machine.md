---
title: 'At-FSM: Embedded Finite State Machine'
summary: A lightweight and user-friendly C library for implementing Finite State Machines
  in embedded systems. It supports both Primitive State Machines (PSM) and Hierarchical
  State Machines (HSM), offering a structured approach to managing complex system
  behaviors and event-driven logic for microcontrollers.
slug: at-fsm-embedded-finite-state-machine
codeUrl: https://github.com/At-EC/At-FSM
star: 11
version: v1.0.3
lastUpdated: '2025-12-26'
rtos: ''
topics:
- c-language
- chinese
- embedded-systems
- finite-state-machine
- firmware
- hierarchical-state-machine
- iot
- kernel
- mcu
- robot
- state-machine
isShow: false
createdAt: '2026-02-09'
updatedAt: '2026-02-09'
---

## Overview

At-FSM is an open-source embedded Finite State Machine (FSM) library designed for developers working with microcontrollers and embedded controllers. As a core member of the At-EC (Embedded Controllers) ecosystem, it provides a robust framework for managing complex system states and transitions, which are often the backbone of reliable firmware implementation.

The project implements the concept of a transducer—a process that takes a sequence of input values and returns a set of outputs based on the current state. By formalizing states, inputs, and transition actions, At-FSM helps developers move away from "spaghetti code" logic toward a maintainable, event-driven architecture.

## State Machine Architectures

At-FSM provides two primary models to suit different application complexities:

### Primitive State Machine (PSM)

The Primitive State Machine is designed for simpler logic where states are flat and independent. In this system, there is always one active state capable of accepting system event signals. When a transition occurs, the system automatically handles internal signals: the current state receives a `PSM_SIGNAL_EXIT` signal, and the target state receives a `PSM_SIGNAL_ENTRY` signal before becoming active.

### Hierarchical State Machine (HSM)

For more complex systems, the Hierarchical State Machine allows for state nesting and inheritance. HSMs introduce a master-slave relationship between states. Signals in an HSM flow from master to slave, meaning higher-layer states have priority. If a master state handles a signal and triggers a transition, the signal is blocked from reaching lower-layer states. HSMs also include a specific `HSM_SIGNAL_INIT` signal used for initializing a state after entry.

## Implementation Example

Setting up a state machine involves defining state tables and entry functions. Below is an example of how a Primitive State Machine is initialized:

```c
#include "psm.h"

/* Define user signals */
enum {
    PSM_SIGNAL_1 = PSM_SIGNAL_USER_DEFINE,
    PSM_SIGNAL_2,
};

/* Define state instances */
enum {
    PSM_INST_0 = 0,
    PSM_INST_1,
    PSM_INST_NUM,
};

/* Initialize state table */
static psm_state_t g_psm_state_init[] = {
    [PSM_INST_0] = {.instance = PSM_INST_0, .pName = "state_1", .pEntryFunc = psm_state_1 },
    [PSM_INST_1] = {.instance = PSM_INST_1, .pName = "state_2", .pEntryFunc = psm_state_2 },
};
```

Each state then uses an entry function to process signals and return actions or transitions:

```c
static void* psm_state_1(psm_state_input_t input)
{
    switch(input.signal)
    {
        case PSM_SIGNAL_ENTRY:
            // Handle entry logic
            break;
        case PSM_SIGNAL_1:
            /* Transition to state 2 */
            return psm_transition(&g_psm_mngr_context, PSM_INST_1); 
        default:
            break;
    }
    return PSM_ACTION_DONE;
}
```

## Technical Features

At-FSM is built with portability and efficiency in mind. It uses a clean C interface that is compatible with most embedded compilers (GCC, Keil, IAR). The library's design ensures that state transitions are predictable and that system-defined signals (Entry, Exit, Init) are handled consistently across both PSM and HSM models. This predictability is crucial for safety-critical or real-time embedded applications where state consistency is paramount.

The project is licensed under the MIT license, making it suitable for both commercial and open-source projects without requiring code disclosure.
