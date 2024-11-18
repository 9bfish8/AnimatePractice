# Lottie 애니메이션 코드 설명

```javascript
// 주요 기능 정의
const animation = lottie.loadAnimation({
   container: document.getElementById('lottie'), // 애니메이션이 표시될 컨테이너
   renderer: 'svg',      // SVG 렌더링 방식 사용
   loop: true,          // 애니메이션 무한 반복
   autoplay: true,      // 자동 재생 설정
   path: '...'          // 애니메이션 JSON 파일 경로
});

// 마우스 인터랙션
document.addEventListener('mousemove', (e) => {
   const xRatio = (e.clientX / window.innerWidth - 0.5) * 2;    // 마우스 X좌표 -1~1 정규화
   animation.setSpeed(1 + Math.abs(xRatio) * 0.5);             // 마우스 위치 기반 속도 조절
});
```

## Lottie 애니메이션 주요 기능
### 초기화 설정

### SVG 기반 렌더링
- 컨테이너 엘리먼트 연결
- 자동재생 및 반복 설정

### 애니메이션 제어

- JSON 기반 애니메이션 데이터
- 실시간 속도 조절
- 무한 루프 재생

### 인터랙션

- 마우스 움직임 감지
- 좌표값 정규화
- 동적 속도 변경

### 사용된 Lottie 기능

- loadAnimation()
- setSpeed()
- SVG renderer
- JSON path loading

### 특징

- 벡터 기반 애니메이션
- 부드러운 속도 전환
- 반응형 인터랙션

