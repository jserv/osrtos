---
title: 'Banana Book: Bayesian Analysis of Capture-Recapture Data with Hidden Markov
  Models'
summary: A comprehensive textbook and code repository for ecological modeling using
  Hidden Markov Models (HMM) within a Bayesian framework. It provides practical implementations
  using the R programming language and the NIMBLE package to analyze animal survival,
  movement, and life-history traits.
codeUrl: https://github.com/oliviergimenez/banana-book
isShow: false
rtos: ''
libraries: []
topics:
- bayesian-inference
- capture-recapture
- hidden-markov-models
- nimble
- rstats
lastUpdated: '2025-12-27'
createdAt: '2025-12-27'
updatedAt: '2025-12-27'
---

The "Banana Book" is a specialized technical resource designed for ecologists, statisticians, and data scientists working with capture-recapture data. This repository serves as the companion to the textbook, providing all the necessary code and data to reproduce complex ecological analyses. The primary focus is on estimating animal population parameters—such as survival and movement—when individuals are not perfectly observable, a common challenge in field biology.

## The Power of Hidden Markov Models
At the heart of the methodologies presented in this project are Hidden Markov Models (HMMs). In ecological studies, an animal's true state (e.g., alive, dead, or located at a specific breeding site) is often "hidden" from the researcher. We only receive intermittent observations or "captures." The Banana Book demonstrates how to use the HMM framework to model these underlying biological processes while accounting for the uncertainty in the observation process. This approach allows for more accurate estimations of survival rates, transition probabilities between sites, and recruitment into the population.

## Implementation with R and NIMBLE
While many ecological models are built using standard Bayesian tools like JAGS or WinBUGS, this project highlights the use of **NIMBLE** (Numerical Inference for Statistical Models using Bayesian and Likelihood Estimation). NIMBLE is an R-based system that allows for flexible and efficient hierarchical modeling. It provides a high-level language for specifying models and a compiler that generates optimized C++ code for MCMC (Markov Chain Monte Carlo) algorithms. This performance boost is critical when dealing with the computationally intensive nature of multi-state HMMs.

## Comprehensive Chapter Breakdown
The repository is organized into several key chapters that guide the user from foundational concepts to advanced applications:
- **Bayesian Statistics & MCMC**: An introduction to the Bayesian framework and the sampling algorithms used to estimate model parameters.
- **NIMBLE Tutorial**: A practical guide to getting started with the NIMBLE modeling language.
- **Hidden Markov Models**: The core theoretical framework for capture-recapture data.
- **Survival & Movement**: Detailed models for tracking animal life cycles and spatial transitions.
- **Covariates & Model Fit**: Techniques for incorporating environmental factors and ensuring the robustness of the models.
- **Life History Traits**: Specialized models for quantifying age-specific mortality, breeding probabilities, and stopover durations.

## Reproducible Research and Data
One of the most valuable aspects of the Banana Book is its commitment to reproducibility. The `appendix` directory contains a wealth of R scripts and real-world datasets, including:
- **Dipper Dataset**: A classic capture-recapture dataset used for survival analysis.
- **Geese and Storks**: Data used to demonstrate movement models between different geographical sites.
- **Dolphins and Newts**: Examples for quantifying life-history traits and stopover durations.

By providing the full source code for every analysis, the project serves as both a pedagogical tool for students and a reference for professional practitioners in the field of wildlife management and conservation biology.
