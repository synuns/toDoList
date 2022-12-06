import React, { useEffect, useState } from 'react';
import TopBar from './components/TopBar';
import Layout from './common/Layout';
import Container from './common/Container';
import InputForm from './components/InputForm';
import ToDoList from './components/ToDoList';
import { getDate } from './utils/date';
import { useDispatch, useSelector } from 'react-redux';

const TODOS_KEY = 'todos';

function App() {
  const [inputs, setInputs] = useState({
    title: '',
    content: '',
  });

  const { title, content } = inputs;

  const dispatch = useDispatch();
  const toDos = useSelector((state) => state.toDoList.toDos);
  console.log(toDos);

  const [todos, setTodos] = useState([]);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setInputs({
      ...inputs,
      [id]: value,
    });
  };

  const handleCreate = () => {
    if (title && content) {
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
    } else {
      alert('할 일을 정확히 입력해주세요!');
    }
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
