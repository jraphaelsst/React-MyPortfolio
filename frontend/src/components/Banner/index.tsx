import { ArrowIcon, Button, Container, Content, Name, Text } from './styles'

const Banner = () => {
  const aboutSection = document.getElementById('about-section')
  const scrollAbout = () => {
    aboutSection
      ? aboutSection.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        })
      : aboutSection
  }

  return (
    <Container id="banner-section">
      <Content>
        <Text>
          Hello, I&rsquo;m <Name>João Raphael</Name>.
        </Text>
        <Text>I&rsquo;m a Web Developer.</Text>
        <Button onClick={scrollAbout}>
          Know my work <ArrowIcon className="fa-solid fa-arrow-right" />
        </Button>
      </Content>
    </Container>
  )
}

export default Banner
