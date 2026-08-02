(function () {
    var fontsLink = document.getElementById('appFonts');
    var swapFonts = function () {
        if (fontsLink) fontsLink.media = 'all';
    };
    if (fontsLink && fontsLink.addEventListener) {
        fontsLink.addEventListener('load', swapFonts);
        fontsLink.addEventListener('error', swapFonts);
    }
    if (document.fonts && document.fonts.ready) {
        document.fonts.ready.then(swapFonts).catch(swapFonts);
    }
    if ('serviceWorker' in navigator) {
        window.addEventListener('load', function () {
            navigator.serviceWorker.register('./sw.js').catch(function () {});
        });
    }
})();