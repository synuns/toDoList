import React from 'react';
import Layout from '../common/Layout';
import Container from '../common/Container';
import TopBar from '../components/TopBar';
import InputForm from '../components/InputForm';
import ToDoBox from '../components/ToDoBox';

const ToDoList = () => {
  return (
    <Container>
      <TopBar />
      <InputForm />
      <ToDoBox />
    </Container>
  );
};

export default ToDoList;
