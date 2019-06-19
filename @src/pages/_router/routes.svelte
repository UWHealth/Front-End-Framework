<script>
import Errors from '@/pages/_error.svelte';

import checkRoute from './check-route.js';
import { getContext, onMount } from 'svelte';
import { ROUTER, LOCATION } from 'svelte-routing/src/contexts';

export let router, errors, url, pathname, file = '';

let page, pageComponent, message, stack, innerComponent = false;

const { activeRoute } = getContext(ROUTER);
const location = getContext(LOCATION);

onMount(() => {
    console.log('LOCATION', $location);
    console.log('ROUTER', $activeRoute);
})

$: {
    page = checkRoute($location.pathname);

    if (!page) {
        errors = new Error(
            `No page found at <strong>{$location.pathname}</strong>`
        );
        stack = errors.stack;
        message = errors.message;
        innerComponent = Errors;
    }
}

$: {
    if (typeof window !== 'undefined') {
        pageComponent = () => import(
                /* webpackChunkName: "page-[request]" */
                /* webpackMode: "lazy" */
                /* webpackPrefetch: true */
                /* webpackPreload: -1 */
                '@/pages/' + page + '.svelte'
            ).then(c => {
                innerComponent = c.default;
            }).catch(e => {
                innerComponent = Errors;
            });

        pageComponent();
    } else if (page) {
        innerComponent =
            __webpack_require__(
                require.resolveWeak('@/pages/' + page + '.svelte')
            ).default
    }
    else {
        innerComponent = Errors;
    }
}
</script>

<svelte:component this={innerComponent} {...$$props} />
