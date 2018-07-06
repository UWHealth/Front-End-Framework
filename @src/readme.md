# ./@src

**Source files**, waiting to be built. Should resemble the folder structure of the published site.

## Folders

Moving from lowest-level to highest, each folder represents a layer of abstraction and nesting.

1.  **helpers:**
    Small, repeatable bits of code that any other file import. Contains sass functions (tools), as well as utility classes (overrides). Polyfills can also be housed here.

2.  **components:**
    Components are self-contained mix-and-match-able bits of code that typically contain a template and some style. They should generally create something visible on a page.

3.  **modules:**
    Modules function like higher-order components, collections of components, or wrappers for components. In this way, a page could be seen as a module with a number of modules and components nested within it.

*  **static:**
    All simple assets live here. Typically, these assets require nothing more than to be copied to another location (images being an exception). These files will just be copied to `/dist/public/`, nearly untouched by the build process (except images, which get compressed).


## Files

The files in the root of this folder are generally entry points for the project. They typically do little more than triage the imports for other related files.  
