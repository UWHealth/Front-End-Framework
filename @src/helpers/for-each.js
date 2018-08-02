export default function(array, callback, scope) {
    if (array !== 'undefined' && array.length >= 0) {
        for (var i = 0, arrLen = array.length; i < arrLen; i++) {
            callback.call(scope, array[i], i, array); // passes back stuff we need
        }
    }
}
