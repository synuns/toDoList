import React from 'react';
import styled from 'styled-components';

const StyledIconBtn = styled.button`
  background: inherit;
  border: none;
  box-shadow: none;
  border-radius: 0;
  padding: 0;
  overflow: visible;
  cursor: pointer;
`;

const IconButton = ({ src, onClick, name, width = '30px' }) => {
  const handleClick = (event) => {
    event.preventDefault();
    onClick();
  };
  return (
    <StyledIconBtn onClick={handleClick}>
      <img src={src} alt={name} width={width} />
    </StyledIconBtn>
  );
};

export default IconButton;
