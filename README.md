# Shopping Mall

<img src='https://user-images.githubusercontent.com/87301268/233288610-98c113f0-f23b-46ac-b75f-d32138dbe315.png' width=100%>

<br>

## ⏰ 개발 기간

초기 목표 달성 : 2023.04.04 ~ 2023.04.18

-   틈틈히 공부하면서 디벨롭 예정

<br>

## 🛠️ 사용 기술

<div>
<img src="https://img.shields.io/badge/vite-646CFF?style=for-the-badge&logo=vite&logoColor=black">
<img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black">
<img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black">
<img src="https://img.shields.io/badge/reactrouter-CA4245?style=for-the-badge&logo=reactrouter&logoColor=black">
</div>

<div>
<img src="https://img.shields.io/badge/reactquery-FF4154?style=for-the-badge&logo=reactquery&logoColor=black">
<img src="https://img.shields.io/badge/firebase-FFCA28?style=for-the-badge&logo=firebase&logoColor=black">
<img src="https://img.shields.io/badge/tailwindcss-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=black">
</div>

<br>

## 실행 방법

#### ⚠️ .env에 들어있는 개인 key 로 인하여 설정이 필요함으로 실행이 안될거라고 생각합니다... 🥺

<br>

1. Clone the reop

```
https://github.com/Choi-HyunHo/shopping_mall.git
```

<br>

2. Install YARN packages

```
yarn install
```

<br>

3. Start

```
yarn dev
```

<br>

## 📒 디렉토리 구조

```
.
├── README.md
├── index.html
├── package-lock.json
├── package.json
├── postcss.config.js
├── public                        # 공통 리소스
├── src
│   ├── App.jsx
│   ├── api
│   │   ├── fbase.js              # firebase API 로직
│   │   └── uploader.js           # Cloudinary 이미지 업로드 로직
│   ├── components                # UI 구성 및 기능 컴포넌트
│   │   ├── Banner.jsx
│   │   ├── Button.jsx
│   │   ├── CartItem.jsx
│   │   ├── CartStatus.jsx
│   │   ├── Navbar.jsx
│   │   ├── PriceCard.jsx
│   │   ├── ProductCard.jsx
│   │   ├── Products.jsx
│   │   └── User.jsx
│   ├── context                   # 전역 상태 관리
│   │   └── AuthContext.jsx
│   ├── index.css                 # 전역 CSS
│   ├── main.jsx                  # 최상위 컴포넌트
│   └── pages                     # 화면에 나타나는 페이지 및 Routing Path
│       ├── AllProducts.jsx
│       ├── Home.jsx
│       ├── MyCart.jsx
│       ├── NewProduct.jsx
│       ├── ProductDetail.jsx
│       └── ProtectRouter.jsx
├── tailwind.config.js            # tailwind css 설정 파일
├── vite.config.js
└── yarn.lock
```

<br>

## Roadmap

-   [x] 초기 목표 달성 - 2023.04.18
-   [ ] 2023.04.19 배포
-   [ ] UI 스타일
    -   [ ] 제품 등록 시 업로드 메시지
-   [ ] 기능 추가
    -   [ ] 카테고리 별로 상품 필터링 기능
    -   [ ] 장바구니에 제품이 없을 때 가격 표시되는 예외처리
    -   [ ] 예정

<br>

## 기능

### Vite

<br>

### React-Query

<br>

### firebase

파이어베이스(Firebase)는 구글에서 개발하고 운영하는 백엔드 서비스 플랫폼입니다.
앱 개발자들이 모바일 및 웹 애플리케이션을 빠르고 쉽게 개발할 수 있도록 도와줍니다.
데이터베이스, 인증, 클라우드 저장소, 애널리틱스, 성능 모니터링, 서버리스 기능, 실시간 데이터베이스 등 다양한 기능을 제공합니다.

-   구글 로그인 기능 구현
-   실시간 데이터베이스 사용
    -   get, post 방식 처럼 API 사용 가능

<br>

### cloudinary

<br>

## Reference
