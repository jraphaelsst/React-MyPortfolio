import { styled } from 'styled-components'

import { color } from '../../styles'

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 64px 0 64px 0;
`

export const Title = styled.h1`
  font-size: 38px;
  margin-bottom: 10px;
  color: ${color.fontPrimary};
  font-family: Roboto, sans-serif;
`

export const Underline = styled.div`
  width: 65px;
  border-top: 4px solid ${color.fontPrimary};
`
