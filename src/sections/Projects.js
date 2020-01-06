import React from "react"
import styled from "styled-components"
import { useStaticQuery } from "gatsby"
import { BodyText, Trafalgar } from "../shared/Typography"
import { Box } from "../shared/Box"
import SectionCanon from "../shared/SectionCanon"
import { TextIconLink } from "../shared/TextIconLink"
import { Icon } from "../shared/Icon"

const List = styled(Box).attrs({ as: "ul" })`
  list-style: none;
  padding: 0;
`

const Projects = () => {
  const {
    dataJson: { projects },
  } = useStaticQuery(query)

  return (
    <Box as="section">
      <SectionCanon>Best Projects</SectionCanon>
      {projects.map(({ title, role, description, webistes, subprojects }) => (
        <Box mb={["regular", "regular", "regular", "regular"]}>
          <Box mb={["small", "small", "small", "small"]}>
            <Trafalgar textStyle="bold" mb={["xsmall", "xsmall", "xsmall", "xsmall"]}>
              {title}
            </Trafalgar>
            <BodyText className="light" mb={["xsmall", "xsmall", "xsmall", "xsmall"]}>
              {role}
            </BodyText>
            <BodyText>{description}</BodyText>
            <List mt={["xsmall", "xsmall", "xsmall", "xsmall"]}>
              {webistes.map(({ icon, url }) => (
                <li>
                  <TextIconLink rel="noopener noreferrer" target="_blank" href={url}>
                    <Icon className={icon} />
                    {url}
                  </TextIconLink>
                </li>
              ))}
            </List>
          </Box>

          {subprojects.map(({ title, description, webistes }) => (
            <Box mb={["small", "small", "small", "small"]}>
              <BodyText as="h4" textStyle="bold" mb={["xsmall", "xsmall", "xsmall", "xsmall"]}>
                {title}
              </BodyText>
              <BodyText>{description}</BodyText>
              <List mt={["xsmall", "xsmall", "xsmall", "xsmall"]}>
                {webistes.map(({ icon, url }) => (
                  <li>
                    <TextIconLink rel="noopener noreferrer" target="_blank" href={url}>
                      <Icon className={icon} />
                      {url}
                    </TextIconLink>
                  </li>
                ))}
              </List>
            </Box>
          ))}
        </Box>
      ))}
    </Box>
  )
}

export default Projects

export const query = graphql`
  query {
    dataJson {
      projects {
        title
        role
        description
        webistes {
          url
          icon
        }
        subprojects {
          title
          description
          webistes {
            url
            icon
          }
        }
      }
    }
  }
`
