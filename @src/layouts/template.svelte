<script>
import * as HeadTemplate from '@/components/head/index.hbs';
import Footer from '@/components/footer/index.svelte?ssr';
import manifest from '@/static/manifest.webmanifest';
import browserConfigXML from '@/static/browserconfig.xml';
import findExport from '@/helpers/find-export.js';

// Props
export let appComponent = null,
    fileManifest = {},
    googleAnalytics = null,
    meta = [],
    links = [],
    inlineStyle = '',
    scripts = [],
    webmanifest = manifest,
    browserConfig = browserConfigXML,
    title = 'Front-End-Framework',
    headHtmlSnippet = '',
    appHtmlSnippet = '',
    bodyHtmlSnippet = '',
    request;

let header = HeadTemplate($$props);
let exportedState;
let renderedAppComponent;

$: {
    if (!appComponent) {
        renderedAppComponent = '';
    }
    else {
        renderedComponent =
            findExport(appComponent).render
            ? findExport(appComponent).render(props).html
            : appComponent.html;
    }
}
</script>

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
        { @html renderedAppComponent }
    </div>
    <Footer></Footer>
    { @html '<script>' + exportedState + '</script>' }
{ @html `
    </body></html>
` }
