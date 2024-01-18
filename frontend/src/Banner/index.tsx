import { ArrowIcon, Button, Container, Content, Name, Text } from './styles'

const Banner = () => {
  return (
    <Container id="home">
      <Content>
        <Text>
          Hello, I&rsquo;m <Name>João Raphael</Name>.
        </Text>
        <Text>I&rsquo;m a Full Stack Web Developer.</Text>
        <Button>
          Know my work <ArrowIcon className="fa-solid fa-arrow-right" />
        </Button>
      </Content>
    </Container>
  )
}

export default Banner
