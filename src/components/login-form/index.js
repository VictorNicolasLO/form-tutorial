import React, { useState } from 'react';
import TextField from '../text-field';
import Button from '../button';
import { FormContainer, ButtonsContainer, TitleContainer } from './styled';

// npm install styled-components --save

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleLogin() {
    alert('Login...');
    alert(email);
    alert(password);
  }
  function handleSignUp() {
    alert('SignUp...');
  }

  function handleEmail(email) {
    setEmail(email);
  }

  function handlePassword(password) {
    setPassword(password);
  }

  return (
    <FormContainer>
      <TitleContainer>Bienvenido</TitleContainer>
      <TextField
        onInput={handleEmail}
        label="Email"
        placeholder="Escriba aqui..."
      />
      <TextField
        onInput={handlePassword}
        type="password"
        label="Password"
        placeholder="Escriba aqui..."
      />
      <ButtonsContainer style={{ marginTop: '0px' }}>
        <Button label="Login" onClick={handleLogin} />
        {email === '' && password === '' ? (
          <Button label="SignUp" onClick={handleSignUp} />
        ) : null}
      </ButtonsContainer>
    </FormContainer>
  );
}

export default LoginForm;
