import { Title, TitleContainer, Underline } from './styles'

type Props = {
  title: string
}

const SectionHeader = ({ title }: Props) => {
  return (
    <TitleContainer>
      <Title>{title}</Title>
      <Underline />
    </TitleContainer>
  )
}

export default SectionHeader
