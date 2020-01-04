import React from "react"
import { useStaticQuery } from "gatsby"
import styled from "styled-components"
import { Trafalgar } from "../shared/Typography"
import { Box } from "../shared/Box"
import { Column, Flex } from "../shared/Flex"
import SectionCanon from "../shared/SectionCanon"
import { List } from "../shared/List"

const SkillColumn = styled(Column)`
  flex: 1;
`

const Skills = () => {
  const {
    dataJson: {
      skillGroups: { workingKnowledge, basicKnowledge },
    },
  } = useStaticQuery(query)

  return (
    <Box as="section">
      <SectionCanon>Skills</SectionCanon>
      <Flex mb={["regular", "regular", "regular", "regular"]}>
        <SkillColumn>
          <Trafalgar textStyle="bold" mb={["xsmall", "xsmall", "xsmall", "xsmall"]}>
            Working knowledge
          </Trafalgar>
          <List>
            {workingKnowledge.map(item => (
              <li>{item}</li>
            ))}
          </List>
        </SkillColumn>

        <SkillColumn>
          <Trafalgar textStyle="bold" mb={["xsmall", "xsmall", "xsmall", "xsmall"]}>
            Basic knowledge
          </Trafalgar>
          <List>
            {basicKnowledge.map(item => (
              <li>{item}</li>
            ))}
          </List>
        </SkillColumn>
      </Flex>
    </Box>
  )
}

export default Skills

export const query = graphql`
  query {
    dataJson {
      skillGroups {
        basicKnowledge
        workingKnowledge
      }
    }
  }
`
