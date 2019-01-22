const base = require('@/layouts/base/index.html');

module.exports = function(data) {
    return base.render(data).html;
};
