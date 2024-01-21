import {
  Frameworks,
  Item,
  Items,
  Languages,
  ProgressBar,
  SkillsContainer,
  SoftSkills,
  Subtitle,
  Tag
} from './styles'

import { color } from '../../styles'

import Container from '../Container'

const Skills = () => {
  return (
    <Container
      id="skills-section"
      title="SKILLS"
      style={{ backgroundColor: `${color.bgSecondary}` }}
    >
      <>
        <SkillsContainer>
          <Languages>
            <Subtitle>Languages</Subtitle>
            <Items>
              <Item>
                <Tag>Python</Tag>
                <ProgressBar>
                  <progress value="85" max="100" />
                  <span>85%</span>
                </ProgressBar>
              </Item>
              <Item>
                <Tag>Javascript</Tag>
                <ProgressBar>
                  <progress value="70" max="100" />
                  <span>70%</span>
                </ProgressBar>
              </Item>
            </Items>
          </Languages>
          <Frameworks>
            <Subtitle>Frameworks</Subtitle>
            <Items>
              <Item>
                <Tag>Django Rest Framework</Tag>
                <ProgressBar>
                  <progress value="90" max="100" />
                  <span>90%</span>
                </ProgressBar>
              </Item>
              <Item>
                <Tag>React.js</Tag>
                <ProgressBar>
                  <progress value="75" max="100" />
                  <span>75%</span>
                </ProgressBar>
              </Item>
            </Items>
          </Frameworks>
        </SkillsContainer>
        <SoftSkills>
          <Subtitle>Technical Skills</Subtitle>
          <Items>
            <Item></Item>
          </Items>
        </SoftSkills>
      </>
    </Container>
  )
}

export default Skills
