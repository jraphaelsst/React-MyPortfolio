import { BrowserRouter as Router } from 'react-router-dom'

import { GlobalCss } from './styles'

import About from './components/About'
import Banner from './components/Banner'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import Skills from './components/Skills'

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
