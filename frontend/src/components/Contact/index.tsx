import { useEffect, useState } from 'react'

import visibleInViewport from '../../utils/VisibleInViewport'

import {
  ArrowIcon,
  Button,
  Container,
  Form,
  IconDiv,
  Input,
  SectionTitle,
  Subtitle,
  Textarea,
  TitleContainer,
  Underline
} from './styles'

const Contact = () => {
  // Scroll Effect on "Banner-scroll" button click
  useEffect(() => {
    const bannerSection = document.getElementById('banner-section')
    const scrollBanner = () => {
      bannerSection
        ? bannerSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
            inline: 'nearest'
          })
        : bannerSection
    }

    // Declare scroll-banner-button
    const button = document.getElementById('scroll-banner-button')
    if (button) {
      button.addEventListener('click', scrollBanner)
    }

    return () => {
      if (button) {
        // Clears
        button.removeEventListener('click', scrollBanner)
      }
    }
  }, [])

  const [animateSectionTitleClass, setAnimateSectionTitleClass] = useState('')
  const [animateUnderlineClass, setAnimateUnderlineClass] = useState('')
  const [animateSubtitleClass, setAnimateSubtitleClass] = useState('')
  const [animateFormClass, setAnimateFormClass] = useState('')
  const [animateFormButtonClass, setAnimateFormButtonClass] = useState('')
  const [animateBannerScrollButtonClass, setAnimateBannerScrollButtonClass] =
    useState('')

  useEffect(() => {
    const handleScroll = () => {
      const sectionTitleEl = document.getElementById('contactSectionTitle')
      const underlineEl = document.getElementById('contactUnderline')
      const subtitleEl = document.getElementById('contactSubtitle')
      const formEl = document.getElementById('messageForm')
      const formButtonEl = document.getElementById('formButton')
      const bannerScrollButtonEl = document.getElementById(
        'scroll-banner-button'
      )

      sectionTitleEl && visibleInViewport(sectionTitleEl, true)
        ? setAnimateSectionTitleClass('fadeInContactTitle')
        : setAnimateSectionTitleClass('')

      underlineEl && visibleInViewport(underlineEl, true)
        ? setAnimateUnderlineClass('fadeInContactUnderline')
        : setAnimateUnderlineClass('')

      subtitleEl && visibleInViewport(subtitleEl, true)
        ? setAnimateSubtitleClass('fadeInContactSubtitle')
        : setAnimateSubtitleClass('')

      formEl && visibleInViewport(formEl, true)
        ? setAnimateFormClass('slideInputField')
        : setAnimateFormClass('')

      formButtonEl && visibleInViewport(formButtonEl, true)
        ? setAnimateFormButtonClass('fadeInFormButton')
        : setAnimateFormButtonClass('')

      bannerScrollButtonEl && visibleInViewport(bannerScrollButtonEl, true)
        ? setAnimateBannerScrollButtonClass('fadeInBannerScrollButton')
        : setAnimateBannerScrollButtonClass('')
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.addEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <Container id="contact-section">
      <TitleContainer>
        <SectionTitle
          id="contactSectionTitle"
          className={animateSectionTitleClass}
        >
          CONTACT
        </SectionTitle>
        <Underline id="contactUnderline" className={animateUnderlineClass} />
      </TitleContainer>
      <Subtitle id="contactSubtitle" className={animateSubtitleClass}>
        Have questions or want to work together?
      </Subtitle>
      <Form id="messageForm">
        <Input
          id="name"
          type="text"
          placeholder="Name"
          className={animateFormClass}
        />
        <Input
          id="email"
          type="email"
          placeholder="Enter email"
          className={animateFormClass}
        />
        <Textarea
          id="message"
          className={animateFormClass}
          cols={30}
          rows={10}
          placeholder="Type message here..."
          form="messageForm"
        />
        <div>
          <Button
            id="formButton"
            className={animateFormButtonClass}
            type="submit"
          >
            Send
          </Button>
        </div>
      </Form>
      <IconDiv
        id="scroll-banner-button"
        className={animateBannerScrollButtonClass}
      >
        <ArrowIcon className="fa fa-angles-up fa-2x" />
      </IconDiv>
    </Container>
  )
}

export default Contact
