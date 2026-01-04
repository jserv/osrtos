---
title: Snoring Detection System
summary: A machine learning project for classifying audio as snoring or non-snoring
  using MFCC feature extraction and TensorFlow. It processes one-second audio samples
  into 32x32 feature maps for training deep learning models based on the speech commands
  architecture, targeting deployment on embedded gadgets.
slug: snoring-detection-system
codeUrl: https://github.com/adrianagaler/Snoring-Detection
star: 62
lastUpdated: '2020-12-16'
rtos: ''
topics:
- audio
- mfcc-features
- signal-processing
- tensorflow-micro
- tinyml
isShow: false
createdAt: '2026-01-04'
updatedAt: '2026-01-04'
---

# Snoring Detection System

The Snoring Detection project is a specialized audio classification system designed to distinguish between snoring and non-snoring sounds. By leveraging digital signal processing (DSP) and deep learning, the project provides a pipeline for transforming raw audio into feature-rich representations suitable for training robust classification models intended for embedded gadgets.

## Dataset and Classification

The project utilizes a dataset of 1,000 sound samples, split evenly between snoring and non-snoring classes. The non-snoring category is particularly diverse, encompassing ten distinct sub-categories to ensure the model can handle real-world background noise. These categories include:

- **Environmental sounds**: Rain, thunderstorms, and streetcars.
- **Household noises**: Toilets flushing, clocks ticking, and doors opening/closing.
- **Human activity**: People talking, background television news, and babies crying.
- **Hardware noise**: Vibration motors from gadgets and total silence.

Each sample is trimmed to a uniform duration of one second, providing a consistent input for the feature extraction process.

## Signal Processing & Feature Extraction

The core of the system's analytical capability lies in its use of Mel-frequency cepstral coefficients (MFCCs). This technique compresses audio information into a small number of coefficients based on the human ear's perception of sound.

The preprocessing pipeline involves several sophisticated steps:

1. **Sample Rate Standardization**: Audio is downsampled to 16,000 Hz to reduce computational complexity while retaining essential frequency information.
2. **Framing**: The time-domain signal is divided into 32 frames, each 30 ms in length.
3. **Mel Filter Banks**: The system constructs power spectra and applies a bank of 32 filters. The first 10 filters are spread linearly (100 Hz to 1000 Hz), while the remaining 22 filters are distributed according to the logarithmic Mel-scale.
4. **DCT Transformation**: Discrete Cosine Transform (DCT) is applied to the log-energies of the filter banks to produce 32 cepstral coefficients per frame.

The final output of this process is a 32x32 "image" representing the audio sample, which serves as the input for the neural network.

## Model Training and Deployment

The project is built upon the TensorFlow framework, specifically utilizing the `speech_commands` architecture. This architecture is a standard for keyword spotting and short-duration audio classification, often used as the foundation for TinyML applications.

The training process is documented in a Jupyter notebook, which guides users through:

- Organizing the dataset into 'snoring' and 'no_snoring' directories.
- Incorporating background noise for improved model generalization.
- Configuring data pathways for the TensorFlow training script.

By using the `speech_commands` example as a foundation, the project aligns itself with modern edge AI workflows, where models are trained in high-level environments like TensorFlow and then optimized for deployment on resource-constrained devices.

## Technical Implementation

The preprocessing logic is implemented in Python, utilizing libraries such as `SpeechPy` for feature extraction and `SciPy` for signal processing. Below is an example of the MFCC application logic used in the project:

```python
def apply_mfcc(fs, signal):
    # Apply pre-emphasis to amplify high frequencies
    signal = processing.preemphasis(signal, cof=0.98) 

    # Stacking frames into 30ms windows
    frames = processing.stack_frames(signal, sampling_frequency=fs,
                                            frame_length=0.030,   
                                            frame_stride=0.030,   
                                            zero_padding=False)

    # Extracting power spectrum
    power_spectrum = processing.power_spectrum(frames, fft_points=512)

    # Apply Mel filterbanks and compute log features
    # ...
    return dct_log_features
```

This structured approach to audio analysis makes the project a valuable resource for developers interested in acoustic event detection and the development of intelligent monitoring systems.
