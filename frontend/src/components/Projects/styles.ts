import { styled } from 'styled-components'
import { breakpoints } from '../../styles'

export const ProjectsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 36px;
  width: 80%;
  padding: 8% 8%;
  text-align: center;
  margin-bottom: 48px;

  @media (max-width: ${breakpoints.tablet}) {
    grid-template-columns: 1fr;
    justify-items: center;
  }
`
