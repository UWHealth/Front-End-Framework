const prettier = require('./.prettierrc.js');

module.exports = {
    extends: ['plugin:prettier/recommended', 'prettier/standard'],
    plugins: ['compat', 'html', 'prettier'],
    parserOptions: {
        ecmaVersion: 9,
        sourceType: 'module',
        allowImportExportEverywhere: true,
    },
    env: {
        browser: true,
        node: true,
        nashorn: true,
        commonjs: true,
    },
    rules: {
        'prettier/prettier': 'warn',
        complexity: ['warn', 6],
        'lines-around-comment': [
            'warn',
            {
                beforeBlockComment: true,
                allowBlockStart: true,
                allowBlockEnd: true,
                allowObjectStart: true,
                allowObjectEnd: true,
                allowArrayStart: true,
                allowArrayEnd: true,
            },
        ],
        semi: ['warn', 'always'],
        'no-tabs': 'off',
        'no-mixed-spaces-and-tabs': ['warn', 'smart-tabs'],
        'new-cap': 'off',
        'no-trailing-spaces': [
            'warn',
            {
                skipBlankLines: true,
            },
        ],
        'space-before-blocks': ['warn', 'always'],
        'no-multiple-empty-lines': ['warn', { max: 2 }],
        'padded-blocks': ['warn', 'never'],
        'no-multi-spaces': [
            'warn',
            {
                exceptions: {
                    BinaryExpression: true,
                    VariableDeclarator: true,
                    Property: true,
                    ImportDeclaration: true,
                },
                ignoreEOLComments: true,
            },
        ],
    },
    globals: {
        cwd: true,

        // Java Rhino
        importPackage: true,
        importClass: true,
        print: true,
        println: true,
        java: true,
        org: true,
        com: true,

        // Terminal 4
        document: true,
        publishCache: true,
        dbStatement: true,
        section: true,
        content: true,
        contentList: true,
        template: true,
        templateFormat: true,
        language: true,
        isPreview: true,
        isStyleHeader: true,

        // Webpack
        __webpack_modules__: true,
        __webpack_require__: true,
        __webpack_chunk_load__: true,
        __non_webpack_require__: true,
        __webpack_public_path__: true,
        __webpack_hash__: true,
        __resourceQuery: true,
        DEBUG: true,
    },
};
