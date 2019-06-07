# [Front End Framework](http://uwhealth.github.io/Front-End-Framework/)

[Our Workspace](https://workspaces.uconnect.wisc.edu/display/ehealth/Front+End+Design) (Requires UW Health intranet access)

## 💾 Software

1.  [Node](https://nodejs.org/) (version 8+)
2.  [Gulp CLI](http://gulpjs.com/) (Optional)
    -   Run `npm install --global gulp-cli` from the command line after Node has been installed.
    * **This is actually optional, since it's recommended to use `npx gulp` (locally installed gulp) instead of plain `gulp`.**

## ⚙️ Set up

1.  [Clone this repository](https://github.com/UWHealth/Front-End-Framework.git)
2.  Using the command line (preferably using PowerShell/Terminal rather than cmd.exe), `cd` to the Framework's directory.
3.  Run `npm install` and wait for the dependencies to install.
4.  Run `npx gulp`.
5.  Open a browser and go to [localhost:8080](http://localhost:8080/). This is your local running copy of the Framework.
6.  **Start codin' and compilin'.**

---

## 🗂 Structure

### Notes on file naming conventions

Conventions make scaling applications simpler while keeping complex build processes in the background. Here are a few:

-   All sass partials are prepended with an "\_" (underscore). Leaving this off will generate a separate css file.

-   Spaces in folders and file names should be represented by a "-" (hyphen). Names should always be lowercase. If a folder is intended to imported like a single file, the folder should contain an `index.js` (or `_index.scss` in sass' case). This allows files to be moved into folders without changing the files that import them (e.g. `import './thing'` could resolve to `./thing.js` or `./thing/index.js` )
    _We use this since it essentially follows the Node naming convention._

-   We use the term "helpers" to mean small pieces of code that other files rely on. Another term might be "utilities" or "tools".

-   **Path aliases** are used in compiled source files to make complex file paths simpler to access and change. Sometimes it's necessary to change the location or nesting of a heavily depended on file, and path aliases can ease the required code changes that follow.

    It's worth noting that these aliases only work in compiled files though, so anything that isn't "built" will not have access to these aliases.

    -   The "@" symbol represents the src (@src) folder. Sass and JS files replace `"@/helpers"` with `"[root]/@src/helpers"` upon build.

    -   The "~" symbol represents the node_modules folder. Sass and JS files will replace `"~module-name"` with `"[root]/node_modules/module-name"`.

### 📂 ./ (root)

Most of our "dot" files live here. These are essentially third-party config files. No "buildable" code should live here.

### 📂 @src

Contains all uncompiled files. Files should be **organized by function, not file type** wherever possible. For instance, `@src/components` contains component folders with javascript, templates, and sass mixed together. Our build process allows for these types of files to live anywhere.

We also keep our main entry points here. `main.js` and `main.scss`, for instance, live here. These files should contain minimal code and mostly work as importers of other files deeper in the hierarchy.

-   **@src/helpers/**
    Small, repeatable bits of code that any other file import.

-   **@src/components/**
    Components are self-contained mix-and-match-able bits of code that typically contain a template and some style. They should generally create something visible on a page.

-   **@src/layouts/**
    Layouts function like higher-order components, wrappers for components, or wrappers for other layouts.

-   **@src/pages**
    Pages can be thought of as the physical representation of the application (a.k.a "routes" in MVC terms). If the project is a static site, then the output from this folder will _actually be the site_.

*   **@src/assets/**
    These files will just be copied to `dist/public/`, nearly untouched by the build process.

→ [See @src's readme](./@src/readme.md) for more details.

## 📂 config

Configuration files for the current project. Typically, you `sass.config.scss` and `paths.config.js` are the only files you'll need to touch.

## 📂 build

Build scripts and tasks.

-   **build/tasks/** contains all gulp task functions. The naming convention of "[task name].task.js" is employed here.

-   **build/webpack/** contains various webpack configuration helpers. Using the name "[purpose].webpack.config.js" keeps things organized by functionality. "demos", "samples", and "js" provide the bulk of the webpack workflow.

-   **build/helpers/** contains simple scripts to help with tasks and build steps. For instance, "logger.js" handles the consistent formatting of `console.log`-type output.

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

**Clearing cache**:
`gulp --cache` (or `gulp clean --cache` if you only want to clear the cache) will delete hidden cache files from the build. These files exist to make subsequent builds faster, so you should only do this if you're noticing that new changes are not affecting

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
