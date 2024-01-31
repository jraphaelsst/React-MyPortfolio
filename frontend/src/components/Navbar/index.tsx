import { useEffect, useState } from 'react'

import {
  Hamburguer,
  Link,
  LinkAnimation,
  Links,
  NavHeader,
  NavMobile,
  NavRow,
  Overlay
} from './styles'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [stickyClass, setStickyClass] = useState('')

  // Set Sticky Navbar function
  const stickNavbar = () => {
    const windowHeight = window.scrollY
    windowHeight > 650 ? setStickyClass('sticky-nav') : setStickyClass('')
  }

  // Sticky Navbar listener
  useEffect(() => {
    window.addEventListener('scroll', stickNavbar)
  }, [])

  // Scroll to Home Section function
  const bannerSection = document.getElementById('banner-section')
  const scrollBanner = () => {
    bannerSection
      ? bannerSection.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
          inline: 'nearest'
        })
      : bannerSection
    setIsMenuOpen(false)
  }

  // Scroll to About Section function
  const aboutSection = document.getElementById('about-section')
  const scrollAbout = () => {
    aboutSection
      ? aboutSection.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
          inline: 'nearest'
        })
      : aboutSection
    setIsMenuOpen(false)
  }

  // Scroll to About Section function
  const workSection = document.getElementById('work-section')
  const scrollWork = () => {
    workSection
      ? workSection.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
          inline: 'nearest'
        })
      : workSection
    setIsMenuOpen(false)
  }

  // Scroll to Skills Section function
  const skillsSection = document.getElementById('skills-section')
  const scrollSkills = () => {
    skillsSection
      ? skillsSection.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
          inline: 'nearest'
        })
      : skillsSection
    setIsMenuOpen(false)
  }

  // Scroll to Projects Section function
  const projectsSection = document.getElementById('projects-section')
  const scrollProjects = () => {
    projectsSection
      ? projectsSection.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
          inline: 'nearest'
        })
      : projectsSection
    setIsMenuOpen(false)
  }

  // Scroll to Contact Section function
  const contactSection = document.getElementById('contact-section')
  const scrollContact = () => {
    contactSection
      ? contactSection.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
          inline: 'nearest'
        })
      : contactSection
    setIsMenuOpen(false)
  }

  return (
    <>
      <NavHeader className={`${stickyClass}`}>
        <NavRow>
          <Hamburguer
            id="hamburguer"
            onClick={() => {
              setIsMenuOpen(!isMenuOpen)
            }}
            className={isMenuOpen ? 'is-open' : ''}
          >
            <span />
            <span />
            <span />
          </Hamburguer>
          <Links>
            <Link onClick={scrollBanner}>
              <LinkAnimation>Home</LinkAnimation>
            </Link>
            <Link onClick={scrollAbout}>
              <LinkAnimation>About</LinkAnimation>
            </Link>
            <Link onClick={scrollWork}>
              <LinkAnimation>My Work</LinkAnimation>
            </Link>
            <Link onClick={scrollSkills}>
              <LinkAnimation>Skills</LinkAnimation>
            </Link>
            <Link onClick={scrollProjects}>
              <LinkAnimation>Projects</LinkAnimation>
            </Link>
            <Link onClick={scrollContact}>
              <LinkAnimation>Contact</LinkAnimation>
            </Link>
          </Links>
        </NavRow>
        <NavMobile id="nav-mobile" className={isMenuOpen ? 'is-open' : ''}>
          <Links>
            <Link onClick={scrollBanner}>
              <LinkAnimation>Home</LinkAnimation>
            </Link>
            <Link onClick={scrollAbout}>
              <LinkAnimation>About</LinkAnimation>
            </Link>
            <Link onClick={scrollWork}>
              <LinkAnimation>My Work</LinkAnimation>
            </Link>
            <Link onClick={scrollSkills}>
              <LinkAnimation>Skills</LinkAnimation>
            </Link>
            <Link onClick={scrollProjects}>
              <LinkAnimation>Projects</LinkAnimation>
            </Link>
            <Link onClick={scrollContact}>
              <LinkAnimation>Contact</LinkAnimation>
            </Link>
          </Links>
        </NavMobile>
      </NavHeader>
      <Overlay
        className={isMenuOpen ? 'is-open' : ''}
        onClick={() => {
          setIsMenuOpen(false)
        }}
      />
    </>
  )
}

export default Navbar
