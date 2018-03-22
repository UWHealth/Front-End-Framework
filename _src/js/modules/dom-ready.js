export default function(fn) {
    if (document.readyState !== 'loading') {
        fn();
    }
    // Modern browsers
    else if (document.addEventListener) {
        document.addEventListener('DOMContentLoaded', fn);
    }
    // IE <= 8
    else {
        document.attachEvent('onreadystatechange', () => {
            if (document.readyState === 'complete') { fn(); }
        });
    }
}
