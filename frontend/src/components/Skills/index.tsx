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

  useEffect(() => {
    const handleScroll = () => {
      const sectionTitleEl = document.getElementById('skillsSectionTitle')
      const underlineEl = document.getElementById('skillsUnderline')

      sectionTitleEl && visibleInViewport(sectionTitleEl, true)
        ? setAnimateSectionTitleClass('slideSkillsTitle')
        : setAnimateSectionTitleClass('')

      underlineEl && visibleInViewport(underlineEl, true)
        ? setAnimateUnderlineClass('slideSkillsUnderline')
        : setAnimateUnderlineClass('')
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
          <Languages>
            <Subtitle>Languages</Subtitle>
            <Items>
              <Item>
                <Tag>Python</Tag>
                <ProgressBar>
                  <progress value="85" max="100" />
                  <span>85%</span>
                </ProgressBar>
              </Item>
              <Item>
                <Tag>Javascript</Tag>
                <ProgressBar>
                  <progress value="70" max="100" />
                  <span>70%</span>
                </ProgressBar>
              </Item>
            </Items>
          </Languages>
          <Frameworks>
            <Subtitle>Frameworks</Subtitle>
            <Items>
              <Item>
                <Tag>Django Rest Framework</Tag>
                <ProgressBar>
                  <progress value="90" max="100" />
                  <span>90%</span>
                </ProgressBar>
              </Item>
              <Item>
                <Tag>React.js</Tag>
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
