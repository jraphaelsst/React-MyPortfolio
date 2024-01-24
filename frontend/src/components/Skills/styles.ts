import { styled } from 'styled-components'

import { breakpoints, color } from '../../styles'

export const SkillsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 72px;
  width: 90%;
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

export const Languages = styled.div``

export const Frameworks = styled.div``

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

export const ProgressBar = styled.div`
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
