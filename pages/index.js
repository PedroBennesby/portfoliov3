import { useState, useEffect } from 'react';
import Typical from 'react-typical';
import useLocaleData from '../hooks/useLocaleData';
import { useTranslation } from 'next-i18next';
import { Container, SectionContainer } from './styles';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useRouter } from 'next/router';
import { request } from '../lib/datocms';
import About from '../components/About';

export default function Home(props) {
  const [description, setDescription] = useState('');
  const { data } = props;
  const { t } = useTranslation('home');
  const { locale } = useRouter();

  const localeData = useLocaleData(data.home._allDescriptionLocales);

  useEffect(() => {
    setDescription(localeData);
  }, [localeData, locale]);

  return (
    <>
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
      <About
        description={data.about._allDescriptionLocales}
        image={data.upload.url}
        studying={data.about._allStudyingLocales}
      />
    </>
  );
}

const QUERY = ` {
  about {
    _allDescriptionLocales {
      locale
      value
    }
    _allStudyingLocales {
      locale
      value
    }
  }
  home {
    _allDescriptionLocales {
      locale
      value
    }
  }
  allProjects {
    _allDescriptionLocales {
      locale
      value
    }
    _allTitleLocales {
      locale
      value
    }
    projectCodeLink
    projectLink
    technologies
  }
  upload {
    url
    title
  }
}

`;

export async function getStaticProps({ locale }) {
  const data = await request({
    query: QUERY,
    variables: { limit: 10 },
  });

  return {
    props: {
      ...(await serverSideTranslations(locale, ['home', 'about'])),
      data,
    },
  };
}
