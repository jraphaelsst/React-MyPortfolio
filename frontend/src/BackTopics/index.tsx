import { Topic, TopicDescription, TopicsContainer, TopicTitle } from './styles'

import Hexagon from '../Hexagon'

const BackTopics = () => {
  return (
    <TopicsContainer>
      <Topic>
        <Hexagon icon="fa-solid fa-gauge-high fa-3x" />
        <TopicTitle>Performatic</TopicTitle>
        <TopicDescription>
          Efficient communication with Front-end, fast responses is a must
        </TopicDescription>
      </Topic>
      <Topic>
        <Hexagon icon="fa-solid fa-display fa-3x" />
        <TopicTitle>Scalable</TopicTitle>
        <TopicDescription>
          I design servers that can have any size without losing efficiency
        </TopicDescription>
      </Topic>
      <Topic>
        <Hexagon icon="fa-solid fa-lightbulb fa-3x" />
        <TopicTitle>Secure</TopicTitle>
        <TopicDescription>
          My highest priority is to protect the data stored
        </TopicDescription>
      </Topic>
      <Topic>
        <Hexagon icon="fa-solid fa-rocket fa-3x" />
        <TopicTitle>RESTful</TopicTitle>
        <TopicDescription>
          My servers communicate based on RESTful APIs, following web standard
          patterns
        </TopicDescription>
      </Topic>
    </TopicsContainer>
  )
}

export default BackTopics
