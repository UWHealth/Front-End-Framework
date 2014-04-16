[Front-End-Framework](http://uwhealth.github.io/Front-End-Framework/)
===================

A number of frontend technologies to get any e-Health website or application off the ground.

[Our Workspace](https://workspaces.uconnect.wisc.edu/display/ehealth/Front+End+Design)

----------

#Getting Started

##Sofware
* **Prepros**: http://alphapixels.com/prepros/
For all your preprocessing needs.
* **GitHub:** https://windows.github.com/
Totally optional if you prefer using the command line.

##Installation {#installation}
1. Clone the Github repo from https://github.com/UWHealth/Front-End-Framework.git or simply clicking the **"Clone to Desktop" button** on the right side of this page.
2. *Optional, but recommended:* Make a branch of the Framework for whatever project you're working on. This will allow you to version control your own code modifications while still being able to pull in new Framework features if necessary.
3. Open Prepros and Add a New Project pointing to the newly cloned directory. Prepros should recognize the prepros.json file and give you the correct configuration for Sass and Javascript compilation (including autoprefixer for our supported browsers).

----------
#Structure {#structure}
The Framework, as it currently stands, is set up with all the basic needs of a simple project.

----------
###/root {#root}
In the main(root) Framework directory, you'll find pretty basic boilerplate files (in fact, much of it is from [HTML5 BP](http://html5boilerplate.com/)).

1. ``.html`` pages are compiled from the [_partials/kits](#partials) folder. These are used for the example pages at http://uwhealth.github.io/Front-End-Framework/
**(*Feel free to use the ``head`` and ``footer``, as these are derived from best practices and the HTML 5 Boilerplate project.*)**
2. ``browserconfig.xml`` and ``favicon.ico`` are for both favicon files.
3. ``browserconfig.xml`` is used, specifically, for *Windows 8+* tiles.
``crossdomain.xml`` is quickly becoming a best practice. See [HTML5 BP's explaination](https://github.com/h5bp/html5-boilerplate/blob/master/doc/crossdomain.md).
4. ``prepros.json`` and ``config.codekit`` are used by Prepros and Codekit, respectively.
5. ``README.md`` is what's responsible for the documentation you're reading right now.

###/css {#css}
Post-compiled CSS and fonts live here.

###/favicons
Favicon files for various mediums live here. Mostly used as a way to get all of those files out of the root. ``/favicon.ico`` works as a fallback for very old browsers that don't support favicon directory pointing.

###/js
Your compiled and compressed JS should land here.
####/js/vendor
All outside plugins that cannot/should not be integrated into plugins.js should live here. jQuery, and Modernizr come prepackaged with the Framework.

----------
##/_partials {#partials}
This is the most important folder in the Framework. All Sass and Javascript work should originate from this folder's children.

####/_partials/kits
``.kit`` is a simple "language" that allows for HTML partials and imports. A [Grunt plugin][1] exists to compile these files, but feel free to turn these into any other type of HTML partial.

What's worth noting is that ``_meta.kit`` and ``_foot.kit`` contain some very useful boilerplate HTML.

####/_partials/sass {#sass}
``main.scss`` is the only file in this folder. It simply acts as an import for all the necessary ``.scss`` files and gets output to ``/css/main.css``.

*Note that many folders in here contain an ``_import.scss``. This is usually called by ``main.scss`` and responsible for importing any sibling ``.scss`` files. It will not be noted below as it always does the same thing.*

####/_partials/sass/base
1. ``config.scss`` contains all the variables you'll need to get started and should house any new configuration variables you plan to add. It is one of the first files imported by ``main.scss``, so it takes precedent over nearly everything else.
2. ``app.scss`` should be where you write all of your site-/application-specific css. There is some example css to get you started, but it is unnecessary to the larger project. **Note that this file gets imported last, so it has access to every other function in the Framework's Sass, and can overwrite any preceeding css.**

####/_partials/sass/colors
1. ``colors.scss`` is currently the only file here. It creates the various color alternates provided in ``config.scss``.

####/_partials/sass/components
Anything that might be a considered a widget/module/component in an app is contained here.

1. ``boxes.scss`` creates ``.box`` styles, including styles for square boxes, 4:3 boxes, and 16:9 boxes.
2. ``buttons.scss`` houses a mixin for button creation. It also includes a button placeholder class ready for inclusion.
3. ``lists.scss`` includes some standard boilerplate list styles including breadcrumbs, inline lists, and bordered lists.
4. ``tables.scss`` creates some normalized styles for tables as well as a few extras for responsive tables.
5. ``tabs.scss`` contains tabs and accordion styles. Most of which is output depending on some variables set in ``config.scss``.

####/_partials/sass/layout

####*NOTE: Unfinished Section*

1.``grids.scss`` is based on [CSS Wizardry grids][2]. All grid configuration can be managed through the variables in ``config.scss`` including number of columns, gutter size, floats, and media queries.

The basic usage for grids is tied to the media queries you set up.
As an example, if you have media-queries named ``small`` and ``desk`` (as are two defaults in the Framework), and you want a column to be 50% at ``small`` and 25% at ``desk``, you'd write:
```scss
.class {
    @extend %grid_item;
    @extend %small_one_half;
    @extend %deks_one_quarter;
}
```
Which outputs to:
```css
.class { display: inline-block; }

@media screen (max-width: 480px){
    .class {width: 50%;}
}
@media screen (min-width: 960px){
    .class {width: 25%;}
}
```
**Be careful of overextending. It's best to just leave one class for columns and another for rows rather than re-declaring %grid_items.**

All ``grid_items`` must be contained within a ``grid`` row. This is used for keeping grid items in line and, in the case of floats, cleared.

*Note: More documentation for grids is forthcoming.*


  [1]: https://www.npmjs.org/package/grunt-codekit
  [2]: https://github.com/csswizardry/csswizardry-grids