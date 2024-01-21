import { BrowserRouter as Router } from 'react-router-dom'

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
      <Navbar />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </Router>
  )
}

export default App
