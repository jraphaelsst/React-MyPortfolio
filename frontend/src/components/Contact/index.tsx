import {
  ArrowIcon,
  Button,
  Container,
  Form,
  IconDiv,
  Input,
  Subtitle,
  Textarea,
  Title,
  TitleContainer,
  Underline
} from './styles'

const Contact = () => {
  const bannerSection = document.getElementById('banner-section')
  const scrollBanner = () => {
    bannerSection
      ? bannerSection.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
          inline: 'nearest'
        })
      : bannerSection
  }

  return (
    <Container id="contact-section">
      <TitleContainer>
        <Title>CONTACT</Title>
        <Underline />
      </TitleContainer>
      <Subtitle>Have questions or want to work together?</Subtitle>
      <Form id="messageForm">
        <Input id="name" type="text" placeholder="Name" />
        <Input id="email" type="email" placeholder="Enter email" />
        <Textarea
          id="message"
          cols={30}
          rows={10}
          placeholder="Type message here..."
          form="messageForm"
        />
        <div>
          <Button type="submit">Send</Button>
        </div>
      </Form>
      <IconDiv onClick={scrollBanner}>
        <ArrowIcon className="fa fa-angles-up fa-2x" />
      </IconDiv>
    </Container>
  )
}

export default Contact
