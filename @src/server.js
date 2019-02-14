const Base = require('@/layouts/template.svelte?ssr');
const { createMemoryHistory } = require('svelte-routing');
const path = require('path');
const getInitialFiles = require('>/build/helpers/get-initial-webpack-files.js');

const history = createMemoryHistory();

function formatData({ data = {}, stats = {} }) {
    const clientFiles = getInitialFiles(stats);

    return Object.assign(
        {
            compilation: null,
            publicPath: stats.publicPath,
            googleAnalytics: null,
            title: 'Front-End-Framework',
            meta: [],
            links: [],
            inlineStyle: '',
            scripts: clientFiles,
            headHtmlSnippet: '',
            appHtmlSnippet: '',
            bodyHtmlSnippet: '',
            globals: Object.assign(
                {
                    '__APP_STATE__' : {}
                },
                data.globals
            ),
            fileManifest: Object.assign(
                { initial: clientFiles },
                data.fileManifest
            ),
            // fromServer: Object.assign(
            //     {
            //         pathname: '/',
            //         componentPath: path.basename(data.entryName || 'index.html'),
            //         request: data.req,
            //     },
            //     data.fromServer
            // ),
        },
        data
    );
}

module.exports = function({
    htmlWebpackPlugin = {},
    webpack = {},
    req = {},
    res = {},
    next = {},
}) {
    if (htmlWebpackPlugin.options) {
        return webpackPlugin(htmlWebpackPlugin, webpack);
    } else {
        return middleware(req, res, next);
    }
}

function webpackPlugin(htmlWebpackPlugin, webpack) {
    const formattedData = formatData({
        data: htmlWebpackPlugin.options,
        stats: webpack,
    });
    try {
        return Base.render(formattedData).html;
    } catch(e) {
        console.log(e);
    }
    return '';
}

function middleware({ req, res, next }) {
    history.replace(req.url);
    const Router = require('@/layouts/demo/demo.router.html');
    const url = require('url');

    const parsed = url.parse(req.url || req.originalUrl);
    const baseName = path.basename(parsed.pathname, '.html');
    const entryName = path.posix.join(parsed.href, baseName);
    const compilation = res.locals.isomorphic.compilation;
    const serverStats = compilation.serverStats.toJson();
    const clientStats = compilation.clientStats.toJson();

    if (baseName.indexOf('.') > -1) {
        return false;
    }

    const pathFromStats =
        serverStats.assetsByChunkName[entryName] ||
        serverStats.assetsByChunkName['/' + entryName];

    try {
        const routerComponent = Router.render({
            url: parsed.pathname,
            basePath: process.cwd() + '/@src/',
            history,
            next,
        });
        const headHtmlSnippet = routerComponent.head;
        const formattedData = formatData({
            data: {
                headHtmlSnippet,
                title: baseName,
                appHtmlSnippet: routerComponent.html,
                inlineStyle: routerComponent.css.code,
                // fromServer: {
                //     pathname: `${serverStats.publicPath}${pathFromStats}`,
                //     componentPath: `${path.basename('/' + entryName)}`,
                // },
            },
            stats: clientStats,
        });

        const { html } = Base.render(formattedData);

        return html;
    } catch (e) {
        console.log(e);
        return false;
    }

    // const baseName = path.basename(parsed.pathname);
    // const entryName = path.posix.join(parsed.href, baseName);
    // const pathFromStats =
    //     serverStats.assetsByChunkName[entryName] ||
    //     serverStats.assetsByChunkName['/' + entryName];

    //     // console.log(pathFromStats);
    //     if (!pathFromStats) {
    //         return next();
    //     }
    //     const filePath = path.posix.join(
    //         serverStats.outputPath,
    //         serverStats.publicPath,
    //         pathFromStats
    //     );
    //     const serverFS =
    //         compilation.serverStats.compilation.compiler.outputFileSystem;

    //         try {
    //             const file = await new Promise((resolve, reject) =>
    //                 serverFS.readFile(filePath, (err, buffer) => {
    //                     if (err) {
    //                         reject(err);
    //                     } else {
    //                         resolve(buffer.toString());
    //                     }
    //                 })
    //             );

    //             const asset = await requireFromString(file, filePath);
    //             const generatedHead = asset.render({}).head;

    //             const clientFiles = require('./get-initial-webpack-files.js')(
    //                 res.locals.isomorphic.compilation.clientStats
    //             );
    //             render = exports.default({
    //                 asset,
    //                 manifest: { initial: clientFiles },
    //                 compilation: compilation.clientStats.compilation,
    //                 publicPath: `${serverStats.publicPath}`,
    //                 head: {
    //                     pageTitle: '',
    //                     headExtra: generatedHead,
    //                 },
    //                 fromServer: {
    //                     request: req,
    //                     pathname: `${serverStats.publicPath}${pathFromStats}`,
    //                     componentPath: `${path.basename('/' + entryName)}`,
    //                 },
    //             }).html;
    //         } catch (err) {
    //     render = `
    //     <html>
    //     <head><title>Error</title></head>
    //     <body>
    //         <pre>${err.message} \n ${err.stack}</pre>
    //     </body>
    //     </html>`;
    // }
    // res.setHeader('Content-Type', 'text/html');
    // res.end(render);
}

module.exports.default = middleware;
