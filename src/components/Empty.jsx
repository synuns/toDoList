import React from 'react';
import styled from 'styled-components';
import EmptyIcon from '../assets/empty-box.png';

const StyledEmpty = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 30px 0;
  border-radius: 8px;
  box-shadow: 0px 1px 4px 2px rgba(0, 0, 0, 0.12);

  img {
    width: 140px;
    margin: 20px 0;
  }

  .text {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 30px;
  }
`;

const Empty = ({ children }) => {
  return (
    <StyledEmpty>
      <img src={EmptyIcon} alt="No Data" />
      <span className="text">{children}</span>
    </StyledEmpty>
  );
};

export default Empty;
