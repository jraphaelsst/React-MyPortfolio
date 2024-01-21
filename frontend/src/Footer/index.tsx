import { Container, Copyright, Icon, Icons } from './styles'

const currentYear = new Date().getFullYear()

const Footer = () => {
  return (
    <Container>
      <Icons>
        <li>
          <Icon>
            <a href="">
              <i className="fa-brands fa-github fa-2x" />
            </a>
          </Icon>
        </li>
        <li>
          <Icon>
            <a href="">
              <i className="fa-brands fa-whatsapp fa-2x" />
            </a>
          </Icon>
        </li>
        <li>
          <Icon>
            <a href="">
              <i className="fa-brands fa-instagram fa-2x" />
            </a>
          </Icon>
        </li>
      </Icons>
      <Copyright>
        João Raphael <span>&copy;{currentYear}</span>
      </Copyright>
    </Container>
  )
}

export default Footer
