import React, { useEffect, useState } from 'react';
import TopBar from './components/TopBar';
import Layout from './common/Layout';
import Container from './common/Container';
import InputForm from './components/InputForm';
import ToDoList from './components/ToDoList';
import { getDate } from './utils/date';

const TODOS_KEY = 'todos';

const mockToDo = [
  {
    id: 0,
    title: '투두리스트 개발하기',
    content: '리액트 기초를 다지기',
    isDone: false,
  },
  {
    id: 1,
    title: '투두리스트 과제 제출',
    content: '개발완료 후 배포하기',
    isDone: false,
  },
  {
    id: 2,
    title: 'TIL 쓰기',
    content: '개발블로그에 글 올리기',
    isDone: false,
  },
  {
    id: 3,
    title: '팀 과제 작성하기',
    content: '리액트 팀 과제 질문 작성',
    isDone: false,
  },
  {
    id: 4,
    title: 'Virtual DOM 세션 듣기',
    content: '듣기 싫다...',
    isDone: true,
  },
];

function App() {
  const [inputs, setInputs] = useState({
    title: '',
    content: '',
  });

  const { title, content } = inputs;

  const [todos, setTodos] = useState([]);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setInputs({
      ...inputs,
      [id]: value,
    });
  };

  const handleCreate = () => {
    const todo = {
      id: getDate(),
      title,
      content,
      isDone: false,
    };

    const createdTodos = [...todos, todo];
    saveTodos(createdTodos);

    setInputs({
      title: '',
      content: '',
    });
  };

  const handleRemove = (id) => {
    const removedTodos = todos?.filter((todo) => todo.id !== id);
    saveTodos(removedTodos);
  };

  const handleToggle = (id) => {
    const toggledTodos = todos?.map((todo) =>
      todo.id === id ? { ...todo, isDone: !todo.isDone } : todo,
    );
    saveTodos(toggledTodos);
  };

  const saveTodos = (todos) => {
    localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
    setTodos(todos);
  };

  const loadTodos = () => {
    const savedTodos = localStorage.getItem(TODOS_KEY);

    if (savedTodos) {
      const parsedTodos = JSON.parse(savedTodos);
      setTodos(parsedTodos);
    }
  };

  useEffect(() => {
    loadTodos();
  }, []);

  return (
    <Layout>
      <Container>
        <TopBar />
        <InputForm
          title={title}
          content={content}
          onChange={handleChange}
          onCreate={handleCreate}
        />
        <ToDoList
          data={todos}
          onRemove={handleRemove}
          onToggle={handleToggle}
        />
      </Container>
    </Layout>
  );
}

export default App;
