import styled from 'styled-components';

export const SectionName = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-right: 1rem;
  margin-bottom: 2rem;

  h1 {
    font-size: 64px;
    @media only screen and (min-width: 375px) and (max-width: 812px) {
      font-size: 3rem;
    }
  }

  span {
    display: block;
    background: var(--black);
    height: 2px;
    width: 100%;
  }
`;
