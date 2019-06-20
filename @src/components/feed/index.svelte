<script>
import Result from './result.svelte';
import { onMount } from 'svelte';

export let page = 1;
export let feedResults;
export let MAX_PER_PAGE = 10;

let feedMax, feedTop, feedList;

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

function scrollFeed(newPage) {
    page = newPage;
    window.scroll(0, feedTop);
}

onMount(() => {
    feedTop = document.getElementById('feedTop').offsetTop;
});
</script>

<header id="feedTop">
{#if feedResults}
{#if page !== 1}
    <button class="btn" on:click="{() => page = page - 1}">
        ← Page {page - 1}
    </button>
{/if}
    <span>{pageString}</span>
{#if feedMax}
    <button class="btn" on:click="{() => page = page + 1}">
        Page {page + 1} →
    </button>
{/if}
{/if}
    <hr class="ov-space-t">
</header>

<div>
<!-- Cached feed, from store -->
{#if feedResults}
    {#each
        feedResults.result.slice(pageStart, pageEnd)
        as result (result.title)
    }
    <Result
        bind:this={feedList}
        title={result.title}
        description={result.description}
        />
    {/each}
{/if}
</div>

<div>
    <hr class="ov-space-t" />
{#if feedResults}
{#if page !== 1}
    <button class="btn" on:click="{() => scrollFeed(page - 1)}">
        ←&nbsp; &nbsp; Page {page - 1}
    </button>
{/if}
    <span>{pageString}</span>
{#if feedMax}
    <button class="btn" on:click="{() => scrollFeed(page + 1)}">
        Page {page + 1} &nbsp; &nbsp;→
    </button>
{/if}
{/if}
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
