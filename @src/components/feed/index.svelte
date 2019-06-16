<header id="feedTop">
    {#if feedResults}{#if page !== 1}
    <button class="btn" on:click="set({'page': page - 1})">
        ← Page {page - 1}
    </button>
    {/if}
    <span>{pageString}</span>
    {#if feedMax}
    <button class="btn" on:click="set({'page': page + 1})">
        Page {page + 1} →
    </button>
    {/if}{/if}
    <hr class="ov-space-t" >
</header>

<div>
<!-- Cached feed, from store -->
{#if $feedResults}
    {#each $feedResults.result.slice(pageStart, pageEnd)
        as result (result.title)
    }
    <Results ref:feedList {...result} {page} {MAX_PER_PAGE} />
    {/each}
{/if}
</div>

<div>
    <hr class="ov-space-t" />
    {#if feedResults} {#if page !== 1}
    <button class="btn" on:click="scrollFeed(page - 1)">
        ←&nbsp; &nbsp; Page {page - 1}
    </button>
    {/if}
    <span>{pageString}</span>
    {#if feedMax}
    <button class="btn" on:click="scrollFeed(page + 1)">
        Page {page + 1} &nbsp; &nbsp;→
    </button>
    {/if}{/if}
</div>

<style>
    header {
        margin-bottom: 1.6rem;
    }
    :root {
        scroll-behavior: smooth;
    }
    button {
        padding-right: 1.6rem;
        padding-left: 1.6rem;
    }
    span {
        margin: 0 2.25rem;
    }
</style>

<script>
import Results from './results.svelte';
import { onMount } from 'svelte';

let feedMax;
let feedTop;

$: {
    if (feedResults && feedResults.result) {
        feedMax = page * (MAX_PER_PAGE + 1) <= feedResults.result.length;
    } else {
        feedMax = false;
    }
}

$: pageString = page && 'Page ' + page;
$: pageStart = page === 1 ? 0 : Math.max(0, (page - 1) * (MAX_PER_PAGE + 1));
$: pageEnd = pageStart + MAX_PER_PAGE + 1;
// $: if (previous && changed.page && current.page !== previous.page) {
//     store.set({ feedPage: _this.get()['page'] });
// }

function scrollFeed(pageNum) {
    page = pageNum;
    window.scroll(0, feedTop);
}

onMount(() => {
    feedTop = document.getElementById('feedTop').offsetTop;
});
</script>
