import React from 'react';
import styled from 'styled-components';

const StyledEmpty = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 30px 0;

  img {
    width: 142px;
    margin: 20px 0;
  }

  .text {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 30px;
  }
`;

const Empty = ({ img, children }) => {
  return (
    <StyledEmpty>
      <img src={img} alt="No Data" />
      <span className="text">{children}</span>
    </StyledEmpty>
  );
};

export default Empty;
