# ✨ MBTI 별 나에게 맞는 학과는?! ✨
## 📍 프로젝트 정보

**프로젝트 기간**
* 2023년 7월 24일 ~ 2022년 7월 27일
* 1차 리팩토링 : 2023년 8월 1일 ~ 8월 3일

**프로젝트 목표**
* 선택지에 따라 MBTI 별 학과를 보여준다.

**배포 주소**
*  https://mbti-department.netlify.app

**기술 스택**
- <img src="https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white">
- <img src="https://img.shields.io/badge/css-1572B6?style=for-the-badge&logo=css3&logoColor=white">
- <img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black">

***

## 📍 구현 내용
* 시작화면

  <img src='https://github.com/suehub/MBTI_DEPARTMENT/assets/111065848/e33d1c5c-5912-4de8-90bc-8acfd9bbdfe6' width='300px'/>

* 질문화면
  
  <img src='https://github.com/suehub/MBTI_DEPARTMENT/assets/111065848/894d0052-ea96-4eac-9b3c-10a56d96672e' width='300px'/>

* 결과화면

  <img src='https://github.com/suehub/MBTI_DEPARTMENT/assets/111065848/3cd4b111-fb20-4253-b971-6fe79b6a5d67' width='300px'/>



<br>

## 📌 회고
* MBTI 각 알파벳 수만큼 배열을 생성하여 해당되는 알파벳 자리의 값을 증가시키는 매커니즘으로 구현했는데, <br> MBTI 4자리 만큼만 배열을 생성하고 예를들어 E/I에 따라 해당 값을 +1, -1 혹은 ture, false를 주는 것이 훨씬 간단했을 것 같다.

<br>

***
# ⛏ 1차 리팩토링 2023년 8월 1일 ~ 2023년 8월 3일

1. 질문지가 바뀔 때 마다 이전 선택지 버튼을 display: none으로만 관리했는데 remove()로 제거
2. data.js를 index.html 내에 전역으로 선언하지 않고 필요한 data를 import하여 사용
3. 재시작 버튼 생성하여 클릭 시 reload 됨
4. 이미지 로딩이 느려지는 이슈 -> 아래의 방법들로 로딩 속도가 개선되었지만 여전히 오래 걸림
    1. 이미지 최적화
    2. img 상단의 div와 img 모두 사이즈 지정
    3. loading = lazy 속성 추가

5. 재할당하지 않는 변수는 let말고 const로 선언
6. MBTI 별 설명 추가
7. 질문지와 선택지 가독성 향상

## 📌 회고
* 이미지 로딩이 느려지는 이유가 단순 이미지 문제가 맞는지 더 고민해볼 필요가 있는 것 같다.
* 공유하기 기능을 추가하면 더 좋을 것 같다.
* 매주 질문지가 바뀐다면 코드의 가독성을 높일 필요가 있어보인다.
