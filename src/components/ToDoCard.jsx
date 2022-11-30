import React from 'react';
import styled from 'styled-components';
import Button from '../common/Button';

const StyledCard = styled.div`
  border-radius: 8px;
  box-shadow: 0px 1px 4px 2px rgba(0, 0, 0, 0.12);
  .title {
    font-size: 24px;
    margin: 30px 20px 0 20px;
  }
  .content {
    font-size: 18px;
    margin: 30px 20px 20px 20px;
  }
`;

const Actions = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
  Button {
    width: 100px;
    margin: 10px;
  }
`;

function ToDoCard({ data, onRemove, onToggle }) {
  return (
    <StyledCard id={data.id}>
      <h1 className="title">{data.title}</h1>
      <h3 className="content">{data.content}</h3>
      <Actions>
        <Button color="#d32f2f" onClick={() => onRemove(data.id)}>
          삭제
        </Button>
        {data.isDone ? (
          <Button color="#ed6c02" onClick={() => onToggle(data.id)}>
            취소
          </Button>
        ) : (
          <Button color="#2e7d32" onClick={() => onToggle(data.id)}>
            완료
          </Button>
        )}
      </Actions>
    </StyledCard>
  );
}

export default ToDoCard;
