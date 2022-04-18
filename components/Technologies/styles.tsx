import styled from 'styled-components';

export const Container = styled.section`
  min-height: 100vh;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
`;

export const IconBoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  border: 5px solid var(--black);
  height: 70vh;

  & > div {
    color: var(--black);
    font-size: 5rem;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    flex-direction: row;
    padding: 2rem 4rem;
    transition: all 2s ease;

    @media only screen and (min-width: 375px) and (max-width: 812px) {
      font-size: 3rem;
      padding: 1rem 2rem;
    }
  }

  .html:hover {
    color: #e54c21;
    transition: all 0.5s ease;
  }
  .css:hover {
    color: #0b72b4;
    transition: all 0.5s ease;
  }
  .sass:hover {
    color: #ce679a;
    transition: all 0.5s ease;
  }

  .javascript:hover {
    color: #e4a227;
    transition: all 0.5s ease;
  }
  .typescript:hover {
    color: #2d79c7;
    transition: all 0.5s ease;
  }
  .react:hover {
    color: #2d79c7;
    transition: all 0.5s ease;
  }
  .next:hover {
    color: #a7a7a7;
    transition: all 0.5s ease;
  }
  .dato:hover {
    color: #ff6344;
    transition: all 0.5s ease;
  }
  .styled:hover {
    color: #865333;
    transition: all 0.5s ease;
  }
  .chakra:hover {
    color: #41c7bf;
    transition: all 0.5s ease;
  }
`;
