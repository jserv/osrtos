---
title: Bayesian Capture-Recapture Workshop with R and NIMBLE
summary: A comprehensive set of workshop materials for Bayesian capture-recapture
  inference using R and the NIMBLE package. It covers Hidden Markov Models (HMM),
  survival analysis, and transition modeling for ecological data.
codeUrl: https://github.com/oliviergimenez/bayesian-hmm-cr-workshop-valencia
siteUrl: https://oliviergimenez.github.io/bayesian-hmm-cr-workshop-valencia/
isShow: false
rtos: ''
libraries: []
topics:
- capture-recapture
- hidden-markov-model
- nimble
---

## Exploring Bayesian Capture-Recapture with R and NIMBLE

This repository serves as a comprehensive resource for researchers and statisticians interested in ecological modeling. Specifically, it provides the source materials for a workshop focused on Bayesian capture-recapture inference, a critical technique in wildlife biology and population ecology. The workshop was designed to guide participants through the complexities of estimating population parameters using modern statistical tools.

### What is Capture-Recapture?

Capture-recapture is a method used to estimate animal population parameters like size, survival, and movement. By marking individuals and observing them over time, researchers can build complex models to understand population dynamics. This workshop elevates these methods by applying Bayesian frameworks and Hidden Markov Models (HMMs), which allow for a more nuanced understanding of biological states that are not directly observable.

### The Power of NIMBLE

A central component of this workshop is the use of **NIMBLE** (Numerical Inference for statistical Models using Bayesian and Likelihood Estimation). NIMBLE is a system for writing hierarchical models in R that allows for flexible MCMC (Markov Chain Monte Carlo) estimation. Unlike standard black-box software, NIMBLE allows users to define their own distributions and samplers, which is particularly useful for the complex state-space models often found in capture-recapture studies.

### Workshop Curriculum and Structure

The repository is organized into a series of slides and practical worksheets that take the user from foundational concepts to advanced applications:

*   **Foundations**: Introduction to Bayesian MCMC and the NIMBLE environment.
*   **Hidden Markov Models**: Understanding the underlying states and observations in ecological data.
*   **Survival & Transitions**: Modeling the probability of staying alive or moving between different states, such as breeding versus non-breeding status.
*   **Uncertainty & Speed**: Handling state uncertainty (where the status of an animal is unknown) and optimizing code for faster computation using NIMBLE's compilation features.

### Practical Applications and Data

The materials include real-world datasets that provide hands-on experience with ecological challenges:

*   **Dipper data**: A classic dataset used for survival analysis.
*   **Geese and Titis**: Examples used to demonstrate transition models and handling observation uncertainty.
*   **House Finch**: Data used for more advanced modeling scenarios involving disease or specific life-history traits.

### Getting Started

Users can explore the rendered site or dive into the source files. The `docs/slides` directory contains R Markdown files (`.Rmd`) that generate the lecture content, while `docs/worksheets` contains the practical R scripts and data files needed to run the models. These files provide a mix of theoretical background and executable R code, making it easy to follow along with the workshop exercises and adapt the code for independent research projects.
