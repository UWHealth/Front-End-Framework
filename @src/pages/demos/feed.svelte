<script>
import List from '@/components/feed';
import DemoLayout from '@/layouts/demo';
import { onMount } from 'svelte';

export let
    MAX_PER_PAGE = 10,
    page = 1,
    feedResults = false;

const IS_CLIENT = typeof window !== "undefined";

let feedUrl =
        'https://uconnect.wisc.edu/feeds/30m/json/homepage/index.json';

const fetchFeed = function() {
    return IS_CLIENT ? fetch(feedUrl).then((r) => r.json()) : new Promise(res => res({results: []}));
}

fetchFeed()
.then((feed) => {
    IS_CLIENT && console.log(feed);
    feedResults = feed.results;
}).catch((e) => {
    IS_CLIENT && console.log(e); // eslint-disable-line
    return e;
});

</script>

<DemoLayout demoTitle="Feed Example">
    <List {feedResults} {MAX_PER_PAGE} {page}/>
</DemoLayout>
