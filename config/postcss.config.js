module.exports = {
    plugins: [
        require('autoprefixer')({
            grid: 'autoplace',
        }),
        require('cssnano')({
            preset: [
                'default',
                {
                    mergeLonghand: false,
                    cssDeclarationSorter: false,
                    zindex: false,
                    discardComments: { removeAll: true },
                },
            ],
        }),
    ],
};
