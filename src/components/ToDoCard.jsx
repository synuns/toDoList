import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../common/Button';
import { elapsedTime } from '../utils/date';

const StyledCard = styled(Link)`
  position: relative;
  border-radius: 8px;
  box-shadow: 0px 1px 4px 2px rgba(0, 0, 0, 0.12);
  transition: 0.1s ease-out;
  .title {
    font-size: 24px;
    margin: 30px 20px 0 20px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .content {
    font-size: 18px;
    margin: 30px 20px 20px 20px;
    overflow-wrap: break-word;
  }
  .date {
    position: absolute;
    top: 10px;
    right: 10px;
    font-size: 14px;
    color: #868e96;
  }
  &:hover {
    scale: 1.03;
  }
`;

const ButtonBox = styled.div`
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

function ToDoCard({ data, onToggle, onDelete }) {
  return (
    <StyledCard id={data.id} to={`details/${data.id}`}>
      <h1 className="title">{data.title}</h1>
      <h3 className="content">{data.content}</h3>
      <span className="date">{elapsedTime(data.createdBy)}</span>
      <ButtonBox>
        <Button color="#d32f2f" onClick={() => onDelete(data.id)}>
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
      </ButtonBox>
    </StyledCard>
  );
}

export default ToDoCard;
