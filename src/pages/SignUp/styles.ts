import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
  justify-content: center;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  place-items: center;

  width: 100%;
  max-width: 700px;

  img {
    max-width: 300px;
  }

  form {
    margin: 45px 0;
    width: 340px;
    text-align: center;
  }

  h1 {
    margin-bottom: 24px;
    color: #f4ede8;
  }

  > a {
    display: flex;
    align-items: center;

    svg {
      margin-right: 10px;
    }

    color: #f4ede8;
    transition: color 0.2s;
    margin-top: 24px;
    text-decoration: none;

    &:hover {
      color: ${shade(0.2, '#f4ede8')};
    }
  }
`;
