import { Link, LinkAnimation, Links, NavHeader, NavRow } from './styles'

const Navbar = () => {
  return (
    <NavHeader>
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
