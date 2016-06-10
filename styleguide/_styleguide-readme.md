/*************************\
/ 		README            \
/*************************\
This file is exclusively used for the style guide.

<SG>
# \_Setup/ [[dev]]

## A number of front-end technologies to get any e-Health website or application off the ground.
</SG>

<SG>
# \_Setup/1. Software [[dev]]

1. [Node](https://nodejs.org/)
2. [Gulp](http://gulpjs.com/)
  * Run `npm install --global gulp` from the command line after Node has been installed.
</SG>

<SG>
# \_Setup/2. Getting Started [[dev]]

1. [Clone or Fork](https://github.com/UWHealth/Front-End-Framework.git)
2. Using the command line (preferably using PowerShell rather than cmd.exe), `cd` to the Framework's directory.
3. Run `npm install`.
4. Run `npm install gulp -g` to install gulp globally (if you haven't already)
5. Run `gulp`
6. Open a browser and go to [localhost:80](http://localhost:80/). This is your local running copy of the framework.
7. **Start codin' and compilin'.**

</SG>

<SG>
# \_Setup/3. Tips and Tricks [[dev]]

## Style Guide generation
The style guide you are reading is generated on the fly by the `gulp` task `styleguide` (using the markdown-styleguide-generator node module).

To create style guide entries, create a comment block with the `SG` in the first line. The next immediate line should be title of your style guide entry (using a `#` to demarcate the start). A `/` will indicate a sub-section title. So `#Title/Sub-section` will create a parent section named "Title", with a child named "Sub-section".

Create `html` examples (with a code snippet) by creating a code block followed by "html_example" (\`\`\`html_example).

    /* SG
    # Section/Component
    This is an example Component.

    ```html_example
    <div>...</div>
    ```
    * /

Separating "development" comments from "styles" requires adding a `[[dev]]` anywhere within the title of that section.

    /* SG
    # Section/Component [[dev]]


Everything will be run through [Markdown (GitHub-flavored)](https://guides.github.com/features/mastering-markdown/). This allows text formatting and code samples.

#### Markdown Use

Sometimes meta information that does not fit logically into a scss file is necessary. In those cases, you can use a plain markdown file. To make the  wrap your style-guide-specific comments in an `<SG>` "tag" rather than a `/* SG` comment.

---

## Gulp arguments
Running `gulp` by itself will compile your Sass and concatenate your Javascript, but you may need some additional build steps for a complete workflow. Our gulp file accepts arguments in the form of `gulp --argument1 --argument2` to turn certain tasks on and off.

#### Minify/Uglify
###### `--minify`
Compress and uglify your css and js files.

#### No Style Guide
###### `--no-sg`
Prevents style guide generation. This can be useful if you are simply working on styles only since the style guide forces a page reload.

#### Sourcemaps
###### `--sm`
Adds source maps to your Javascript and CSS. Very useful if working with concatenated, uglified, or tangled Sass code. [Learn more about source maps](http://blog.teamtreehouse.com/introduction-source-maps).

#### JS Hint
###### `--lint`
Runs your JS through [JSHint](https://github.com/jshint/jshint). You can change the project's hinting rules by modifying the `.jshintrc` file and ignore files via the `.jshintignore` file (both at the root of the project). This is usually necessary for plugins or other highly optimized javascript since JSHint will emit errors about code readability.

#### Browsersync
###### `--bs[]=`
Changes the default Browsersync options.

- `--bsserver`: Change the server options (typically just the base directory).
- `--bsproxy`:  Run browsersync through a proxy address (cannot be used along side server options).
- `--bsservestatic`: Add additional directories from which static files should be served. Should only be used in proxy mode.
- `--bsport`: Change the default port (80 on Windows, 3000 on Unix-based systems).
- `--bstunnel`: Tunnel the server through a URL.

_See [Browsersync's documentation](https://www.browsersync.io/docs/options/) for details on the options._


</SG>
