const base = require('./base.html');

module.exports = function(data) {
    return base.render(data).html;
}
