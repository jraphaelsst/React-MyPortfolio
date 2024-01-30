import { useEffect, useState } from 'react'

import {
  Title,
  Topic,
  TopicDescription,
  TopicsContainer,
  TopicTitle
} from './styles'

import visibleInViewport from '../../utils/VisibleInViewport'

import Hexagon from '../Hexagon'

type Props = {
  topic: 'backend' | 'frontend'
}

function Topics({ topic }: Props) {
  const [animateBackTitleClass, setAnimateBackTitleClass] = useState('')
  const [animateFrontTitleClass, setAnimateFrontTitleClass] = useState('')

  const [animateBackIcon1Class, setAnimateBackIcon1Class] = useState('')
  const [animateBackIcon2Class, setAnimateBackIcon2Class] = useState('')
  const [animateBackIcon3Class, setAnimateBackIcon3Class] = useState('')
  const [animateBackIcon4Class, setAnimateBackIcon4Class] = useState('')

  const [animateFrontIcon1Class, setAnimateFrontIcon1Class] = useState('')
  const [animateFrontIcon2Class, setAnimateFrontIcon2Class] = useState('')
  const [animateFrontIcon3Class, setAnimateFrontIcon3Class] = useState('')
  const [animateFrontIcon4Class, setAnimateFrontIcon4Class] = useState('')

  useEffect(() => {
    const handleScroll = () => {
      const backTitle = document.getElementById('backTopicTitle')
      const frontTitle = document.getElementById('frontTopicTitle')

      const backIcon1El = document.getElementById('backIcon1')
      const backIcon2El = document.getElementById('backIcon2')
      const backIcon3El = document.getElementById('backIcon3')
      const backIcon4El = document.getElementById('backIcon4')

      const frontIcon1El = document.getElementById('frontIcon1')
      const frontIcon2El = document.getElementById('frontIcon2')
      const frontIcon3El = document.getElementById('frontIcon3')
      const frontIcon4El = document.getElementById('frontIcon4')

      backTitle && visibleInViewport(backTitle, true)
        ? setAnimateBackTitleClass('backTopicTitle')
        : setAnimateBackTitleClass('')
      frontTitle && visibleInViewport(frontTitle, true)
        ? setAnimateFrontTitleClass('frontTopicTitle')
        : setAnimateFrontTitleClass('')

      backIcon1El && visibleInViewport(backIcon1El, true)
        ? setAnimateBackIcon1Class('flipIcon')
        : setAnimateBackIcon1Class('')
      backIcon2El && visibleInViewport(backIcon2El, true)
        ? setAnimateBackIcon2Class('flipIcon')
        : setAnimateBackIcon2Class('')
      backIcon3El && visibleInViewport(backIcon3El, true)
        ? setAnimateBackIcon3Class('flipIcon')
        : setAnimateBackIcon3Class('')
      backIcon4El && visibleInViewport(backIcon4El, true)
        ? setAnimateBackIcon4Class('flipIcon')
        : setAnimateBackIcon4Class('')

      frontIcon1El && visibleInViewport(frontIcon1El, true)
        ? setAnimateFrontIcon1Class('flipIcon')
        : setAnimateFrontIcon1Class('')
      frontIcon2El && visibleInViewport(frontIcon2El, true)
        ? setAnimateFrontIcon2Class('flipIcon')
        : setAnimateFrontIcon2Class('')
      frontIcon3El && visibleInViewport(frontIcon3El, true)
        ? setAnimateFrontIcon3Class('flipIcon')
        : setAnimateFrontIcon3Class('')
      frontIcon4El && visibleInViewport(frontIcon4El, true)
        ? setAnimateFrontIcon4Class('flipIcon')
        : setAnimateFrontIcon4Class('')
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])
  return (
    <>
      {topic === 'backend' ? (
        <>
          <Title id="backTopicTitle" className={animateBackTitleClass}>
            My Back-end
          </Title>
          <TopicsContainer>
            <Topic id="backIcon1">
              <Hexagon
                className={animateBackIcon1Class}
                icon="fa-solid fa-bolt fa-3x"
              />
              <TopicTitle>Performatic</TopicTitle>
              <TopicDescription>
                Efficient processing and communication with Front-end, fast
                responses is a must
              </TopicDescription>
            </Topic>
            <Topic id="backIcon2">
              <Hexagon
                className={animateBackIcon2Class}
                icon="fa-solid fa-chart-simple fa-3x"
              />
              <TopicTitle>Scalable</TopicTitle>
              <TopicDescription>
                I design servers that can have any size without losing
                efficiency
              </TopicDescription>
            </Topic>
            <Topic id="backIcon3">
              <Hexagon
                className={animateBackIcon3Class}
                icon="fa-solid fa-database fa-3x"
              />
              <TopicTitle>Secure</TopicTitle>
              <TopicDescription>
                My highest priority is to protect the stored data
              </TopicDescription>
            </Topic>
            <Topic id="backIcon4">
              <Hexagon
                className={animateBackIcon4Class}
                icon="fa-solid fa-diagram-project fa-3x"
              />
              <TopicTitle>RESTful</TopicTitle>
              <TopicDescription>
                My servers communicate based on RESTful APIs, following web
                standard patterns
              </TopicDescription>
            </Topic>
          </TopicsContainer>
        </>
      ) : (
        <>
          <Title id="frontTopicTitle" className={animateFrontTitleClass}>
            My Front-end
          </Title>
          <TopicsContainer id="frontIconsContainer">
            <Topic id="frontIcon1">
              <Hexagon
                className={animateFrontIcon1Class}
                icon="fa-solid fa-gauge-high fa-3x"
              />
              <TopicTitle>Fast</TopicTitle>
              <TopicDescription>
                Fast load times and lag free interaction, one of my main
                priorities
              </TopicDescription>
            </Topic>
            <Topic id="frontIcon2">
              <Hexagon
                className={animateFrontIcon2Class}
                icon="fa-solid fa-display fa-3x"
              />
              <TopicTitle>Responsive</TopicTitle>
              <TopicDescription>
                My layouts will work on any device, big or small
              </TopicDescription>
            </Topic>
            <Topic id="frontIcon3">
              <Hexagon
                className={animateFrontIcon3Class}
                icon="fa-solid fa-lightbulb fa-3x"
              />
              <TopicTitle>Intuitive</TopicTitle>
              <TopicDescription>
                Strong preference for easy to use, intuitive UX/UI
              </TopicDescription>
            </Topic>
            <Topic id="frontIcon4">
              <Hexagon
                className={animateFrontIcon4Class}
                icon="fa-solid fa-rocket fa-3x"
              />
              <TopicTitle>Dinamic</TopicTitle>
              <TopicDescription>
                Websites don&rsquo;t have to be static, I love making pages come
                to life
              </TopicDescription>
            </Topic>
          </TopicsContainer>
        </>
      )}
    </>
  )
}

export default Topics
