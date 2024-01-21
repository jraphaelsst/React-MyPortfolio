import { useEffect, useState } from 'react'

import { Link, LinkAnimation, Links, NavHeader, NavRow } from './styles'

const Navbar = () => {
  const [stickyClass, setStickyClass] = useState('')

  // Set Sticky Navbar function
  const stickNavbar = () => {
    const windowHeight = window.scrollY
    windowHeight > 600 ? setStickyClass('sticky-nav') : setStickyClass('')
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
  }

  return (
    <NavHeader className={`${stickyClass}`}>
      <NavRow>
        <Links>
          <Link onClick={scrollBanner}>
            <LinkAnimation>Home</LinkAnimation>
          </Link>
          <Link onClick={scrollAbout}>
            <LinkAnimation>About</LinkAnimation>
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
    </NavHeader>
  )
}

export default Navbar
