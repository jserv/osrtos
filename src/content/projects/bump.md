---
title: bump
summary: bump is a CLI tool written in Nim designed to automate the versioning process
  for Nimble packages. It handles incrementing version numbers in .nimble files, creating
  git commits and tags, and pushing changes to remote repositories, including support
  for GitHub releases via hub.
codeUrl: https://github.com/disruptek/bump
siteUrl: https://disruptek.github.io/bump/bump.html
isShow: false
rtos: ''
libraries: []
topics:
- bump
- git
- module
- nim
- nimble
- package
- tool
- version
---

Managing version numbers and release tags can be a repetitive and error-prone task for developers. For those working in the Nim ecosystem, **bump** provides a streamlined solution to automate the entire process of updating a package's version, committing the change, and pushing it to a remote repository.

### What is bump?
At its core, bump is a utility that modifies the `version` field in your project's `.nimble` file. But it goes beyond simple text replacement; it integrates directly with your Git workflow to ensure that every version increment is properly recorded and synchronized. By default, bump increments the patch number, but it offers full control over semantic versioning (SemVer) standards.

### Streamlining the Release Workflow
The tool is designed to be used from the command line with minimal friction. A simple execution of `bump` will increment the patch version, commit the change with a generated message, create a Git tag, and push both the commit and the tag to your remote.

For more significant updates, you can specify the type of version increment:

```bash
# Increment the minor version for new features
$ bump --minor added a new feature

# Increment the major version for breaking changes
$ bump --major api redesign
```

### Advanced Features and Integration
Beyond basic versioning, bump includes several features that cater to professional development workflows:

*   **Dry Runs:** If you want to see what the next version and message will look like without actually making changes, the `--dry-run` flag allows for safe experimentation.
*   **GitHub Releases:** If you have the `hub` tool installed, bump can automatically create a GitHub release corresponding to your new tag using the `--release` flag.
*   **Manual Overrides:** While automation is the goal, sometimes you need to set a specific version string. The `--manual` flag allows you to bypass the automatic increment logic.
*   **Tag Prefixes:** The tool intelligently detects if you use a `v` prefix (e.g., `v1.0.0`) and maintains that style for future bumps. You can also force this behavior with the `--v` flag.

### Platform Support and Portability
While primarily tested on Linux and macOS, bump includes platform-specific logic to handle directory identification on systems like **Genode**. It is built to be robust across different Git versions (tested from v2.17.0 through v2.23.0) and relies on the Nim standard library's handling of file extensions and separators.

### Using bump as a Library
While most users will interact with bump as a standalone CLI tool, it is also structured as a Nim module. This means developers can import its procedures into their own Nim scripts or tools to programmatically manage Nimble package versions. Detailed API documentation is available for those looking to integrate bump's logic into larger automation suites.

By automating the "social contract" of semantic versioning, bump allows Nim developers to focus on writing code while ensuring their release history remains clean, consistent, and easy to follow.
