import React from 'react';
import Container from '../components/common/Container';
import TopBar from '../components/TopBar';
import InputForm from '../components/InputForm';
import ToDoBox from '../components/ToDoBox';

const Home = () => {
  return (
    <Container>
      <TopBar />
      <InputForm />
      <ToDoBox />
    </Container>
  );
};

export default Home;
