const decodeHtml = (function() {
    // this prevents any overhead from creating the object each time
    const element = typeof document !== 'undefined' ? document.createElement('div') : '';

    function decodeHTMLEntities (str) {
        if (str && typeof str === 'string') {
            // strip script/html tags
            str = str.replace(/<script[^>]*>([\S\s]*?)<\/script>/gmi, '');
            str = str.replace(/<\/?\w(?:[^"'>]|"[^"]*"|'[^']*')*>/gmi, '');
            element.innerHTML = str;
            str = element.textContent;
            element.textContent = '';
        }

        return str;
    }

    return decodeHTMLEntities;
})();

export default decodeHtml;
