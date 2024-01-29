import { styled } from 'styled-components'

import { fadeInIcons, fadeInImage, fadeInText } from './keyframes'

import { slideInRightTitle, slideInRightUnderline } from '../../utils/Keyframes'

import { color } from '../../styles'

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 64px 0 64px 0;
`

export const SectionTitle = styled.h1`
  font-size: 38px;
  margin-bottom: 10px;
  color: ${color.fontPrimary};
  font-family: Roboto, sans-serif;
  opacity: 0;

  &.slideAboutTitle {
    animation: ${slideInRightTitle} 0.6s ease-out forwards;
  }
`

export const Underline = styled.div`
  width: 55%;
  border-top: 4px solid ${color.fontPrimary};
  opacity: 0;

  &.slideAboutUnderline {
    animation: ${slideInRightUnderline} 0.6s ease-out forwards;
    animation-delay: 0.3s;
  }
`

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

export const Icons = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 16px;
`

export const Icon = styled.div`
  margin: 0 8px 0 8px;
  color: ${color.fontPrimary};
  cursor: pointer;
  opacity: 0;

  &:hover {
    transform: scale(1.15);
  }

  &.fadeInIcon {
    animation: ${fadeInIcons} 1s ease-in-out forwards;

    &:nth-child(1) {
      animation-delay: 0.3s;
    }

    &:nth-child(2) {
      animation-delay: 0.6s;
    }

    &:nth-child(3) {
      animation-delay: 0.9s;
    }
  }
`

export const Image = styled.img`
  height: 200px;
  width: 200px;
  border-radius: 200px;
  opacity: 0;

  &.fadeInImage {
    animation: ${fadeInImage} 1.2s ease-in-out forwards;
    animation-delay: 0.5s;
  }
`

export const Title = styled.h2`
  margin: 56px 0 20px 0;
  font-weight: 600;
  letter-spacing: 1.2px;
  opacity: 0;

  &.fadeInAboutTitle {
    animation: ${fadeInText} 1.5s ease-in-out forwards;
    animation-delay: 0.3s;
  }
`

export const Texts = styled.div`
  display: block;
  margin: 8px 0 92px 0;
`

export const Text = styled.p`
  letter-spacing: 0.8px;
  line-height: 22px;
  max-width: 520px;
  margin-bottom: 16px;
  opacity: 0;

  &.fadeInFirstText {
    animation: ${fadeInText} 1.5s ease-in-out forwards;
    animation-delay: 0.5s;
  }

  &.fadeInSecondText {
    animation: ${fadeInText} 1.5s ease-in-out forwards;
    animation-delay: 0.8s;
  }

  &.fadeInThirdText {
    animation: ${fadeInText} 1.5s ease-in-out forwards;
    animation-delay: 1s;
  }
`
