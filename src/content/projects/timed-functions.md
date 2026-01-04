---
title: Timed Functions
summary: A lightweight multitasking library for embedded systems that converts wait
  statements into timer callbacks. Inspired by Protothreads, it enables non-blocking
  execution on microcontrollers such as the TI Tiva C Series by leveraging hardware
  timers.
slug: timed-functions
codeUrl: https://github.com/zanppa/timedfunctions
star: 0
lastUpdated: '2019-08-22'
rtos: ''
topics:
- microcontroller
- multitasking
- protothreads
- tiva
isShow: false
createdAt: '2026-01-04'
updatedAt: '2026-01-04'
---

Timed Functions is a lightweight C library designed to provide basic multitasking capabilities for resource-constrained embedded systems. By transforming traditional blocking wait statements into asynchronous timer callbacks, the library allows the main program execution to continue while specific functions are in a waiting state. This approach is heavily inspired by Adam Dunkels' Protothreads, offering a similar stackless cooperative multitasking model.

## Core Concepts

The core mechanism involves a set of macros that manage function state across calls. When a `TIMED_WAIT` is invoked, the library schedules a hardware timer interrupt and returns control to the caller. Once the timer expires, the function is re-entered at the point where it left off. 

Because the library is stackless, it does not preserve local variables between wait states. Developers must use global variables, static variables, or pass data through pointers to maintain state across calls. This trade-off significantly reduces RAM usage compared to traditional multi-threaded RTOS environments.

## Hardware Support

While the library is designed to be portable, the default implementation targets the Texas Instruments Tiva C Series (specifically the TM4C123GH6PMI). It has been tested with the Energia IDE and is compatible with Code Composer Studio. The implementation relies on hardware-specific timer initialization and interrupt handling, which are encapsulated in `timedFunctions.c`. To port the library to other platforms, users need to re-implement the timer initialization, the load function, and the interrupt handler.

## API and Usage

The API provides a structured way to define and manage these "timed functions":

- `TIMED_FUNCTION`: Defines the function signature.
- `TIMED_BEGIN` / `TIMED_END`: Marks the start and end of the function body.
- `TIMED_LOCK` / `TIMED_RELEASE`: Manages access to the hardware timer resource to prevent conflicts between different timed functions.
- `TIMED_WAIT`: Schedules a callback after a specified microsecond delay.
- `TIMED_YIELD`: Allows the function to return to the main loop and resume later without releasing the timer lock.

### Example Implementation

Below is an example of a timed reset function that generates a 500ms low pulse on a GPIO pin without blocking the rest of the application:

```c
TIMED_FUNCTION(resetCmd)
{
	TIMED_BEGIN();

	TIMED_LOCK();
	GPIOPinWrite(GPIO_PORTB_BASE, GPIO_PIN_0, 0);	// Pin 0 low to indicate reset
	TIMED_WAIT(resetCmd, 500000);	 	// Wait 500 ms without blocking

	GPIOPinWrite(GPIO_PORTB_BASE, GPIO_PIN_0, 1);	// Pin 0 high
	TIMED_RELEASE();

	TIMED_END();
}
```

## Integration with Protothreads

One of the most powerful features of Timed Functions is its compatibility with Protothreads. By combining the two, developers can create sophisticated state machines that handle both logical conditions (via Protothreads) and precise timing requirements (via Timed Functions) without the overhead of a full Real-Time Operating System scheduler. This makes it an ideal choice for simple embedded tasks like pulse generation, sensor debouncing, or sequence timing.
