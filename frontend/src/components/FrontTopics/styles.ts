import { styled } from 'styled-components'
import { breakpoints } from '../../styles'

export const TopicsContainer = styled.ul`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  margin: 32px 0 68px 0;

  @media (max-width: ${breakpoints.tablet}) {
    grid-template-columns: 1fr 1fr;
    row-gap: 36px;
    justify-items: center;
  }

  @media (max-width: ${breakpoints.smartphone}) {
    grid-template-columns: 1fr;
  }
`

export const Topic = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  max-width: 260px;
`

export const TopicTitle = styled.h3`
  font-size: 20px;
  margin: 15px 0 10px 0;
`

export const TopicDescription = styled.p`
  max-width: 90%;
  text-align: center;
  letter-spacing: 0.8px;
  line-height: 20px;
  font-size: 15px;
`
