import { keyframes } from 'styled-components'

export const fadeInCopyright = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`

export const fadeInFooterIcon = keyframes`
  0% {
    opacity: 0;
    transform: translate(0%, -200%);
  }
  100% {
    opacity: 1;
    transform: translate(0%, 0%);
  }
`
