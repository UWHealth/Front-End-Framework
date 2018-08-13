/*eslint no-console: "off" */
const sass = require('node-sass');
const sassConfig = require('../../helpers/sass-config');

module.exports = {
    style: (value) => {
        const content = value.content;
        const attributes = value.attributes;

        if (
            attributes.type !== 'text/scss' &&
            attributes.type !== 'text/sass'
        ) {
            return;
        }
        try {
            sassConfig.data = content;
            const result = sass.renderSync(sassConfig);

            return {
                code: result.css,
                map: result.map,
            };
        } catch (e) {
            console.log(e.formatted);
            return new Error(e);
        }
    },
};
