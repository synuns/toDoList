# toDoList

<p align="center">
<img width="300px" src="https://user-images.githubusercontent.com/57736547/204820134-09afbac4-58b7-430f-8d2c-965b2dd333e7.gif" alt="todolist">
</p>

[▶프로젝트 보러가기](https://to-do-list-with-vite.vercel.app/)

## 🔨기술 스택

<img src="https://img.shields.io/badge/vite-646CFF?style=for-the-badge&logo=vite&logoColor=white">
<img src="https://img.shields.io/badge/react-61dafb?style=for-the-badge&logo=react&logoColor=white">
<img src="https://img.shields.io/badge/styledcomponents-db7093?style=for-the-badge&logo=styledcomponents&logoColor=white">
<img src="https://img.shields.io/badge/vercel-000000?style=for-the-badge&logo=vercel&logoColor=white">

## 📆개발 기간

2022.11.29 ~ 2022.11.30

## 🕹주요 기능

- 할 일 추가
- 할 일 삭제
- 할 일 완료
- localStorage 저장
- 최소한의 반응형 구현

## 🖼컴포넌트 구성

```
├── src
│   ├── common
│   │   ├── Button.jsx
│   │   ├── Container.jsx
│   │   ├── Input.jsx
│   │   ├── Layout.jsx
│   │   └── Subtitle.jsx
│   ├── components
│   │   ├── Empty.jsx
│   │   ├── InputForm.jsx
│   │   ├── ToDoCard.jsx
│   │   ├── ToDoList.jsx
│   │   └── TopBar.jsx
```

### 📁common

- **Button** : 버튼 컴포넌트, props로 color 변경 가능
- **Container** : layout 내부 컴포넌트들을 정렬하는 부모 컴포넌트
- **Input** : text input 컴포넌트, 내부 label에 이벤트 적용
- **Layout** : 전체 화면 layout
- **Subtitle** : 할 일의 상태를 보여주는 title 컴포넌트
### 📁components

- **Empty** : 할일이 비어있으면 대신 보여주는 컴포넌트
- **InputForm** : 할 일 입력에 필요한 컴포넌트들을 가지고 있음.
- **ToDoCard** : 할 일을 보여주는 card 컴포넌트
- **ToDoList** : ToDoCard 컴포넌트를 정렬하는 grid layout 컴포넌트
- **TopBar** : 최상단의 제목을 보여주는 컴포넌트. 오른쪽에 아이콘이 귀엽다. 
