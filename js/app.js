/* ==================  Meta Equity Partners — Interactions  ================== */

// Sticky nav state
const nav = document.getElementById('nav');
const setNavState = () => {
    if (!nav) return;
    if (window.scrollY > 24) nav.classList.add('scrolled');
    else nav.classList.remove('scrolled');
};
window.addEventListener('scroll', setNavState, { passive: true });
setNavState();

// Mobile menu
const menuToggle = document.getElementById('menuToggle');
const mobileMenu = document.getElementById('mobileMenu');
if (menuToggle && mobileMenu) {
    menuToggle.addEventListener('click', () => {
        mobileMenu.classList.toggle('open');
        document.body.style.overflow = mobileMenu.classList.contains('open') ? 'hidden' : '';
    });
    mobileMenu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
        mobileMenu.classList.remove('open');
        document.body.style.overflow = '';
    }));
}

// Scroll reveal
const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
        if (e.isIntersecting) {
            e.target.classList.add('in');
            io.unobserve(e.target);
        }
    });
}, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.reveal').forEach(el => io.observe(el));

// Stagger reveal for grids
document.querySelectorAll('.focus-grid .focus-card, .team-grid .team-card, .principles .principle, .stats-grid .stat').forEach((el, i) => {
    el.style.transitionDelay = `${Math.min(i * 80, 480)}ms`;
});

// Contact form (graceful fallback)
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const btn = contactForm.querySelector('button[type="submit"]');
        const orig = btn.innerHTML;
        btn.innerHTML = 'Sending…';
        btn.disabled = true;
        // Lightweight mailto fallback — replace with Formspree/Resend later if wired
        const data = new FormData(contactForm);
        const subject = encodeURIComponent(`Inquiry from ${data.get('name') || 'website'}`);
        const body = encodeURIComponent(
            `Name: ${data.get('name') || ''}\n` +
            `Email: ${data.get('email') || ''}\n` +
            `Interest: ${data.get('interest') || ''}\n\n` +
            `${data.get('message') || ''}`
        );
        window.location.href = `mailto:contact@metaequity.partners?subject=${subject}&body=${body}`;
        setTimeout(() => {
            btn.innerHTML = orig;
            btn.disabled = false;
            contactForm.reset();
        }, 800);
    });
}

// Year stamp
document.querySelectorAll('[data-year]').forEach(el => { el.textContent = new Date().getFullYear(); });
