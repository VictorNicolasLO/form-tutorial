import React from 'react';
import { TextFieldContainer, StyledInput, LabelContainer } from './styled';

function TextField({ label, placeholder, type, onInput }) {
  function handleInput(event) {
    onInput(event.target.value);
  }
  return (
    <TextFieldContainer>
      <LabelContainer>{label}</LabelContainer>
      <StyledInput
        onInput={handleInput}
        type={type}
        placeholder={placeholder}
      />
    </TextFieldContainer>
  );
}

export default TextField;
