import { styled } from 'styled-components'

import { breakpoints, color } from '../../styles'
import { slideInRightTitle, slideInRightUnderline } from '../../utils/Keyframes'

import { slideInLeft, slideInRight } from './keyframes'

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

  &.slideSkillsTitle {
    animation: ${slideInRightTitle} 0.6s ease-out forwards;
  }
`

export const Underline = styled.div`
  width: 55%;
  border-top: 4px solid ${color.fontPrimary};
  opacity: 0;

  &.slideSkillsUnderline {
    animation: ${slideInRightUnderline} 0.6s ease-out forwards;
    animation-delay: 0.3s;
  }
`

export const SkillsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10%;
  width: 80%;
  margin: 24px 0 32px 0;

  @media (max-width: ${breakpoints.tablet}) {
    grid-template-columns: 1fr;
    row-gap: 72px;
    width: 70%;
  }
`

export const Subtitle = styled.h2`
  font-weight: 500;
  letter-spacing: 1.2px;
  text-align: center;
  margin-bottom: 56px;
`

export const Languages = styled.div`
  opacity: 0;

  &.slideInRight {
    animation: ${slideInRight} 1s ease forwards;
  }
`

export const Frameworks = styled.div`
  opacity: 0;

  &.slideInLeft {
    animation: ${slideInLeft} 1s ease forwards;
  }
`

export const SoftSkills = styled.div``

export const Items = styled.ul`
  margin-top: 16px;
  text-align: center;
`

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  margin-bottom: 24px;
  justify-items: center;
  width: 100%;
`

export const Tag = styled.p`
  font-weight: 400;
  font-size: 18px;
  letter-spacing: 0.8px;
  margin-bottom: 8px;
  text-align: left;
`

export const ProgressBar1 = styled.div`
  progress[value] {
    appearance: none;
    width: 100%;
  }

  progress[value]::-webkit-progress-bar {
    height: 12px;
    background-color: #aaa;
    border-radius: 8px;
  }

  progress[value]::-webkit-progress-value {
    height: 12px;
    background-color: ${color.fontSecondary};
    border-radius: 8px;
  }
`
