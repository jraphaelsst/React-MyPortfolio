import { styled } from 'styled-components'

import { color } from '../styles'

export const Container = styled.div`
  display: flex;
`

export const Top = styled.div`
  float: left;
  border-right: 30px solid ${color.terciary};
  border-top: 52px solid transparent;
  border-bottom: 52px solid transparent;
`

export const Mid = styled.div`
  float: left;
  height: 104px;
  width: 60px;
  background-color: ${color.terciary};

  display: flex;
  align-items: center;
  justify-content: center;
`

export const Bottom = styled.div`
  float: left;
  border-left: 30px solid ${color.terciary};
  border-top: 52px solid transparent;
  border-bottom: 52px solid transparent;
`

export const Icon = styled.i`
  color: white;
`
