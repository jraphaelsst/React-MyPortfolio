import { useEffect, useState } from 'react'

import { color } from '../../styles'
import visibleInViewport from '../../utils/VisibleInViewport'

import {
  Frameworks,
  Item,
  Items,
  Languages,
  SectionTitle,
  SkillsContainer,
  SoftSkills,
  Subtitle,
  Tag,
  TitleContainer,
  Underline
} from './styles'

import Container from '../Container'
import ProgressBar from '../ProgressBar'

const Skills = () => {
  const [animateSectionTitleClass, setAnimateSectionTitleClass] = useState('')
  const [animateUnderlineClass, setAnimateUnderlineClass] = useState('')

  const [animateLanguagesContainerClass, setAnimateLanguagesContainerClass] =
    useState('')
  const [animateFrameworksContainerClass, setAnimateFrameworksContainerClass] =
    useState('')

  const [pythonValue, setPythonValue] = useState(0)
  const [javascriptValue, setJavascriptValue] = useState(0)
  const [djangoValue, setDjangoValue] = useState(0)
  const [reactValue, setReactValue] = useState(0)

  const pythonProgress = (value: number) => {
    const interval = setInterval(() => {
      setPythonValue((oldValue: number) => {
        const newValue = oldValue + 1

        if (newValue >= value) {
          clearInterval(interval)
        }

        return newValue
      })
    }, 10)
    return () => clearInterval(interval)
  }
  const javascriptProgress = (value: number) => {
    const interval = setInterval(() => {
      setJavascriptValue((oldValue: number) => {
        const newValue = oldValue + 1

        if (newValue >= value) {
          clearInterval(interval)
        }

        return newValue
      })
    }, 10)
    return () => clearInterval(interval)
  }
  const djangoProgress = (value: number) => {
    const interval = setInterval(() => {
      setDjangoValue((oldValue: number) => {
        const newValue = oldValue + 1

        if (newValue >= value) {
          clearInterval(interval)
        }

        return newValue
      })
    }, 10)
    return () => clearInterval(interval)
  }
  const reactProgress = (value: number) => {
    const interval = setInterval(() => {
      setReactValue((oldValue: number) => {
        const newValue = oldValue + 1

        if (newValue >= value) {
          clearInterval(interval)
        }

        return newValue
      })
    }, 10)
    return () => clearInterval(interval)
  }

  useEffect(() => {
    const handleScroll = () => {
      const sectionTitleEl = document.getElementById('skillsSectionTitle')
      const underlineEl = document.getElementById('skillsUnderline')

      const languages = document.getElementById('languagesContainer')
      const frameworks = document.getElementById('frameworksContainer')

      const pythonBar = document.getElementById('pythonBar')
      const javascriptBar = document.getElementById('javascriptBar')
      const djangoBar = document.getElementById('djangoBar')
      const reactBar = document.getElementById('reactBar')

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

      if (pythonBar && !visibleInViewport(pythonBar, true)) {
        setPythonValue(0)
      }
      if (javascriptBar && !visibleInViewport(javascriptBar, true)) {
        setJavascriptValue(0)
      }
      if (djangoBar && !visibleInViewport(djangoBar, true)) {
        setDjangoValue(0)
      }
      if (reactBar && !visibleInViewport(reactBar, true)) {
        setReactValue(0)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  useEffect(() => {
    const languages = document.getElementById('languagesContainer')
    const frameworks = document.getElementById('frameworksContainer')

    const onLanguagesAnimationEnd = () => {
      const pythonLimit = 85
      const javascriptLimit = 70

      setTimeout(() => {
        pythonProgress(pythonLimit)
      }, 100)
      setTimeout(() => {
        javascriptProgress(javascriptLimit)
      }, 500)
    }

    const onFrameworksAnimationEnd = () => {
      const djangoLimit = 90
      const reactLimit = 75

      setTimeout(() => {
        djangoProgress(djangoLimit)
      }, 300)
      setTimeout(() => {
        reactProgress(reactLimit)
      }, 700)
    }

    languages?.addEventListener('animationend', onLanguagesAnimationEnd)
    frameworks?.addEventListener('animationend', onFrameworksAnimationEnd)

    return () => {
      languages?.removeEventListener('animationend', onLanguagesAnimationEnd)
      frameworks?.removeEventListener('animationend', onFrameworksAnimationEnd)
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
                <ProgressBar value={pythonValue} id="pythonBar" />
              </Item>
              <Item>
                <Tag id="javascriptTitle">Javascript</Tag>
                <ProgressBar value={javascriptValue} id="javascriptBar" />
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
                <ProgressBar value={djangoValue} id="djangoBar" />
              </Item>
              <Item>
                <Tag id="reactTitle">React.js</Tag>
                <ProgressBar value={reactValue} id="reactBar" />
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
