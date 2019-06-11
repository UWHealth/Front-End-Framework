const path = require('path');
const Template = require('@/layouts/template.svelte');
const { createMemoryHistory } = require('svelte-routing');
const getInitialFiles = require('>/build/helpers/get-initial-webpack-files.js');
const Router = require('@/pages/_router.svelte');
const Url = require('url');

// Start up history recording
const HISTORY = createMemoryHistory();

/**
 *
 * @param {Object} options - options object
 * @param {Object} options.data - Data (props) to pass directly to page
 * @param {Object} options.stats - webpack stats object
 * @returns {Object} merged props object, formatted for svelte template
 */
function formatData({ data = {}, stats = {} }) {
    const clientFiles = getInitialFiles(stats);
    const assign = Object.assign;

    return assign(
        {
            publicPath: stats.publicPath, // webpack public path
            googleAnalytics: null, // GA account id
            title: 'Front-End-Framework', // title tag
            meta: [], // head meta tags
            links: [], // head link tags
            inlineStyle: '', // inline head styles
            scripts: clientFiles, // initial script tags
            headHtmlSnippet: '<!-- Head html Snippet -->',
            appHtmlSnippet: '<!-- App html Snippet -->',
            bodyHtmlSnippet: '<!-- Body html Snippet -->',
            globalsProperty: '__APP_STATE__', // key to access global state
            globals: assign(
                // global state object
                {
                    initial: clientFiles,
                },
                data.globals
            ),
            // project files manifest
            fileManifest: assign({ initial: clientFiles }, data.fileManifest),
        },
        data
    );
}


/**
 * Takes in http requests and returns a rendered svelte page
 * using the files in  @src/pages/.
 * @param {Object} o - options object
 * @param {Object} o.req - http request object
 * @param {Object} o.res - http resolution object
 * @param {Object} o.compilation - webpack compilation stats
 * @param {String} o.route - url (alternative to req.url)
 * @return {String} rendered html page
 */
// eslint-disable-next-line complexity
function middleware({ req = {}, res = {}, compilation, route }) {
    compilation = compilation || res.locals.isomorphic.compilation;
    route = route || req.url || req.originalUrl;

    // Change history's route path
    HISTORY.replace(route);

    // Gather information about route
    const url = Url.parse(route);
    const basename = baseNames(url.pathname, ['.html', '.svelte']);

    // Add new route url to history
    // Bundle pages so we can resolveWeak later
    require.context('@/pages/', true, /\.(html|svelte)$/);

    // Return webpack stuff for this particular path
    if (url.pathname.indexOf('webpack') === 1 && res.setHeader) {
        return showWebpackStats({ url, res, compilation });
    }

    // Ignore files that aren't html/svelte
    if (basename.indexOf('.') > -1) {
        return false;
    }

    // Try to render initial component
    try {
        const clientStats = compilation.clientStats.toJson();
        const render = renderComponent({ baseName: basename, clientStats });
        return render.html;
    } catch (e) {
        console.error(e);
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
function renderComponent({ baseName, clientStats }) {
    let headHtmlSnippet, data;

    try {
        // Gather component from router,
        // based on current request stored in history
        const routerComponent = Router.render({
            history: HISTORY,
        });

        headHtmlSnippet = routerComponent.head;

        // Add in known data, including routed component
        data = formatData({
            data: {
                appHtmlSnippet: routerComponent.html,
                inlineStyle: routerComponent.css.code,
                headHtmlSnippet,
                title: baseName,
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
 * @param {String} url url string
 * @param {Object} res response object
 * @param {Object} compilation webpack compilation
 */
function showWebpackStats({ url, res, compilation }) {
    if (res && res.setHeader) {
        res.setHeader('Content-Type', 'application/json');
    }

    const file = path.parse(url);
    const result =
        file.base === 'server.json'
            ? {
                  serverStats: compilation.serverStats.toJson({
                      source: false,
                  }),
              }
            : file.base === 'client.json'
            ? {
                  clientStats: compilation.clientStats.toJson({
                      source: false,
                  }),
              }
            : {
                  // Unknown webpack path, return urls to stats
                  serverStats: 'http://localhost:8080/webpack/server.json',
                  clientStats: 'http://localhost:8080/webpack/client.json',
              };
    return new Promise((resolve) => resolve(JSON.stringify(result, null, 2)));
}

function baseNames(p = '', exts = []) {
    exts.forEach((ext) => {
        p = path.basename(p, ext);
    });

    return p;
}

module.exports = middleware;
