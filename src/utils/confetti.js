export const triggerConfetti = () => {
    const colors = ['#00FF94', '#FF4444', '#FFA500', '#FFFFFF', '#FFD700'];
    const confettiCount = 100;

    for (let i = 0; i < confettiCount; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';

        // Random properties
        const bg = colors[Math.floor(Math.random() * colors.length)];
        const left = Math.random() * 100 + 'vw';
        const animDuration = Math.random() * 3 + 2 + 's';
        const size = Math.random() * 10 + 5 + 'px';

        confetti.style.backgroundColor = bg;
        confetti.style.left = left;
        confetti.style.animationDuration = animDuration;
        confetti.style.width = size;
        confetti.style.height = size;
        confetti.style.position = 'fixed';
        confetti.style.top = '-10px';
        confetti.style.zIndex = '9999';
        confetti.style.borderRadius = '50%';

        // Animation
        confetti.animate([
            { transform: `translate3d(0,0,0)`, opacity: 1 },
            { transform: `translate3d(${Math.random() * 200 - 100}px, 100vh, 0) rotate(${Math.random() * 360}deg)`, opacity: 0 }
        ], {
            duration: Math.random() * 2000 + 1500,
            easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
            fill: 'forwards'
        });

        document.body.appendChild(confetti);

        // Cleanup
        setTimeout(() => {
            confetti.remove();
        }, 4000);
    }
};
