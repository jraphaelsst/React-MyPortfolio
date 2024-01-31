import {
  CardBox,
  CardDescription,
  CardTitle,
  ProjectCard,
  ProjectContainer,
  Tech
} from './styles'

type Props = {
  id: string
  name: string
  description: string
  homepage: string
  link: string
  language: string
}

const Project = ({ id, name, description, language, link }: Props) => {
  const fw = name.split(' ')[0]
  const fw2 = name.split(' ')[1]
  const nameDone = name.split(' ').slice(1).join(' ')

  return (
    <CardBox href={link} id={id}>
      <ProjectCard>
        <ProjectContainer>
          <div>
            <CardTitle>
              {fw2 == 'React'
                ? nameDone.split(' ').slice(1).join(' ')
                : nameDone}
            </CardTitle>
            <CardDescription>{description}</CardDescription>
          </div>
          <Tech>
            Tech:{' '}
            <span>
              {language}, {fw}
              {fw2 == 'React' ? `, Javascript, ${fw2}` : ''}
            </span>
          </Tech>
        </ProjectContainer>
      </ProjectCard>
    </CardBox>
  )
}

export default Project
