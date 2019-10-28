import styled from 'styled-components';

export const ButtonContainer = styled.div`
  display: block;
  color: white;
  position: relative;
  width: 250px;
  text-align: center;
  background: gray;
  padding: 8px;
  cursor: pointer;
  font-size: 1.2em;
  border-radius: 5px;
  box-shadow: 0px 5px 8px rgba(0, 0, 0, 0.3);
  transition: 0.2s;
  &:hover {
    background: white;
    color: gray;
  }
`;
