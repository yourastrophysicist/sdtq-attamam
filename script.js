document.addEventListener('DOMContentLoaded', () => {
    // 1. Westbourne Interactive Content Shaper Bar Logic
    const shaperGoBtn = document.getElementById('shaper-go-btn');
    const topicSelect = document.getElementById('topic-select');

    if (shaperGoBtn && topicSelect) {
        shaperGoBtn.addEventListener('click', () => {
            const selectedTopic = topicSelect.value;
            let targetId = '#ppdb';

            if (selectedTopic === 'ppdb') targetId = '#ppdb';
            else if (selectedTopic === 'tahfidz') targetId = '#program';
            else if (selectedTopic === 'adab') targetId = '#kisah';
            else if (selectedTopic === 'lokasi') targetId = '#about';

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    }

    // 2. Mobile Menu Toggle
    const menuToggle = document.getElementById('menu-toggle');

    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            alert('Navigasi SDTQ ATTAMAM:\n- Tentang Kami\n- Program & SKL\n- Galeri Kegiatan\n- PPDB 2025-2026');
        });
    }

    // 3. Smooth Anchor Links
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
