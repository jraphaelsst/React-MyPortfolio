import { BrowserRouter as Router } from 'react-router-dom'
import Headroom from 'react-headroom'

import { GlobalCss } from './styles'

import About from './About'
import Banner from './Banner'
import Contact from './Contact'
import Footer from './Footer'
import Navbar from './Navbar'
import Projects from './Projects'
import Skills from './Skills'

function App() {
  return (
    <Router>
      <GlobalCss />
      <Banner />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />

      <Headroom
        style={{ WebkitTransition: 'all 0.5s ease-in-out' }}
        upTolerance={2}
        downTolerance={4}
      >
        <Navbar />
      </Headroom>
    </Router>
  )
}

export default App
