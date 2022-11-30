import React from 'react';
import styled from 'styled-components';
import Empty from './Empty';
import ToDoCard from './ToDoCard';
import Subtitle from '../common/Subtitle';

const ToDoBox = styled.div`
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

const ToDoList = ({ data, onRemove, onToggle }) => {
  const toDos = data.filter((data) => !data.isDone);
  const dones = data.filter((data) => data.isDone);

  return (
    <ToDoBox>
      <Subtitle>🔥Working🔥</Subtitle>
      {toDos.length !== 0 ? (
        <CardList>
          {toDos.map((toDo) => (
            <ToDoCard
              data={toDo}
              key={toDo.id}
              onRemove={onRemove}
              onToggle={onToggle}
            />
          ))}
        </CardList>
      ) : (
        <Empty>할 일을 작성해보세요!</Empty>
      )}
      <Subtitle>😎Done😎</Subtitle>
      {dones.length !== 0 ? (
        <CardList>
          {dones.map((done) => (
            <ToDoCard
              data={done}
              key={done.id}
              onRemove={onRemove}
              onToggle={onToggle}
            />
          ))}
        </CardList>
      ) : (
        <Empty>완료한 일이 없어요</Empty>
      )}
    </ToDoBox>
  );
};

export default ToDoList;
