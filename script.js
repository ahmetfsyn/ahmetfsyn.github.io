/**
 * Smooth fade-in on scroll using IntersectionObserver.
 * Adds the 'visible' class to elements with 'fade-up' when they enter the viewport.
 */
(function () {
    'use strict';

    if (!('IntersectionObserver' in window)) {
        // Fallback: show everything immediately if observer is unavailable
        document.querySelectorAll('.fade-up').forEach(function (el) {
            el.classList.add('visible');
        });
        return;
    }

    var observerOptions = {
        root: null,
        rootMargin: '0px 0px -60px 0px',
        threshold: 0.1
    };

    var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    var elements = document.querySelectorAll('.fade-up');
    elements.forEach(function (el) {
        observer.observe(el);
    });
})();
