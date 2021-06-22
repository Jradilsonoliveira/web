import styled from 'styled-components';

export const Container = styled.div`
  background: #a52a2a;
  padding: 30px 0;

  header {
    width: 1280px;
    margin: 56px auto auto auto;
    padding: 0 0 160px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .logoContainer {
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 30px;
      font-family: roboto;
      font-weight: 600;
    }

    img {
      width: 65px;
      height: 65px;
      margin-right: 1rem;
    }

    nav {
      div {
        button {
          font-weight: 600;
          border-radius: 8px;
          border: 0;
          background: #39b100;
          color: #fff;

          display: flex;
          flex-direction: row;
          align-items: center;

          .text {
            padding: 16px 24px;
          }

          .icon {
            display: flex;
            padding: 16px 16px;
            background: #39b100;
            border-radius: 0 8px 8px 0;
            margin: 0 auto;
          }
        }
      }
    }
  }
`;
