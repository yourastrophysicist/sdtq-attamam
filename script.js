document.addEventListener('DOMContentLoaded', () => {
    // 1. Brightness / Contrast Slider Control
    const controlSlider = document.querySelector('.control-slider');
    const heroSection = document.querySelector('.korowa-crimson-hero');

    if (controlSlider && heroSection) {
        controlSlider.addEventListener('input', (e) => {
            const val = e.target.value;
            // Adjust lightness slightly based on slider value
            const lightness = 62 + ((val - 50) * 0.2); // 52% to 72%
            heroSection.style.backgroundColor = `hsl(349, 71%, ${lightness}%)`;
        });
    }

    // 2. Smooth Scroll for Navigation Anchors
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
                }
            }
        });
    });
});
