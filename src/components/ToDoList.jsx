import React from 'react';
import styled from 'styled-components';
import ToDoCard from './ToDoCard';

const ToDoBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  .subtitle {
    font-size: 24px;
  }
`;

const CardList = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: row;
  flex-wrap: wrap;
  margin-bottom: 20px;
`;

const ToDoList = ({ data, onRemove, onToggle }) => {
  const toDos = data.filter((data) => !data.isDone);
  const dones = data.filter((data) => data.isDone);

  return (
    <ToDoBox>
      <h1 className="subtitle">🔥Working🔥</h1>
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
      <h1 className="subtitle">😎Done😎</h1>
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
    </ToDoBox>
  );
};

export default ToDoList;
