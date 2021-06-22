import styled, { css } from 'styled-components';

import Tooltip from '../Tooltip';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  hasError: boolean;
}

export const Container = styled.div<ContainerProps>`
  background: #f4ede8;
  color: #666360;
  border-radius: 10px;
  border: 2px solid #f4ede8;
  padding: 16px;
  width: 100%;
  height: 56px;

  display: flex;
  align-items: center;

  & + div {
    margin-top: 10px;
  }

  ${props =>
    props.hasError &&
    css`
      border-color: #ff2a2a;
    `}

  ${props =>
    props.isFocused &&
    css`
      color: #312e38;
      border-color: #312e38;
    `}

  ${props =>
    props.isFilled &&
    css`
      color: #312e38;
    `}

  input {
    flex: 1;
    background: transparent;
    border: 0;
  }

  > svg {
    margin-right: 16px;
  }
`;

export const Error = styled(Tooltip)`
  height: 20px;
  margin-left: 16px;

  svg {
    margin: 0;
  }

  span {
    background: #ff2a2a;
    color: #fff;

    &::before {
      border-color: #ff2a2a transparent;
    }
  }
`;
