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

## 주요 기능

|                                                            메인 화면                                                             |                                                                로그인                                                                |
| :------------------------------------------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------------------------------------------: |
| ![ezgif com-video-to-gif](https://user-images.githubusercontent.com/87301268/236247713-e0cfed57-30bc-46b1-97d4-37f62c6d0449.gif) | ![ezgif com-video-to-gif (1)](https://user-images.githubusercontent.com/87301268/236250045-9ae1da40-0075-43b9-baac-b858c7e32eaf.gif) |
|                                                                                                                                  |
|                                                                                                                                  |

|                                                           전체 제품 리스트                                                           |                                                       어드민 제품 등록 페이지                                                        |
| :----------------------------------------------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------------------------------------------: |
| ![ezgif com-video-to-gif (6)](https://user-images.githubusercontent.com/87301268/236257626-5afee3c8-cb28-4478-9cab-33fd6c37a705.gif) | ![ezgif com-video-to-gif (4)](https://user-images.githubusercontent.com/87301268/236253441-5c3c8bde-eead-4cfc-8693-9d12605d65c2.gif) |
|                                                                                                                                      |
|                                                                                                                                      |

|                                                               장바구니                                                               |                                                           제품 상세 페이지                                                           |
| :----------------------------------------------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------------------------------------------: |
| ![ezgif com-video-to-gif (5)](https://user-images.githubusercontent.com/87301268/236255319-e3ae7d9b-a82d-41e6-bd3b-1e580c17e311.gif) | ![ezgif com-video-to-gif (2)](https://user-images.githubusercontent.com/87301268/236251502-d1711b11-947c-4944-96cb-df727f400b7a.gif) |
|                                                                                                                                      |
|                                                                                                                                      |

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

관련 포스팅 작성

-   [React 프로젝트 구성을 CRA 대신 Vite ❓](https://choi-hyunho.com/react/react-vite/)

<br>

### React-Query

관련 포스팅 작성

-   [React-Query ❓](https://choi-hyunho.com/react/react-query-1/)
-   [React-Query - useQuery()](https://choi-hyunho.com/react/react-query-2/)
-   [React-Query - 로딩 및 오류 상태](https://choi-hyunho.com/react/react-query-3/)
-   [React-Query - Dev Tools](https://choi-hyunho.com/react/react-query-tool/)
-   [React-Query - stale 그리고 라이프 사이클](https://choi-hyunho.com/react/react-query-4/)
-   [React-Query - Query Key](https://choi-hyunho.com/react/react-query-5/)
-   [React-Query - Pagination](https://choi-hyunho.com/react/react-query-6/)
-   [React-Query - 데이터 프리패칭(Prefetching)](https://choi-hyunho.com/react/react-query-7/)

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

클라우디너리 서비스(Cloudinary service)는 클라우드 기반의 미디어 관리 플랫폼입니다.
이미지, 비디오, 오디오 및 기타 미디어 유형을 처리하고, 저장하고, 최적화하고, 전송하는 데 사용됩니다.
또한 CDN(Content Delivery Network)과 연계하여 전 세계적으로 빠르고 안정적인 미디어 전송을 제공합니다.

-   서버에 이미지를 저장하지 않고 storage에 따로 이미지 파일을 저장하고자 함

<br>

## Reference

-   [firebase](https://firebase.google.com/?hl=ko)
-   [cloudinary](https://cloudinary.com/)
