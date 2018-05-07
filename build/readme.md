# ./build

**Configuration files and build scripts**

## Folders

* **tasks**: Gulp task functions. Imported and run by gulpfile.js. Functions are exported without the `gulp.task` method wrapper. File names should represent their intended task's name, followed by ".task.js" (e.g. "sass.task.js" for the "sass" task).

* **helpers**: Build helper scripts. These generalized scripts are imported by tasks and webpack configurations to make certain tasks simpler. For instance, all build messaging is handled by "logger.js".

* **webpack**: Webpack configurations. These are imported by the `webpack` task. While in production mode, Webpack only handles javascript bundling, but in development (default) mode, Webpack also generates html files for development. "combined.webpack.config.js" acts as the entry point for these configurations.
