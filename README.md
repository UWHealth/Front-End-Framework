[Front-End-Framework](http://uwhealth.github.io/Front-End-Framework/)
===================

[Our Workspace](https://workspaces.uconnect.wisc.edu/display/ehealth/Front+End+Design) (Requires UW Health intranet access)


## Software

1. [Node](https://nodejs.org/)
2. [Gulp 4](http://gulpjs.com/) (specifically, `gulp-cli`)
  * Run `npm install --global gulp-cli` from the command line after Node has been installed.

## Set up

1. [Clone or fork this repository](https://github.com/UWHealth/Front-End-Framework.git)
2. Using the command line (preferably using PowerShell rather than cmd.exe), `cd` to the Framework's directory.
3. Run `yarn` and wait for the dependencies to install.
   * _`npm install` is also acceptable but could have versioning issues._
4. Run `gulp`.
5. Open a browser and go to [localhost:8080](http://localhost:8080/). This is your local running copy of the framework.
6. **Start codin' and compilin'.**

---

## Tips and Tricks

### Style Guide generation
The style guide is generated on the fly by the `gulp` task `styleGuide` (using the markdown-styleguide-generator node module).

To create style guide entries, create a comment block with the `SG` in the first line. The next immediate line should be title of your style guide entry (using a `#` to demarcate the start). A `/` will indicate a sub-section title. So `#Title/Sub-section` will create a parent section named "Title", with a child named "Sub-section".

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


### Gulp arguments

Running `gulp` by itself will compile your Sass and concatenate your Javascript, but you may need some additional build steps for a complete workflow. Our gulp file accepts arguments in the form of `gulp --argument1 --argument2` to turn certain tasks on and off.

**Production mode**:
Running `gulp --production` will run all tasks in production mode, and set the `NODE_ENV` to `'production'`. This will make sure all files are in shape to be shipped to a production server (minified, concatenated, uglified, etc.).

**"Local Production" mode**:
`gulp --local` will run the project in what we call "local production" mode. This means all assets are run through the production build steps while still being watched and served over a local server. _This mode is really only for quick tests as it can be extremely slow._

**No Style Guide**:
Running `gulp --no-sg` will prevent style guide generation. This can be useful if you are simply working on styles only since the style guide forces a page reload.


## Structure

## ./ (root)

Most of our "dot" files live here. Our build entry points (gulpfile and webpack.config) also live here for convention's sake. These two ultimately pull their dependencies from the **bin** folder.

## \_src

Contains all uncompiled files. Files should be **organized by function, not file type** wherever possible. For instance, `_src/components` contains component folders with javascript, templates, and sass mixed together. Our build process allows for these types of files to live anywhere.

* **\_src/sass/ & \_src/js/**
Sometimes generalized functions and libraries just don't fit under tangible functional locations. In this case, we keep them in these file-type folders.

* **\_src/static/**
All simple assets live here. Typically, these assets require nothing more than to be copied to another location (images being an exception). These files will just be copied to `dist`, nearly untouched by the build process.

* **\_src/\_samples/**
Development-only "sample" pages. Any JS file here will be compiled by webpack, and output under `dist/samples/[filename]/index.html`. These should be used for development only and not ship with the final production. In fact, "production" mode will not these files.


## bin

Build scripts and configuration.

* **bin/tasks/** contains all gulp task functions. The naming convention of "[task name].task.js" is employed here.
* **bin/webpack/** contains various webpack configuration helpers. Using the name "[purpose].webpack.config.js" keeps things organized by functionality. "demos", "samples", and "js" provide the bulk of the webpack workflow.
* **bin/tools/** contains simple scripts to help with tasks and build steps. For instance, "logger.js" handles the consistent formatting of `console.log`-type output.


### docs

Additional documentation about the project.


### dist

The build target. This folder should never contain pre-built files, since its contents are emptied on every build. This is also the folder that gets served up by the the local server.

* **dist/public** is what gets published to servers. Having this nested inside of "dist" allows us to mimic production environments more closely, while keeping our paths relatively consistent.
