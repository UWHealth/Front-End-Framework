<!-- Used for /path/to/thing/index.html or /path/to/thing/ -->

<Route
    bind:this={router}
    path='/:path([^.]*)*/:file([^.]+\.html)?'
    {...history} {pathname}
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


<script>
import findExport from '@/helpers/find-export.js';
import checkRoute from '@/helpers/check-route.js';
import Errors from '@/pages/_error.svelte';
import { getHistory } from 'svelte-routing';
import Route from 'svelte-routing/Route.svelte';

export let error = '';
export let pathname = null;
export let history = null;
export let match;

let errors = '';

$: innerComponent = getPage(history.location.pathname).then(c => findExport(c));

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
                pageComponent = () => require.resolveWeak('@/pages/' + page + '.html');
            }
            else {
                pageComponent = () =>
                    import(
                        /* webpackChunkName: "page-[request]" */
                        /* webpackMode: "lazy" */
                        /* webpackPrefetch: true */
                        /* webpackPreload: -1 */
                        '@/pages/' + page + '.html'
                    );
            }
            pageComponent = await pageComponent();
        // }

        // console.log(pageComponent);

        return pageComponent;
    } catch (e) {
        console.error(e);
        errors = new Error(e);
        return false;
    }
}
</script>
