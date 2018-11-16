const base = require('@/modules/base/index.html');

if (module.hot) {
    module.hot.accept(function(err) {
        console.log(err);
    });
}

module.exports = function(data) {
    return base.render(data).html;
};
