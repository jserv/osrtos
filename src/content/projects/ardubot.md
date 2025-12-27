---
title: Ardubot
summary: Ardubot is an autonomous robotics platform built for the Arduino UNO, capable
  of solving labyrinths and following lines. It leverages Adam Dunkels' Protothreads
  library to achieve pseudo-concurrency for sensor polling and motor control, supported
  by a custom object-oriented hardware abstraction layer.
codeUrl: https://github.com/qgmartin/ardubot
isShow: false
rtos: ''
libraries: []
topics:
- arduino
- protothreads
- c
- cny70
- gp2d05
- servo
lastUpdated: '2025-12-27'
createdAt: '2025-12-27'
updatedAt: '2025-12-27'
---

Ardubot is a specialized robotics project developed for the Arduino UNO that tackles two classic autonomous navigation challenges: line tracking and labyrinth escape. Originally developed in 2014, the project provides a robust framework for managing sensors and actuators using a pseudo-concurrent programming model, allowing the robot to react to its environment in real-time without the overhead of a full-scale Real-Time Operating System.

### Pseudo-Concurrency with Protothreads
One of the most interesting technical aspects of Ardubot is its use of the **Protothreads (Pt)** library. Created by Adam Dunkels, Protothreads provide a lightweight, stackless mechanism for multi-threading. In the context of an Arduino UNO, which has limited RAM, this allows the developer to write code that looks like standard threaded programming (using `PT_WAIT_UNTIL` and `PT_YIELD`) without the memory consumption associated with per-thread stacks.

In Ardubot, this is used to manage multiple sensors simultaneously. For example, in the labyrinth-solving logic, separate protothreads handle frontal obstacle detection and right-wall following, ensuring that the robot can monitor its distance from walls while simultaneously adjusting its steering.

### Hardware and Sensor Integration
The project is designed around a specific set of hardware components, supported by custom-built libraries located in the `src` directory:

*   **CNY70 Sensors**: Used for line tracking. These infrared reflective sensors detect the contrast between the floor and the line.
*   **GP2D05 Sensors**: Used for obstacle detection and wall-following in the labyrinth. These are digital distance sensors that trigger at a specific threshold.
*   **Custom Motor Control**: The project includes an extension of the standard Arduino Servo library, specifically optimized for continuous rotation servos used in mobile robotics.

### Software Architecture
Ardubot follows a clean, object-oriented approach to hardware abstraction. It defines an abstract `Sensor` class that establishes a common interface for all digital sensors, including pin connection logic and activation triggers. This makes it easy to swap or add new sensor types without rewriting the core navigation logic.

### Example: Labyrinth Navigation
The following snippet demonstrates how Ardubot uses Protothreads to manage a "Right Wall Follower" behavior. The code yields execution until the lateral sensor loses track of the wall, at which point it triggers a correction routine:

```c
static PT_THREAD(buscaParedDerecha(struct pt* unPt))
{
  PT_BEGIN(unPt);
  while(1)
  {    
    // Wait until the lateral sensor is no longer active (wall lost)
    PT_WAIT_UNTIL(unPt, !sensorLateral.seActiva());
    {
      delay(200);
      // Adjust motor speed to turn back toward the wall
      while(motorDerecho.cambiarVelocidad(92, rapidez::INSTANTANEO) == PT_YIELDED);
      
      // Wait until the wall is detected again
      PT_WAIT_WHILE(unPt, !sensorLateral.seActiva());
      
      // Resume normal forward speed
      while(motorDerecho.cambiarVelocidad(110, rapidez::INSTANTANEO) == PT_YIELDED);
    }
  }
  PT_END(unPt);
}
```

### Getting Started
To use Ardubot, users need to include the libraries found in the `src` folder into their Arduino environment. The repository provides several pre-configured sketches:
*   **ArduSigueLineas**: The main application for line following.
*   **ArduLaberinto**: The main application for maze solving.
*   **CHECK_STATE variants**: Debugging sketches used to verify sensor and motor states before running the full autonomous logic.

While the documentation and comments are primarily in Spanish, the code structure is intuitive for anyone familiar with C++ and the Arduino ecosystem.
