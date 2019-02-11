# ./@src

**Source files**, waiting to be built. Should resemble the folder structure of the published site.

## Folders

Moving from lowest-level to highest, each folder represents a layer of abstraction and nesting.

1.  **assets:**
    All simple assets live here. Typically, these assets require nothing more than to be copied to another location (images being an exception). These files will just be copied to `/dist/public/`, nearly untouched by the build process (except images, which get compressed).

    * **static:**
        Another form of "asset", but anything in here should be considered cache-able. The output of this folder is the root of the `dist` folder (`static/favicon.ico` will be available at `dist/favicon.ico`). In most setups, this folder's contents will be cached by a service worker.

1.  **helpers:**
    Small, repeatable bits of code that any other file import. Contains sass functions (tools), as well as utility classes (CSS overrides). Polyfills can also be housed here.

2.  **components:**
    > Components import helpers and assets

    Components are self-contained mix-and-match-able bits of code that typically contain a template and some style. They should generally create something visible on a page.

3.  **layouts:**
    > Layouts import components and assets

    Layouts function like higher-order components, wrappers for components, or wrappers for other layouts. These should be high-level enough that they can be reused, but shouldn't be expected to have the same level of reuse-ability as a component. Since layouts define the relationship between components, they can also be a good place to store shared component data.

4.  **pages:**
    > Pages import layouts, often passing down content

    Pages can be thought of as the physical representation of your application. If your website is a static site, then the output from this folder will be _actually be your site_. If not, pages can also be used as a place for development and documentation. There are three rules to how these pages are output:
    1. `/pages/index.html` will create a `dist/index.html`.
    2. `/pages/foo.html` will create a `dist/foo/index.html`
    3. Anything with a leading underscore will be ignored and not output.


## Files

The files in the root of this folder are generally entry points for the project. They typically do little more than triage the imports for other related files.
