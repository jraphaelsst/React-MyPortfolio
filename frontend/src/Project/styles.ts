import { styled } from 'styled-components'

import { color } from '../styles'

export const ProjectCard = styled.div`
  border: 1px solid ${color.fontPrimary};
  width: 100%;
  height: 250px;
  padding: 16px;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  transition: all 0.5s ease;
  background-color: ${color.bgSecondary};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 4px;

  &:hover {
    transform: scale(1.09);
    box-shadow: 7px 8px 10px rgba(0, 0, 0, 0.3);
  }
`

export const CardTitle = styled.h3`
  margin: 16px 0 24px;
  color: ${color.fontPrimary};
  font-size: 24px;
  text-transform: capitalize;
`

export const CardDescription = styled.p`
  margin-bottom: 24px;
  font-weight: 500;
  font-size: 14.5px;
  line-height: 20px;
  letter-spacing: 0.6px;
  color: ${color.fontSecondary};
`

export const Tech = styled.p`
  margin-top: 24px;
  margin-left: 14px;
  margin-bottom: 12px;
  font-weight: 600;
  font-size: 18px;
  display: flex;
  align-items: center;
  color: ${color.fontSecondary};

  span {
    margin-left: 4px;
    font-weight: 500;
    font-size: 15px;
  }
`
