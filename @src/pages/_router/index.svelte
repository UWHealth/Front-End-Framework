<Router url={url} bind:this={router}>
    <div>
        <Route
            path='/*pathname'
            {...routeProps}
        />
        <Route {...routeProps} />
    </div>
</Router>

<script>
import Errors from '@/pages/_error.svelte';
import { Route, Router } from 'svelte-routing';
import Routes from './routes.svelte';

export let error = '';
export let url = '';

let router;
let innerComponent;
let pageComponent;

$: errors = error;
$: routeProps = { component: Routes, router, errors, url };


// $: {
//     if (hasDOM) {
//         pageComponent = () =>
//             import(
//                 /* webpackChunkName: "page-[request]" */
//                 /* webpackMode: "lazy" */
//                 /* webpackPrefetch: true */
//                 /* webpackPreload: -1 */
//                 '@/pages/' + page + '.svelte'
//             )
//             .then(c => {
//                 innerComponent = c;
//             });

//         pageComponent();
//     } else {
//         innerComponent =
//             __webpack_require__(
//                 require.resolveWeak('@/pages/' + page + '.svelte')
//             )
//     }
// }

// function getPage(pathname) {
//     try {
//         let pageComponent;
//         // if (typeof window === 'undefined') {
//         //     pageComponent = () => require('@/pages/' + page + '.html');
//         //     pageComponent = pageComponent();
//         // }
//         // else {
//             if (hasDOM) {
//                 pageComponent = () =>
//                     import(
//                         /* webpackChunkName: "page-[request]" */
//                         /* webpackMode: "lazy" */
//                         /* webpackPrefetch: true */
//                         /* webpackPreload: -1 */
//                         '@/pages/' + page + '.svelte'
//                     );
//             }
//             else {
//                 pageComponent = () => require.resolveWeak('@/pages/' + page + '.svelte');

//                 return Promise.resolve(findExport(__webpack_require__(pageComponent())));
//             }
//             let component;

//             pageComponent = pageComponent;
//             //console.log('pageComponent ' + typeof pageComponent, pageComponent);

//         return findExport();
//     } catch (e) {
//         console.error(e);
//         errors = e;
//         return false;
//     }
// }

// export { getPage };
</script>
