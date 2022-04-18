import { GlobalStyles } from '../style/theme.config';
import { appWithTranslation } from 'next-i18next';
import Header from '../components/Header';
import About from '../components/About';

function MyPortfolio({ Component, pageProps }) {
  return (
    <>
      <GlobalStyles />
      <Header />
      <Component {...pageProps} />;
      <About />
    </>
  );
}

export default appWithTranslation(MyPortfolio);
