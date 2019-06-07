# ./config

**Configuration files**

## Files

The files in the root of this folder are meant to be edited, based on the needs of the project.

* **paths.config.js**: Overview of paths within the project. Specifically used by build files, but serves as a decent overview of the project structure. This file should be used when referencing paths within the project since all paths are normalized and resolved to reduce errors.
  → [See file comments](paths.config.js) for editing conventions.

* **babel.config.js**: [Babel](https://babeljs.io/) configuration(s) for web, node, and T4. Uses the [`"env"` and `"envName"` option](https://babeljs.io/docs/en/options#env) to distinguish between each configuration.

* **sass.config.scss**: Style/Sass configuration. Imported by other sass files.
  → [See file comments](sass.config.scss) for more specific configuration options and their effects.

* **postcss.config.js**: [PostCss](https://github.com/postcss/postcss) configuration. By default, we have set up [Autoprefixer](https://github.com/postcss/autoprefixer) and [CSSnano](https://cssnano.co/). CSSnano is set to only work in "production" mode (to keep development fast).

* **styleguide.config.js**: [markdown-documentation-generator](https://github.com/UWHealth/markdown-documentation-generator) configuration. Imported by the gulp task `styleGuide`.
