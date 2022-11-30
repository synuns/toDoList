import React from 'react';
import styled from 'styled-components';
import Empty from './Empty';
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
      <h1 className="subtitle">🔥Working🔥</h1>
      <CardList>
        {toDos &&
          toDos.map((toDo) => (
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
        {dones &&
          dones.map((done) => (
            <ToDoCard
              data={done}
              key={done.id}
              onRemove={onRemove}
              onToggle={onToggle}
            />
          ))}
      </CardList>
      <Empty>할 일을 작성해보세요!</Empty>
    </ToDoBox>
  );
};

export default ToDoList;
