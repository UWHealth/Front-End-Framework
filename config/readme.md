# ./config

**Configuration files**

## Files

The files in the root of this folder are meant to be edited, based on the needs of the project.  

* **paths.config.js**: Overview of paths within the project. Specifically used by build files, but serves as a decent overview of the project structure. This file should be used when referencing paths within the project since all paths are normalized and resolved to reduce errors.
  → See file's comments for editing conventions.

* **sass.config.scss**: Style/Sass configuration. Imported by other sass files.
  → See file comments for more specific configuration options and their effects.

* **styleguide.config.js**: [markdown-documentation-generator](https://github.com/UWHealth/markdown-documentation-generator) configuration. Imported by the gulp task `styleGuide`.
