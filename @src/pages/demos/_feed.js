<DemoLayout demoTitle="Feed Example" variants="{true}" currentRoute="feed">
    <div slot="header"></div>
    <div slot="variants">
        <List {...props} />
    </div>
</DemoLayout>

<script>
import store from '@/layouts/demo/demo.store.js';

export default {
    store: () => store,
    components: {
        DemoLayout: '@/layouts/demo',
        List: '@/components/feed/index.html',
    },
    data() {
        return {
            feedUrl:
                'https://uconnect.wisc.edu/feeds/30m/json/homepage/index.json',
            MAX_PER_PAGE: 10,
            page: 1,
            feedResults: false,
        };
    },
    computed: {
        feed: ({ feedResults }) => feedResults,
        props: (state) => state,
    },
    methods: {
        fetchFeed() {
            const { feedUrl } = this.get();
            return fetch(feedUrl).then((r) => r.json());
        },
    },
    oncreate() {
        if (store.get()['feedPage']) {
            this.set({ page: store.get()['feedPage'] });
        }
        if (store.get()['feedResults']) {
            this.set({ feedResults: store.get()['feedResults'] });
        } else {
            const feed = this.fetchFeed();
            feed.then((feed) => {
                this.set({ feedResults: feed.results });
                store.set({ feedResults: feed.results });
            }).catch((e) => {
                console.log(e); // eslint-disable-line
                return e;
            });
        }
    },
};
</script>
