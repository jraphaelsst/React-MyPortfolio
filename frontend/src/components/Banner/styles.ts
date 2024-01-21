import styled from 'styled-components'

import { color } from '../../styles'

import { bgAnimation, fadeInButton, fadeInText } from './keyframes'

export const Container = styled.section`
  width: 100%;
  height: 100vh;
  background: linear-gradient(
    315deg,
    rgb(0, 0, 0) 10%,
    rgba(20, 40, 80, 0.7) 100%
  );
  background-size: 400% 400%;
  animation: ${bgAnimation} 6s ease-in-out infinite;

  display: flex;
  align-items: center;
  justify-content: center;
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${color.fontAlternative};
`

export const Text = styled.p`
  text-align: center;
  font-size: 36px;
  margin-bottom: 18px;
  animation: ${fadeInText} 0.8s ease-in;
`

export const Name = styled.span`
  color: ${color.support};
`

export const ArrowIcon = styled.i`
  transition: all 0.65s ease-out;
  margin-left: 4px;

  @media (max-width: 400px) {
    transform: rotate(90deg);
  }
`

export const Button = styled.div`
  width: fit-content;
  padding: 12px;
  font-size: 18px;
  border: 1px solid ${color.fontAlternative};
  margin-top: 16px;
  transition: rotate 0.65s;
  cursor: pointer;
  animation: ${fadeInButton} 1.6s ease-out;
  transform: translate(0%, 0%);

  &:hover {
    border: 1px solid ${color.terciary};
    background-color: ${color.terciary};
  }

  &:hover ${ArrowIcon} {
    transform: rotate(90deg);
  }
`
