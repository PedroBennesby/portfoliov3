/* eslint-disable react-hooks/exhaustive-deps */
import {
  Container,
  ProjectsContainer,
  ProjectBox,
  ProjectTitle,
  ProjectBody,
  TechsContainer,
  ButtonsContainer,
  OtherProjects,
  ProjectLink,
} from './styles';
import { useState, useEffect } from 'react';
import { SectionName } from '../../style/globals';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import { FaReact } from 'react-icons/fa';
import {
  SiNextdotjs,
  SiTypescript,
  SiChakraui,
  SiDatocms,
  SiStyledcomponents,
} from 'react-icons/si';
import useLocaleData from '../../hooks/useLocaleData';
import { Project } from '../../interfaces/projects';

const Projects = (props) => {
  const { data } = props;
  const { locale } = useRouter();
  const [projects, setProjects] = useState<Project[]>([]);

  const formatData = () => {
    const formattedArray: Project[] = data.map((item) => {
      let descriptionValue = '';
      const filterDescription = Object.values(item._allDescriptionLocales);
      const filteredValue: any = filterDescription.filter((e: any) => {
        if (locale === 'en') {
          return e.locale === 'en';
        } else {
          return e.locale === 'pt_BR';
        }
      });
      descriptionValue = filteredValue[0].value;

      return {
        title: item.title,
        description: descriptionValue,
        url: item.projectLink,
        github: item.projectCodeLink,
        react: item.technologies.includes('SiReact'),
        nextJs: item.technologies.includes('SiNextdotjs'),
        typescript: item.technologies.includes('SiTypescript'),
        styledComponents: item.technologies.includes('SiStyledcomponents'),
        chakraUi: item.technologies.includes('SiChakraui'),
        datocms: item.technologies.includes('SiDatocms'),
      };
    });

    setProjects(formattedArray);
  };

  useEffect(() => {
    formatData();
  }, []);

  console.log(projects);

  // console.log(data, locale);
  const { t } = useTranslation('projects');

  const descriptionLocaleData = useLocaleData(data._allDescriptionLocales);

  return (
    <Container id='projects'>
      <SectionName>
        <h1>{t('title')}</h1>
        <span />
      </SectionName>
      <ProjectsContainer>
        {projects.map((project) => (
          <>
            <ProjectBox>
              <ProjectTitle>
                <h1>{project.title}</h1>
              </ProjectTitle>
              <ProjectBody>
                <p>{project.description}</p>
                <TechsContainer>
                  {project.react && <FaReact className='react' />}
                  {project.styledComponents && (
                    <SiStyledcomponents className='styled' />
                  )}
                  {project.typescript && (
                    <SiTypescript className='typescript' />
                  )}
                  {project.nextJs && <SiNextdotjs className='next' />}
                  {project.datocms && <SiDatocms className='dato' />}
                  {project.chakraUi && <SiChakraui className='chakra' />}
                </TechsContainer>
                <ButtonsContainer>
                  <ProjectLink
                    live={true}
                    href={project.url}
                    target='_blank'
                    rel='noreferrer'
                  >
                    {t('url')}
                  </ProjectLink>
                  <ProjectLink
                    href={project.github}
                    target='_blank'
                    rel='noreferrer'
                  >
                    {t('github')}
                  </ProjectLink>
                </ButtonsContainer>
              </ProjectBody>
            </ProjectBox>
          </>
        ))}
      </ProjectsContainer>
      <OtherProjects>
        <a
          href='https://github.com/PedroBennesby'
          target='_blank'
          rel='noreferrer'
        >
          {t('otherProjects')}
        </a>
      </OtherProjects>
    </Container>
  );
};

export default Projects;
