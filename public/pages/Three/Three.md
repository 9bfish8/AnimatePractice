# Three.js Galaxy Animation 코드 설명

```javascript
// 주요 변수 정의
let scene, camera, renderer;
let galaxyParticles, starParticles, nebulaParticles;
let mouseX = 0, mouseY = 0;
let time = 0;

// 초기화 함수
function init() {
   // Scene, Camera, Renderer 설정
   // 각종 우주 요소 생성
   // 이벤트 리스너 추가
   // 애니메이션 시작
}

// 배경 별 생성
function createStars() {
   // 10,000개의 랜덤 위치 별 생성
   // ShaderMaterial로 반짝임 효과
   // 크기와 색상 랜덤 설정
}

// 은하수 생성
function createGalaxy() {
   // 20,000개의 파티클로 나선형 은하 생성
   // 그라데이션 색상 적용
   // 3D 공간에 분포
}

// 성운 효과 생성
function createNebula() {
   // 5,000개의 파티클로 구형 성운 생성
   // 반투명 효과와 큰 크기 적용
   // 깊이감 있는 배치
}

// 오로라 효과 생성
function createAurora() {
   // 1,000개의 파티클로 외곽 효과
   // 부드러운 그라데이션
   // 동적인 움직임
}

// 애니메이션 함수
function animate() {
   // 마우스 인터랙션
   // 요소들의 회전
   // 시간에 따른 변화
   // 렌더링
}
```
## Three.js Galaxy Animation 주요 기능

### 파티클 시스템
- 다층적 파티클 구조 (별, 은하, 성운, 오로라)
- ShaderMaterial을 활용한 커스텀 렌더링
- 자연스러운 깊이감과 분포

### 시각적 효과
- 실시간 별 반짝임
- 블렌딩 기반 발광 효과
- HSL 색상 시스템 활용

### 구조적 특징
- 나선형 은하 알고리즘
- 구면 좌표계 활용
- 최적화된 파티클 시스템

### 인터랙션
- 마우스 기반 시점 변경
- 지속적 회전 효과
- 반응형 디자인

### 사용된 Three.js 기능
- BufferGeometry
- ShaderMaterial
- PointsMaterial
- AdditiveBlending
- PerspectiveCamera