export default function (array, callback, scope) {
    if (Array.isArray(array) && array !== 'undefined') {
        for (var i = 0, arrLen = array.length; i < arrLen; i++) {
            callback.call(scope, array[i], i, array); // passes back stuff we need
        }
    }
};
