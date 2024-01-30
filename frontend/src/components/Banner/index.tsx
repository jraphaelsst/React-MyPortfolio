import { useEffect, useState } from 'react'

import { ArrowIcon, Button, Container, Content, Name, Text } from './styles'
import ProgressBar from '../ProgressBar'

const Banner = () => {
  // Scroll Effect on "About-scroll" button click
  useEffect(() => {
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

    const button = document.getElementById('scroll-about-button')
    if (button) {
      button.addEventListener('click', scrollAbout)
    }

    return () => {
      if (button) {
        button.removeEventListener('click', scrollAbout)
      }
    }
  }, [])

  const [value, setValue] = useState(0)
  const limit = 75

  useEffect(() => {
    const interval = setInterval(() => {
      setValue((oldValue: number) => {
        const newValue = oldValue + 1

        if (newValue >= limit) {
          clearInterval(interval)
        }

        return newValue
      })
    }, 50)

    return () => clearInterval(interval)
  }, [])

  return (
    <Container id="banner-section">
      <Content>
        <Text>
          Hello, I&rsquo;m <Name>João Raphael</Name>.
        </Text>
        <Text>I&rsquo;m a Web Developer.</Text>
        <Button id="scroll-about-button">
          Know my work <ArrowIcon className="fa-solid fa-arrow-right" />
        </Button>
      </Content>
      <div>
        <ProgressBar value={value} max={100} />
        <span>{value}%</span>
      </div>
    </Container>
  )
}

export default Banner
