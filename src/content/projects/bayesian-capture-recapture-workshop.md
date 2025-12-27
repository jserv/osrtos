---
title: Bayesian Capture-Recapture Workshop
summary: A comprehensive educational repository providing source materials for a workshop
  on Bayesian capture-recapture inference. It utilizes the R programming language
  and the NIMBLE package to teach hierarchical modeling, hidden Markov models, and
  survival analysis for ecological data.
codeUrl: https://github.com/oliviergimenez/bayesian-cr-workshop
siteUrl: https://oliviergimenez.github.io/bayesian-cr-workshop/
isShow: false
rtos: ''
libraries: []
topics:
- arnason-schwarz-models
- bayesian-inference
- capture-recapture
- capture-recapture-data
- capture-recapture-models
- cormack-jolly-seber
- mcmc
- multievent-models
- nimble
lastUpdated: '2025-12-27'
createdAt: '2025-12-27'
updatedAt: '2025-12-27'
---

The `bayesian-cr-workshop` repository, maintained by Olivier Gimenez, is a specialized educational resource designed for ecologists, statisticians, and researchers focusing on Bayesian capture-recapture (CR) inference. Capture-recapture methods are fundamental in ecology for estimating population size, survival rates, and movement patterns when individuals cannot be perfectly tracked. This workshop leverages modern statistical tools—specifically the R programming language and the NIMBLE package—to provide a deep dive into these complex hierarchical models.

### The Power of NIMBLE in Ecological Modeling

A central component of this workshop is the use of **NIMBLE** (Numerical Inference for Statistical Components of Bayesian Hierarchical Models). While many researchers are familiar with BUGS or JAGS, NIMBLE offers a more flexible environment by allowing users to define models in the BUGS language while providing a system for programming algorithms. This allows for significant speed improvements and the ability to customize MCMC (Markov Chain Monte Carlo) samplers, which is often necessary for the high-dimensional and sparse data common in capture-recapture studies.

### Comprehensive Curriculum Structure

The repository is meticulously organized into a series of modules that guide the learner from foundational concepts to advanced implementation:

*   **Foundations**: The workshop begins with a welcome and an introduction to Bayesian MCMC methods, ensuring all participants have the necessary theoretical background.
*   **NIMBLE Integration**: Dedicated sessions introduce the NIMBLE environment, demonstrating how to translate ecological questions into programmable statistical models.
*   **Hidden Markov Models (HMMs)**: A significant portion of the material focuses on HMMs, which are the modern standard for analyzing capture-recapture data where the true state of an individual (e.g., alive, dead, or emigrated) is only partially observed.
*   **Survival and Transitions**: Specific modules cover survival analysis and state-transition models, which are critical for understanding life-history traits and population dynamics.
*   **Optimization and Speed**: Recognizing the computational burden of Bayesian inference, the workshop includes a module on 'Speeding up NIMBLE,' teaching participants how to optimize their code for faster convergence.

### Technical Materials and Resources

The repository is not just a collection of slides; it is a functional workspace. It contains:

*   **RMarkdown Slides**: Source files for all lectures, allowing users to see exactly how the visualizations and model outputs were generated.
*   **Interactive Worksheets**: R scripts and Rmd files that provide hands-on coding exercises, enabling participants to practice model fitting and data manipulation.
*   **FAQ and Community Knowledge**: The `docs/faq` and `docs/slack` directories contain curated questions and answers from previous workshop cohorts, providing valuable troubleshooting information and context for common pitfalls.

### Open Access and Reuse

In the spirit of open science, all text and figures in the repository are licensed under **Creative Commons Attribution (CC BY 4.0)**. Furthermore, all computer code (including R, HTML, and CSS) is provided under the **MIT License**, encouraging researchers to adapt the models and scripts for their own ecological studies. Whether you are a student looking to learn the basics or a professional researcher needing to implement complex state-space models, this repository provides a robust framework for Bayesian ecological inference.
