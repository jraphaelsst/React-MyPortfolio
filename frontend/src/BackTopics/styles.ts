import { styled } from 'styled-components'

export const TopicsContainer = styled.ul`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  margin: 36px 0;
  z-index: 0;
`

export const Topic = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  max-width: 260px;
  z-index: 0;
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
