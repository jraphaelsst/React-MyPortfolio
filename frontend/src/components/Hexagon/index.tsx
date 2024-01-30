import { Bottom, Container, Icon, Mid, Top } from './styles'

type Props = {
  icon: string
  className?: string
}

const Hexagon = ({ icon, className }: Props) => {
  return (
    <Container className={className}>
      <Top />
      <Mid>
        <Icon className={icon} />
      </Mid>
      <Bottom />
    </Container>
  )
}

export default Hexagon
