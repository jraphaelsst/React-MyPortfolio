import { styled } from 'styled-components'

import { breakpoints, color } from '../../styles'

export const Container = styled.section`
  height: fit-content;
  background-color: ${color.primary};
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: -1px -1px 8px rgba(0, 0, 0, 0.3);
  position: relative;
  padding-top: 24px;
`

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 64px 0 36px 0;
`

export const Title = styled.h1`
  font-size: 38px;
  margin-bottom: 10px;
  color: ${color.fontAlternative};
  font-family: Roboto, sans-serif;
`

export const Underline = styled.div`
  width: 65px;
  border-top: 4px solid ${color.fontAlternative};
`

export const Subtitle = styled.div`
  color: ${color.secondary};
  margin-bottom: 64px;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 12px;
  margin: 18px 0 80px 0;
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
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    box-shadow: 0px 0px 5px #757575;
    transform: scale(1.05);
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
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    box-shadow: 0px 0px 5px #757575;
    transform: scale(1.05);
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
  transition: all 0.3s ease;

  &:hover {
    transform: scale(0.95);
    background-color: ${color.secondary};
    color: ${color.fontAlternative};
    border-color: ${color.secondary};
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
  transition: all 0.3s ease;

  &:hover {
    transform: scale(0.95);
  }
`

export const ArrowIcon = styled.i`
  color: ${color.fontAlternative};
`
