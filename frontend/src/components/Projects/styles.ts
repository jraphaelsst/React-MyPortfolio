import { styled } from 'styled-components'

import { breakpoints, color } from '../../styles'
import { slideInLeftTitle, slideInLeftUnderline } from '../../utils/Keyframes'

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 64px 0 24px 0;
`

export const SectionTitle = styled.h1`
  font-size: 38px;
  margin-bottom: 10px;
  color: ${color.fontPrimary};
  font-family: Roboto, sans-serif;
  opacity: 0;

  &.slideProjectsTitle {
    animation: ${slideInLeftTitle} 0.6s ease-out forwards;
  }
`

export const Underline = styled.div`
  width: 55%;
  border-top: 4px solid ${color.fontPrimary};
  opacity: 0;

  &.slideProjectsUnderline {
    animation: ${slideInLeftUnderline} 0.6s ease-out forwards;
    animation-delay: 0.3s;
  }
`

export const ProjectsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 36px;
  width: 80%;
  padding: 8% 8%;
  text-align: center;
  margin-bottom: 48px;
  justify-items: center;

  @media (max-width: ${breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`
