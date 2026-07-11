// ===== Terminal Portfolio =====

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// ===== Scroll reveals =====
// IntersectionObserver-driven rise-in per section; sibling reveals entering
// together get a small stagger. Reduced motion: CSS shows everything, skip.
(function initReveals() {
    const reveals = document.querySelectorAll('.reveal');
    if (prefersReducedMotion || !('IntersectionObserver' in window)) {
        reveals.forEach((el) => el.classList.add('is-visible'));
        return;
    }

    const observer = new IntersectionObserver(
        (entries) => {
            const entering = entries.filter((e) => e.isIntersecting);
            entering.forEach((entry, i) => {
                entry.target.style.setProperty('--reveal-delay', `${i * 0.08}s`);
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            });
        },
        { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
    );

    reveals.forEach((el) => observer.observe(el));
})();

// ===== Contact form =====
// Static site: validate client-side, then fall back to a prefilled mailto.
(function initContactForm() {
    const form = document.getElementById('contact-form');
    if (!form) return;

    const email = document.getElementById('contact-email');
    const message = document.getElementById('contact-message');
    const submit = document.getElementById('contact-submit');
    const status = document.getElementById('form-status');

    const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    function setStatus(text, kind) {
        status.textContent = text;
        status.className = 'form-status' + (kind ? ` ${kind}` : '');
    }

    [email, message].forEach((field) => {
        field.addEventListener('input', () => {
            field.classList.remove('invalid');
            setStatus('', null);
        });
    });

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        email.classList.remove('invalid');
        message.classList.remove('invalid');

        if (!EMAIL_RE.test(email.value.trim())) {
            email.classList.add('invalid');
            setStatus('error: valid email required', 'error');
            email.focus();
            return;
        }
        if (!message.value.trim()) {
            message.classList.add('invalid');
            setStatus('error: message required', 'error');
            message.focus();
            return;
        }

        setStatus('sending...', null);
        submit.disabled = true;

        const subject = encodeURIComponent('project inquiry — via portfolio');
        const body = encodeURIComponent(`${message.value.trim()}\n\n— ${email.value.trim()}`);
        window.location.href = `mailto:cksanwariya6@gmail.com?subject=${subject}&body=${body}`;

        setTimeout(() => {
            setStatus('sent → finish in your mail client', 'sent');
            submit.disabled = false;
        }, 600);
    });
})();
