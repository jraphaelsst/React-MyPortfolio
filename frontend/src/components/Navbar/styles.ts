import styled from 'styled-components'

import { breakpoints, color } from '../../styles'

export const Hamburguer = styled.div`
  width: 32px;

  &.is-open {
    display: none;
  }

  span {
    height: 2px;
    display: flex;
    flex-direction: column;
    width: 100%;
    background-color: ${color.fontAlternative};
    margin-bottom: 4px;
  }

  @media (min-width: ${breakpoints.tablet}) {
    display: none;
  }
`

export const NavHeader = styled.nav`
  background-color: ${color.primary};
  display: flex;
  align-items: center;
  padding: 20px;
  z-index: 100;
  transition: all 0.5s ease;

  @media (max-width: ${breakpoints.tablet}) {
    display: block;
  }
`

export const Links = styled.ul`
  display: flex;
  font-size: 16px;
  transition: all 0.5s ease;

  @media (max-width: ${breakpoints.tablet}) {
    display: block;
    margin: 0 auto;
  }
`

export const NavRow = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;

  ${Links} {
    margin: 0 auto;
  }

  @media (max-width: ${breakpoints.tablet}) {
    flex: 1;

    ${Links} {
      display: none;
    }
  }
`

export const Link = styled.li`
  padding-left: 4px;
  margin-right: 78px;
  color: ${color.fontAlternative};
  transition: all 0.2s;
  cursor: pointer;
  overflow: hidden;
  white-space: nowrap;

  &:hover {
    color: ${color.support};
    transform: scale(1.08);
  }

  @media (max-width: ${breakpoints.tablet}) {
    margin-right: 0;

    > div {
      display: flex;
      padding: 16px 0;
    }
  }
`

export const LinkAnimation = styled.div`
  width: 80%;
  display: flex;
  justify-content: center;
  padding: 1px;
  border-radius: 1px;
  background: linear-gradient(currentColor 0 0) var(--p, 0) 100% / var(--d, 0)
    1.45px no-repeat;
  transition:
    0.4s,
    background-position 0s 0.4s;
  &:hover {
    --d: 100%;
    --p: 100%;
  }

  @media (max-width: ${breakpoints.tablet}) {
    display: block;
    width: 10%;
    margin: 0 auto;
  }
`

export const NavMobile = styled.nav`
  display: none;

  &.is-open {
    display: block;
  }
`
