/* eslint-disable @next/next/no-img-element */
import { useState, useEffect } from 'react';
import useLocaleData from '../../hooks/useLocaleData';

import { Container } from './styles';
import { SectionName } from '../../style/globals';
import { useRouter } from 'next/router';

import { useTranslation } from 'next-i18next';

const About = (props) => {
  const { description, image, studying } = props;
  const [descriptionLocated, setDescriptionLocated] = useState('');
  const { t } = useTranslation('about');
  const { locale } = useRouter();

  const descriptionLocaleData = useLocaleData(description);
  const studyingLocaleData = useLocaleData(studying).Studying;

  useEffect(() => {
    setDescriptionLocated(descriptionLocaleData);
  }, [descriptionLocaleData, locale]);

  return (
    <Container id='about'>
      <SectionName>
        <h1>{t('title')}</h1> <span />
      </SectionName>
      <p>{descriptionLocated}</p>

      <div>
        <ul>
          <h3>{t('whatIamDoing')}:</h3>

          {studyingLocaleData.map((item) => (
            <li key={item.id}>
              <span /> <p>{item.value}</p>
            </li>
          ))}
        </ul>
        <img src={image} alt={t('imageAlt')} />
      </div>
    </Container>
  );
};

export default About;
