import Typical from 'react-typical';
import { useTranslation } from 'next-i18next';
import { Container, SectionContainer } from '../style/home';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export default function Home() {
  const { t } = useTranslation('home');
  return (
    <Container>
      <SectionContainer>
        <h3>{t('greeting')}</h3>
        <h1>{t('name')}</h1>
        <h2>
          <Typical
            loop={Infinity}
            wrapper='b'
            steps={[
              'Desenvolvedor Front-End 💻',
              1000,
              'Amante de café ☕',
              1000,
              'Fã de Oasis 🇬🇧',
              1000,
              'Músico frustrado 🎸',
              1000,
              'Mestre Pokémon 👾 ',
              1000,
            ]}
          />
        </h2>
        <p>
          Sou um desenvolvedor web/front-end apaixonado por criação de Sites
          responsivos, Landing pages e Hotsites.
        </p>

        <div>
          <a href='#contact'>Fale comigo</a>
        </div>
      </SectionContainer>
    </Container>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['home'])),
    },
  };
}
