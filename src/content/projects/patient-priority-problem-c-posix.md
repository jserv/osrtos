---
title: Patient Priority Problem (C-POSIX)
summary: A real-time synchronization project implemented in C using POSIX threads
  to simulate patient prioritization in a medical emergency unit. It manages task
  scheduling and resource allocation for patients with varying urgency levels using
  mutexes, semaphores, and barriers within a simulated real-time environment.
slug: patient-priority-problem-c-posix
codeUrl: https://github.com/florin-daniel-marin/Problema-prioritatii-pacientilor-C-POSIX
star: 0
lastUpdated: '2023-05-08'
rtos: ''
topics:
- c-posix
- real-time-programming
- xenomai
isShow: false
createdAt: '2026-01-04'
updatedAt: '2026-01-04'
---

## Overview

The **Patient Priority Problem** is a real-time programming project developed for the Real-Time Application Programming course at the University POLITEHNICA of Bucharest. It addresses a classic synchronization challenge: managing access to a shared resource (a medical consultation cabinet) among multiple tasks with different priority levels. 

The system simulates an emergency unit that accepts up to 10 patients per day. Patients arrive randomly with three distinct medical priority levels: Serious (Grave), Medium (Medie), and Low (Redusa). The core objective is to ensure that patients are seen by the doctor according to their medical urgency rather than their arrival time, using a simulated time scale where 1 second of program execution represents 10 minutes of real-world time.

## Technical Implementation

The project is implemented in C using the **POSIX (pthreads)** library for multi-threading and synchronization. It models the scenario as a variation of the classic **Producer-Consumer** problem:
- **Producer**: The `addQueue` task, which populates the waiting room with patients at random intervals.
- **Consumer**: The `monitorizare` (monitoring) task, which decides which patient enters the cabinet when it becomes free.
- **Buffer**: A virtual queue representing the waiting room, managed through semaphores rather than a physical data structure.

### Synchronization Primitives

To manage the complex priority logic, the system utilizes several synchronization objects:
- **Mutexes**: `mutexCabinet` (to ensure only one patient is in the cabinet) and `mutexQueue` (to protect shared queue data).
- **General Semaphores**: Used to track the number of patients of each type (`sG`, `sM`, `sR`) and the number of occupied/empty seats in the waiting room.
- **Binary Semaphores & Barriers**: `barrierM` and `barrierR` are used to block lower-priority patients if higher-priority patients are waiting.

## The "Patient Politeness" Algorithm

A unique aspect of this implementation is the "Politetea pacientilor" (Patient Politeness) algorithm. Instead of a rigid scheduler, the system uses timed waits to enforce priority:
- **Serious Patients (G)**: Enter the cabinet as soon as it is free.
- **Medium Patients (M)**: Wait for approximately 2 minutes (simulated) to see if a Serious patient arrives before attempting to enter.
- **Low Priority Patients (R)**: Wait for approximately 4-5 minutes (simulated) to allow both Serious and Medium patients to take precedence.

The `monitorizare` task acts as the central logic unit, triggering every time the cabinet is vacated to evaluate the queue and release the appropriate patient based on these timing and priority constraints.

## Project Structure

The application is divided into five main tasks:
1. **Task G**: Handles Serious priority patients.
2. **Task M**: Handles Medium priority patients.
3. **Task R**: Handles Low priority patients.
4. **Task addQueue**: Simulates the arrival of patients into the system.
5. **Task monitorizare**: The decision-making engine that manages cabinet access.

## Performance and Testing

The project includes extensive testing documentation (found in the `teste` directory). The authors identified that while the system is 90% accurate across 50 test runs, rare race conditions and synchronization errors can occur due to CPU scheduling jitter and the inherent complexity of managing multiple timed barriers. These edge cases provide insight into the challenges of real-time systems where timing precision is critical for maintaining logical consistency.
