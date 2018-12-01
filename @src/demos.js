const base = require('@/modules/base/index.html');

module.exports = function(data) {
    return base.render(data).html;
};
