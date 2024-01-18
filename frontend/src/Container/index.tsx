import { SectionContainer } from './styles'

type Props = {
  children: JSX.Element
}

const Container = ({ children }: Props) => {
  return <SectionContainer>{children}</SectionContainer>
}

export default Container
