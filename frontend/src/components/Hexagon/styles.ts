import { styled } from 'styled-components'

import { color } from '../../styles'

export const Container = styled.div`
  display: flex;
  position: relative;
  transform: rotateY(180deg);
  opacity: 0;
`

export const Top = styled.div`
  float: left;
  border-right: 30px solid ${color.secondary};
  border-top: 52px solid transparent;
  border-bottom: 52px solid transparent;
`

export const Mid = styled.div`
  float: left;
  height: 104px;
  width: 60px;
  background-color: ${color.secondary};

  display: flex;
  align-items: center;
  justify-content: center;
`

export const Bottom = styled.div`
  float: left;
  border-left: 30px solid ${color.secondary};
  border-top: 52px solid transparent;
  border-bottom: 52px solid transparent;
`

export const Icon = styled.i`
  color: ${color.bgPrimary};
`
