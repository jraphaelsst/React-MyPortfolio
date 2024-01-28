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

import Container from '../Container'

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
      style={{ backgroundColor: `${color.bgSecondary}` }}
    >
      <>
        <AboutContainer>
          <Presentation>
            <div>
              <Image src={image} />
              <Icons>
                <Icon>
                  <a href="https://github.com/jraphaelsst" target="blank">
                    <i className="fa-brands fa-github fa-2x" />
                  </a>
                </Icon>
                <Icon>
                  <a href="https://wa.me/+61430557622?text=Hi!" target="blank">
                    <i className="fa-brands fa-whatsapp fa-2x" />
                  </a>
                </Icon>
                <Icon>
                  <a
                    href="https://www.instagram.com/jraphaelsouza"
                    target="blank"
                  >
                    <i className="fa-brands fa-instagram fa-2x" />
                  </a>
                </Icon>
              </Icons>
            </div>
            <Title>Who&rsquo;s this guy?</Title>
            <Texts>
              <Text>
                I&rsquo;m a Full Stack Developer from Brazil currently living in
                Sydney, NSW, Aus.
              </Text>
              <Text>
                Specialized in Back-end development, I have a serious passion
                for writing performatic, well designed architectures, secure
                database structures & scripting algorithms.
              </Text>
              <Text>
                And as if it couldn&rsquo;t be forgotten, I build my Front-end
                with a pretty face, being considerative for UI effects,
                animations and creating intuitive & dynamic user experiences.
              </Text>
            </Texts>
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
