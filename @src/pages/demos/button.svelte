<script>
import Buttons from '@/components/button';
import Demo from '@/layouts/demo';
import capitalize from '@/helpers/title-case';

const widths = ['normal', 'wide', 'compact'];
</script>

<Demo demoTitle="Buttons" variants="{true}">
    <div slot="header">
        <Buttons>Whatup, I'm a button!</Buttons>
    </div>
    <div slot="variants">
        {#each widths as buttonType}
        <div class="button-holder button-holder--{buttonType}">
            <Buttons type="{buttonType}" body="{capitalize(buttonType)}"/>
        </div>
        {/each}
    </div>
</Demo>

<style lang="scss">
@import '>/config/sass.config.scss';

.button-holder {
    display: inline-block;
    padding: type-space(1 1 1 0);
}
.button-holder--wide {
    min-width: #{columns(1, 4)};
}

.btn {
    margin-right: type-space(1);
    margin-bottom: type-space(1);
    vertical-align: middle;
}
</style>
