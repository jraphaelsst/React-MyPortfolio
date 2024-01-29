import { keyframes } from 'styled-components'

export const fadeInText = keyframes`
  0% {
    opacity: 0;
    transform: scale(0);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
`

export const fadeInImage = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`

export const fadeInIcons = keyframes`
  0% {
    opacity: 0;
    transform: translate(0%, 200%);
  }
  100% {
    opacity: 1;
    transform: translate(0%, 0%);
  }
`
