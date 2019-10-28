import styled from 'styled-components';

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.3);
  padding: 25px;
  border-radius: 5px;
  & > * {
    margin-top: 10px;
  }
`;

export const ButtonsContainer = styled.div`
  & > * {
    margin-top: 20px;
  }
`;

export const TitleContainer = styled.div`
  padding-bottom: 5px;
  font-size: 2em;
  color: gray;
`;
