import React from "react"
import Head from "next/head"
import { uniq } from "ramda"
import { ExternalLink, Heading, ListItem, UnorderedList } from "../components"

const projects = [
  {
    name: "Personal website",
    tags: ["Next.js", "Preact", "Typescript", "Netlify"],
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
const uniqueTags = uniq(allTags)

function ProjectPage() {
  return (
    <>
      <Head>
        <title>Iskander Broere - Projects</title>
        <meta content={uniqueTags.join(", ")} name="keywords" />
      </Head>

      <>
        <Heading as="h1" level={1}>
          Projects
        </Heading>
        <UnorderedList>
          {projects.map(({ name, link = null, tags }) => (
            <ListItem key={name}>
              {link ? (
                <Heading as="h2" level={2}>
                  <ExternalLink href={link}>{name}</ExternalLink>
                </Heading>
              ) : (
                <Heading as="h2" level={2}>
                  {name}
                </Heading>
              )}
              <UnorderedList>
                {tags.map((tag) => (
                  <ListItem inline key={tag}>
                    {tag}
                  </ListItem>
                ))}
              </UnorderedList>
            </ListItem>
          ))}
        </UnorderedList>
      </>
    </>
  )
}

export default ProjectPage
