import { keyframes } from 'styled-components'

export const slideInLeft = keyframes`
  0% {
    opacity: 0;
    transform: translateX(120%);
  }
  100% {
    opacity: 1;
    transform: translateX(0%);
  }
`

export const slideInRight = keyframes`
  0% {
    opacity: 0;
    transform: translateX(-120%);
  }
  100% {
    opacity: 1;
    transform: translateX(0%);
  }
`
