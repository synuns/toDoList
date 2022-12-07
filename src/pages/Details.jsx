import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { toggleToDo, deleteToDo } from '../redux/modules/toDoList';
import styled from 'styled-components';
import IconButton from '../common/IconButton';
import Tooltip from '../common/Tooltip';
import CheckIcon from '../assets/check.png';
import DeleteIcon from '../assets/delete.png';
import ArrowIcon from '../assets/arrow.png';
import RestoreIcon from '../assets/restore.png';
import InfoIcon from '../assets/info.png';

const DetailBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 500px;
  min-width: 300px;
  height: 300px;
  padding: 20px;
  border-radius: 8px;
  border: 3px solid #2196f3;
  box-shadow: 0px 1px 4px 2px rgba(0, 0, 0, 0.12);
`;

const Top = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
  .top-right {
    display: flex;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  .title {
    font-size: 28px;
    font-weight: bold;
    margin-bottom: 12px;
  }
  .content {
    font-size: 18px;
    line-height: 120%;
  }
`;

const Bottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  .createdBy {
    font-size: 14px;
    color: #868e96;
  }
`;

const ButtonArea = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Details = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const param = useParams();
  const toDos = useSelector((state) => state.toDoList);
  const toDo = toDos.find((toDo) => toDo.id === param.id);

  const handleGoBack = () => {
    navigate(-1);
  };

  const handleToggle = (id) => {
    dispatch(toggleToDo(id));
  };

  const handleDelete = (id) => {
    dispatch(deleteToDo(id));
    navigate(-1);
  };

  useEffect(() => {
    if (!param.id || !toDo) {
      navigate('/');
    }
  }, []);

  return (
    <>
      {toDo && (
        <DetailBox>
          <Top>
            <div className="top-left">
              <Tooltip message="뒤로가기">
                <IconButton
                  onClick={handleGoBack}
                  src={ArrowIcon}
                  name="arrow"
                />
              </Tooltip>
            </div>
            <div className="top-right">
              <Tooltip message={`ID : ${toDo.id}`}>
                <IconButton src={InfoIcon} name="info" />
              </Tooltip>
            </div>
          </Top>
          <Content>
            <h1 className="title">{toDo.title}</h1>
            <span className="content">{toDo.content}</span>
          </Content>
          <Bottom>
            <span className="createdBy">{toDo.createdBy}</span>
            <ButtonArea>
              {toDo.isDone ? (
                <Tooltip message="완료">
                  <IconButton
                    onClick={() => handleToggle(toDo.id)}
                    src={CheckIcon}
                    name="check"
                  />
                </Tooltip>
              ) : (
                <Tooltip message="취소">
                  <IconButton
                    onClick={() => handleToggle(toDo.id)}
                    src={RestoreIcon}
                    name="restore"
                  />
                </Tooltip>
              )}
              <Tooltip message="삭제">
                <IconButton
                  onClick={() => handleDelete(toDo.id)}
                  src={DeleteIcon}
                  name="delete"
                />
              </Tooltip>
            </ButtonArea>
          </Bottom>
        </DetailBox>
      )}
    </>
  );
};

export default Details;
