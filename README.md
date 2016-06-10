[Front-End-Framework](http://uwhealth.github.io/Front-End-Framework/)
===================

[Our Workspace](https://workspaces.uconnect.wisc.edu/display/ehealth/Front+End+Design) (Requires UW Health intranet access)


## Software

1. [Node](https://nodejs.org/)
2. [Gulp](http://gulpjs.com/)
  * Run `npm install --global gulp` from the command line after Node has been installed.

## Set up

1. [Clone or fork this repository](https://github.com/UWHealth/Front-End-Framework.git)
2. Using the command line (preferably using PowerShell rather than cmd.exe), `cd` to the Framework's directory.
3. Run `npm install`.
5. Run `gulp` (from the command line).
6. Open a browser and go to [localhost:3000](http://localhost:3000/). This is your local running copy of the framework.
7. **Start codin' and compilin'.**

---

## Tips and Tricks

### Style Guide generation
The style guide you are reading is generated on the fly by the `gulp` task `styleguide` (using the markdown-styleguide-generator node module).

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

Everything will be run through [Markdown(GitHub Flavored)](https://guides.github.com/features/mastering-markdown/). This allows text formatting and code samples.


### Gulp arguments
Running `gulp` by itself will compile your Sass and concatenate your Javascript, but you may need some additional build steps for a complete workflow. Our gulp file accepts arguments in the form of `gulp --argument1 --argument2` to turn certain tasks on and off.

###### Minify/Uglify
Running `gulp --uglify` will compress your css and js files into a single line.

###### No Style Guide
Running `gulp --no-sg` will prevent style guide generation. This can be useful if you are simply working on styles only since the style guide forces a page reload.

###### Sourcemaps
Running `gulp --sourcemaps` or `gulp --sm` will add source maps to your Javascript and CSS. Very useful if working with concatenated, uglified, or tangled Sass code. [Learn more about source maps](http://blog.teamtreehouse.com/introduction-source-maps).

###### JS Hint
Running `gulp --lint` or `gulp --hint` will run your JS through [JSHint](https://github.com/jshint/jshint). You can change the project's hinting rules by modifying the `.jshintrc` file and ignore files via the `.jshintignore` file (both at the root of the project). This is usually necessary for plugins or other highly optimized javascript since JSHint will emit errors about code readability.
