<script>
import Nav from '@/layouts/demo/demo.nav.svelte';

export let demoTitle = 'Demo',
    variantTitle = false,
    variants = false,
    stylesheet = true;
</script>

<svelte:head>
    <title>→ { demoTitle } demo</title>
</svelte:head>

<Nav/>

<div class="demo">
    <header class="demo-header">
        <div class="wrap">
            <h1 class="demo-header__title">
                { demoTitle }
            </h1>
            <div class="demo-header__component">
                <slot name="header">
                    <div></div>
                </slot>
            </div>
        </div>
    </header>

    <main class="demo-body">
        <div class="wrap">
            {#if variants || variantTitle}
            <h2 class="demo-body__head">
                { variantTitle || demoTitle } Variants
            </h2>
            <slot name="variants"></slot>
            {/if}
        </div>
    </main>
</div>

<style lang="scss">
    @import '@/layouts/demo/demo.scss';
</style>
