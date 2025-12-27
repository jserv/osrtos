---
title: DTMail (Dev&Test Mail)
summary: DTMail is a lightweight SMTP and POP3 mail server designed for developers
  to test mail clients locally on Windows. It features both a graphical user interface
  and a terminal interface, allowing for easy monitoring of mail traffic and session
  logs during development.
codeUrl: https://github.com/DanArmor/DTMail
siteUrl: https://github.com/DanArmor/DTMail
isShow: false
rtos: ''
libraries: []
topics:
- c
- education
- educational
- gui
- iup
- iup-gui-library
- logging
- mail
- mail-server
- pop3
- pop3-server
- smtp
- smtp-server
- testing
- winapi
- windows
- winsock
- winsock2
- x64
star: 2
version: v1.0.0
lastUpdated: '2023-06-03'
createdAt: '2025-12-27'
updatedAt: '2025-12-27'
---

When developing mail clients or applications that send automated notifications, testing against live production servers can be cumbersome, slow, and risky. **DTMail (Dev&Test Mail)** is a specialized local mail server designed specifically to solve this problem for developers working on the Windows platform.

### A Local Testing Sandbox
DTMail provides a local environment for testing SMTP and POP3 protocols without needing an internet connection or a real mail provider. It is built using the WinAPI and the IUP GUI toolkit, resulting in a lightweight x64 executable that runs natively on Windows. The primary goal is to give developers a transparent view of what their client is sending and receiving.

### Dual Interface: GUI and TUI
One of the standout features of DTMail is its flexibility in how it presents information. By default, it launches with a clean Graphical User Interface (GUI) that displays real-time logs for both active and closed sessions. This makes it easy to visually track the handshake process and data transfer between your client and the server.

For those who prefer working in a terminal or need to integrate the server into automated scripts, DTMail also supports a Text User Interface (TUI). By using the `-NO-GUI` flag, the server runs entirely within the console. Additionally, if the standard log prefixes are too cluttered for your needs, the `-NO-PREF` flag allows you to disable the `SERVER` and `CLIENT` labels in the output.

### Protocol Support
DTMail implements the core commands necessary for most development tasks. 

**Supported SMTP Commands:**
* `EHLO` / `HELO`
* `MAIL FROM`
* `RCPT TO`
* `DATA`
* `QUIT`
* `AUTH LOGIN` (Base64 encoded)

**Supported POP3 Commands:**
* `USER` and `PASS`
* `STAT` and `LIST`
* `RETR` and `DELE`
* `QUIT`

### Getting Started and Configuration
To manage users on the server, the project includes a secondary utility called `husers.exe`. Developers can use this tool to define the user list, after which a server restart will apply the changes. 

For developers looking to compile the project from source, the build system uses CMake. It requires the **IUP** toolkit for the graphical elements. The project structure is straightforward, with core logic separated into services:
* `smtpservice.c`: Handles the SMTP protocol logic.
* `pop3service.c`: Manages POP3 mailbox interactions.
* `base64.c`: Provides encoding/decoding for authentication.
* `guiutil.c` and `util.c`: Handle the interface and helper functions.

Whether you are a beginner learning the ropes of network programming or a seasoned developer needing a reliable local mock for mail services, DTMail offers a simple, no-nonsense solution for Windows-based development.
