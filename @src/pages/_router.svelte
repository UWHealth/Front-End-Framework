<!-- Used for /path/to/thing/index.html or /path/to/thing/ -->
<Router url={url}>
    <Route
        bind:this={router}
        path='/:path([^.]*)*/:file([^.]+\.html)?'
        {pathname}
        bind:match
    >
    {#if innerComponent}
        {#await innerComponent then component}
        <svelte:component this={component} />
        {/await}
    {:else}
        <Errors message="{errors.message}" stack="{errors.stack}"></Errors>
    {/if}
    </Route>
</Router>


<script>
import findExport from '@/helpers/find-export.js';
import checkRoute from '@/helpers/check-route.js';
import Errors from '@/pages/_error.svelte';
import { Route, Router } from 'svelte-routing';

//import Router from './_router-2.svelte';

export let error = '';
export let pathname = null;
export let match;
export let url = '';

let router;
let errors = '';


$: innerComponent = getPage(url);

async function getPage(pathname) {
    let page = checkRoute(pathname);

    if (!page) {
        errors = new Error(
            `No page found at <strong>${pathname}</strong>`
        );
        return false;
    }
    try {
        let pageComponent;
        // if (typeof window === 'undefined') {
        //     pageComponent = () => require('@/pages/' + page + '.html');
        //     pageComponent = pageComponent();
        // }
        // else {
            if (typeof window === 'undefined') {

                return require('@/pages/index.svelte').default;
                // pageComponent = () => __webpack_modules__[require.resolveWeak('@/pages/' + page + '.svelte')];
            }
            else {
                pageComponent = () =>
                    import(
                        /* webpackChunkName: "page-[request]" */
                        /* webpackMode: "lazy" */
                        /* webpackPrefetch: true */
                        /* webpackPreload: -1 */
                        '@/pages/' + page + '.svelte'
                    );
            }

            pageComponent = await pageComponent();
            //console.log('pageComponent ' + typeof pageComponent, pageComponent);

        return pageComponent;
    } catch (e) {
        console.error(e);
        errors = e;
        return false;
    }
}
</script>
