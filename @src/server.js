const path = require('path');
const Template = require('@/layouts/template.svelte');
const { createMemoryHistory } = require('svelte-routing');
const getInitialFiles = require('>/build/helpers/get-initial-webpack-files.js');
const Router = require('@/pages/_router.svelte');
const url = require('url');

// Start up history recording
const HISTORY = createMemoryHistory();

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

// eslint-disable-next-line complexity
function middleware({ req, res /*, next*/ }) {
    // Add new URL to history
    HISTORY.replace(req.url);
    // Preload pages
    require.context('@/pages/', true, /\.(html|svelte)$/);

    const parsed = url.parse(req.url || req.originalUrl);
    const compilation = res.locals.isomorphic.compilation;
    const clientStats = compilation.clientStats.toJson();

    // Return webpack stuff for this particular path
    if (parsed.pathname.indexOf('webpack') === 1) {
        return showWebpackStats(req, res, compilation);
    }
    // const serverStats = compilation.serverStats.toJson();

    let baseName = path.basename(parsed.pathname, '.html');
    baseName = path.basename(parsed.pathname, '.svelte');

    // Ignore files that aren't html/svelte
    if (baseName.indexOf('.') > -1) {
        return false;
    }

    try {
        const render = gatherComponent(baseName, clientStats);
        return render.html;
    } catch (e) {
        console.error(new Error(e));
        return false;
    }
    // const pathFromStats =
    //     serverStats.assetsByChunkName[entryName] ||
    //     serverStats.assetsByChunkName['/' + entryName];
}

/**
 * Gets the current page (typically a svelte page) and renders it with the current history and webpack client files.
 *
 * @param {String} baseName - current page's basename
 * @param {Object} clientStats - current clientStats, used for gathering webpack output names
 * @returns {Object} Rendered Svelte component
 */
function gatherComponent(baseName, clientStats = {}) {
    let headHtmlSnippet, data;

    try {
        // Gather component from router,
        // based on current request stored in history
        const routerComponent = Router.render({
            history: HISTORY,
        });

        headHtmlSnippet = routerComponent.head;

        // Add in known data
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
        // Display an error page in case of failure
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
        console.error(new Error(e));
    }

    return Template.render(data);
}

/**
 * Show webpack stats as JSON
 * @param {Object} req request object
 * @param {Object} res response object
 * @param {Object} compilation webpack compilation
 */
function showWebpackStats(req, res, compilation) {
    res.setHeader('Content-Type', 'application/json');

    const file = path.parse(req.url);
    const result =
        file.base === 'server.json'
            ? {
                  serverStats: compilation.serverStats.toJson({
                      source: false,
                  }),
              }
            : file.base === 'client.json'
            ? {
                  clientStats: compilation.serverStats.toJson({
                      source: false,
                  }),
              }
            : {
                  serverStats: 'http://localhost:8080/webpack/server.json',
                  clientStats: 'http://localhost:8080/webpack/client.json',
              };
    return new Promise((resolve) => resolve(JSON.stringify(result, null, 2)));
}

module.exports.default = middleware;
