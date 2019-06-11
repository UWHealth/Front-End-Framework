<main class="wrap">
    <div class="x-icon">X</div>
    <header>
        <h1 class="h2">Error</h1>
        <h2 class="h4">
            {@html escapeHtml(message)}
        </h2>
    </header>
    <div>
        <pre><code>
            <slot></slot>
            {@html escapeHtml(stack)}
        </code></pre>
    </div>
</main>



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
