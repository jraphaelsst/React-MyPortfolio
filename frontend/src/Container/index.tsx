import { SectionContainer } from './styles'

import SectionHeader from '../SectionHeader'
import { CSSProperties } from 'react'

type Props = {
  title: string
  children: JSX.Element
  style?: CSSProperties
}

const Container = ({ title, children, style }: Props) => {
  return (
    <SectionContainer title={title} style={style}>
      <SectionHeader title={title} />
      {children}
    </SectionContainer>
  )
}

export default Container
