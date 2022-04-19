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
`;
