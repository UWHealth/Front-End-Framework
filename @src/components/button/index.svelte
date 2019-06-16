<script>
export let body = 'Button';
export let icon = false;
export let iconUrl = false;
export let attrs = false;
export let type = [];

function modifiers(types, prefix) {
    if (!types.length) {
        return '';
    }
    if (!Array.isArray(types)) {
        types = [types];
    }
    return types.map((type) => prefix + type).join(' ');
};
</script>

<button class="btn {modifiers(type, 'btn--')}">
    <span class="btn__body {modifiers(type, 'btn__body--')}">
        <slot>
            {body}
        </slot>
    </span>
    {#if icon}
        <span class="btn__icon {modifiers(type, 'btn__icon--')}">
            <slot name="icon">
                {icon}
            </slot>
        </span>
    {:else if iconUrl}
        <img class="btn__icon btn__icon--image {modifiers(type, 'btn__icon--')}" src="{{iconUrl}}" alt="">
    {/if}
</button>

