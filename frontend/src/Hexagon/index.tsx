import { Bottom, Container, Icon, Mid, Top } from './styles'

type Props = {
  icon: string
}

const Hexagon = ({ icon }: Props) => {
  return (
    <Container>
      <Top />
      <Mid>
        <Icon className={icon} />
      </Mid>
      <Bottom />
    </Container>
  )
}

export default Hexagon
