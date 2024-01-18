import { BrowserRouter as Router } from 'react-router-dom'
import Headroom from 'react-headroom'

import { GlobalCss } from './styles'
import About from './About'
import Banner from './Banner'
import Navbar from './Navbar'

function App() {
  return (
    <Router>
      <GlobalCss />
      <Banner />
      <About />

      <Headroom
        style={{ WebkitTransition: 'all 0.5s ease-in-out' }}
        upTolerance={0}
        downTolerance={4}
      >
        <Navbar />
      </Headroom>
    </Router>
  )
}

export default App
