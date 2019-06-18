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
import * as HeadTemplate from '@/components/head/index.hbs';
import Footer from '@/components/footer/index.svelte?ssr';
import manifest from '@/static/manifest.webmanifest';
import browserConfigXML from '@/static/browserconfig.xml';

export let appComponent = null;
export let fileManifest = {};
export let googleAnalytics = null;
export let meta = [];
export let links = [];
export let inlineStyle = '';
export let scripts = [];
export let webmanifest = manifest;
export let browserConfig = browserConfigXML;
export let title = 'Front-End-Framework';
export let headHtmlSnippet = '';
export let appHtmlSnippet = '';
export let bodyHtmlSnippet = '';
export let fromServer = {};
export let request;
let header = HeadTemplate($$props);
let exportedState;

const renderComponent = (appComponent, props) => {
    if (!appComponent) return '';
    return appComponent.render
        ? appComponent.render(props)
        : appComponent.html;
}

$: {
    let { pathname, componentPath, request } = fromServer;
    exportedState = '';
    // let { pathname, componentPath, request } = fromServer;
    // request = request
    //     ? {
    //             url: request.url,
    //             headers: request.headers,
    //             method: request.method,
    //         }
    //     : '""';
    // return (
    //     `console.log('Manifest', ${JSON.stringify(fileManifest)});` +
    //     `window.__APP_STATE__ = { ` +
    //     `  initialRoute: "${pathname}",` +
    //     `  componentPath: "${componentPath}",` +
    //     `  request: ${JSON.stringify(request)}` +
    //     `};`
    // );
}
</script>
