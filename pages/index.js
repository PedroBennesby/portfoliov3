import { useState, useEffect, useCallback } from 'react';
import Typical from 'react-typical';
import { useTranslation } from 'next-i18next';
import { Container, SectionContainer } from './styles';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useRouter } from 'next/router';
import { request } from '../lib/datocms';

export default function Home(props) {
  const { data } = props;
  const { t } = useTranslation('home');
  const { locale } = useRouter();

  const [description, setDescription] = useState('');

  useEffect(() => {
    const filteredData = Object.values(data.home._allDescriptionLocales);
    const filteredDescription = filteredData.filter((e) => {
      if (locale === 'en') {
        return e.locale === 'en';
      } else {
        return e.locale === 'pt_BR';
      }
    });

    setDescription(filteredDescription[0].value);
  }, [data.home._allDescriptionLocales, locale]);

  return (
    <Container>
      <SectionContainer>
        <h3>{t('greeting')}</h3>
        <h1>{t('name')}</h1>
        <Typical
          loop={Infinity}
          wrapper='h2'
          steps={[`${t('typicalDef')} 💻`, 1000]}
        />
        <p>{description}</p>

        <div>
          <a href='#contact'>{t('contact')}</a>
        </div>
      </SectionContainer>
    </Container>
  );
}

const HOME_QUERY = ` {
  home {
    _allDescriptionLocales {
      value
      locale
    }
  }
}
`;

export async function getStaticProps({ locale }) {
  const data = await request({
    query: HOME_QUERY,
    variables: { limit: 10 },
  });

  return {
    props: {
      ...(await serverSideTranslations(locale, ['home'])),
      data,
    },
  };
}
