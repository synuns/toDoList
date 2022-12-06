import React from 'react';
import TopBar from './components/TopBar';
import Layout from './common/Layout';
import Container from './common/Container';
import InputForm from './components/InputForm';
import ToDoList from './components/ToDoList';

// const TODOS_KEY = 'todos';

function App() {
  // const [todos, setTodos] = useState([]);

  // const handleRemove = (id) => {
  //   const removedTodos = todos?.filter((todo) => todo.id !== id);
  //   saveTodos(removedTodos);
  // };

  // const handleToggle = (id) => {
  //   const toggledTodos = todos?.map((todo) =>
  //     todo.id === id ? { ...todo, isDone: !todo.isDone } : todo,
  //   );
  //   saveTodos(toggledTodos);
  // };

  // const saveTodos = (todos) => {
  //   localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
  //   setTodos(todos);
  // };

  // const loadTodos = () => {
  //   const savedTodos = localStorage.getItem(TODOS_KEY);

  //   if (savedTodos) {
  //     const parsedTodos = JSON.parse(savedTodos);
  //     setTodos(parsedTodos);
  //   }
  // };

  // useEffect(() => {
  //   loadTodos();
  // }, []);

  return (
    <Layout>
      <Container>
        <TopBar />
        <InputForm />
        <ToDoList />
      </Container>
    </Layout>
  );
}

export default App;
