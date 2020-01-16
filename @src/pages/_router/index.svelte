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
</script>
