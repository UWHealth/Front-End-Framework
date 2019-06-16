{ @html
    `<!DOCTYPE html>
    <html lang="en" itemscope itemtype="https://schema.org/Article">`
}
<!-- doctype, html, and body are strings
    to prevent svelte from evaluating them -->
{ @html header }
{ @html '<body>' }
    { @html bodyHtmlSnippet }
    <div id="app" class="application">
        { @html appHtmlSnippet }
        {#if appComponent}
            { @html renderComponent(appComponent, $$props) }
        {/if}
    </div>
    <Footer></Footer>
    { @html '<script>' + exportedState + '</script>' }
{ @html `
    </body></html>
` }

<script>
import HeadTemplate from '@/components/head';
import Footer from '@/components/footer/index.svelte?ssr';
import webmanifest from '@/static/manifest.webmanifest';
import browserConfig from '@/static/browserconfig.xml';

export let appComponent = null;
export let fileManifest = {};
export let googleAnalytics = null;
export let meta = [];
export let links = [];
export let inlineStyle = '';
export let scripts = [];
export let webmanifest = webmanifest;
export let browserConfig = browserConfig;
export let title = 'Front-End-Framework';
export let headHtmlSnippet = '';
export let appHtmlSnippet = '';
export let bodyHtmlSnippet = '';
export let fromServer = {};
export let fileManifest;
export let request;

const renderComponent = (appComponent, props) => {
    if (!appComponent) return '';
    return appComponent.render
        ? appComponent.render(props)
        : appComponent.html;
}

$: exportedState = ( fromServer, fileManifest ) => {
    return '';
    let { pathname, componentPath, request } = fromServer;
    request = request
        ? {
                url: request.url,
                headers: request.headers,
                method: request.method,
            }
        : '""';
    return (
        `console.log('Manifest', ${JSON.stringify(fileManifest)});` +
        `window.__APP_STATE__ = { ` +
        `  initialRoute: "${pathname}",` +
        `  componentPath: "${componentPath}",` +
        `  request: ${JSON.stringify(request)}` +
        `};`
    );
}

export default {
    components: { Footer },
    data: () => ({

    }),
    helpers: {
        renderComponent: (appComponent, props) => {
            if (!appComponent) return '';
            return appComponent.render
                ? appComponent.render(props)
                : appComponent.html;
        },
    },
    computed: {
        // Convenient way to pass entire state to components
        props: (state) => state,

        // Pass head state to handlebars template
        header: (state) => HeadTemplate(state),

        // Add the initial page state to the window,
        // Allowing our app to hydrate
        exportedState: ({ fromServer, fileManifest }) => {
            return '';
            let { pathname, componentPath, request } = fromServer;
            request = request
                ? {
                      url: request.url,
                      headers: request.headers,
                      method: request.method,
                  }
                : '""';
            return (
                `console.log('Manifest', ${JSON.stringify(fileManifest)});` +
                `window.__APP_STATE__ = { ` +
                `  initialRoute: "${pathname}",` +
                `  componentPath: "${componentPath}",` +
                `  request: ${JSON.stringify(request)}` +
                `};`
            );
        },
    },
};
</script>
