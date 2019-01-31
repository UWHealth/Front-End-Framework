import base from '!!svelte-loader?generate=ssr&hotReload=false&dev=false!@/index.html';
import url from 'url';
import path from 'path';
import getInitialFiles from '>/build/helpers/get-initial-webpack-files.js';

function formatData(data = {}, { stats, component, entryName = 'demo', req }) {
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
            appComponent: component,
            compilation: null,
            publicPath: stats.publicPath,
            fileManifest,
            googleAnalytics: null,
            meta: [],
            links: [],
            inlineStyle: '',
            scripts: clientFiles,
            title: 'Front-End-Framework',
            headHtmlSnippet: '',
            appHtmlSnippet: '',
            bodyHtmlSnippet: '',
            fromServer,
        },
        data
    );
};

export default function({ htmlWebpackPlugin, webpack }, req, res) {
    if (htmlWebpackPlugin) {
        return webpackPlugin(htmlWebpackPlugin, webpack);
    } else {
        return middleware(req, res);
    }
}

function webpackPlugin(htmlWebpackPlugin, webpack) {
    const data = Object.assign(htmlWebpackPlugin.options, {});
    const formattedData = formatData(data, {
        stats: webpack,
    });
    return base.render(formattedData).html;
}


function middleware(req, res) {
    const parsed = url.parse(req.url);
    const baseName = path.basename(parsed.pathname);
    const entryName = path.posix.join(parsed.href, baseName);
    const compilation = res.locals.isomorphic.compilation;
    const serverStats = compilation.serverStats.toJson();
    const clientStats = compilation.clientStats.toJson();

    if (baseName.indexOf('.') > -1) {
        return false;
    }

    let component = {};

    try {
        console.log(entryName);
        component = require('./components' + entryName + '.demo.html');
    } catch (e) {
        console.log('no component', e);
        return false;
    }

    try {
        const pathFromStats =
            serverStats.assetsByChunkName[entryName] ||
            serverStats.assetsByChunkName['/' + entryName];

        const headExtra = component.render().head;

        const out = base.render(
            formatData(
                {
                    headHtmlSnippet: headExtra,
                    title: entryName,
                    fromServer: {
                        pathname: `${serverStats.publicPath}${pathFromStats}`,
                        componentPath: `${path.basename('/' + entryName)}`,
                    },
                },
                {
                    stats: clientStats,
                    entryName,
                    req,
                    component,
                }
            )
        ).html;

        return out;
    } catch (e) {
        console.log(e);
        return e;
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
};
