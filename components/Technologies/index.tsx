import { Container, IconBoxContainer } from './styles';
import { SectionName } from '../../style/globals';
import { FaReact, FaHtml5, FaCss3, FaSass } from 'react-icons/fa';
import {
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiChakraui,
  SiDatocms,
  SiStyledcomponents,
} from 'react-icons/si';
import { useTranslation } from 'next-i18next';

const Technologies = () => {
  const { t } = useTranslation('technologies');

  return (
    <Container id='technologies'>
      <SectionName>
        <h1>{t('title')}</h1> <span />
      </SectionName>
      <IconBoxContainer>
        <div>
          <FaHtml5 className='html' /> <FaCss3 className='css' />
          <FaSass className='sass' />
          <FaReact className='react' />
          <SiStyledcomponents className='styled' />
        </div>
        <div>
          <SiJavascript className='javascript' />
          <SiTypescript className='typescript' />
          <SiNextdotjs className='next' />
          <SiDatocms className='dato' />
          <SiChakraui className='chakra' />
        </div>
      </IconBoxContainer>
    </Container>
  );
};

export default Technologies;
