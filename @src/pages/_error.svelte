<main class="wrap">
    <div class="x">✖︎</div>
    <header>
        <h1 class="h2">Error</h1>
        <h2 class="h4">
            {@html escapeHtml(message)}
        </h2>
    </header>
    <div>
        <pre><code><slot></slot>{@html escapeHtml(stack)}</code></pre>
    </div>
</main>

<style>
    .x {
        float: left;
        color: hsl(352deg, 80%, 50%);
        overflow: hidden;
        font-size: 3rem;
        padding-right: 1.5rem;
        line-height: 1.5;
    }
    header {
        overflow: hidden;
        color: hsl(330, 1%, 30%);
    }
    h2 {
        font-weight: normal;
        margin-bottom: 3rem;
    }
    pre {
        overflow: scroll;
        color: hsl(220, 90%, 10%);
        background-color: hsl(220, 2%, 95%);
        border-top: 4px solid hsl(352deg, 80%, 50%);
        line-height: 1.75;
        padding: 2rem;
        white-space: pre;
    }
    code {
        max-width: none;
    }
</style>

<script>
import escapeHtml from 'escape-html';

export default {
    data: ()=> ({
        message: '',
        stack: '',
    }),
    helpers: {
        escapeHtml
    }
};
</script>
