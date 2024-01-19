// import { useEffect, useState } from 'react'

import {
  AboutContainer,
  Icon,
  Icons,
  Image,
  Presentation,
  Text,
  Texts,
  Title
} from './styles'

import image from '../media/97398844.jpeg'

import BackTopics from '../BackTopics'
import Container from '../Container'
import SectionHeader from '../SectionHeader'
import FrontTopics from '../FrontTopics'

// type ReposType = {
//   id: number
//   name: string
//   languages: string
//   languages_url: string
// }

// type LanguagesType = {
//   id: number
//   repos: string
//   languages: object
// }

// type LanguageType = {
//   language: string
//   size: number
// }

const About = () => {
  // const userUrl = 'https://api.github.com/users/jraphaelsst'
  // const reposUrl = 'https://api.github.com/users/jraphaelsst/repos'
  // const langUrl = 'https://api.github.com/repos/jraphaelsst/'

  // const [avatar, setAvatar] = useState('')
  // const [repos, setRepos] = useState<ReposType[]>([])

  // Get Avatar
  // useEffect(() => {
  //   try {
  //     fetch(userUrl)
  //       .then((response) => response.json())
  //       .then((res) => {
  //         setAvatar(res.avatar_url)
  //       })
  //   } catch (err) {
  //     console.log(err)
  //   }
  // }, [])

  // Get Repos
  // useEffect(() => {
  //   try {
  //     fetch(reposUrl)
  //       .then((response) => response.json())
  //       .then((res) => {
  //         setRepos(res)
  //       })
  //   } catch (err) {
  //     console.log(err)
  //   }
  // }, [])

  // Fetch Languages
  // const langs: LanguagesType[] = []

  // repos.map((repo, index) => {
  //   fetch(langUrl + repo.name + '/languages')
  //     .then((response) => response.json())
  //     .then((res) => {
  //       console.log(res)
  //       langs.push({
  //         id: index,
  //         repos: repo.name,
  //         languages: res
  //       })
  //     })
  // })

  // const getLanguage = (langs: LanguageType[]) => {
  //   const data = []

  //   langs.map((lang: LanguageType) => {
  //     data.push({
  //       language: lang['language'],
  //       size: lang['size']
  //     })
  //   })
  // }

  return (
    <Container>
      <>
        <SectionHeader title="ABOUT" />
        <AboutContainer>
          <Presentation>
            <Image src={image} />
            <Icons>
              <Icon>
                <i className="fa-brands fa-github fa-2x" />
              </Icon>
              <Icon>
                <i className="fa-brands fa-whatsapp fa-2x" />
              </Icon>
              <Icon>
                <i className="fa-brands fa-instagram fa-2x" />
              </Icon>
            </Icons>
            <Title>Who&rsquo;s this guy?</Title>
            <Texts>
              <Text>
                I&rsquo;m a Full Stack Developer from Brazil currently living in
                Sydney, NSW, Aus.
              </Text>
              <Text>
                Specialized in Back-end development, I have a serious passion
                for writing performatic, well designed and secure architectures,
                database structures and scripting algorithms.
              </Text>
              <Text>
                And as if it couldn&rsquo;t be forgotten, I love giving my
                servers a beautiful face being considerative for UI effects,
                animations and creating intuitive, dynamic user experiences.
              </Text>
            </Texts>
            <Title>How&rsquo;s my Back-end?</Title>
            <BackTopics />
            <Title>How&rsquo;s my Front-end?</Title>
            <FrontTopics />
          </Presentation>
        </AboutContainer>

        {/* <div>
          {repos.map((repo) => (
            <div key={repo.id}>
              <h3>{repo.name}</h3>
              <ul>
                {langs.map((lang) => (
                  <li key={lang.id}>{}</li>
                ))}
              </ul>
            </div>
          ))}
        </div> */}
      </>
    </Container>
  )
}

export default About
