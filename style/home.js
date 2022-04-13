import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
  width: 80vw;
  @media only screen and (min-width: 375px) and (max-width: 812px) {
    width: 100%;
  }
`;

export const SectionContainer = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  h1 {
    font: 700 5rem Poppins, sans-serif;
    white-space: nowrap;
    @media only screen and (min-width: 375px) and (max-width: 812px) {
      font-size: 2.75rem;
    }
  }

  h2 {
    font: 700 2.5rem Poppins, sans-serif;
    line-height: 3.125rem;
    color: ${(theme) => theme.blue400};
    margin: 8px 0;
    @media only screen and (min-width: 375px) and (max-width: 812px) {
      font-size: 1.5rem;
    }
  }

  h3 {
    font: 700 2rem Roboto Mono, monospace;
    line-height: 3rem;
  }

  p {
    font: 700 1rem Roboto Mono, monospace;
    line-height: 1.5rem;
  }

  div {
    a {
      text-decoration: none;
      font: 700 1rem Roboto Mono, monospace;
      line-height: 1.1875rem;
      color: ${(props) => props.theme.blue400};
      border: 3px solid ${(props) => props.theme.blue400};
      display: inline-flex;
      appearance: none;
      -moz-box-align: center;
      align-items: center;
      -moz-box-pack: center;
      justify-content: center;
      transition: all 250ms ease 0s;
      user-select: none;
      position: relative;
      white-space: nowrap;
      vertical-align: middle;
      outline: currentcolor none medium;
      width: 188px;
      line-height: 1.2;
      border-radius: 0px;
      font-weight: 600;
      background: rgb(252, 252, 252) none repeat scroll 0% 0%;
      height: 56px;
      margin: 32px 0;
      text-transform: uppercase;
      &:hover {
        background: ${(props) => props.theme.blue400};
        color: ${(props) => props.theme.white};
      }
    }
  }
`;
