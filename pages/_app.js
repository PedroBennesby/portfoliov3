import { GlobalStyles, Theme } from '../style/theme.config';
import { ThemeProvider } from 'styled-components';
import { appWithTranslation } from 'next-i18next';

function MyPortfolio({ Component, pageProps }) {
  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={Theme}>
        <Component {...pageProps} />;
      </ThemeProvider>
    </>
  );
}

export default appWithTranslation(MyPortfolio);
