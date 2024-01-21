import { styled } from 'styled-components'

import { color } from '../../styles'

export const Container = styled.div`
  height: 20vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 78px;
  margin-bottom: 120px;
`

export const Copyright = styled.h4`
  color: ${color.fontSecondary};
  font-weight: 400;

  span {
    color: ${color.support};
  }
`

export const Icon = styled.div`
  background-color: ${color.fontSecondary};
  padding: 8px;
  margin: 0 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all 0.2s ease;

  i {
    color: ${color.fontAlternative};
  }

  &:hover {
    transform: scale(0.9);
  }
`

export const Icons = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 16px;
  margin: 56px 0;
`
