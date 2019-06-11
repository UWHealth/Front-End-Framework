<!-- Used for /path/to/thing/index.html or /path/to/thing/ -->

<Route
    ref:router
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
import Route from 'svelte-routing/Route.html';

let errors = '';

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

export default {
    components: { Errors, Route },
    data() {
        // const history = getHistory();
        //console.log(history.location);
        return {
            error: '',
            pathname: null,
            history: null,
        };
    },
    helpers: {
        errors,
    },
    computed: {
        props: (state) => state,
        innerComponent: ({ match, pathname, history }) => {
            //console.log(match, pathname, history);
            return getPage(history.location.pathname).then(c => findExport(c));
        }
    },
    oncreate() {
        // this.refs.router.on('update', ({ changed, current, previous }) => {
        //     if (changed.history && previous) {
        //         const match = current.history;

        //         getPage(match.location.pathname).then((comp) => {
        //             console.log(comp);
        //             this.set({ innerComponent: findExport(comp) });
        //             // store.set({ pageTitle: capitalize(match.params.page) });
        //             // store.set({ currentRoute: match.params.page });
        //         });
        //     }
        // });
    }
};
</script>
