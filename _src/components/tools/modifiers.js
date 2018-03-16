export default function(modifier, classPrefix, classSuffix) {
    classSuffix = classSuffix || '';

    if (modifier && modifier.length > 0 && Array.isArray(modifier)) {
        return modifier.reduce((prev, name) => {
            return prev + ' ' + classPrefix + name + classSuffix;
        }, '');
    }

    return '';
}
