const glob = require('fast-glob');
const path = require('path');

const cwd = process.cwd().replace(/\\/g, '/');
const TASKS = {};

glob.sync(`${cwd}/build/tasks/*.task.js`).forEach((task) => {
    TASKS[path.basename(task, '.task.js')] = require.resolve(
        path.resolve(task)
    );
});

module.exports = TASKS;
