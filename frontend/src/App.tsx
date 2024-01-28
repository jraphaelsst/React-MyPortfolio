import { BrowserRouter as Router } from 'react-router-dom'

import { color, GlobalCss } from './styles'

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
  return (
    <Router>
      <GlobalCss />
      <Banner />
      <Navbar />
      <About />
      <Container
        id="work-section"
        title="How do I work?"
        style={{
          backgroundColor: `${color.bgPrimary}`,
          paddingBottom: '100px'
        }}
      >
        <>
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
