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

import image from '../../media/97398844.jpeg'

import { color } from '../../styles'
import BackTopics from '../BackTopics'
import Container from '../Container'
import FrontTopics from '../FrontTopics'

const About = () => {
  // const userUrl = 'https://api.github.com/users/jraphaelsst'

  // const [avatar, setAvatar] = useState('')

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

  return (
    <Container
      id="about-section"
      title="ABOUT"
      style={{ backgroundColor: `${color.bgPrimary}` }}
    >
      <>
        <AboutContainer>
          <Presentation>
            <Image src={image} />
            <Icons>
              <Icon>
                <a href="">
                  <i className="fa-brands fa-github fa-2x" />
                </a>
              </Icon>
              <Icon>
                <a href="">
                  <i className="fa-brands fa-whatsapp fa-2x" />
                </a>
              </Icon>
              <Icon>
                <a href="">
                  <i className="fa-brands fa-instagram fa-2x" />
                </a>
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
                for writing performatic, well designed architectures, secure
                database structures and scripting algorithms.
              </Text>
              <Text>
                And as if it couldn&rsquo;t be forgotten, I love giving my
                servers a beautiful face being considerative for UI effects,
                animations and creating intuitive, dynamic user experiences.
              </Text>
            </Texts>
          </Presentation>
          <Title>How&rsquo;s my Back-end?</Title>
          <BackTopics />
          <Title>How&rsquo;s my Front-end?</Title>
          <FrontTopics />
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
