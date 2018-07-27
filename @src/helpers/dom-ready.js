export default function domReady(fn) {
    if (document.readyState !== 'loading') {
        fn();
    } else if (document.addEventListener) {
        // Modern browsers
        document.addEventListener('DOMContentLoaded', fn);
    } else {
        // IE <= 8
        document.attachEvent('onreadystatechange', () => {
            if (document.readyState === 'complete') {
                fn();
            }
        });
    }
}
