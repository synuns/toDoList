import React from 'react';
import styled from 'styled-components';
import Button from '../common/Button';
import Input from '../common/Input';

const FormBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: baseline;
  margin-bottom: 20px;
  border-radius: 8px;
  box-shadow: 0px 1px 4px 2px rgba(0, 0, 0, 0.12);

  Button {
    margin-right: 20px;
  }
`;

const InputBox = styled.div`
  width: 80%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  margin-left: 20px;
`;

function InputForm({ title, content, onChange, onCreate }) {
  return (
    <FormBox>
      <InputBox>
        <Input name="제목" id="title" onChange={onChange} value={title} />
        <Input name="내용" id="content" onChange={onChange} value={content} />
      </InputBox>
      <Button onClick={() => onCreate()}>추가하기</Button>
    </FormBox>
  );
}

export default InputForm;
