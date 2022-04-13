import { createGlobalStyle } from 'styled-components';

export const Theme = {
  background: '#fcfcfc',
  white: '#fff',
  black: '#232323',
  gray50: '#f7f8fa',
  gray100: '#e6e8eb',
  gray200: '#afb2b1',
  gray500: '#808080',
  gray800: '#494d4b',
  blue300: '#66adf0',
  blue400: '#61a5e4',
  blue500: '#5a9ad5',
  blue800: '#3f6c96',
};

export const GlobalStyles = createGlobalStyle`
* {
   margin: 0;
  padding: 0;
  box-sizing: border-box;
}

@media (max-width: 1080px) {
  html {
    font-size: 93.75%;
  }
}

@media (max-width: 768px) {
  html {
    font-size: 87.5%;
  }
}

body {
  background: ${(theme) => theme.background};
}

section {
  margin: auto;
  width: 80vw;
  padding: 0 1.5rem;

  @media only screen and (min-width: 375px) and (max-width: 812px) {
    width: 100%;
  }
}

body,
input,
textarea,
button {
  font: 400 1rem Roboto Mono, monospace;
  color: ${(theme) => theme.black};
}

p,
li {
  font: 400 1rem Roboto Mono, monospace;
  color: ${(theme) => theme.black};
}

h1,
h2,
h3 {
  font-weight: 700;
  font-family: Poppins, sans-serif;
  color: ${(theme) => theme.black};
}

h1 {
  font-size: 2rem;
}

h2 {
  font-size: 1.5rem;
}

button {
  cursor: pointer;
}
`;
