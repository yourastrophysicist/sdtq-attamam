document.addEventListener('DOMContentLoaded', () => {
    // 1. Mobile Menu Toggle
    const menuBtn = document.getElementById('menu-btn');

    if (menuBtn) {
        menuBtn.addEventListener('click', () => {
            alert('Navigasi SDTQ ATTAMAM (Great Walstead Edition):\n- Our Philosophy\n- Character & 7Cs\n- Countryside Campus\n- Kurikulum\n- Book a Visit (PPDB)');
        });
    }

    // 2. Smooth Scrolling for Navigation Links
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
