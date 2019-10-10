import React from "react"
import { ExternalLink } from "../components/Link"
import { UnorderedList } from "../components/UnorderedList"
import { ListItem } from "../components/ListItem"
import { Helmet } from "react-helmet"

const projects = [
  {
    name: "Personal website",
    tags: [
      "Gatsby",
      "Preact",
      "Netlify",
      "Static site generator",
      "Styled components",
    ],
  },
  {
    name: "Corporate projects",
    tags: [
      "React",
      "Next",
      "Redux",
      "Apollo GraphQL",
      "Server-side rendering",
      "Material-UI",
      "CSS in JS",
      "Webpack",
      "Express",
      "Docker",
      "Kubernetes",
      "Azure DevOps",
    ],
  },
  {
    name: "Depoclaim",
    link: "https://depoclaim.com",
    tags: [
      "Vue.js",
      "Nuxt",
      "Netlify",
      "Static site generator",
      "Contentful",
      "Bootstrap 4",
      "Markdown",
    ],
  },
  {
    name: "Mátyás Bittenbinder",
    link: "https://mbittenbinder.com",
    tags: [
      "Vue.js",
      "Nuxt",
      "Netlify",
      "Static site generator",
      "Contentful",
      "Bootstrap 4",
    ],
  },
  {
    name: "Jolien Wesselink",
    link: "https://jolienwesselink.nl",
    tags: [
      "Vue.js",
      "Nuxt",
      "Netlify",
      "Static site generator",
      "Contentful",
      "Bootstrap 4",
      "Markdown",
    ],
  },
]

const allTags: string[] = projects.reduce(
  (accumulator, { tags }) => [...accumulator, ...tags],
  [] as string[]
)
const uniqueTags = Array.from(new Set(allTags))

const ProjectPage = () => (
  <>
    <Helmet>
      <title>Projects</title>
      <meta content={uniqueTags.join(", ")} name="keywords" />
    </Helmet>

    <main>
      <h2>Projects</h2>
      <UnorderedList>
        {projects.map(({ name, link = null, tags }) => (
          <ListItem key={name}>
            {link ? (
              <h3>
                <ExternalLink href={link}>{name}</ExternalLink>
              </h3>
            ) : (
              <h3>{name}</h3>
            )}
            <UnorderedList>
              {tags.map(tag => (
                <ListItem inline key={tag}>
                  {tag}
                </ListItem>
              ))}
            </UnorderedList>
          </ListItem>
        ))}
      </UnorderedList>
    </main>
  </>
)

export default ProjectPage
