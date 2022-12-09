# toDoList

<p align="center">
<img width="300px" src="https://user-images.githubusercontent.com/57736547/204820134-09afbac4-58b7-430f-8d2c-965b2dd333e7.gif" alt="todolist">
</p>

[▶프로젝트 보러가기](https://to-do-list-with-vite.vercel.app/)

## 🔨기술 스택

<img src="https://img.shields.io/badge/vite-646CFF?style=for-the-badge&logo=vite&logoColor=white"><img src="https://img.shields.io/badge/react-61dafb?style=for-the-badge&logo=react&logoColor=white"><img src="https://img.shields.io/badge/redux-764ABC?style=for-the-badge&logo=redux&logoColor=white"><img src="https://img.shields.io/badge/styledcomponents-db7093?style=for-the-badge&logo=styledcomponents&logoColor=white"><img src="https://img.shields.io/badge/vercel-000000?style=for-the-badge&logo=vercel&logoColor=white">

## 📆개발 기간

`v1.0.0` : 2022.11.29 ~ 2022.11.30

`v1.1.0` : 2022.12.6 ~ 2022.12.8

## 🕹주요 기능

- 할 일 추가
- 할 일 삭제
- 할 일 완료
- localStorage 저장
- 최소한의 반응형 구현

## 🖼컴포넌트 구성

```
📦src
 ┣ 📂components
 ┃ ┣ 📂common
 ┃ ┃ ┣ 📜Button.jsx
 ┃ ┃ ┣ 📜Container.jsx
 ┃ ┃ ┣ 📜IconButton.jsx
 ┃ ┃ ┣ 📜Input.jsx
 ┃ ┃ ┣ 📜Layout.jsx
 ┃ ┃ ┣ 📜Subtitle.jsx
 ┃ ┃ ┗ 📜Tooltip.jsx
 ┃ ┣ 📜Empty.jsx
 ┃ ┣ 📜InputForm.jsx
 ┃ ┣ 📜ToDoBox.jsx
 ┃ ┣ 📜ToDoCard.jsx
 ┃ ┗ 📜TopBar.jsx
 ┣ 📂pages
 ┃ ┣ 📜Details.jsx
 ┃ ┗ 📜Home.jsx
 ┣ 📂redux
 ┃ ┣ 📂config
 ┃ ┃ ┗ 📜configStore.js
 ┃ ┗ 📂modules
 ┃ ┃ ┗ 📜toDoList.js
 ┣ 📂shared
 ┃ ┗ 📜Router.jsx
 ┣ 📂styles
 ┃ ┗ 📜GlobalStyle.js
 ┣ 📂utils
 ┃ ┗ 📜date.js
 ┣ 📜App.jsx
 ┗ 📜main.jsx
```
