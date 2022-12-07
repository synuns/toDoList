import React from 'react';
import { useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../common/Button';
import Subtitle from '../common/Subtitle';

const DetailBox = styled.div`
  width: 500px;
  min-height: 200px;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0px 1px 4px 2px rgba(0, 0, 0, 0.12);
`;

const Details = () => {
  const param = useParams();
  const navigate = useNavigate();
  const toDos = useSelector((state) => state.toDoList);
  const toDo = toDos.find((toDo) => toDo.id === param.id);

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <DetailBox>
      <div className="top">
        <span>ID : {toDo.id}</span>
        <Button onClick={handleGoBack}>뒤로 가기</Button>
      </div>
      <Subtitle>{toDo.title}</Subtitle>
      <div>{toDo.content}</div>
      <div>{toDo.isDone ? '완료' : '미완료'}</div>
    </DetailBox>
  );
};

export default Details;
