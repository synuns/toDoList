import React from 'react';
import styled from 'styled-components';
import Button from '../common/Button';

const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 270px;
  width: 100%;
  height: 200px;
  margin: 30px 15px 0 15px;
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
  Button {
    width: 100px;
    margin: 10px;
  }
`;

function ToDoCard({ data }) {
  return (
    <StyledCard id={data.id}>
      <h1 className="title">{data.title}</h1>
      <h3 className="content">{data.content}</h3>
      <Actions>
        <Button>삭제</Button>
        <Button>완료</Button>
      </Actions>
    </StyledCard>
  );
}

export default ToDoCard;
