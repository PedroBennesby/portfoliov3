import Typical from 'react-typical';
import { useRouter } from 'next/router';
import { Container, SectionContainer } from '../style/home';

export default function Home() {
  const { locale } = useRouter();
  return (
    <Container>
      <SectionContainer>
        <h3>Olá, me chamo</h3>
        <h1>Pedro Bennesby</h1>
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
