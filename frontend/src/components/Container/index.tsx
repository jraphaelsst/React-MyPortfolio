import { CSSProperties } from 'react'

import { SectionContainer } from './styles'

type Props = {
  id: string
  children: JSX.Element
  style?: CSSProperties
}

const Container = ({ id, children, style }: Props) => {
  return (
    <SectionContainer id={id} style={style}>
      {children}
    </SectionContainer>
  )
}

export default Container
