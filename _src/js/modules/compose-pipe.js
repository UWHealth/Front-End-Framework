/**
 * Takes multiple functions and applies them in a series (from right-to-left/bottom-to-top)
 * @param  {Function} functions - functions to be executed
 * @return {Function}           - Curried function
 */
export function compose(...functions) {
    return (data) => {
        return functions.reduceRight((value, func) => {
            return func(value);
        }, data);
    };
};

/**
 * Takes multiple functions and applies them in a series (from left-to-right/top-to-bottom)
 * @param  {Function} functions - functions to be executed
 * @return {Function}           - Curried function
 */
export function pipe(...functions) {
    return (data) => {
        return functions.reduce((value, func) => {
            return func(value);
        }, data);
    };
};
