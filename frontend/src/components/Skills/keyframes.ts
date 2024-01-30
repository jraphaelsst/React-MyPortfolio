import { keyframes } from 'styled-components'

export const fadeInTitle = keyframes`
  0% {
    opacity: 0;
    transform: scale(0);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
`

export const slideInRight = keyframes`
  0% {
    transform: translateX(-120%);
  }
  100% {
    opacity: 1;
    transform: translateX(0%);
  }
`

export const slideInLeft = keyframes`
  0% {
    transform: translateX(120%);
  }
  100% {
    opacity: 1;
    transform: translateX(0%);
  }
`
