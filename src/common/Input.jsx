import React, { useState } from 'react';
import styled from 'styled-components';

const StyledInput = styled.div`
  width: 100%;
  max-width: 400px;
  padding-top: 35px;
  margin: 0 20px 20px 20px;
  position: relative;

  input {
    width: 100%;
    height: 25px;
    border: none;
    border-bottom: 2px solid #c4c4c4;
  }

  input:focus,
  input.has-content + label {
    outline: none;
    border-bottom-color: #3399ff;
  }

  label {
    color: #b4b4b4;
    position: absolute;
    top: 57%;
    left: 0;
    transition: 0.2s ease-out;
    cursor: text;
  }

  input:focus + label,
  input.has-content + label {
    color: #3399ff;
    top: 33%;
    transition: 0.2s ease-out;
    font-size: 12px;
  }
`;

function Input({ name, id, onChange, value }) {
  const [hasContent, setHasContent] = useState(false);

  const handleFloat = (event) => {
    if (event.target.value !== '') {
      setHasContent(true);
    } else {
      setHasContent(false);
    }
  };

  return (
    <StyledInput>
      <input
        id={id}
        type="text"
        placeholder=""
        onBlur={handleFloat}
        className={hasContent ? 'has-content' : ''}
        onChange={onChange}
        value={value}
      />
      <label htmlFor={id} className="label">
        {name}
      </label>
    </StyledInput>
  );
}

export default Input;
