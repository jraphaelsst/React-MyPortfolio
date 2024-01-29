import { keyframes } from 'styled-components'

export const fadeInTitle = keyframes`
  0% {
    opacity: 0;
    transform: translate(0%, -300%);
  }
  100% {
    opacity: 1;
    transform: translate(0%, 0%);
  }
`

export const fadeInUnderline = keyframes`
  0% {
    opacity: 0;
    transform: translate(0%, 300%);
  }
  100% {
    opacity: 1;
    transform: translate(0%, 0%);
  }
`

export const fadeInSubtitle = keyframes`
  0% {
    opacity: 0;
    transform: scale(0);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
`

export const fadeInButton = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`
