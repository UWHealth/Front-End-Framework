<script>
import {createClient} from 'contentful';

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
        console.log(response.items);
    })
    .catch(console.error);
</script>

{#if items}
    {#each items as item}
        <p>{@html JSON.stringify(item)}</p>
    {/each}
{/if}
