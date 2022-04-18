import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: auto;
  min-height: 10vh;
  width: 80vw;
  white-space: nowrap;
  padding: 0 1.5rem;
  margin-top: 1rem;

  nav {
    h1,
    ul,
    li {
      font-size: 1.125rem;
      flex: auto;
    }

    ul {
      list-style: none;
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin: 0;
      padding: 0;
      width: 100%;
    }

    li {
      margin-right: 1.125rem;
      margin-left: 1.125rem;
    }

    a {
      color: var(--black);
      text-decoration: none;
      font: 600 1.125rem Roboto Mono, monospace;
      &:hover {
        color: var(--blue-500);
        transition: 0.3s;
      }
    }
  }
`;

export const Select = styled.select`
  border: 1px solid #d1d5db;
  color: var(--black);
  font: 600 1.125rem Roboto Mono, monospace;
  outline: none;
  border-radius: 4px;
  appearance: none;
  padding: 0.375rem 0.75rem;
  width: 100%;

  @media (max-width: 768px) {
    background: transparent;
  }

  & > option {
    color: var(--black);
  }
`;

export const styles = {
  bmBurgerButton: {
    position: 'fixed',
    width: '36px',
    height: '30px',
    left: '21px',
    top: '36px',
  },
  bmBurgerBars: {
    background: '#232323',
  },
  bmBurgerBarsHover: {
    background: '#a90000',
  },
  bmCrossButton: {
    height: '24px',
    width: '24px',
  },
  bmCross: {
    background: '#e6e8eb',
  },
  bmMenuWrap: {
    position: 'fixed',
    height: '100%',
  },
  bmMenu: {
    background: '#313131',
    padding: '2.5em 1.5em 0',
    fontSize: '1.15em',
  },
  bmMorphShape: {
    fill: '#373a47',
  },
  bmItemList: {
    padding: '0.8em',
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem',
  },

  bmItem: {
    color: '#f7f8fa',
    display: 'inline-block',
    textDecoration: 'none',
    font: '600 1.15rem Roboto Mono, monospace',
  },
  bmOverlay: {
    background: 'rgba(0, 0, 0, 0.3)',
  },
};
