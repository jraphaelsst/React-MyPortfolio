import { styled } from 'styled-components'

import { breakpoints } from '../../styles'
import { fadeInTitle } from './keyframes'

import { flipIn } from '../../utils/Keyframes'

import { Container } from '../Hexagon/styles'

export const Title = styled.h2`
  margin: 76px 0 42px 0;
  font-weight: 700;
  letter-spacing: 1.2px;
  font-size: 28px;

  &.backTopicTitle {
    animation: ${fadeInTitle} 0.5s ease-out;
  }

  &.frontTopicTitle {
    animation: ${fadeInTitle} 0.5s ease-out;
  }
`

export const Topic = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  max-width: 260px;
  z-index: 0;

  &:nth-child(1) {
    ${Container}.flipIcon {
      animation: ${flipIn} 0.5s ease forwards;
      animation-delay: 0.2s;
    }
  }

  &:nth-child(2) {
    ${Container}.flipIcon {
      animation: ${flipIn} 0.5s ease forwards;
      animation-delay: 0.3s;
    }
  }

  &:nth-child(3) {
    ${Container}.flipIcon {
      animation: ${flipIn} 0.5s ease forwards;
      animation-delay: 0.4s;
    }
  }

  &:nth-child(4) {
    ${Container}.flipIcon {
      animation: ${flipIn} 0.5s ease forwards;
      animation-delay: 0.5s;
    }
  }
`

export const TopicsContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  margin: 36px 0;
  z-index: 0;

  @media (max-width: ${breakpoints.tablet}) {
    grid-template-columns: 1fr 1fr;
    row-gap: 36px;
    justify-items: center;
  }

  @media (max-width: ${breakpoints.smartphone}) {
    grid-template-columns: 1fr;
  }
`

export const TopicTitle = styled.h3`
  font-size: 20px;
  margin: 15px 0 10px 0;
  z-index: 0;
`

export const TopicDescription = styled.p`
  max-width: 90%;
  text-align: center;
  letter-spacing: 0.8px;
  line-height: 20px;
  font-size: 15px;
  z-index: 0;
`
