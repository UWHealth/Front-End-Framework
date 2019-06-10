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

function middleware({ req, res, next }) {
    // Add new URL to history
    HISTORY.replace(req.url);
    // Preload pages
    require.context('@/pages/', true, /\.(html|svelte)$/);

    const parsed = url.parse(req.url || req.originalUrl);

    if (parsed.pathname.indexOf('webpack-dev-server') > 1) {
        return false;
    }
    const compilation = res.locals.isomorphic.compilation;
    const clientStats = compilation.clientStats.toJson();
    // const serverStats = compilation.serverStats.toJson();

    let baseName = path.basename(parsed.pathname, '.html');
    baseName = path.basename(parsed.pathname, '.svelte');

    // Ignore files that aren't html/svelte
    if (baseName.indexOf('.') > -1) {
        return next();
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



module.exports.default = middleware;
