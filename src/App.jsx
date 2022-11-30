import React, { useEffect, useState } from 'react';
import TopBar from './components/TopBar';
import Layout from './common/Layout';
import Container from './common/Container';
import InputForm from './components/InputForm';
import ToDoList from './components/ToDoList';
import { getDate } from './utils/date';

const TODOS_KEY = 'todos';

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
