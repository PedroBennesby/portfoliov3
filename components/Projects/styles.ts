import styled from 'styled-components';

export const Container = styled.section`
  min-height: 100vh;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
`;

export const ProjectsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  @media only screen and (min-width: 375px) and (max-width: 812px) {
    justify-content: center;
  }
`;

export const ProjectBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  align-self: center;
  border: 1px solid #e2e8f0;
  width: 30rem;
  @media only screen and (min-width: 375px) and (max-width: 812px) {
    margin-bottom: 2rem;
  }
`;

export const ProjectTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--black);
  width: 100%;
  margin-bottom: 2rem;
  height: 6rem;

  h1 {
    color: var(--white);
    font-size: 1.25rem;
    line-height: 1.875rem;
    font-weight: 700;
  }
`;

export const ProjectBody = styled.div`
  padding-inline-start: 2rem;
  padding-inline-end: 2rem;
  h1 {
    font-size: 1.25rem;
    line-height: 1.875rem;
  }

  p {
    margin-top: 2rem;
    font-size: 1rem;
    line-height: 1.5rem;
  }
`;

export const TechsContainer = styled.div`
  margin-top: 2rem;
  width: 40%;
  display: flex;
  justify-content: space-between;
`;

export const ButtonsContainer = styled.div`
  margin-top: 2rem;
  padding-bottom: 2rem;
`;

export const ProjectLink = styled.a`
  border: 1px solid var(--black);
  white-space: nowrap;
  font-size: 1rem;
  font-weight: 700;
  line-height: 1.1875rem;
  text-decoration: none;
  color: ${({ live }) => (live ? 'var(--black)' : 'var(--white)')};
  background: ${({ live }) => (live ? '' : 'var(--black)')};
  margin-right: ${({ live }) => (live ? '0.5rem' : '')};
  text-transform: uppercase;
  padding: 0.5rem 1rem;
  margin-right: 0.5rem;

  &:hover {
    color: ${({ live }) => (live ? 'var(--white)' : 'var(--black)')};
    background: ${({ live }) => (live ? 'var(--black)' : 'var(--white)')};
    transition: 0.3s;
  }
`;

export const OtherProjects = styled.div`
  align-self: center;
  margin-top: 2rem;
  border: 1px solid var(--black);
  white-space: nowrap;
  font-size: 1rem;
  font-weight: 700;
  line-height: 1.1875rem;
  text-decoration: none;
  color: var(--white);
  background: var(--black);
  text-transform: uppercase;
  padding: 0.5rem 1rem;
  width: 10rem;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background: var(--white);
    transition: 0.3s;
  }

  a {
    text-decoration: none;
    color: var(--white);

    &:hover {
      color: var(--black);
    }
  }
`;
