---
title: EmojiCommit
summary: EmojiCommit is a SwiftUI-based iOS application that visualizes GitHub contribution
  history using expressive emojis instead of traditional contribution grids. It leverages
  Combine for reactive programming, SwiftSoup for data extraction, and includes a
  dedicated widget for tracking commit levels directly from the home screen.
codeUrl: https://github.com/sujinnaljin/EmojiCommit
siteUrl: https://apps.apple.com/app/emojicommit/id1575926400
isShow: false
rtos: ''
libraries: []
topics:
- combine
- github-actions
- google-admob
- localization
- mvvm
- nimble
- quick
- swiftui
- unit-test
- widget
star: 22
version: 1.0.3
lastUpdated: '2021-09-24'
createdAt: '2025-12-27'
updatedAt: '2025-12-27'
---

EmojiCommit is a creative iOS application designed for developers who want to track their GitHub contribution history with a bit more personality. In the developer community, maintaining a daily commit streak is often referred to as "planting grass" due to the green squares on a GitHub profile. EmojiCommit takes this concept and replaces the standard grid with five distinct emoji expressions that represent different levels of commit activity.

### Core Features and Customization
The app's primary goal is to make tracking productivity more engaging. Users can see their commit levels represented by emojis that change based on the intensity of their daily work. Beyond simple visualization, EmojiCommit offers several features to enhance the user experience:

- **Emoji Levels**: Five different facial expressions represent your commit progress.
- **Custom Themes**: Users can select and customize color themes to match their personal aesthetic.
- **Home Screen Widget**: A dedicated iOS widget allows users to check their daily commit status at a glance without opening the app.
- **iPad Support**: The application includes a portrait mode specifically optimized for iPad users.

### Technical Architecture
EmojiCommit is built using modern iOS development standards. It utilizes **SwiftUI** for its declarative user interface and **Combine** for handling asynchronous events and data streams. The project follows the **MVVM (Model-View-ViewModel)** architectural pattern, ensuring a clean separation of concerns between the business logic and the UI.

To retrieve contribution data from GitHub, the project uses **SwiftSoup**, a powerful library for parsing HTML, which allows the app to extract commit information directly. For data persistence and analytics, the developer integrated **Firebase** (Analytics and Crashlytics), while **Google Mobile Ads** were implemented for monetization (though temporarily removed in later versions to improve user experience).

### Development and Quality Assurance
The repository demonstrates a high standard of software engineering practices. It includes a comprehensive suite of unit tests written using the **Quick** and **Nimble** frameworks, covering ViewModels and service logic. 

The project also features a robust CI/CD pipeline powered by **GitHub Actions**. Two main workflows are defined:
- **test_on_develop**: Automatically runs test codes whenever changes are pushed to the development branch.
- **deploy_on_release**: Automatically handles the distribution to TestFlight when a new release is prepared.

### Localization and Accessibility
Recognizing the global nature of the developer community, EmojiCommit is localized into multiple languages, including Korean, English, Simplified Chinese, Japanese, and Spanish. This broad support ensures that developers worldwide can enjoy a more expressive way to track their coding milestones.
