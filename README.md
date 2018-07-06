# [Front End Framework](http://uwhealth.github.io/Front-End-Framework/)

[Our Workspace](https://workspaces.uconnect.wisc.edu/display/ehealth/Front+End+Design) (Requires UW Health intranet access)

## 💾 Software

1.  [Node](https://nodejs.org/) (version 8+)
2.  [Gulp 4](http://gulpjs.com/) (specifically, `gulp-cli`)
    -   Run `npm install --global gulp-cli` from the command line after Node has been installed.
3.  [Yarn](https://yarnpkg.com/)
    -   Run `npm install --global yarn` from the command line after Node has been installed.

## ⚙️ Set up

1.  [Clone this repository](https://github.com/UWHealth/Front-End-Framework.git)
2.  Using the command line (preferably using PowerShell/Terminal rather than cmd.exe), `cd` to the Framework's directory.
3.  Run `yarn` and wait for the dependencies to install.
4.  Run `gulp`.
5.  Open a browser and go to [localhost:8080](http://localhost:8080/). This is your local running copy of the Framework.
6.  **Start codin' and compilin'.**

---

## 🗂 Structure

#### Notes on file naming conventions

Conventions make scaling applications simpler while keeping complex build processes in the background. Here are a few:

-   All sass partials are prepended with an "\_" (underscore). Leaving this off will generate a separate css file. **A folder of just sass files is prepended with an underscore as well.**

-   Spaces in folders and file names should be represented by a "-" (hyphen). Names should always be lowercase. If a folder is intended to imported like a single file, the folder should contain an `index.js` (or `_index.scss` in sass' case). This allows files to be moved into folders without changing the files that import them (e.g. `import './thing'` could resolve to `./thing.js` or `./thing/index.js` )

    -   This essentially follows the Node naming convention.

-   We use the term "helpers" to mean small pieces of code that other files rely on. Another term might be "utilities" or "tools".

-   The "@" symbol represents the src (@src) folder. Sass and JS files replace `@/` with `[root]/@src/` on build. Since this is a Webpack and Sass

## 📂 ./ (root)

Most of our "dot" files live here. These are essentially third-party config files. No "buildable" code should live here.

## 📂 @src

Contains all uncompiled files. Files should be **organized by function, not file type** wherever possible. For instance, `@src/components` contains component folders with javascript, templates, and sass mixed together. Our build process allows for these types of files to live anywhere.

We also keep our main entry points here. `main.js` and `main.scss`, for instance, live here. These files should contain minimal code and mostly work as importers of other files deeper in the hierarchy.

-   **@src/helpers/**
    Small, repeatable bits of code that any other file import. Contains sass functions (tools), as well as utility classes (overrides). Polyfills can also be housed here.

-   **@src/components/**
    Components are self-contained mix-and-match-able bits of code that typically contain a template and some style. They should generally create something visible on a page.

-   **@src/modules/**
    Modules function like higher-order components, collections of components, or wrappers for components. In this way, a page could be seen as a module with a number of modules and components nested within it.

*   **@src/static/**
    All simple assets live here. Typically, these assets require nothing more than to be copied to another location (images being an exception). These files will just be copied to `dist/public/`, nearly untouched by the build process.

## 📂 config

Configuration files for the current project. Typically, you `sass.config.scss` and `paths.config.js` are the only files you'll need to touch.

## 📂 build

Build scripts and tasks.

-   **bin/tasks/** contains all gulp task functions. The naming convention of "[task name].task.js" is employed here.

-   **bin/webpack/** contains various webpack configuration helpers. Using the name "[purpose].webpack.config.js" keeps things organized by functionality. "demos", "samples", and "js" provide the bulk of the webpack workflow.

-   **bin/helpers/** contains simple scripts to help with tasks and build steps. For instance, "logger.js" handles the consistent formatting of `console.log`-type output.

## 📂 docs

Additional documentation about the project.

## 📂 dist

The build target. This folder should never contain pre-built files, since its contents are emptied on every build. This is also the folder that gets served up by the the local server.

-   **dist/public** is what gets published to servers. Having this nested inside of "dist" allows us to mimic production environments more closely, while keeping our paths relatively consistent.

---

## 💪 Tips and Tricks

### Gulp arguments

Running `gulp` by itself will compile your Sass and concatenate your Javascript, but you may need some additional build steps for a complete workflow. Our gulp file accepts arguments in the form of `gulp --argument1 --argument2` to turn certain tasks on and off.

**Production mode**:
Running `gulp --production` will run all tasks in production mode, and set the `NODE_ENV` to `'production'`. This will make sure all files are in shape to be shipped to a production server (minified, concatenated, uglified, etc.).

**"Local Production" mode**:
`gulp --local` will run the project in what we call "local production" mode. This means all assets are run through the production build steps while still being watched and served over a local server. _This mode is really only for testing minified code as it can be extremely slow between builds._

### Style Guide generation

The style guide is generated on the fly by the `gulp` task `styleGuide` (using the markdown-styleguide-generator node module).

To create style guide entries, create a comment block with the `SG` in the first line. The next immediate line should be title of your style guide entry (using a `#` to demarcate the start). A `/` will indicate a sub-section title. So `# Title/Sub-section` will create a parent section named "Title", with a child named "Sub-section".

Create `html` examples (with a code snippet) by creating a code block followed by "html_example" (\`\`\`html_example).

Separating "development" comments from "styles" requires adding a `[[dev]]` anywhere within the title of that section.

    /* SG
    # Section/Component
    This is an example Component.

    ```html_example
    <div>...</div>
    ```
    * /

Everything will be run through [Markdown (GitHub Flavored)](https://guides.github.com/features/mastering-markdown/). This allows text formatting and code samples.
