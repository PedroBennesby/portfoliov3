import { styles, Container, Select } from './styles';
import { useRouter } from 'next/router';
import Menu from 'react-burger-menu/lib/menus/slide';
import Image from 'next/image';
import useCheckMobileScreen from '../../hooks/useCheckMobileScreen';
import { useState } from 'react';
import { useTranslation } from 'next-i18next';

const Header = () => {
  const isMobile = useCheckMobileScreen();
  const [isMenuOpen, handleMenu] = useState(false);
  const router = useRouter();
  const { t } = useTranslation('header');

  const handleCloseMenu = () => {
    handleMenu(false);
  };
  const handleStateChange = (state) => {
    handleMenu(state.isOpen);
  };

  const handleLocaleChange = (e) => {
    const value = e.target.value;
    router.push(router.route, router.asPath, {
      locale: value,
    });
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
            {t('about')}
          </a>
          <a href='#technologies' onClick={handleCloseMenu}>
            {t('technologies')}
          </a>
          <a href='#projects' onClick={handleCloseMenu}>
            {t('projects')}
          </a>
          <a href='#contact' onClick={handleCloseMenu}>
            {t('contact')}
          </a>
          <Select onChange={handleLocaleChange} value={router.locale}>
            <option value='en/'>English</option>
            <option value='pt-BR/'>Português(BR)</option>
          </Select>
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
                <a href='#about'>{t('about')}</a>
              </li>
              <li>
                <a href='#technologies'>{t('technologies')}</a>
              </li>
              <li>
                <a href='#projects'>{t('projects')}</a>
              </li>
              <li>
                <a href='#contact'>{t('contact')}</a>
              </li>
              <li>
                <Select onChange={handleLocaleChange} value={router.locale}>
                  <option value='en'>English</option>
                  <option value='pt-BR'>Português(BR)</option>
                </Select>
              </li>
            </ul>
          </nav>
        </Container>
      )}
    </>
  );
};

export default Header;
