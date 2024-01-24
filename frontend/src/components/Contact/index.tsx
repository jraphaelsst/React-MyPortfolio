import { useEffect } from 'react'

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
  // Scroll Effect on "Banner-scroll" button click
  useEffect(() => {
    // Declare Banner Section
    const bannerSection = document.getElementById('banner-section')
    // Declare Scroll function
    const scrollBanner = () => {
      bannerSection
        ? bannerSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
            inline: 'nearest'
          })
        : bannerSection
    }

    // Declare scroll-banner-button
    const button = document.getElementById('scroll-banner-button')
    if (button) {
      button.addEventListener('click', scrollBanner)
    }

    return () => {
      if (button) {
        // Clears
        button.removeEventListener('click', scrollBanner)
      }
    }
  }, [])

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
      <IconDiv id="scroll-banner-button">
        <ArrowIcon className="fa fa-angles-up fa-2x" />
      </IconDiv>
    </Container>
  )
}

export default Contact
