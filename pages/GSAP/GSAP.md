# GSAP 파티클 애니메이션 코드 설명

```javascript
// 다양한 색상으로 구성된 팔레트 정의
const colors = [
   '#FF3366', '#33FF66', '#3366FF', '#FFFF33',
   '#FF33CC', '#33FFCC', '#FF6633', '#33CCFF'
];

// 파티클 생성 함수
// count: 생성할 파티클 개수
function createParticles(count) {
   for (let i = 0; i < count; i++) {
       // 파티클 생성 및 스타일링
       // glow 효과용 복제
       // 애니메이션 적용
   }
}

// 도형 생성 함수
// count: 생성할 도형 개수 
function createShapes(count) {
   for (let i = 0; i < count; i++) {
       // 랜덤 크기/색상의 도형 생성
       // glow 효과용 복제
       // 애니메이션 적용
   }
}

// 파티클 애니메이션 함수
// particle: 파티클 요소
// glow: 발광 효과 요소
function animateParticle(particle, glow) {
   // GSAP로 위치/회전/크기 애니메이션
   // 무한 반복 및 yoyo 효과
}

// 도형 애니메이션 함수  
function animateShape(shape, glow) {
   // 파티클과 유사하나 다른 수치 적용
}

// 텍스트 애니메이션 함수
function animateText() {
   // opacity/scale 애니메이션
   // stagger로 시차 효과
}

// 클릭 이벤트 리스너
document.body.addEventListener('click', (e) => {
   // 클릭 위치에서 burst 효과
   // 일회성 파티클 생성/제거
});

// 배경색 애니메이션
gsap.to('body', {
   // 배경색 점진적 변경
   // 무한 반복
});

// 초기 실행
createParticles(30);  // 30개 파티클
createShapes(15);     // 15개 도형
animateText();        // 텍스트 애니메이션
```
## GSAP 애니메이션 주요 기능

### 파티클 시스템
- 랜덤 색상/위치의 파티클 생성
- glow 효과로 발광 구현
- 자연스러운 움직임 애니메이션

### 도형 애니메이션
- 랜덤 크기/색상의 도형 생성
- 회전 및 크기 변화 효과
- glow 효과 적용

### 텍스트 효과
- 투명도/크기 애니메이션
- elastic 효과로 생동감
- stagger로 시차 적용

### 인터랙션
- 클릭 시 burst 효과
- 배경색 점진적 변화
- 지속적인 움직임

### 사용된 GSAP 기능
- gsap.set(): 초기 상태 설정
- gsap.to(): 애니메이션 정의
- repeat: 반복 횟수
- yoyo: 왕복 효과
- ease: 가속도 함수
- stagger: 시차 효과

