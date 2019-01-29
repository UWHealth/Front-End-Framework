const glob = require('fast-glob');
const path = require('path');

const CWD = process.cwd().replace(/\\/g, '/');
const TASKS = {};

glob.sync(`${CWD}/build/tasks/*.task.js`).forEach((task) => {
    TASKS[path.basename(task, '.task.js')] = require.resolve(
        path.resolve(task)
    );
});

module.exports = TASKS;
