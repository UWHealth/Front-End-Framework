# ./build

**Build scripts**

## Folders

-   **tasks**: Gulp task functions. Imported and run by gulpfile.js. Functions are exported without the `gulp.task` method wrapper. File names should represent their intended task's name, followed by ".task.js" (e.g. "sass.task.js" for the "sass" task).

    -   **A note about tasks:** Tasks should wait to require their dependencies until they've been called. In other words, `require` calls should be held within the exported (`module.exports`) function. This helps keep tasks self-contained until they are explicitly called.

-   **helpers**: Build helper scripts. These generalized scripts are imported by tasks and webpack configurations to make certain tasks simpler. For instance, all build messaging is handled by "logger.js".

-   **webpack**: Webpack configurations. These are imported by the `js` task (technically by "webpack.build.js"). While in production mode, Webpack only handles javascript bundling, but in development (default) mode, Webpack also generates html files for development and handles hot module replacement.

## Files

-   **gulp.build.js**: Centralized starting point for all gulp tasks — the file that the `gulp` command actually calls. It also imports all "\*.task.js" files in the "tasks" folder.

-   **webpack.build.js**: Pulls webpack configs from "build/webpack/" into an array and exports them for use.
