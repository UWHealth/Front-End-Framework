const glob         = require('fast-glob');
const path         = require('path');

const cwd = process.cwd().replace(/\\/g, '/');
const TASKS = {};

glob.sync(`${cwd}/build/tasks/*`)
    .forEach((task) => {
        TASKS[path.basename(task, '.task.js')] = require(path.resolve(task));
    });

module.exports = TASKS;
