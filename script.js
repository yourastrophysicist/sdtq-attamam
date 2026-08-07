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

    // 3. Animated Photo Slideshow Gallery Handler (Horizontal Sliding Track)
    const track = document.getElementById('galeriTrack');
    const slides = document.querySelectorAll('.galeri-slide');
    const dotsContainer = document.getElementById('sliderDots');
    const prevBtn = document.getElementById('prevSlide');
    const nextBtn = document.getElementById('nextSlide');
    let currentSlide = 0;
    let slideInterval;

    function showSlide(index) {
        if (!slides.length || !track) return;
        track.style.transform = `translateX(-${index * 100}%)`;
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
            }, 3600);
        }

        function resetTimer() {
            if (slideInterval) clearInterval(slideInterval);
            startTimer();
        }

        startTimer();
    }

    // 4. Typewriter Effect for Editorial Quote Showcase
    const quoteElement = document.getElementById('typewriterQuote');
    if (quoteElement) {
        const fullHTML = quoteElement.innerHTML.trim();
        quoteElement.innerHTML = '';
        quoteElement.classList.add('typewriter-active');

        let charIndex = 0;
        let isTag = false;
        let tagBuffer = '';
        let hasTyped = false;

        function typeNextChar() {
            if (charIndex < fullHTML.length) {
                let char = fullHTML.charAt(charIndex);
                if (char === '<') isTag = true;

                if (isTag) {
                    tagBuffer += char;
                    if (char === '>') {
                        isTag = false;
                        quoteElement.innerHTML += tagBuffer;
                        tagBuffer = '';
                    }
                } else {
                    quoteElement.innerHTML += char;
                }

                charIndex++;
                setTimeout(typeNextChar, isTag ? 0 : 25);
            } else {
                quoteElement.classList.remove('typewriter-active');
                quoteElement.classList.add('typewriter-finished');
            }
        }

        // Trigger typewriter when section enters viewport
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !hasTyped) {
                    hasTyped = true;
                    typeNextChar();
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.15 });

        observer.observe(quoteElement);
    }
});
