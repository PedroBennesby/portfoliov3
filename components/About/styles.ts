import styled from 'styled-components';

export const Container = styled.section`
  min-height: 100vh;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  transition: all 2s ease;

  & > div {
    display: flex;
    justify-content: space-between;
    @media only screen and (min-width: 375px) and (max-width: 812px) {
      flex-wrap: wrap;
      justify-content: center;
    }

    img {
      width: 400px;

      @media only screen and (min-width: 375px) and (max-width: 812px) {
        width: 200px;
        height: 200px;
        align-self: center;
      }
    }

    h3 {
      font: 700 1.5rem Roboto Mono, monospace;
      line-height: 1.875rem;
    }

    p {
      line-height: 1.5rem;
    }

    ul {
      margin-top: 3rem;
      list-style: none;

      @media only screen and (min-width: 375px) and (max-width: 812px) {
        margin-bottom: 3rem;
      }

      li {
        display: flex;
        flex-direction: row;
        font: 400 1rem Roboto Mono, monospace;
        margin-top: 0.5rem;

        span {
          background: var(--blue-400);
          width: 0.625rem;
          height: 0.625rem;
          top: 7px;
          border-radius: 9999px;
          position: relative;
        }

        p {
          line-height: 1.5rem;
          margin-left: 0.75rem;
        }
      }
    }
  }
`;
