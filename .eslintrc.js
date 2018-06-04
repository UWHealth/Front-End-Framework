module.exports = {
    parser: 'babel-eslint',
    parserOptions: {
        sourceType: 'module',
        allowImportExportEverywhere: true,
    },
    extends: [
        'standard',
        'eslint-config-prettier',
        'plugin:prettier/recommended',
    ],
    plugins: ['compat', 'eslint-plugin-html'],
    env: {
        browser: true,
        node: true,
        nashorn: true,
        commonjs: true,
    },
    rules: {
        'prettier/prettier': [
            'warn',
            {
                tabWidth: 4,
                trailingComma: 'es5',
                bracketSpacing: true,
                arrowParens: 'always',
                proseWrap: 'preserve',
                singleQuote: true,
                parser: 'babylon',
            },
        ],
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
        indent: 'off',
        semi: ['warn', 'always'],
        'no-tabs': 'off',
        complexity: ['warn', 5],
        'comma-dangle': ['warn', 'only-multiline'],
        quotes: 'off',
        'new-cap': 'off',
        'operator-linebreak': 'off',
        'brace-style': [
            'warn',
            'stroustrup',
            {
                allowSingleLine: true,
            },
        ],
        'no-trailing-spaces': [
            'warn',
            {
                skipBlankLines: true,
            },
        ],
        'space-before-function-paren': 'off',
        'space-before-blocks': ['warn', 'always'],
        'spaced-comment': [
            'warn',
            'always',
            {
                exceptions: ['-', '+'],
            },
        ],
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
