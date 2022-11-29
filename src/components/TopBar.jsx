import React from 'react';
import styled from 'styled-components';
import ViteIcon from '../assets/vite.svg';
import ReactIcon from '../assets/react.svg';

const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 50px;
  margin: 4px 0 20px 0;
  border-radius: 8px;
  box-shadow: 0px 1px 4px 2px rgba(0, 0, 0, 0.12);
  .title {
    padding: 10px;
    font-size: 20px;
    font-weight: 300px;
    margin: 0 10px;
  }
`;

const StackBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  margin: 0 10px;
  .icon {
    -webkit-transition: 0.6s ease-out;
    -moz-transition: 0.6s ease-out;
    transition: 0.6s ease-out;
  }
  .icon:hover {
    -webkit-transform: rotateZ(720deg);
    -moz-transform: rotateZ(720deg);
    transform: rotateZ(720deg);
  }
`;

function TopBar() {
  return (
    <StyledHeader>
      <h1 className="title">To Do List</h1>
      <StackBox>
        <img className="icon" src={ViteIcon} alt="vite" />
        <img className="icon" src={ReactIcon} alt="react" />
      </StackBox>
    </StyledHeader>
  );
}

export default TopBar;
