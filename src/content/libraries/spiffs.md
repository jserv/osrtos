---
title: SPIFFS
slug: spiffs
version: 0.3.7
codeUrl: https://github.com/pellepl/spiffs
siteUrl: https://github.com/pellepl/spiffs
date: '2016-11-29'
lastUpdated: '2023-12-02'
star: 1537
licenses:
- MIT
summary: Spiffs is a file system intended for SPI NOR flash devices on embedded targets.
libraryType: filesystem
---

### Features

- Specifically designed for low ram usage
- Uses statically sized ram buffers, independent of number of files
- Posix-like api: open, close, read, write, seek, stat, etc
- It can run on any NOR flash, not only SPI flash - theoretically also on embedded flash of a microprocessor
- Multiple spiffs configurations can run on same target - and even on same SPI flash device
- Implements static wear leveling
- Built in file system consistency checks
- Highly configurable