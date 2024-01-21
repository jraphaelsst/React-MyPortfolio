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
  return (
    <Container>
      <TitleContainer>
        <Title>CONTACT</Title>
        <Underline />
      </TitleContainer>
      <Subtitle>Have questions or want to build something together?</Subtitle>
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
      <IconDiv>
        <ArrowIcon className="fa fa-angles-up fa-2x" />
      </IconDiv>
    </Container>
  )
}

export default Contact
