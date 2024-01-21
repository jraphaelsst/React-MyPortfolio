import { Topic, TopicDescription, TopicTitle, TopicsContainer } from './styles'

import Hexagon from '../Hexagon'

const FrontTopics = () => {
  return (
    <TopicsContainer>
      <Topic>
        <Hexagon icon="fa-solid fa-gauge-high fa-3x" />
        <TopicTitle>Fast</TopicTitle>
        <TopicDescription>
          Fast load times and lag free interaction, one of my main priorities
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
          Websites don&rsquo;t have to be static, I love making pages come to
          life
        </TopicDescription>
      </Topic>
    </TopicsContainer>
  )
}

export default FrontTopics
