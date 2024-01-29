import { useEffect, useState } from 'react'

import { Container, Copyright, Icon, Icons } from './styles'

import visibleInViewport from '../../utils/VisibleInViewport'

const currentYear = new Date().getFullYear()

const Footer = () => {
  const [animateFooterIconClass, setAnimateFooterIconClass] = useState('')
  const [animateCopyrightClass, setAnimateCopyrightClass] = useState('')

  useEffect(() => {
    const handleScroll = () => {
      const footerIconsEl = document.getElementById('footerIcons')
      const copyrightEl = document.getElementById('copyright')

      footerIconsEl && visibleInViewport(footerIconsEl, true)
        ? setAnimateFooterIconClass('slideFooterInIcon')
        : setAnimateFooterIconClass('')

      copyrightEl && visibleInViewport(copyrightEl)
        ? setAnimateCopyrightClass('fadeInCopyright')
        : setAnimateCopyrightClass('')
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <Container id="footer-section">
      <Icons id="footerIcons">
        <Icon className={animateFooterIconClass}>
          <a href="https://github.com/jraphaelsst">
            <i className="fa-brands fa-github fa-2x" />
          </a>
        </Icon>
        <Icon className={animateFooterIconClass}>
          <a href="https://wa.me/+61430557622?text=Hi!">
            <i className="fa-brands fa-whatsapp fa-2x" />
          </a>
        </Icon>
        <Icon className={animateFooterIconClass}>
          <a href="https://www.instagram.com/jraphaelsouza">
            <i className="fa-brands fa-instagram fa-2x" />
          </a>
        </Icon>
      </Icons>
      <Copyright id="copyright" className={animateCopyrightClass}>
        João Raphael <span>&copy;{currentYear}</span>
      </Copyright>
    </Container>
  )
}

export default Footer
