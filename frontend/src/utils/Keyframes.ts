import { keyframes } from 'styled-components'

export const fadeOut = keyframes`
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`

export const slideInRightTitle = keyframes`
  0% {
    opacity: 0;
    transform: translate(-200%, 0);
  }
  100% {
    transform: translate(0%, 0%);
    opacity: 1;
  }
`

export const slideInRightUnderline = keyframes`
  0% {
    transform: translate(-300%, 0);
    opacity: 0;
  }
  100% {
    transform: translate(0%, 0%);
    opacity: 1;
  }
`

export const slideInLeftTitle = keyframes`
  0% {
    transform: translate(200%, 0);
    opacity: 0;
  }
  100% {
    transform: translate(0%, 0%);
    opacity: 1;
  }
`

export const slideInLeftUnderline = keyframes`
  0% {
    transform: translate(300%, 0);
    opacity: 0;
  }
  100% {
    transform: translate(0%, 0%);
    opacity: 1;
  }
`
