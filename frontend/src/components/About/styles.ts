import { styled } from 'styled-components'

import { color } from '../../styles'

export const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
`

export const Presentation = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`

export const Icons = styled.ul`
  display: flex;
  margin-top: 16px;
`

export const Icon = styled.li`
  margin: 0 8px 0 8px;
  color: ${color.fontPrimary};
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.25);
  }
`

export const Image = styled.img`
  height: 200px;
  width: 200px;
  border-radius: 200px;
`

export const Title = styled.h2`
  margin: 72px 0 20px 0;
  font-weight: 600;
  letter-spacing: 1.2px;
`

export const Texts = styled.div`
  display: block;
  margin: 16px 0 42px 0;
`

export const Text = styled.p`
  letter-spacing: 0.8px;
  line-height: 22px;
  max-width: 520px;
  margin-bottom: 16px;
`
