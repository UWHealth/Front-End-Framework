<svelte:head>
    <title>Front-End Framework</title>
</svelte:head>

<h1 class="wrap">Front-End Framework</h1>

<main class="wrap">
    <p><strong>Page index</strong></p>
    <ul>
    {#each Object.keys(pages) as url, i (url) }
        <li>
            <a href="/{ url.replace('index.html', '') }">
                {pages[url].folder + '/' + pages[url].basename}
            </a>
        </li>
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

<script>
export let pages = require(`val-loader?{"filePath":"","publicPath":"/"}!@/helpers/create-nav.js`);
export let htmlWebpackPlugin = false;
</script>
