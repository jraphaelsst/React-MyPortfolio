import { styled } from 'styled-components'

import { color } from './styles'

import { slideInLeftTitle, slideInLeftUnderline } from './utils/Keyframes'

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 64px 0 64px 0;
`

export const SectionTitle = styled.h1`
  font-size: 38px;
  margin-bottom: 10px;
  color: ${color.fontPrimary};
  font-family: Roboto, sans-serif;
  opacity: 0;

  &.slideTopicsTitle {
    animation: ${slideInLeftTitle} 0.6s ease-out forwards;
  }
`

export const Underline = styled.div`
  width: 55%;
  border-top: 4px solid ${color.fontPrimary};
  opacity: 0;

  &.slideTopicsUnderline {
    animation: ${slideInLeftUnderline} 0.6s ease-out forwards;
    animation-delay: 0.3s;
  }
`
