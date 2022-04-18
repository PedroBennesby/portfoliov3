import { GlobalStyles } from '../style/theme.config';
import { appWithTranslation } from 'next-i18next';
import Header from '../components/Header';

function MyPortfolio({ Component, pageProps }) {
  return (
    <>
      <GlobalStyles />
      <Header />
      <Component {...pageProps} />;
    </>
  );
}

export default appWithTranslation(MyPortfolio);
