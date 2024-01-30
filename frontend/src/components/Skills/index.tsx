import { useEffect, useState } from 'react'

import { color } from '../../styles'
import visibleInViewport from '../../utils/VisibleInViewport'

import {
  Frameworks,
  Item,
  Items,
  Languages,
  ProgressBar,
  SectionTitle,
  SkillsContainer,
  SoftSkills,
  Subtitle,
  Tag,
  TitleContainer,
  Underline
} from './styles'

import Container from '../Container'

const Skills = () => {
  const [animateSectionTitleClass, setAnimateSectionTitleClass] = useState('')
  const [animateUnderlineClass, setAnimateUnderlineClass] = useState('')

  const [animateLanguagesContainerClass, setAnimateLanguagesContainerClass] =
    useState('')
  const [animateFrameworksContainerClass, setAnimateFrameworksContainerClass] =
    useState('')

  useEffect(() => {
    const handleScroll = () => {
      const sectionTitleEl = document.getElementById('skillsSectionTitle')
      const underlineEl = document.getElementById('skillsUnderline')

      const languages = document.getElementById('languagesContainer')
      const frameworks = document.getElementById('frameworksContainer')

      sectionTitleEl && visibleInViewport(sectionTitleEl, true)
        ? setAnimateSectionTitleClass('slideSkillsTitle')
        : setAnimateSectionTitleClass('')
      underlineEl && visibleInViewport(underlineEl, true)
        ? setAnimateUnderlineClass('slideSkillsUnderline')
        : setAnimateUnderlineClass('')

      languages && visibleInViewport(languages, true)
        ? setAnimateLanguagesContainerClass('slideInRight')
        : setAnimateLanguagesContainerClass('')
      frameworks && visibleInViewport(frameworks, true)
        ? setAnimateFrameworksContainerClass('slideInLeft')
        : setAnimateFrameworksContainerClass('')
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <Container
      id="skills-section"
      style={{ backgroundColor: `${color.bgSecondary}` }}
    >
      <>
        <TitleContainer>
          <SectionTitle
            id="skillsSectionTitle"
            className={animateSectionTitleClass}
          >
            Skills
          </SectionTitle>
          <Underline id="skillsUnderline" className={animateUnderlineClass} />
        </TitleContainer>
        <SkillsContainer>
          <Languages
            id="languagesContainer"
            className={animateLanguagesContainerClass}
          >
            <Subtitle id="languagesSubtitle">Languages</Subtitle>
            <Items>
              <Item>
                <Tag id="pythonTitle">Python</Tag>
                <ProgressBar>
                  <progress value="85" max="100" />
                  <span>85%</span>
                </ProgressBar>
              </Item>
              <Item>
                <Tag id="javascriptTitle">Javascript</Tag>
                <ProgressBar>
                  <progress value="70" max="100" />
                  <span>70%</span>
                </ProgressBar>
              </Item>
            </Items>
          </Languages>
          <Frameworks
            id="frameworksContainer"
            className={animateFrameworksContainerClass}
          >
            <Subtitle id="frameworksSubtitle">Frameworks</Subtitle>
            <Items>
              <Item>
                <Tag id="djangoTitle">Django Rest Framework</Tag>
                <ProgressBar>
                  <progress value="90" max="100" />
                  <span>90%</span>
                </ProgressBar>
              </Item>
              <Item>
                <Tag id="reactTitle">React.js</Tag>
                <ProgressBar>
                  <progress value="75" max="100" />
                  <span>75%</span>
                </ProgressBar>
              </Item>
            </Items>
          </Frameworks>
        </SkillsContainer>
        <SoftSkills>
          <Subtitle></Subtitle>
          <Items>
            <Item></Item>
          </Items>
        </SoftSkills>
      </>
    </Container>
  )
}

export default Skills
