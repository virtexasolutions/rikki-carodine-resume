document.addEventListener('DOMContentLoaded', () => {
    // 1. Scroll Reveal Animation
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Optional: stop observing after reveal
                // observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach(el => observer.observe(el));

    // 2. Background Glow Mouse Tracking (Subtle)
    const glowBg = document.getElementById('glow-bg');
    
    document.addEventListener('mousemove', (e) => {
        const x = e.clientX / window.innerWidth * 100;
        const y = e.clientY / window.innerHeight * 100;
        
        // Update background gradient position slightly based on mouse
        // We use CSS variables for performance
        glowBg.style.setProperty('--mouse-x', `${x}%`);
        glowBg.style.setProperty('--mouse-y', `${y}%`);
    });

    // 3. Smooth Hero Reveal
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        setTimeout(() => {
            heroTitle.style.opacity = '1';
            heroTitle.style.transform = 'translateY(0)';
        }, 100);
    }
});
