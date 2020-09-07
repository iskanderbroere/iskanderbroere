import React from "react"
import Head from "next/head"
import { concat, uniq } from "ramda"
import {
  ExternalLink,
  Heading,
  HorizontalRule,
  ListItem,
  UnorderedList,
} from "../components"

const useList = [
  "JavaScript",
  "HTML",
  "CSS",
  "GraphQL",
  "Markdown",
  "MongoDB",
  "PostgreSQL",
  "Vue.js",
  "React",
  "Express",
  "PostCSS",
  "SCSS",
  "CSS in JS",
  "Material Design",
  "Bootstrap 4",
  "Apollo GraphQL",
  "Webpack",
  "Yarn",
  "NPM",
  "Prettier",
  "ESLint",
  "Stylelint",
  "VSCode",
  "Netlify",
  "GitHub",
]

const likeList = [
  "React",
  "Vue.js",
  "Typescript",
  "GraphQL",
  "Performance",
  "PWAs",
  "CI & CD",
  "Static site generators",
]

const allListItems = concat(useList, likeList)
const uniqueListItems = uniq(allListItems)

function IndexPage() {
  return (
    <>
      <Head>
        <title>Iskander Broere</title>
        <meta content={uniqueListItems.join(", ")} name="keywords" />
      </Head>

      <>
        <Heading as="h1" level={1} className="mb-4">
          hi, we&apos;re in an <em>elevator</em>, this is my <em>pitch</em>, i
        </Heading>
        <article className="mb-4">
          <Heading as="h2" level={2} className="mb-1">
            write
          </Heading>
          <p>
            modern web applications @{" "}
            <ExternalLink href="https://www.frontmen.nl" important>
              Frontmen
            </ExternalLink>
          </p>
        </article>
        <article className="mb-4">
          <Heading as="h2" level={2} className="mb-1">
            use
          </Heading>
          <UnorderedList>
            {useList.map((item) => (
              <ListItem inline key={item}>
                {item}
              </ListItem>
            ))}
          </UnorderedList>
        </article>
        <article className="mb-4">
          <Heading as="h2" level={2} className="mb-1">
            like
          </Heading>
          <UnorderedList>
            {likeList.map((item) => (
              <ListItem inline key={item}>
                {item}
              </ListItem>
            ))}
          </UnorderedList>
        </article>
        <p className="italic">
          Eager to learn, always seeking to improve, perfectionistic yet
          practical, that&#39;s who I am.
        </p>
      </>
    </>
  )
}

export default IndexPage
