[Front-End-Framework](http://uwhealth.github.io/Front-End-Framework/)
===================

A number of frontend technologies to get any e-Health website or application off the ground.

[Our Workspace](https://workspaces.uconnect.wisc.edu/display/ehealth/Front+End+Design) (Requires UW Health intranet access)

#Getting Started


##Recommended Sofware
* **Prepros**: http://alphapixels.com/prepros/
For all your preprocessing needs.
* **Sass**:http://sass-lang.com/install
Necessary, because prepros ships with Sass 3.2 and we need 3.3. 
* **GitHub:** https://windows.github.com/
Totally optional if you prefer using the command line.


----------
##Installation
There are two potential routes for using the Framework: **1.** Branch. **2.** Fork.

1. Create a fork of this repo. This may be preferable since it's the least likely to cause conflicts. This will also allow us to track new features with pull requests rather than straight commits. It may also be the cleaner and more robust route since pull requests are added as issues that can be tracked.

2. Clone the Github repo from https://github.com/UWHealth/Front-End-Framework.git or simply clicking the **"Clone to Desktop" button** on the right side of this page. From there, make a branch for whatever project you're working on. This will allow you to version control your own code modifications while still being able to pull in new Framework features if necessary.

After forking or cloning, open Prepros and **Add a New Project**, pointing to the newly created directory on your computer. Prepros should recognize the prepros.json file and give you the correct configuration for Sass and Javascript compilation (including autoprefixer for our supported browsers).

---------
Prepros then needs to be set up to use the most recent version of Sass (3.3.x). To do this, go into Prepros options and click **Advanced Options** at the bottom. Check the box that says 'Use Custom Ruby'. From here, a text box will appear and allow you to type in the path to your ruby install (usually, just typing the recommended path will suffice). 

Finally, check the 'For Sass' box. 

----------
#Structure
The Framework, as it currently stands, is set up with all the basic needs of a simple project.

----------
###/root
In the main(root) Framework directory, you'll find pretty basic boilerplate files (in fact, much of it is from [HTML5 BP](http://html5boilerplate.com/)).

1. ``.html`` pages are compiled from the [_partials/kits](#partials) folder. These are used for the example pages at http://uwhealth.github.io/Front-End-Framework/
**(*Feel free to use the ``head`` and ``footer``, as these are derived from best practices and the HTML 5 Boilerplate project.*)**
2. ``browserconfig.xml`` and ``favicon.ico`` are for both favicon files.
3. ``browserconfig.xml`` is used, specifically, for *Windows 8+* tiles.
``crossdomain.xml`` is quickly becoming a best practice. See [HTML5 BP's explaination](https://github.com/h5bp/html5-boilerplate/blob/master/doc/crossdomain.md).
4. ``prepros.json`` and ``config.codekit`` are used by Prepros and Codekit, respectively.
5. ``README.md`` is what's responsible for the documentation you're reading right now.

####/css
Post-compiled CSS and fonts live here.

----------
####/favicons
Favicon files for various mediums live here. Mostly used as a way to get all of those files out of the root. ``/favicon.ico`` works as a fallback for very old browsers that don't support favicon directory pointing.

----------
####/js
Your compiled and compressed JS should land here.

#####/js/vendor
All outside plugins that cannot/should not be integrated into plugins.js should live here. jQuery, and Modernizr come prepackaged with the Framework.

----------
##/_partials
This is the most important folder in the Framework. All Sass and Javascript work should originate from this folder's children.

----------

###/_partials/kits
``.kit`` is a simple "language" that allows for HTML partials and imports. A [Grunt plugin][1] exists to compile these files, but feel free to turn these into any other type of HTML partial.

What's worth noting is that ``_meta.kit`` and ``_foot.kit`` contain some very useful boilerplate HTML.

----------

###/_partials/sass

``main.scss`` is the only file in this folder. It simply acts as an import for all the necessary ``.scss`` files and gets output to ``/css/main.css``.

*Note: many folders in here contain an ``_import.scss``. This is usually called by ``main.scss`` and responsible for importing any sibling ``.scss`` files. It will not be noted below as it always does the same thing.*

----------
####/_partials/sass/base

1. ``config.scss`` contains all the variables you'll need to get started and should house any new configuration variables you plan to add. It is one of the first files imported by ``main.scss``, so it takes precedent over nearly everything else.
2. ``app.scss`` should be where you write all of your site-/application-specific css. There is some example css to get you started, but it is unnecessary to the larger project.
*Note: this file gets imported last, so it has access to every other function in the Framework's Sass, and can overwrite any preceeding css.*

----------
####/_partials/sass/colors

1. ``colors.scss`` creates the various color alternates provided in ``config.scss``. You may also define new colors in the $additional-colors map if you want to separate your core colors from secondary colors. They will get merged into the $colors map, which can be accessed via the colors() function. Dark, Darker, Darkets, Light, Lighter, and Lightest variations will also be generated and stored into this map.
2. ``blendmodes.scss`` contains a series of functions that emulate photoshop blending modes (useful when converting PSDs to css). This is imported via ``functions.scss`` for higher-level access.

*Note: Accessing your colors should be done via the colors() function. This will give you access to all your colors and a few variations. As an example, let's say you want to access the light version of a color named "primary":*
```scss
color: color(primary, light)
```
*See the ``functions.scss`` file for aliases and more documentation on this function.

----------
####/_partials/sass/components

Anything that might be a considered a widget/module/component in an app is contained here.

1. ``boxes.scss`` creates ``.box`` styles, including styles for square boxes, 4:3 boxes, and 16:9 boxes.
2. ``buttons.scss`` houses a mixin for button creation. It also includes a button placeholder class ready for inclusion.
3. ``lists.scss`` includes some standard boilerplate list styles including breadcrumbs, inline lists, and bordered lists.
4. ``tables.scss`` creates some normalized styles for tables as well as a few extras for responsive tables.
5. ``tabs.scss`` contains tabs and accordion styles. Most of which is output depending on some variables set in ``config.scss``.

----------
####/_partials/sass/layout

*NOTE: Unfinished Section*

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
**Be careful of overextending. It's best to just leave one class for columns and another for rows rather than re-declaring ``%grid_items.``**

All ``grid_items`` must be contained within a ``grid`` row. This is used for keeping grid items in line and, in the case of floats, cleared.

##*Note: More documentation for grids is forthcoming.*


  [1]: https://www.npmjs.org/package/grunt-codekit
  [2]: https://github.com/csswizardry/csswizardry-grids
