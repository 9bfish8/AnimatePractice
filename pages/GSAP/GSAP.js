const colors = [
  '#FF3366', '#33FF66', '#3366FF', '#FFFF33',
  '#FF33CC', '#33FFCC', '#FF6633', '#33CCFF'
];

function createParticles(count) {
  for (let i = 0; i < count; i++) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    particle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    document.querySelector('.container').appendChild(particle);

    const glow = particle.cloneNode();
    glow.className = 'particle glow';
    glow.style.backgroundColor = particle.style.backgroundColor;
    document.querySelector('.container').appendChild(glow);

    animateParticle(particle, glow);
  }
}

function createShapes(count) {
  for (let i = 0; i < count; i++) {
    const shape = document.createElement('div');
    shape.className = 'shape';
    shape.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    shape.style.width = Math.random() * 40 + 20 + 'px';
    shape.style.height = Math.random() * 40 + 20 + 'px';
    document.querySelector('.container').appendChild(shape);

    const glow = shape.cloneNode();
    glow.className = 'shape glow';
    glow.style.backgroundColor = shape.style.backgroundColor;
    document.querySelector('.container').appendChild(glow);

    animateShape(shape, glow);
  }
}

function animateParticle(particle, glow) {
  const duration = Math.random() * 4 + 2;
  const startX = Math.random() * 800;
  const startY = Math.random() * 600;

  gsap.set([particle, glow], {
    x: startX,
    y: startY,
    scale: 0
  });

  gsap.to([particle, glow], {
    duration: duration,
    x: '+=' + (Math.random() * 400 - 200),
    y: '+=' + (Math.random() * 400 - 200),
    rotation: Math.random() * 360,
    scale: Math.random() * 2 + 1,
    ease: "power1.inOut",
    repeat: -1,
    yoyo: true
  });
}

function animateShape(shape, glow) {
  const duration = Math.random() * 3 + 2;
  const startX = Math.random() * 800;
  const startY = Math.random() * 600;

  gsap.set([shape, glow], {
    x: startX,
    y: startY,
    rotation: Math.random() * 360,
    scale: 0
  });

  gsap.to([shape, glow], {
    duration: duration,
    x: '+=' + (Math.random() * 300 - 150),
    y: '+=' + (Math.random() * 300 - 150),
    rotation: '+=' + (Math.random() * 720 - 360),
    scale: Math.random() * 1.5 + 0.5,
    ease: "power2.inOut",
    repeat: -1,
    yoyo: true
  });
}

function animateText() {
  const texts = document.querySelectorAll('.text');
  gsap.to(texts, {
    duration: 1,
    opacity: 1,
    scale: 1.2,
    stagger: 0.2,
    ease: "elastic.out(1, 0.5)",
    yoyo: true,
    repeat: -1
  });
}

document.body.addEventListener('click', (e) => {
  const burst = 20;
  for (let i = 0; i < burst; i++) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    particle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    document.querySelector('.container').appendChild(particle);

    gsap.set(particle, {
      x: e.clientX - 400,
      y: e.clientY - 300,
      scale: 0
    });

    gsap.to(particle, {
      duration: Math.random() * 2 + 1,
      x: e.clientX - 400 + (Math.random() * 400 - 200),
      y: e.clientY - 300 + (Math.random() * 400 - 200),
      scale: Math.random() * 3,
      ease: "power4.out",
      opacity: 0,
      onComplete: () => particle.remove()
    });
  }
});

gsap.to('body', {
  duration: 5,
  backgroundColor: '#1a1a1a',
  repeat: -1,
  yoyo: true,
  ease: "sine.inOut"
});

// 애니메이션 시작
createParticles(30);
createShapes(15);
animateText();
