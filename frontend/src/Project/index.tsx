import { CardDescription, CardTitle, ProjectCard, Tech } from './styles'

type Props = {
  name: string
  description: string
  homepage: string
  link: string
  language: string
}

const Project = ({ name, description, language, link }: Props) => {
  const fw = name.split(' ')[0]
  const fw2 = name.split(' ')[1]
  const nameDone = name.split(' ').slice(1).join(' ')

  return (
    <a href={link}>
      <ProjectCard>
        <div>
          <CardTitle>
            {fw2 == 'React' ? nameDone.split(' ').slice(1).join(' ') : nameDone}
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
      </ProjectCard>
    </a>
  )
}

export default Project
