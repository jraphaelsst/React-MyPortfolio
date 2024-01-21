import { styled } from 'styled-components'

import { color } from '../styles'

export const SkillsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 90%;
  margin: 24px 0 32px 0;
`

export const Subtitle = styled.h2`
  font-weight: 500;
  letter-spacing: 1.2px;
  text-align: center;
  margin-bottom: 56px;
`

export const Languages = styled.div``

export const Frameworks = styled.div`
  margin-left: 24px;
`

export const SoftSkills = styled.div``

export const Items = styled.ul`
  margin-top: 24px;
`

export const Item = styled.li`
  display: block;
  margin-bottom: 42px;
  width: 100%;
  align-items: center;
`

export const Tag = styled.p`
  font-weight: 400;
  font-size: 18px;
  letter-spacing: 0.8px;
  margin-bottom: 8px;
`

export const ProgressBar = styled.div`
  progress[value] {
    appearance: none;
    width: 75%;
    margin-right: 8px;
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
