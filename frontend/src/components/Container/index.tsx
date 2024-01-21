import { SectionContainer } from './styles'

import SectionHeader from '../SectionHeader'
import { CSSProperties } from 'react'

type Props = {
  id: string
  title: string
  children: JSX.Element
  style?: CSSProperties
}

const Container = ({ id, title, children, style }: Props) => {
  return (
    <SectionContainer id={id} title={title} style={style}>
      <SectionHeader title={title} />
      {children}
    </SectionContainer>
  )
}

export default Container
