import { styled } from 'styled-components'

import { breakpoints, color } from '../../styles'
import {
  fadeInButton,
  fadeInSubtitle,
  fadeInTitle,
  fadeInUnderline
} from './keyframes'
import { slideInLeftTitle, slideInRightTitle } from '../../utils/Keyframes'

export const Container = styled.section`
  height: fit-content;
  background-color: ${color.primary};
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: -1px -1px 8px rgba(0, 0, 0, 0.3);
  position: relative;
  padding-top: 24px;
  width: 100%;
`

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 64px 0 36px 0;
`

export const SectionTitle = styled.h1`
  font-size: 38px;
  margin-bottom: 10px;
  color: ${color.fontAlternative};
  font-family: Roboto, sans-serif;
  opacity: 0;

  &.fadeInContactTitle {
    animation: ${fadeInTitle} 0.8s ease-out forwards;
  }
`

export const Underline = styled.div`
  width: 65px;
  border-top: 4px solid ${color.fontAlternative};
  opacity: 0;

  &.fadeInContactUnderline {
    animation: ${fadeInUnderline} 0.8s ease-out forwards;
    animation-delay: 0.3s;
  }
`

export const Subtitle = styled.div`
  color: ${color.secondary};
  margin-bottom: 64px;
  opacity: 0;

  &.fadeInContactSubtitle {
    animation: ${fadeInSubtitle} 1.2s ease-in-out forwards;
    animation-delay: 0.2s;
  }
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 12px;
  margin: 18px 0 100px 0;
  width: 380px;

  > div {
    display: flex;
    position: relative;
    width: 100%;
  }

  @media (max-width: ${breakpoints.smartphone}) {
    width: 320px;
  }
`

export const Input = styled.input`
  background-color: ${color.main};
  border: 0.5px solid #757575;
  padding: 8px;
  border-radius: 5px;
  color: #757575;
  font-size: 16px;
  width: 100%;
  opacity: 0;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    box-shadow: 0px 0px 5px #757575;
    transform: scale(1.05);
  }

  &.slideInputField {
    &:nth-child(1) {
      animation: ${slideInRightTitle} 1.5s ease-in-out forwards;
      animation-delay: 0.3s;
    }

    &:nth-child(2) {
      animation: ${slideInLeftTitle} 1.5s ease-in-out forwards;
      animation-delay: 0.5s;
    }
  }
`

export const Textarea = styled.textarea`
  background-color: ${color.main};
  border: 0.5px solid #757575;
  padding: 8px;
  border-radius: 5px;
  color: #757575;
  font-size: 15px;
  width: 100%;
  opacity: 0;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    box-shadow: 0px 0px 5px #757575;
    transform: scale(1.05);
  }

  &.slideInputField {
    animation: ${slideInRightTitle} 1.5s ease-in-out forwards;
    animation-delay: 0.8s;
  }
`

export const Button = styled.button`
  padding: 8px;
  width: 30%;
  border-radius: 5px;
  border: 0.5px solid #757575;
  color: #757575;
  background-color: ${color.main};
  position: absolute;
  right: 0;
  opacity: 0;
  transition: all 0.3s ease;

  &:hover {
    transform: scale(0.92);
    background-color: ${color.secondary};
    color: ${color.fontAlternative};
    border-color: ${color.secondary};
  }

  &.fadeInFormButton {
    animation: ${fadeInButton} 3s ease-out forwards;
    animation-delay: 0.8s;
  }
`

export const IconDiv = styled.div`
  background-color: ${color.support};
  position: absolute;
  display: flex;
  justify-content: center;
  bottom: -22px;
  padding: 8px;
  cursor: pointer;
  opacity: 0;
  transition: all 0.3s ease;

  &:hover {
    transform: scale(0.95);
  }

  &.fadeInBannerScrollButton {
    animation: ${fadeInButton} 2.5s ease-out forwards;
    animation-delay: 0.3s;
  }
`

export const ArrowIcon = styled.i`
  color: ${color.fontAlternative};
`
