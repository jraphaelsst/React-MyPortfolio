import {
  Title,
  Topic,
  TopicDescription,
  TopicsContainer,
  TopicTitle
} from './styles'

import Hexagon from '../Hexagon'

type Props = {
  topic: 'backend' | 'frontend'
}

function Topics({ topic }: Props) {
  return (
    <>
      {topic === 'backend' ? (
        <>
          <Title>My Back-ends</Title>
          <TopicsContainer>
            <Topic>
              <Hexagon icon="fa-solid fa-bolt fa-3x" />
              <TopicTitle>Performatic</TopicTitle>
              <TopicDescription>
                Efficient processing and communication with Front-end, fast
                responses is a must
              </TopicDescription>
            </Topic>
            <Topic>
              <Hexagon icon="fa-solid fa-chart-simple fa-3x" />
              <TopicTitle>Scalable</TopicTitle>
              <TopicDescription>
                I design servers that can have any size without losing
                efficiency
              </TopicDescription>
            </Topic>
            <Topic>
              <Hexagon icon="fa-solid fa-database fa-3x" />
              <TopicTitle>Secure</TopicTitle>
              <TopicDescription>
                My highest priority is to protect the stored data
              </TopicDescription>
            </Topic>
            <Topic>
              <Hexagon icon="fa-solid fa-diagram-project fa-3x" />
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
          <Title>My Front-ends</Title>
          <TopicsContainer>
            <Topic>
              <Hexagon icon="fa-solid fa-gauge-high fa-3x" />
              <TopicTitle>Fast</TopicTitle>
              <TopicDescription>
                Fast load times and lag free interaction, one of my main
                priorities
              </TopicDescription>
            </Topic>
            <Topic>
              <Hexagon icon="fa-solid fa-display fa-3x" />
              <TopicTitle>Responsive</TopicTitle>
              <TopicDescription>
                My layouts will work on any device, big or small
              </TopicDescription>
            </Topic>
            <Topic>
              <Hexagon icon="fa-solid fa-lightbulb fa-3x" />
              <TopicTitle>Intuitive</TopicTitle>
              <TopicDescription>
                Strong preference for easy to use, intuitive UX/UI
              </TopicDescription>
            </Topic>
            <Topic>
              <Hexagon icon="fa-solid fa-rocket fa-3x" />
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
