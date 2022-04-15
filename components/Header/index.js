import { styles, Container } from './styles';
import Menu from 'react-burger-menu/lib/menus/slide';
import Image from 'next/image';
import useCheckMobileScreen from '../../hooks/useCheckMobileScreen';
import { useState } from 'react';

const Header = () => {
  const isMobile = useCheckMobileScreen();
  const [isMenuOpen, handleMenu] = useState(false);

  const handleCloseMenu = () => {
    handleMenu(false);
  };
  const handleStateChange = (state) => {
    handleMenu(state.isOpen);
  };

  return (
    <>
      {isMobile ? (
        <Menu
          styles={styles}
          isOpen={isMenuOpen}
          onStateChange={handleStateChange}
        >
          <a href='#about' onClick={handleCloseMenu}>
            Sobre
          </a>
          <a href='#technologies' onClick={handleCloseMenu}>
            Tecnologias
          </a>
          <a href='#projects' onClick={handleCloseMenu}>
            Projetos
          </a>
          <a href='#contact' onClick={handleCloseMenu}>
            Contato
          </a>
        </Menu>
      ) : (
        <Container>
          <a href='#'>
            <Image
              width={64}
              height={64}
              src='/logo.png'
              alt='Pedro Bennesby'
            />
          </a>
          <nav>
            <ul>
              <li>
                <a href='#about'>Sobre</a>
              </li>
              <li>
                <a href='#technologies'>Tecnologias</a>
              </li>
              <li>
                <a href='#projects'>Projetos</a>
              </li>
              <li>
                <a href='#contact'>Contato</a>
              </li>
            </ul>
          </nav>
        </Container>
      )}
    </>
  );
};

export default Header;
