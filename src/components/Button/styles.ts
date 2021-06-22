import { shade } from 'polished';
import styled from 'styled-components';

export const Container = styled.button`
  background: #ff9000;
  transition: background-color 0.2s;
  color: #312e38;
  font-weight: 500;

  width: 100%;
  height: 56px;
  padding: 0 16px;
  margin-top: 16px;

  border-radius: 10px;
  border: 0;

  &:hover {
    background: ${shade(0.2, '#FF9000')};
  }
`;
