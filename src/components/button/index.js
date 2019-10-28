import React from 'react';
import { ButtonContainer } from './styled';
// Destructores
/*const props = {
  a: '1',
  b: 2,
};

const aValue = props.a;

const { a } = props;*/

function Button({ label, onClick }) {
  return <ButtonContainer onClick={onClick}>{label}</ButtonContainer>;
}

export default Button;
