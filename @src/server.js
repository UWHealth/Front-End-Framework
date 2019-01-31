import Base from './index.html';
import Router from './layouts/demo/demo.router.html';
import url from 'url';
import path from 'path';
import getInitialFiles from '>/build/helpers/get-initial-webpack-files.js';
import { createMemoryHistory } from 'svelte-routing';

const history = createMemoryHistory();

function formatData({
    data = {},
    stats,
    appComponent = null,
    entryName = 'demo',
    req = {},
}) {
    const clientFiles = getInitialFiles(stats);
    const fromServer = Object.assign(
        {
            pathname: '/',
            componentPath: path.basename(entryName),
            request: req,
        },
        data.fromServer
    );
    const fileManifest = Object.assign(
        { initial: clientFiles },
        data.fileManifest
    );

    return Object.assign(
        {
            appComponent,
            compilation: null,
            publicPath: stats.publicPath,
            fileManifest,
            googleAnalytics: null,
            title: 'Front-End-Framework',
            meta: [],
            links: [],
            inlineStyle: '',
            scripts: clientFiles,
            headHtmlSnippet: '',
            appHtmlSnippet: '',
            bodyHtmlSnippet: '',
            fromServer,
        },
        data
    );
}

export default function({ htmlWebpackPlugin, webpack }, req, res) {
    if (htmlWebpackPlugin) {
        return webpackPlugin(htmlWebpackPlugin, webpack);
    } else {
        return middleware(req, res);
    }
}

function webpackPlugin(htmlWebpackPlugin, webpack) {
    const formattedData = formatData({
        data: htmlWebpackPlugin.options,
        stats: webpack,
    });
    return Base.render(formattedData).html;
}

function middleware(req, res) {
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

        const out = Base.render(
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
            })
        ).html;

        return out;
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
