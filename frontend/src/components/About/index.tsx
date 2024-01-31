import { useEffect, useState } from 'react'

import {
  AboutContainer,
  Icon,
  Icons,
  Image,
  Presentation,
  SectionTitle,
  Text,
  Texts,
  Title,
  TitleContainer,
  Underline
} from './styles'

import image from '../../media/97398844.jpeg'
import { color } from '../../styles'
import visibleInViewport from '../../utils/VisibleInViewport'

import Container from '../Container'

const About = () => {
  // const userUrl = 'https://api.github.com/users/jraphaelsst'

  // const [avatar, setAvatar] = useState('')

  // Get Avatar
  // useEffect(() => {
  //   try {
  //     fetch(userUrl)
  //       .then((response) => response.json())
  //       .then((res) => {
  //         setAvatar(res.avatar_url)
  //       })
  //   } catch (err) {
  //     console.log(err)
  //   }
  // }, [])

  // Header Section

  const [animateSectionTitleClass, setAnimateSectionTitleClass] = useState('')
  const [animateUnderlineClass, setAnimateUnderlineClass] = useState('')

  // Header States
  const [animateImageClass, setAnimateImageClass] = useState('')
  const [animateIconClass, setAnimateIconClass] = useState('')
  const [animateTitleClass, setAnimateTitleClass] = useState('')

  // Texts States management
  const [animateFirstTextClass, setAnimateFirstTextClass] = useState('')
  const [animateSecondTextClass, setAnimateSecondTextClass] = useState('')
  const [animateThirdTextClass, setAnimateThirdTextClass] = useState('')

  useEffect(() => {
    const handleScroll = () => {
      // Header Elements
      const sectionTitleEl = document.getElementById('aboutSectionTitle')
      const underlineEl = document.getElementById('aboutUnderline')

      const imageEl = document.getElementById('aboutImage')
      const iconsEl = document.getElementById('aboutIcons')
      const titleEl = document.getElementById('aboutTitle')

      // Texts Elements
      const firstTextEl = document.getElementById('aboutText1')
      const secondTextEl = document.getElementById('aboutText2')
      const thirdTextEl = document.getElementById('aboutText3')

      sectionTitleEl && visibleInViewport(sectionTitleEl, true)
        ? setAnimateSectionTitleClass('slideAboutTitle')
        : setAnimateSectionTitleClass('')

      underlineEl && visibleInViewport(underlineEl, true)
        ? setAnimateUnderlineClass('slideAboutUnderline')
        : setAnimateUnderlineClass('fadeOutAboutUnderline')

      imageEl && visibleInViewport(imageEl!, true)
        ? setAnimateImageClass('fadeInImage')
        : setAnimateImageClass('fadeOutImage')

      iconsEl && visibleInViewport(iconsEl!, true)
        ? setAnimateIconClass('fadeInIcon')
        : setAnimateIconClass('')

      titleEl && visibleInViewport(titleEl!, true)
        ? setAnimateTitleClass('fadeInAboutTitle')
        : setAnimateTitleClass('')

      // Texts Animation
      firstTextEl && visibleInViewport(firstTextEl!, true)
        ? setAnimateFirstTextClass('fadeInFirstText')
        : setAnimateFirstTextClass('')

      secondTextEl && visibleInViewport(secondTextEl!, true)
        ? setAnimateSecondTextClass('fadeInSecondText')
        : setAnimateSecondTextClass('')

      thirdTextEl && visibleInViewport(thirdTextEl!, true)
        ? setAnimateThirdTextClass('fadeInThirdText')
        : setAnimateThirdTextClass('')
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <Container
      id="about-section"
      style={{ backgroundColor: `${color.bgSecondary}` }}
    >
      <>
        <TitleContainer>
          <SectionTitle
            id="aboutSectionTitle"
            className={animateSectionTitleClass}
          >
            ABOUT
          </SectionTitle>
          <Underline id="aboutUnderline" className={animateUnderlineClass} />
        </TitleContainer>
        <AboutContainer>
          <Presentation>
            <div>
              <Image
                id="aboutImage"
                src={image}
                className={animateImageClass}
              />
              <Icons id="aboutIcons">
                <Icon className={animateIconClass}>
                  <a href="https://github.com/jraphaelsst" target="blank">
                    <i className="fa-brands fa-github fa-2x" />
                  </a>
                </Icon>
                <Icon className={animateIconClass}>
                  <a href="https://wa.me/+61430557622?text=Hi!" target="blank">
                    <i className="fa-brands fa-whatsapp fa-2x" />
                  </a>
                </Icon>
                <Icon className={animateIconClass}>
                  <a
                    href="https://www.instagram.com/jraphaelsouza"
                    target="blank"
                  >
                    <i className="fa-brands fa-instagram fa-2x" />
                  </a>
                </Icon>
              </Icons>
            </div>
            <Title id="aboutTitle" className={animateTitleClass}>
              Who&rsquo;s this guy?
            </Title>
            <Texts>
              <Text id="aboutText1" className={animateFirstTextClass}>
                I&rsquo;m a Full Stack Developer from Brazil currently living in
                Sydney, NSW, Aus.
              </Text>
              <Text id="aboutText2" className={animateSecondTextClass}>
                Specialized in Back-end development, I have a serious passion
                for writing performatic, well designed architectures, secure
                database structures & scripting algorithms.
              </Text>
              <Text id="aboutText3" className={animateThirdTextClass}>
                And as if it couldn&rsquo;t be forgotten, I build my Front-end
                with a pretty face, being considerative for UI effects,
                animations and creating intuitive & dynamic user experiences.
              </Text>
            </Texts>
          </Presentation>
        </AboutContainer>
      </>
    </Container>
  )
}

export default About
