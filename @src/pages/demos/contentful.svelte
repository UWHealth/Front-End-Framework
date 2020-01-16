<script>
import {createClient} from 'contentful';
import Demo from '@/layouts/demo';

const client = createClient({
  // This is the space ID. A space is like a project folder in Contentful terms
  space: "yxeng1j0c7t7",
  // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
  accessToken: "yOhv_bWsnNzCpvBRqBA30oKoR-jOT_i3UKMTMI-rD8A"
});

let items;

client
    .getEntries()
    .then((response) => {
        items = response.items;
        typeof window !== "undefined" && console.log(items);
    })
    .catch(console.error);
</script>

<Demo demoTitle="Contentful demo">
{#if items}
    {#each items as item, i (item.sys.id)}
        <div>
        {#each Object.keys(item.fields) as field, j}
            {#if (typeof item.fields[field] === "string")}
                {#if j === 0 }
                    <h3>{@html item.fields[field]}</h3>
                {:else}
                    <p>
                    <strong>{@html field}:</strong>
                    {#if (item.fields[field].indexOf("http:") > -1)}
                        <a href="{item.fields[field]}">{@html item.fields[field]}</a>
                    {:else}
                        {@html item.fields[field]}
                    {/if}
                    </p>
                {/if}
            {/if}
        {/each}
        </div>
    {/each}
{/if}
</Demo>
