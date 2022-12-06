import React from 'react';
import styled from 'styled-components';
import Empty from './Empty';
import ToDoCard from './ToDoCard';
import Subtitle from '../common/Subtitle';
import { useDispatch, useSelector } from 'react-redux';
import { toggleToDo, deleteToDo } from '../redux/modules/toDoList';

const StyledToDoBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
`;

const CardList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, max-content));
  grid-gap: 16px;
  justify-content: center;
  margin: 30px 0;
`;

const ToDoBox = () => {
  const dispatch = useDispatch();
  const toDos = useSelector((state) => state.toDoList);
  const finished = toDos.filter((data) => data.isDone);
  const notFinished = toDos.filter((data) => !data.isDone);

  const handleToggle = (id) => {
    dispatch(toggleToDo(id));
  };

  const handleDelete = (id) => {
    dispatch(deleteToDo(id));
  };

  return (
    <StyledToDoBox>
      <Subtitle>🔥Working🔥</Subtitle>
      {notFinished.length !== 0 ? (
        <CardList>
          {notFinished.map((toDo) => (
            <ToDoCard
              data={toDo}
              key={toDo.id}
              onToggle={handleToggle}
              onDelete={handleDelete}
            />
          ))}
        </CardList>
      ) : (
        <Empty>할 일을 작성해보세요!</Empty>
      )}
      <Subtitle>😎Done😎</Subtitle>
      {finished.length !== 0 ? (
        <CardList>
          {finished.map((toDo) => (
            <ToDoCard
              data={toDo}
              key={toDo.id}
              onToggle={handleToggle}
              onDelete={handleDelete}
            />
          ))}
        </CardList>
      ) : (
        <Empty>완료한 일이 없어요</Empty>
      )}
    </StyledToDoBox>
  );
};

export default ToDoBox;
