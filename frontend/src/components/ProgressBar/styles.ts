import { styled } from 'styled-components'

import { color } from '../../styles'

export const ProgressBarStyle = styled.div`
  display: flex;
  align-items: center;

  span {
    margin-left: 8px;
  }

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
