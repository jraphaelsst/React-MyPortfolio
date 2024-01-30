import { styled } from 'styled-components'

import { color } from '../../styles'
import { fadeInCopyright, fadeInFooterIcon } from './keyframes'

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
  color: ${color.bgPrimary};
  font-weight: 400;

  span {
    color: ${color.support};
  }

  &.fadeInCopyright {
    animation: ${fadeInCopyright} 2s ease-out forwards;
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
  opacity: 0;
  transition: all 0.2s ease;

  i {
    color: ${color.fontAlternative};
  }

  &.slideFooterInIcon {
    animation: ${fadeInFooterIcon} 0.6s ease-in-out forwards;

    &:hover {
      transform: scale(0.9);
    }

    &:nth-child(1) {
      animation-delay: 0.3s;
    }

    &:nth-child(2) {
      animation-delay: 0.5s;
    }

    &:nth-child(3) {
      animation-delay: 0.7s;
    }
  }
`

export const Icons = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 16px;
  margin: 56px 0;
`
