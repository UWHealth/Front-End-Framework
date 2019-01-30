import base from '@/index.html';
import manifest from '@/manifest.webmanifest';
import browserConfig from '@/browserconfig.xml';
import url from 'url';
import path from 'path';
import getInitialFiles from '>/build/helpers/get-initial-webpack-files.js';

export default async function middleware(req, res) {
    const parsed = url.parse(req.url);
    const baseName = path.basename(parsed.pathname);
    const entryName = path.posix.join(parsed.href, baseName);
    const compilation = res.locals.isomorphic.compilation;
    const serverStats = compilation.serverStats.toJson();

    if (baseName.indexOf('.') > -1) {
        return false;
    }
    //console.log('component: ', entryName);
    let component = {};
    const componentName = entryName.replace('/', '');
    try {
        // console.log(entryName);
        component = require('./components/' + componentName + '.demo.html');
    } catch (e) {
        console.log(e);
        return false;
    }

    try {
        const clientFiles = getInitialFiles(
            res.locals.isomorphic.compilation.clientStats
        );
        const pathFromStats =
            serverStats.assetsByChunkName[entryName] ||
            serverStats.assetsByChunkName['/' + entryName];

        const head = component.render().head;

        const out = base.render({
            asset: component,
            manifest: { initial: clientFiles },
            compilation: compilation.clientStats.compilation,
            publicPath: `${serverStats.publicPath}`,
            head: {
                pageTitle: '',
                headExtra: head,
                links: {
                    'msapplication-config': browserConfig,
                },
                meta: {
                    manifest: manifest,
                },
            },
            fromServer: {
                request: req,
                pathname: `${serverStats.publicPath}${pathFromStats}`,
                componentPath: `${path.basename(entryName)}`,
            },
        }).html;

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
}
