<div class="media-object"
    in:slide="{duration: 300, easing: cubicOut}"
    out:fade="{duration: 100}"
    >
    <div class="media-object__media">
        {@html parseDesc(description).image &&
            parseDesc(description).image}
    </div>
    <div class="media-object__body">
        <strong>{title}</strong>
        <p>{@html parseDesc(description).text}</p>
    </div>
</div>

<script>
    import { slide, fade } from 'svelte-transitions';
    import { cubicOut } from 'eases-jsnext';
    import decodeEntities from '@/helpers/decode-html.js';

    export default {
        transitions: { slide, fade },
        data() {
            return {
                page: 1,
                MAX_PER_PAGE: 10,
            };
        },
        computed: {},
        helpers: {
            cubicOut,
            parseDesc: (description) => {
                let text = Array.isArray(description)
                    ? description[2]
                    : description;
                let image = /(&lt;img[\s].*\/&gt;)/gi.exec(text);
                image = image
                    ? image[0]
                    : Array.isArray(description) && description[1]
                    ? '&lt;img src="https://uconnect.wisc.edu' +
                      description[1] +
                      '"/&gt;'
                    : '';
                text = text && text.replace(image, '');

                return { text: decodeEntities(text), image: decodeEntities(image) };
            },
        },
        oncreate() {},
    };
</script>

<style>
    .media-object__media {
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 2em;
        background-color: #124a79;
        width: 15rem;
        min-height: 10rem;
    }

    .media-object__media :global(img) {
        margin: auto !important;
        max-width: 100% !important;
        height: auto !important;
    }
</style>
