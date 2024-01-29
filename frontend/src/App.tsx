import { useState, useEffect } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import { SectionTitle, TitleContainer, Underline } from './styleApp'

import { color, GlobalCss } from './styles'
import visibleInViewport from './utils/VisibleInViewport'

import About from './components/About'
import Banner from './components/Banner'
import Contact from './components/Contact'
import Container from './components/Container'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Topics from './components/Topics'

function App() {
  const [animateSectionTitleClass, setAnimateSectionTitleClass] = useState('')
  const [animateUnderlineClass, setAnimateUnderlineClass] = useState('')

  useEffect(() => {
    const handleScroll = () => {
      const sectionTitleEl = document.getElementById('topicsSectionTitle')
      const underlineEl = document.getElementById('topicsUnderline')

      sectionTitleEl && visibleInViewport(sectionTitleEl, true)
        ? setAnimateSectionTitleClass('slideTopicsTitle')
        : setAnimateSectionTitleClass('')

      underlineEl && visibleInViewport(underlineEl, true)
        ? setAnimateUnderlineClass('slideTopicsUnderline')
        : setAnimateUnderlineClass('')
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <Router>
      <GlobalCss />
      <Banner />
      <Navbar />
      <About />
      <Container
        id="work-section"
        style={{
          backgroundColor: `${color.bgPrimary}`,
          paddingBottom: '100px'
        }}
      >
        <>
          <TitleContainer>
            <SectionTitle
              id="topicsSectionTitle"
              className={animateSectionTitleClass}
            >
              How do I work?
            </SectionTitle>
            <Underline id="topicsUnderline" className={animateUnderlineClass} />
          </TitleContainer>
          <Topics topic="backend" />
          <Topics topic="frontend" />
        </>
      </Container>
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </Router>
  )
}

export default App
