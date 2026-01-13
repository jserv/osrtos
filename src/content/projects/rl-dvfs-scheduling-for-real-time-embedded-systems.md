---
title: RL-DVFS Scheduling for Real-Time Embedded Systems
summary: A research-oriented project implementing Reinforcement Learning and Dynamic
  Voltage & Frequency Scaling (DVFS) for energy-efficient task scheduling in multi-core
  embedded systems. It features both offline and online scheduling strategies using
  Earliest Deadline First (EDF) and Slack Stealing Server algorithms to balance power
  consumption and Quality of Service.
slug: rl-dvfs-scheduling-for-real-time-embedded-systems
codeUrl: https://github.com/Amirreza81/RL-DVFS-Scheduling
star: 13
lastUpdated: '2025-03-11'
rtos: ''
topics:
- dvfs
- embedded-systems
- energy-optimization
- iot
- multi-core
- power-management
- qos-optimization
- real-time-scheduling
- reinforcement-learning
- rl
- rl-based-scheduling
- task-scheduling
- tdp
- thermal-design-power
- thermal-management
isShow: false
createdAt: '2026-01-13'
updatedAt: '2026-01-13'
---

## Power Management in Real-Time Embedded Systems

Efficient energy management is a critical challenge in the design of modern embedded systems, particularly for battery-powered devices. This project addresses the complex trade-off between performance and power consumption by implementing an intelligent scheduling framework that leverages Reinforcement Learning (RL) and Dynamic Voltage & Frequency Scaling (DVFS).

The core objective is to optimize energy usage in multi-core homogeneous systems while strictly adhering to real-time constraints and Thermal Design Power (TDP) limits. By dynamically adjusting the operating frequency and voltage of the processor cores based on the workload, the system can significantly reduce power waste during periods of low activity.

## Intelligent Scheduling Strategies

The project is divided into two distinct phases, covering both static and dynamic system behaviors:

### Phase 1: Offline Scheduling
In the offline phase, the system uses an RL-based model to design an optimal scheduling plan for a known set of tasks. This phase focuses on multi-core homogeneous environments where tasks are scheduled using the Earliest Deadline First (EDF) algorithm. The RL agent learns to apply DVFS settings that minimize energy consumption without violating the timing requirements of hard real-time tasks or exceeding the system's thermal envelope.

### Phase 2: Online Scheduling
Real-world embedded environments often encounter unpredictable workloads. The online scheduling phase introduces support for soft aperiodic tasks that arrive dynamically. To handle these, the project implements an adaptive task mapping strategy and utilizes a Slack Stealing Server. This approach allows the system to reclaim unused execution time (slack) from hard real-time tasks to service aperiodic requests, thereby improving the Quality of Service (QoS) without compromising system stability.

## Technical Implementation and Constraints

The framework manages a variety of task parameters to ensure schedulability and power efficiency. Key metrics tracked include:
- **Utilization and WCET**: Monitoring the Worst-Case Execution Time and processor utilization for each task.
- **DVFS States**: Dynamically switching between different voltage and frequency levels (e.g., 0.75V/0.9V to 1.1V/1.5V).
- **Task Types**: Differentiating between hard real-time tasks (with strict deadlines and periods) and soft aperiodic tasks (with arrival times and deadlines but no fixed period).
- **Thermal Design Power (TDP)**: Ensuring that the combined power consumption of all active cores does not exceed the physical heat dissipation capabilities of the hardware.

## Performance Analysis

The repository includes extensive results demonstrating the effectiveness of the RL-DVFS approach across various core configurations, including 8, 16, and 32-core setups. By analyzing task schedulability under different utilization levels (from 25% to 100%), the project provides insights into how power consumption trends vary per core and how QoS is maintained across different system states.

Detailed logs and CSV data provide a granular look at task execution, showing how the scheduler maps specific tasks to cores and adjusts their operating parameters in real-time to achieve the best possible energy profile.
