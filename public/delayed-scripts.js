// Delayed loading of GTM and Clarity to prioritize LCP
window.addEventListener('load', function () {
    setTimeout(function () {


        // Microsoft Clarity
        (function (c, l, a, r, i, t, y) {
            c[a] = c[a] || function () { (c[a].q = c[a].q || []).push(arguments) };
            t = l.createElement(r); t.async = 1; t.src = "https://www.clarity.ms/tag/" + i;
            y = l.getElementsByTagName(r)[0]; y.parentNode.insertBefore(t, y);
        })(window, document, "clarity", "script", "u9m4q2czy0");

        console.log('Third-party scripts loaded.');
    }, 2500); // Delay of 2.5s to ensure LCP is painted
});
