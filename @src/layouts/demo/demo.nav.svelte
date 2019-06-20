<script>
import { getContext } from 'svelte';
import { Router, links } from 'svelte-routing';
import { LOCATION } from 'svelte-routing/src/contexts';
import icon from '@/assets/favicons/icon.svg';
let location = getContext(LOCATION);

$: currPath = $location.pathname;

const activePath = function(path) {
    return path &&
        (path === currPath || path.replace('index.html', '') === currPath);
}

const pages = require(`val-loader!@/helpers/get-pages.val.js`);
</script>

<nav use:links class="demo-navigation">
<Router>
    <a href="/"><img src="{icon}" alt=""></a>
    {#each Object.keys(pages).reverse() as url (url)}
        {#if url.indexOf('demos') > -1}
        <a
            href="/{ url.replace('index.html', '') }"
            class="demo-navigation__link {
                activePath('/' + url)
                ? 'demo-navigation__link--active'
                : ''
            }">{
                pages[url].basename === 'index'
                ? pages[url].route
                : pages[url].basename
            }</a>
        {/if}
    {/each}
</Router>
</nav>

<style lang="scss">
@import '>/config/sass.config.scss';

$demo-cyan: lighten(
    blend-overlay(rgba(#08f, 0.5), color('links', 'lightest'), 35%),
    3%
);

img {
    height: rems(60px);
}

.demo-navigation__link--active {
    border-radius: 5px;
    background-color: lighten(color('links', lightest), 6%);
    color: darken($demo-cyan, 25%);
    transition: background 2000ms ease-out;
}

.demo-navigation {
    display: flex;
    position: relative;
    z-index: 2;
    box-shadow: 0 4px 6px rgba(colors('type'), 0.2);
    background-color: #fff;
    width: 100%;
}

.demo-navigation__link {
    flex: 1 1 auto;
    margin-left: type-space(0.25);
    padding: type-space(0.75 0.5);
    max-width: type-space(5);
    text-align: center;
    transition: background-color color 200ms ease-out;

    &:hover {
        background-color: $demo-cyan;
        color: color('links', 'light');
    }
}
</style>


