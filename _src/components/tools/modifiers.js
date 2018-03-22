export default function(modifier, classPrefix, classSuffix) { //eslint-disable-line
    classSuffix = classSuffix || '';

    if (!modifier) {
        return '';
    }

    if (modifier.length > 1 && typeof modifier === 'string') {
        modifier = [modifier];
    }

    if (modifier.length > 0 && Array.isArray(modifier)) {
        return modifier.reduce((prev, name) => {
            return prev + ' ' + classPrefix + name + classSuffix;
        }, '');
    }


    return '';
}
