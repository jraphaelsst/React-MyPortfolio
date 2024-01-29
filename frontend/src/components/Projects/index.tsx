import { useEffect, useState } from 'react'

import {
  ProjectsContainer,
  SectionTitle,
  TitleContainer,
  Underline
} from './styles'

import { color } from '../../styles'
import visibleInViewport from '../../utils/VisibleInViewport'

import Container from '../Container'
import Project from '../Project'

type ReposType = {
  id: string
  name: string
  description: string
  clone_url: string
  homepage: string
  language: string
  languages: string
  languages_url: string
}

// type LanguagesType = {
//   id: number
//   repos: string
//   languages: object
// }

// type LanguageType = {
//   language: string
//   size: number
// }

const Projects = () => {
  const reposUrl = 'https://api.github.com/users/jraphaelsst/repos'
  // const langUrl = 'https://api.github.com/repos/jraphaelsst/'

  const [repos, setRepos] = useState<ReposType[]>([])

  // Get Repos
  useEffect(() => {
    try {
      fetch(reposUrl)
        .then((response) => response.json())
        .then((res) => {
          setRepos(res)
        })
    } catch (err) {
      console.log(err)
    }
  }, [])

  // Fetch Languages
  // const langs: LanguagesType[] = []

  // repos.map((repo, index) => {
  //   fetch(langUrl + repo.name + '/languages')
  //     .then((response) => response.json())
  //     .then((res) => {
  //       langs.push({
  //         id: index,
  //         repos: repo.name,
  //         languages: res
  //       })
  //     })
  // })

  const [animateSectionTitleClass, setAnimateSectionTitleClass] = useState('')
  const [animateUnderlineClass, setAnimateUnderlineClass] = useState('')

  useEffect(() => {
    const handleScroll = () => {
      const sectionTitleEl = document.getElementById('projectsSectionTitle')
      const underlineEl = document.getElementById('projectsUnderline')

      sectionTitleEl && visibleInViewport(sectionTitleEl, true)
        ? setAnimateSectionTitleClass('slideProjectsTitle')
        : setAnimateSectionTitleClass('')

      underlineEl && visibleInViewport(underlineEl, true)
        ? setAnimateUnderlineClass('slideProjectsUnderline')
        : setAnimateUnderlineClass('')
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <Container
      id="projects-section"
      style={{ backgroundColor: `${color.bgPrimary}` }}
    >
      <>
        <TitleContainer>
          <SectionTitle
            id="projectsSectionTitle"
            className={animateSectionTitleClass}
          >
            Projects
          </SectionTitle>
          <Underline id="projectsUnderline" className={animateUnderlineClass} />
        </TitleContainer>
        <ProjectsContainer>
          {repos.map((repo) => (
            <Project
              key={repo.id}
              name={repo.name.replaceAll('-', ' ')}
              description={repo.description}
              homepage={repo.homepage}
              language={repo.language}
              link={repo.clone_url}
            />
          ))}
        </ProjectsContainer>
      </>
    </Container>
  )
}

export default Projects
