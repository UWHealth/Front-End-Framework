const glob         = require('fast-glob');
const path         = require('path');

const TASKS = {};

glob.sync('./build/tasks/*')
    .forEach((task) => {
        TASKS[path.basename(task, '.task.js')] = require(path.resolve(task));
    });

module.exports = TASKS;
