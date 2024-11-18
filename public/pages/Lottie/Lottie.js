// Lottie.js
const animation = lottie.loadAnimation({
    container: document.getElementById('lottie'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'https://assets6.lottiefiles.com/private_files/lf30_TBKozE.json'
});

document.addEventListener('mousemove', (e) => {
    const xRatio = (e.clientX / window.innerWidth - 0.5) * 2;
    animation.setSpeed(1 + Math.abs(xRatio) * 0.5);
});