document.addEventListener('DOMContentLoaded', () => {
    // 1. Sevenoaks Style Typewriter Effect
    const typewriterTarget = document.getElementById('typewriter-target');
    const quoteText = `"Saya takut anak saya pintar tapi tak punya adab. Saya takut dia sukses, tapi kosong jiwanya. Karena itu saya cari sekolah yang pertama-tama ngajarin dia jadi manusia yang tahu arah."`;
    
    let charIndex = 0;
    const typingSpeed = 35; // ms per character

    function typeWriter() {
        if (charIndex < quoteText.length) {
            typewriterTarget.textContent += quoteText.charAt(charIndex);
            charIndex++;
            setTimeout(typeWriter, typingSpeed);
        }
    }

    if (typewriterTarget) {
        // Start typing after short initial delay
        setTimeout(typeWriter, 500);
    }

    // 2. Mobile Nav Toggle
    const menuToggle = document.getElementById('menu-toggle');
    const mainNav = document.getElementById('main-nav');

    if (menuToggle && mainNav) {
        menuToggle.addEventListener('click', () => {
            mainNav.classList.toggle('show');
        });
    }
});
