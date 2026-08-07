document.addEventListener('DOMContentLoaded', () => {
    // 1. Mobile Navigation Menu Drawer Handler
    const navBurger = document.getElementById('navBurger');
    const navTautan = document.getElementById('navTautan');
    const menuToggle = document.getElementById('menu-toggle');

    function toggleMobileMenu() {
        if (navTautan) {
            navTautan.classList.toggle('nav__tautan--active');
            if (navBurger) {
                const expanded = navBurger.getAttribute('aria-expanded') === 'true';
                navBurger.setAttribute('aria-expanded', !expanded);
            }
        }
    }

    if (navBurger) {
        navBurger.addEventListener('click', toggleMobileMenu);
    }
    if (menuToggle) {
        menuToggle.addEventListener('click', toggleMobileMenu);
    }

    // Close mobile menu when clicking any nav link
    document.querySelectorAll('.nav__tautan a').forEach(link => {
        link.addEventListener('click', () => {
            if (navTautan && navTautan.classList.contains('nav__tautan--active')) {
                navTautan.classList.remove('nav__tautan--active');
                if (navBurger) navBurger.setAttribute('aria-expanded', 'false');
            }
        });
    });

    // 2. Smooth Scroll Anchor Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (targetId && targetId !== '#') {
                e.preventDefault();
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    const navHeight = document.querySelector('.nav')?.offsetHeight || 70;
                    const elementPosition = targetElement.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - navHeight;

                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
});
