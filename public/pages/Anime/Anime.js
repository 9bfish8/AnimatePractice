function playAnimation() {
    // 글자 애니메이션
    anime({
        targets: '.letter',
        strokeDashoffset: [anime.setDashoffset, 0],
        duration: 3000,
        delay: anime.stagger(200),
        easing: 'easeOutQuart',
    });

    // 별 애니메이션
    anime({
        targets: '.star',
        opacity: [0, 1],
        scale: [0, 1],
        rotate: 360,
        duration: 2000,
        delay: anime.stagger(300),
        easing: 'easeOutElastic(1, .5)',
    });

    // 밑줄 애니메이션
    anime({
        targets: '.underline',
        strokeDashoffset: [1000, 0],
        opacity: [0, 0.5],
        duration: 2000,
        delay: 2000,
        easing: 'easeOutSine',
    });
}

function playMorph() {
    anime({
        targets: '.letter',
        d: [
            {value: (el) => el.getAttribute('d')},
            {value: (el) => el.getAttribute('d').replace(/v|h|l/g, 'c')},
            {value: (el) => el.getAttribute('d')}
        ],
        duration: 3000,
        easing: 'easeInOutBack',
        direction: 'alternate',
    });
}

function playSparkle() {
    // 별 반짝임
    anime({
        targets: '.star',
        scale: [1, 1.5, 1],
        opacity: [1, 0.5, 1],
        duration: 1000,
        delay: anime.stagger(100),
        direction: 'alternate',
        loop: 3,
    });

    // 글자 빛나는 효과
    anime({
        targets: '.letter',
        strokeWidth: [4, 8, 4],
        filter: [
            'drop-shadow(0 0 10px currentColor)',
            'drop-shadow(0 0 20px currentColor)',
            'drop-shadow(0 0 10px currentColor)'
        ],
        duration: 1000,
        delay: anime.stagger(100),
        direction: 'alternate',
        loop: 3,
    });
}

window.onload = () => {
    playAnimation();
};