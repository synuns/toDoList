import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import Button from '../common/Button';
import Input from '../common/Input';
import { createToDo } from '../redux/modules/toDoList';
import { nanoid } from 'nanoid';

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
  width: 70%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  margin-left: 20px;
`;

function InputForm() {
  const dispatch = useDispatch();
  const [inputs, setInputs] = useState({
    title: '',
    content: '',
  });

  const { title, content } = inputs;

  const handleChange = (e) => {
    const { id, value } = e.target;
    setInputs({
      ...inputs,
      [id]: value,
    });
  };

  const handleCreate = () => {
    console.log(new Intl.DateTimeFormat('kr-ko').format(new Date()));
    if (title && content) {
      const toDo = {
        id: nanoid(),
        title,
        content,
        isDone: false,
      };

      dispatch(createToDo(toDo));

      setInputs({
        title: '',
        content: '',
      });
    } else {
      alert('할 일을 정확히 입력해주세요!');
    }
  };

  return (
    <FormBox>
      <InputBox>
        <Input name="제목" id="title" onChange={handleChange} value={title} />
        <Input
          name="내용"
          id="content"
          onChange={handleChange}
          value={content}
        />
      </InputBox>
      <Button onClick={handleCreate}>추가</Button>
    </FormBox>
  );
}

export default InputForm;
