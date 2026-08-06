document.addEventListener('DOMContentLoaded', () => {
    // 1. Korowa Style Hero Typewriter Animation
    const typewriterTarget = document.getElementById('typewriter-target');
    const quoteText = `"Saya takut anak saya pintar tapi tak punya adab. Saya takut dia sukses, tapi kosong jiwanya. Karena itu saya cari sekolah yang pertama-tama ngajarin dia jadi manusia yang tahu arah."`;
    
    let charIndex = 0;
    const typingSpeed = 35; // ms per character

    function typeWriter() {
        if (typewriterTarget && charIndex < quoteText.length) {
            typewriterTarget.textContent += quoteText.charAt(charIndex);
            charIndex++;
            setTimeout(typeWriter, typingSpeed);
        }
    }

    if (typewriterTarget) {
        setTimeout(typeWriter, 600);
    }

    // 2. Mobile Header Menu Toggle
    const menuToggle = document.getElementById('menu-toggle');
    const mainNav = document.getElementById('main-nav');

    if (menuToggle && mainNav) {
        menuToggle.addEventListener('click', () => {
            mainNav.classList.toggle('show');
        });
    }

    // 3. Smooth Scroll for Anchor Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId && targetId !== '#') {
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                    if (mainNav && mainNav.classList.contains('show')) {
                        mainNav.classList.remove('show');
                    }
                }
            }
        });
    });
});
