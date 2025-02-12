import React from "react"
import { Col, Row } from "react-bootstrap"
import Container from "react-bootstrap/Container"
import { Image } from "react-bootstrap"
import { PageLayout, PageTitle } from "../components"
import GitHubProject from "../components/GitHubProject"
import githublogo from "../../static/images/github-logo.png"

import SEO from "../utils/seo"

export default data => {
  const { name, githubUsername, projects } = data.pageContext
  return (
    <PageLayout>
      <SEO title={name} description={`${name}'s Portfolio`} />
      <Container className="text-center pt-5" fluid>
        <Image
          src={`https://github.com/${githubUsername}.png`}
          width="200"
          style={{ borderRadius: "50%" }}
        />

        <PageTitle title={name} />
        <a
          href={`https://github.com/${githubUsername}`}
          target="_blank"
          rel="noreferrer noopener"
        >
          <Image
            id="GithubLogo"
            width="50"
            height="50"
            fluid
            src={githublogo}
            alt={"Github Logo"}
          />
        </a>
        <Container className="text-center mt-5" fluid>
          <h3 className="mb-4">Projects</h3>
          <Row className="justify-content-md-center row-cols-md-3 row-cols-1 row-cols-sm-2">
            {projects.map((project, index) => (
              <Col
                key={index}
                style={{
                  width: "18rem",
                  marginInline: "auto",
                  marginBlockEnd: "2rem",
                }}
              >
                <GitHubProject project={project} />
              </Col>
            ))}
          </Row>
        </Container>
      </Container>
    </PageLayout>
  )
}
