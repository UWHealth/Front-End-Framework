const Base = require('@/layouts/template.svelte?ssr');
const { createMemoryHistory } = require('svelte-routing');
const path = require('path');
const getInitialFiles = require('>/build/helpers/get-initial-webpack-files.js');
const Router = require('@/layouts/demo/demo.router.html');
const url = require('url');

const history = createMemoryHistory();

function formatData({ data = {}, stats = {} }) {
    const clientFiles = getInitialFiles(stats);

    return Object.assign(
        {
            publicPath: stats.publicPath,
            googleAnalytics: null,
            title: 'Front-End-Framework',
            meta: [],
            links: [],
            inlineStyle: '',
            scripts: clientFiles,
            headHtmlSnippet: '<!-- Head html Snippet -->',
            appHtmlSnippet: '<!-- App html Snippet -->',
            bodyHtmlSnippet: '<!-- Body html Snippet -->',
            globalsProperty: '__APP_STATE__',
            globals: Object.assign(
                {
                    initial: clientFiles,
                },
                data.globals
            ),
            fileManifest: Object.assign(
                { initial: clientFiles },
                data.fileManifest
            ),
        },
        data
    );
}

function middleware({ req, res, next }) {
    history.replace(req.url);

    const parsed = url.parse(req.url || req.originalUrl);
    const compilation = res.locals.isomorphic.compilation;
    const clientStats = compilation.clientStats.toJson();
    // const serverStats = compilation.serverStats.toJson();

    const baseName = path.basename(parsed.pathname, '.html');

    // Ignore files that aren't html
    if (baseName.indexOf('.') > -1) {
        return false;
    }

    // const pathFromStats =
    //     serverStats.assetsByChunkName[entryName] ||
    //     serverStats.assetsByChunkName['/' + entryName];
    let headHtmlSnippet, data;

    try {
        const routerComponent = Router.render({
            history,
        });

        headHtmlSnippet = routerComponent.head;

        data = formatData({
            data: {
                headHtmlSnippet,
                title: baseName,
                appHtmlSnippet: routerComponent.html,
                inlineStyle: routerComponent.css.code,
            },
            stats: clientStats,
        });
    } catch (e) {
        data = formatData({
            data: {
                title: 'Error',
                appHtmlSnippet: require('@/pages/_error.svelte').render({
                    message: e.message,
                    stack: e.stack,
                }).html,
            },
            stats: clientStats,
        });
    }

    try {
        const { html } = Base.render(data);

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
