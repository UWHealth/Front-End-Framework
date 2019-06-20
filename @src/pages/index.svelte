<script>
import { link } from 'svelte-routing';
const pages =
    require(`val-loader!@/helpers/get-pages.val.js`);
export let htmlWebpackPlugin = false;
</script>

<svelte:head>
    <title>Front-End Framework</title>
</svelte:head>

<h1 class="wrap">Front-End Framework</h1>

<main class="wrap">
    <p><strong>Page index</strong></p>
    <ul>
    {#each Object.keys(pages) as url, i (url) }
    {#if pages[url].folder}
        <li>
            <a use:link href="/{ url.replace('index.html', '') }">
                {pages[url].folder}
            </a>
        </li>
    {/if}
    {/each}
    </ul>
</main>

<style>
h1 {
    margin-top: 5vh;
}
main {
    margin-top: 5vh;
    border-radius: 1rem;
    background-color: white;
    padding: 4rem;
}
ul {
    display: flex;
    flex-wrap: wrap;
    margin: 0;
    width: 100%;
    list-style: none;
}

li {
    display: flex;
    padding: 1rem;
    padding-left: 3rem;
}

li:before {
    content: '';
    margin-right: .5rem;
    margin-left: -3rem;
    border-radius: 3rem;
    background-image: url('../assets/images/dev/logo.png');
    background-size: cover;
    width: 1.5rem;
    height: 1.5rem;
}
</style>
