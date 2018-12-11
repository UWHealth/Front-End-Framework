function hasOwnPropertyPath(PATHS, propertyPath) {
    if (!propertyPath) return false;

    var properties = propertyPath.split('.');
    var obj = this;

    for (var i = 0; i < properties.length; i++) {
        var prop = properties[i];

        if (!obj || !obj.hasOwnProperty(prop)) {
            return false;
        } else {
            obj = obj[prop];
        }
    }

    return true;
}

module.exports = function(PATHS, paths, LOG) {
    function err(path) {
        LOG.error(
            `Configuration needs '${path}' in order for this part of the app to work.`
        );
    }

    if (!Array.isArray(paths)) {
        return hasOwnPropertyPath(PATHS, paths);
    }
    return paths.forEach((path) => {
        if (!hasOwnPropertyPath(PATHS, path)) return err(path);
    });
};

module.exports.hasOwnPropertyPath = hasOwnPropertyPath;
