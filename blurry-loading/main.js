let startBlur = 30;

const $bg = document.querySelector('.bg');
const $loading = document.querySelector('.loading');

const startAnimation = () => {
    if (startBlur > 0) {
        startBlur -= 0.2;
        $bg.style.filter = `blur(${startBlur}px)`;

        const count = Math.floor(100 - (startBlur / 30 * 100));
        $loading.textContent = `${count}%`;
        $loading.style.opacity = 1 - (count / 100);

        setTimeout(startAnimation, 20);
    }
}

startAnimation();
