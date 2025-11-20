// Mobile nav toggle
document.addEventListener('DOMContentLoaded', function () {
    const navToggle = document.querySelector('.nav-toggle');
    const nav = document.getElementById('site-nav');
    if (navToggle && nav) {
        navToggle.addEventListener('click', () => {
            nav.classList.toggle('open');
        });
    }

    // Smooth scrolling for in-page links
    document.querySelectorAll('a[href^="#"]').forEach(a => {
        a.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href.length > 1) {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    // close nav on mobile after click
                    if (nav && nav.classList.contains('open')) nav.classList.remove('open');
                }
            }
        });
    });

    // Simple contact form handler (demo only)
    const form = document.getElementById('contact-form');
    if (form) {
        form.addEventListener('submit', function (e) {
            e.preventDefault();
            const data = new FormData(form);
            const payload = Object.fromEntries(data.entries());
            // For now just log and show a friendly message
            console.log('Contact form submitted', payload);
            alert('Thanks! Your message has been noted (demo).');
            form.reset();
        });
    }
});
