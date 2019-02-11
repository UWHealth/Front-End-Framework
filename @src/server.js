const Base = require('./pages/index.html?ssr');
const { createMemoryHistory } = require('svelte-routing');
const path = require('path');

const history = createMemoryHistory();

function formatData({
    data = {},
    stats = {},
    appComponent = null,
    entryName = 'demo',
    req = {},
}) {
    const getInitialFiles = require('>/build/helpers/get-initial-webpack-files.js');
    const clientFiles = getInitialFiles(stats);

    return Object.assign(
        {
            appComponent,
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
            fileManifest: Object.assign(
                { initial: clientFiles },
                data.fileManifest
            ),
            fromServer: Object.assign(
                {
                    pathname: '/',
                    componentPath: path.basename(entryName),
                    request: req,
                },
                data.fromServer
            ),
        },
        data
    );
}

module.exports = function({ htmlWebpackPlugin, webpack }, req, res) {
    if (htmlWebpackPlugin) {
        return webpackPlugin(htmlWebpackPlugin, webpack);
    } else {
        return middleware({}, req, res);
    }
}

function webpackPlugin(htmlWebpackPlugin, webpack) {
    const formattedData = formatData({
        data: htmlWebpackPlugin.options,
        stats: webpack,
    });
    const { html } = Base.render(formattedData);

    return html;
}

function middleware(obj = {}, req, res) {
    const Router = require('@/layouts/demo/demo.router.html');
    const url = require('url');
    history.replace(req.url);
    const parsed = url.parse(req.url);
    const baseName = path.basename(parsed.pathname);
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
        const appComponent = Router.render({
            path: parsed.pathname,
            basePath: process.cwd() + '/@src/',
        });
        const headHtmlSnippet = appComponent.head;

        const { html } = Base.render(
            formatData({
                data: {
                    headHtmlSnippet,
                    title: baseName,
                    inlineStyle: appComponent.css.code,
                    fromServer: {
                        pathname: `${serverStats.publicPath}${pathFromStats}`,
                        componentPath: `${path.basename('/' + entryName)}`,
                    },
                },
                stats: clientStats,
                appComponent,
                entryName,
                req,
                history,
            })
        );

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
