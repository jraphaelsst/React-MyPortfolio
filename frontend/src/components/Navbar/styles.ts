import styled from 'styled-components'

import { color } from '../../styles'

export const NavHeader = styled.nav`
  background-color: ${color.primary};
  display: flex;
  align-items: center;
  padding: 20px;
  z-index: 100;
  transition: all 0.5s ease;
`

export const NavRow = styled.div`
  margin-left: 32px;
`

export const Links = styled.ul`
  display: flex;
  font-size: 16px;
`

export const Link = styled.li`
  margin-right: 78px;
  color: ${color.fontAlternative};
  transition: all 0.2s;
  cursor: pointer;

  &:hover {
    color: ${color.support};
    transform: scale(1.08);
  }
`

export const LinkAnimation = styled.div`
  width: 92%;
  display: flex;
  justify-content: center;
  padding: 1px;
  border-radius: 1px;
  background: linear-gradient(currentColor 0 0) var(--p, 0) 100% / var(--d, 0)
    1.45px no-repeat;
  transition:
    0.25s,
    background-position 0s 0.25s;
  &:hover {
    --d: 100%;
    --p: 100%;
  }
`
