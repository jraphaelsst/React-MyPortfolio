import { useEffect, useState } from 'react'

import { Link, LinkAnimation, Links, NavHeader, NavRow } from './styles'

const Navbar = () => {
  const [stickyClass, setStickyClass] = useState('')

  const stickNavbar = () => {
    const windowHeight = window.scrollY
    windowHeight > 600 ? setStickyClass('sticky-nav') : setStickyClass('')
  }
  useEffect(() => {
    window.addEventListener('scroll', stickNavbar)
  }, [])

  return (
    <NavHeader className={`${stickyClass}`}>
      <NavRow>
        <Links>
          <Link>
            <LinkAnimation>Home</LinkAnimation>
          </Link>
          <Link>
            <LinkAnimation>About</LinkAnimation>
          </Link>
          <Link>
            <LinkAnimation>Skills</LinkAnimation>
          </Link>
          <Link>
            <LinkAnimation>Projects</LinkAnimation>
          </Link>
          <Link>
            <LinkAnimation>Contact</LinkAnimation>
          </Link>
        </Links>
      </NavRow>
    </NavHeader>
  )
}

export default Navbar
