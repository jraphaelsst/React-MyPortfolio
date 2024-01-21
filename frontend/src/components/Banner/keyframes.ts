import { keyframes } from 'styled-components'

export const bgAnimation = keyframes`
  0% {
    background-position: bottom;
  }
  25% {
    background-position: top;
  }
  100% {
    background-position: bottom;
  }
`

export const fadeInText = keyframes`
  0% {
    opacity: 0;
    transform: scale(0.8);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
`

export const fadeInButton = keyframes`
  0% {
    opacity: 0;
    transform: translate(0%, 300%);
  }
  50% {
    opacity: 0.33;
  }
  100% {
    opacity: 1;
    transform: translate(0%, 0%);
  }
`
