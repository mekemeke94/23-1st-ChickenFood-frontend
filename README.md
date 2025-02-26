## 23기 프로젝트 Front-end/Back-end 소개
---
📢오리지널 푸드 코스메틱 브랜드 치킨푸드 프로젝트<br>
기존 스킨푸드 코스메틱 브랜드에서 치킨을 브랜드에 맞게 선택할 수 있도록 기획했습니다.
개발은 초기 세팅부터 전부 직접 구현했으며, 아래 데모 영상에서 보이는 부분은
모두 백앤드와 연결하여 실제 사용할 수 있는 서비스 수준으로 개발한 것입니다.

## 프로젝트 계획 및 기간
---
- 개발기간📆 : 2021/8/2 ~ 2021/8/13
- 1st Sprint : 개발환경 초기세팅, 전체 레이아웃, 컴포넌트화
- 2nd Sprint : 컴포넌트 별 기능 구현, 프론트-백 통신, 코드 리팩토링, conflict 수정 작업

## 페이지별 기능 DEMO
---
### [메인 배너 슬라이드]
![](https://i.ibb.co/VYVVd6N/banner.gif)
### [메인 상품 필터]
![](https://i.ibb.co/zxs3VJy/image.gif)
### [장바구니 기능 구현]
![](https://i.ibb.co/bv9BGq9/image.gif)

## 적용 기술 및 구현 기능
---
### 적용 기술
- Front-End : HTML5, Scss, JavaScript, React, React Router
- Back-End : Python, Django, MySql, bcrypt, pyJWT, POSTMAN, linux
### 사용한 툴
- Common: Slack, Trello, Github, Git

### 구현 기능

####   공통
- 일반 회원가입 / 로그인
- 메인페이지
- 추천 상품, 오늘의 상품, 베스트 상품 모두 각각 api 호출하여 구현
  
#### <span style='color:red'>메인페이지(박태환)</span>
- react-router를 사용한 동적 라우팅
- 클릭 이벤트 발생 시 각 버튼에 해당하는 필터된 데이터의 API 주소를 변경해 리랜더링해주는 필터 구현
- fecth를 이용해 백엔드와 통신하여 메인 페이지 데이터 렌더링
- 메인 페이지의 배너, 제품 목록  Carousel 구현

#### <span style='color:red'>장바구니 (박태환)</span>
- 장바구니 페이지 UI 구현
- 제품별 삭제 기능 구현
- 개별 상품 수량 증감 버튼 기능 구현
- 제품 장바구니 삭제, 수량 증감에 따라 총 결제 금액 변동 구현
- 제품의 장바구니가 비어있을 경우 다른 UI가 나오도록 구현

### 팀원
--- 
- 프론트엔드: 김로운, 남재현, 박태환, 심택준
- 백엔드: 박종규, 손호민
### Reference
---
- 이 프로젝트는 스킨푸드 사이트를 참조하여 학습목적으로 만들었습니다.
- 실무수준의 프로젝트이지만 학습용으로 만들었기 때문에 이 코드를 활용하여 이득을 취하거나 무단 배포할 경우 법적으로 문제될 수 있습니다.
- 이 프로젝트에서 사용하고 있는 사진 대부분은 위코드에서 구매한 것이므로 해당 프로젝트 외부인이 사용할 수 없습니다.
