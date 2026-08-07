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
            if (targetId && targetId.startsWith('#') && targetId.length > 1) {
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

    // 3. Animated Photo Slideshow Gallery Handler
    const slides = document.querySelectorAll('.galeri-slide');
    const dotsContainer = document.getElementById('sliderDots');
    const prevBtn = document.getElementById('prevSlide');
    const nextBtn = document.getElementById('nextSlide');
    let currentSlide = 0;
    let slideInterval;

    function showSlide(index) {
        if (!slides.length) return;
        slides.forEach((slide, i) => {
            slide.classList.toggle('active', i === index);
        });
        const dots = document.querySelectorAll('.slider-dots .dot');
        dots.forEach((dot, i) => {
            dot.classList.toggle('active', i === index);
        });
        currentSlide = index;
    }

    window.setGaleriSlide = function(index) {
        showSlide(index);
        resetTimer();
    };

    if (slides.length > 0) {
        if (dotsContainer) {
            dotsContainer.innerHTML = '';
            slides.forEach((_, i) => {
                const dot = document.createElement('span');
                dot.classList.add('dot');
                if (i === 0) dot.classList.add('active');
                dot.addEventListener('click', () => window.setGaleriSlide(i));
                dotsContainer.appendChild(dot);
            });
        }

        if (prevBtn) {
            prevBtn.addEventListener('click', () => {
                let prev = (currentSlide - 1 + slides.length) % slides.length;
                window.setGaleriSlide(prev);
            });
        }

        if (nextBtn) {
            nextBtn.addEventListener('click', () => {
                let next = (currentSlide + 1) % slides.length;
                window.setGaleriSlide(next);
            });
        }

        function startTimer() {
            slideInterval = setInterval(() => {
                let next = (currentSlide + 1) % slides.length;
                showSlide(next);
            }, 3500);
        }

        function resetTimer() {
            if (slideInterval) clearInterval(slideInterval);
            startTimer();
        }

        startTimer();
    }
});
