let scene, camera, renderer;
let galaxyParticles, starParticles, nebulaParticles;
let mouseX = 0, mouseY = 0;
let time = 0;

function init() {
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 5000);
    camera.position.z = 1500;

    renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    createStars();
    createGalaxy();
    createNebula();
    createAurora();
    addEventListeners();
    animate();
}

function createStars() {
    const geometry = new THREE.BufferGeometry();
    const vertices = [];
    const sizes = [];
    const colors = [];

    for (let i = 0; i < 10000; i++) {
        // 랜덤한 3D 공간에 별들 배치
        vertices.push(
            (Math.random() - 0.5) * 3000,
            (Math.random() - 0.5) * 3000,
            (Math.random() - 0.5) * 3000
        );

        // 별들의 크기 변화
        sizes.push(Math.random() * 2);

        // 별들의 색상 (푸른빛, 보라빛 계열)
        const color = new THREE.Color();
        color.setHSL(Math.random() * 0.2 + 0.6, 0.9, 0.8);
        colors.push(color.r, color.g, color.b);
    }

    geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));
    geometry.setAttribute('size', new THREE.Float32BufferAttribute(sizes, 1));
    geometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));

    const material = new THREE.ShaderMaterial({
        uniforms: {
            time: { value: 0 }
        },
        vertexShader: `
            attribute float size;
            varying vec3 vColor;
            uniform float time;
            void main() {
                vColor = color;
                vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
                gl_PointSize = size * (300.0 / -mvPosition.z) * (sin(time + position.x) * 0.5 + 1.0);
                gl_Position = projectionMatrix * mvPosition;
            }
        `,
        fragmentShader: `
            varying vec3 vColor;
            void main() {
                vec2 center = gl_PointCoord - vec2(0.5);
                float dist = length(center);
                float alpha = 1.0 - smoothstep(0.4, 0.5, dist);
                gl_FragColor = vec4(vColor, alpha);
            }
        `,
        transparent: true,
        blending: THREE.AdditiveBlending
    });

    starParticles = new THREE.Points(geometry, material);
    scene.add(starParticles);
}

function createGalaxy() {
    const geometry = new THREE.BufferGeometry();
    const vertices = [];
    const colors = [];

    for (let i = 0; i < 20000; i++) {
        const angle = Math.random() * Math.PI * 2;
        const radius = Math.random() * Math.random() * 1000;
        const spiral = angle + (radius / 50);
        const spread = Math.random() * Math.PI * 2;

        const x = Math.cos(spiral) * radius;
        const y = Math.sin(spiral) * radius;
        const z = Math.sin(spread) * (Math.random() - 0.5) * 200;

        vertices.push(x, y, z);

        const color = new THREE.Color();
        color.setHSL(0.6 + (radius/2000), 0.8, 0.6 + Math.random() * 0.2);
        colors.push(color.r, color.g, color.b);
    }

    geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));
    geometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));

    const material = new THREE.PointsMaterial({
        size: 3,
        vertexColors: true,
        transparent: true,
        depthWrite: false,
        blending: THREE.AdditiveBlending
    });

    galaxyParticles = new THREE.Points(geometry, material);
    scene.add(galaxyParticles);
}

function createNebula() {
    const geometry = new THREE.BufferGeometry();
    const vertices = [];
    const colors = [];

    for (let i = 0; i < 5000; i++) {
        const theta = Math.random() * Math.PI * 2;
        const phi = Math.random() * Math.PI * 2;
        const r = Math.random() * 800 + 500;

        const x = r * Math.sin(theta) * Math.cos(phi);
        const y = r * Math.sin(theta) * Math.sin(phi);
        const z = r * Math.cos(theta);

        vertices.push(x, y, z);

        const color = new THREE.Color();
        color.setHSL(0.8 + Math.random() * 0.2, 0.9, 0.6);
        colors.push(color.r, color.g, color.b);
    }

    geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));
    geometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));

    const material = new THREE.PointsMaterial({
        size: 8,
        vertexColors: true,
        transparent: true,
        opacity: 0.6,
        depthWrite: false,
        blending: THREE.AdditiveBlending
    });

    nebulaParticles = new THREE.Points(geometry, material);
    scene.add(nebulaParticles);
}

function createAurora() {
    const geometry = new THREE.BufferGeometry();
    const vertices = [];
    const colors = [];

    for (let i = 0; i < 1000; i++) {
        const angle = Math.random() * Math.PI * 2;
        const radius = 1200 + Math.random() * 200;

        vertices.push(
            Math.cos(angle) * radius,
            (Math.random() - 0.5) * 400,
            Math.sin(angle) * radius
        );

        const color = new THREE.Color();
        color.setHSL(0.6 + Math.random() * 0.1, 0.9, 0.7);
        colors.push(color.r, color.g, color.b);
    }

    geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));
    geometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));

    const material = new THREE.PointsMaterial({
        size: 10,
        vertexColors: true,
        transparent: true,
        opacity: 0.4,
        depthWrite: false,
        blending: THREE.AdditiveBlending
    });

    const aurora = new THREE.Points(geometry, material);
    scene.add(aurora);
}

function animate() {
    requestAnimationFrame(animate);
    time += 0.005;

    camera.position.x += (mouseX - camera.position.x) * 0.05;
    camera.position.y += (-mouseY - camera.position.y) * 0.05;
    camera.lookAt(scene.position);

    galaxyParticles.rotation.y += 0.0005;
    nebulaParticles.rotation.z += 0.0002;

    starParticles.material.uniforms.time.value = time;

    renderer.render(scene, camera);
}

function addEventListeners() {
    document.addEventListener('mousemove', onMouseMove);
    window.addEventListener('resize', onWindowResize);
}

function onMouseMove(event) {
    mouseX = (event.clientX - window.innerWidth / 2) * 2;
    mouseY = (event.clientY - window.innerHeight / 2) * 2;
}

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}


// 초기화
init();