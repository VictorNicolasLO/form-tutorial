import styled from 'styled-components';

export const TextFieldContainer = styled.div`
  display: flex;
  flex-direction: column;
  & > * {
    margin-top: 10px;
  }
`;

export const StyledInput = styled.input`
  padding: 10px 10px;
  font-size: 1.2em;
  border-radius: 5px;
  border: 1px solid gray;
`;

export const LabelContainer = styled.div`
  font-size: 1.2em;
  color: gray;
`;
