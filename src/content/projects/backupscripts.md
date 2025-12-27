---
title: BackupScripts
summary: A collection of PowerShell and Bash scripts designed to automate backups
  and maintenance for IT infrastructure. It provides specialized tools for Active
  Directory components, Windows Admin Center, and storage appliances like Nimble and
  Unitrends.
codeUrl: https://github.com/OsbornePro/BackupScripts
isShow: false
rtos: ''
libraries: []
topics:
- nimble
- unitrends
- update
- updates
lastUpdated: '2025-12-27'
createdAt: '2025-12-27'
updatedAt: '2025-12-27'
---

Managing a modern IT environment requires robust automation to ensure that critical configurations and credentials are never lost. The **BackupScripts** repository by OsbornePro provides a versatile toolkit for system administrators to handle backups and updates across Windows and Linux environments. Rather than relying on manual exports, these scripts allow for scheduled, repeatable tasks that safeguard everything from Active Directory components to storage appliance firmware.

### Protecting Active Directory and Windows Infrastructure

A significant portion of the collection focuses on Windows-specific services. For organizations running a Public Key Infrastructure (PKI), the `Backup-CA` script is essential for backing up the Certificate Authority's database and templates. Similarly, `Backup-GroupPolicy` simplifies GPO management by backing up policies to both local and network locations while generating a GUID reference file—solving the common headache of identifying which cryptic folder name belongs to which Group Policy Object.

For security-conscious environments, `BackupLAPS.ps1` provides a way to securely archive the password history of Local Administrator Passwords assigned by LAPS. This ensures that even if a device is removed from the domain, its historical local credentials remain accessible to authorized personnel.

### Cross-Platform Utility and Linux Support

The repository isn't limited to Windows. The `LinuxAppBackup.sh` script is designed for Linux systems to save important configuration files. It is optimized for use with `crontab`, allowing administrators to schedule monthly backups easily. A typical implementation might look like this:

```bash
59 11 15 * * /bin/bash /root/scripts/LinuxAppBackup.sh
```

### Appliance Maintenance and Updates

Beyond simple backups, the project includes automation for maintaining infrastructure hardware. Scripts like `Update-Nimble.ps1` and `Update-Unitrends.ps1` check for and install updates for HP Nimble storage and Unitrends backup appliances. These scripts are designed to be run as scheduled tasks, though they require the installation of specific PowerShell modules (like the HPENimbleToolKit) and some local configuration to handle authentication.

### Security Best Practices

Because these scripts often handle sensitive data or require administrative access, the author emphasizes security. For scripts requiring credentials, it is highly recommended to use external tools to hide PowerShell script passwords and set strict file permissions (such as `chmod 600` on Linux or specific ACLs on Windows) to prevent unauthorized modifications. This ensures that while your backups are automated, your environment remains secure.
