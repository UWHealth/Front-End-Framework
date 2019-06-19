<DemoLayout demoTitle="Feed Example" variants="{true}">
    <div slot="header"></div>
    <div slot="variants">
        <List {feedResults} {MAX_PER_PAGE} {page}/>
    </div>
</DemoLayout>

<script>
import List from '@/components/feed';
import DemoLayout from '@/layouts/demo';
import { onMount } from 'svelte';

export let
    MAX_PER_PAGE = 10,
    page = 1,
    feedResults = false;

let feedUrl =
        'https://uconnect.wisc.edu/feeds/30m/json/homepage/index.json';

const fetchFeed = function() {
    return fetch(feedUrl).then((r) => r.json())
}


onMount(() => {
    fetchFeed()
    .then((feed) => {
        console.log(feed);
        feedResults = feed.results;
    }).catch((e) => {
        console.log(e); // eslint-disable-line
        return e;
    });
})

// export default {
//     store: () => store,
//     components: {
//         DemoLayout: ,
//         List: '@/components/feed/index.html',
//     },
//     data() {
//         return {
//             feedUrl:
//                 'https://uconnect.wisc.edu/feeds/30m/json/homepage/index.json',
//             MAX_PER_PAGE: 10,
//             page: 1,
//             feedResults: false,
//         };
//     },
//     computed: {
//         feed: ({ feedResults }) => feedResults,
//         props: (state) => state,
//     },
//     methods: {
//         fetchFeed() {
//             const { feedUrl } = this.get();
//             return fetch(feedUrl).then((r) => r.json());
//         },
//     },
//     oncreate() {
//         if (store.get()['feedPage']) {
//             this.set({ page: store.get()['feedPage'] });
//         }
//         if (store.get()['feedResults']) {
//             this.set({ feedResults: store.get()['feedResults'] });
//         } else {

//         }
//     },
// };
</script>
