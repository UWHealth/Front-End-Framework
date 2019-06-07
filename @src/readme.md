# ./@src

**Source files**, waiting to be built. Should resemble the folder structure of the published site.

## Folders

Moving from lowest-level to highest, each folder represents a layer of abstraction and nesting.

1.  **assets:**
    All simple (mostly binary media) files live here. Typically, these assets require nothing more than to be copied to another location (images being an exception). These files will just be copied to `/dist/public/`, nearly untouched by the build process (except images, which get compressed).

    * **static:**
        Another form of "asset", but anything in here should be considered cache-able. The output of this folder is the root of the `dist` folder (`static/favicon.ico` will be available at `dist/favicon.ico`). In standard setups, this folder's contents will be cached by a service worker.

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

    Pages can be thought of as the physical representation of the application (a.k.a "routes" in standard MVC terms). If the project is a static site, then the output from this folder can _actually be the site_. If not, pages can also be used as a place for development and documentation. There are a few rules to how these pages are output:
    1. `/pages/index.html` will create a `dist/index.html`.
    2. `/pages/foo.html` will create a `dist/foo/index.html`
    3. Anything with a leading underscore will be ignored and not output.
    4. `_errors.svelte` and `_router.svelte` are used by `server.js`. Although this can be changed in `server.js` if needed.

    _These rules are contigent on the default functionality of `/@src/server.js`._


## Files

The files in the root of this folder are generally entry points for the project. They typically do little more than triage the imports for other related files.

1.  **main.js:**
    > Entry point for all client-side javascript

    This is the place where we initialize our JS and "mount" our application. Generally, it's wise to keep this file fairly sparce, allowing imported files to do the more complicated work.

2.  **server.js**
    > Entry point for all server-side rendered javascript

    This is largely used for rendering pages during development, but could also be adapted to output html for a static site. See the `pages` documentation above to get an idea of how this file is expected to work. However, this file is only expected to return html strings (which is rendered by browsersync), so anything that achieves that goal is acceptable.

    This lives along side the rest of our `@src` code because it is actually compiled by webpack before being used on the development server (as middleware). This gives us the flexibility to add new pages without having to restart webpack, while also allowing changes to the development environment on the fly.

3.  **main.scss**
    > Main entry point for Sass stylesheets

    For organizational purposes, this file should _only_ import other sass files. That said, if a project were simple enough, this could be the only sass file necessary.

    **print.scss**
    > Similar to main, but specifically for print styles

