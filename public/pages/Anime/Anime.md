# Anime.js SVG 애니메이션 코드 설명

```javascript
// DREAM SVG 애니메이션 구현
// SVG 구조
<svg class="logo" viewBox="0 0 800 300">
   <!-- D -->
   <path class="letter" d="M100,50 v100 c80,0 80,-100 0,-100"/>
   <!-- R -->
   <path class="letter" d="M200,50 v100 c60,-10 60,-40 0,-50 l60,50"/>
   <!-- E -->
   <path class="letter" d="M300,50 h60 m-60,50 h40 m-40,50 h60"/>
   <!-- A -->
   <path class="letter" d="M400,150 l40,-100 l40,100 m-60,-40 h40"/>
   <!-- M -->
   <path class="letter" d="M500,150 l30,-100 l30,70 l30,-70 l30,100"/>
   
   <!-- 장식 요소 -->
   <circle class="star" cx="150" cy="25" r="3"/>
   <circle class="star" cx="300" cy="25" r="3"/>
   <path class="underline" d="M50,180 c300,20 500,20 700,0"/>
</svg>

// 기본 애니메이션
function playAnimation() {
   anime({
       targets: '.letter',
       strokeDashoffset: [anime.setDashoffset, 0],
       duration: 3000,
       delay: anime.stagger(200),
       easing: 'easeOutQuart'
   });
}

// 모핑 효과
function playMorph() {
   anime({
       targets: '.letter',
       d: [
           {value: (el) => el.getAttribute('d')},
           {value: (el) => el.getAttribute('d').replace(/v|h|l/g, 'c')},
           {value: (el) => el.getAttribute('d')}
       ],
       duration: 3000,
       easing: 'easeInOutBack'
   });
}

// 반짝임 효과
function playSparkle() {
   anime({
       targets: '.star',
       scale: [1, 1.5, 1],
       opacity: [1, 0.5, 1],
       duration: 1000,
       loop: 3
   });
}
```
## Anime.js 주요 기능

### SVG 패스 애니메이션
- 글자별 순차적 드로잉
- 부드러운 패스 모핑
- 동적인 스트로크 효과

### 시각적 효과
- 그라데이션 배경과 글자
- 글로우/블룸 이펙트
- 별 모양 장식 요소

### 인터랙션
- 드로잉 애니메이션
- 모핑 트랜지션
- 반짝임 효과

### 사용된 Anime.js 기능
- strokeDashoffset
- SVG 패스 모핑
- stagger 효과
- 이징 함수
- 반복/지연 설정

### 스타일링 특징
- 드로잉 효과를 위한 대시 설정
- 발광 효과를 위한 필터
- 반응형 디자인 지원
