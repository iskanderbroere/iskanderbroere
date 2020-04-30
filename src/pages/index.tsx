import React from "react"
import Head from "next/head"
import { HorizontalRule } from "../components/HorizontalRule"
import { ExternalLink } from "../components/Link"
import { ListItem } from "../components/ListItem"
import { UnorderedList } from "../components/UnorderedList"
import { concat, uniq } from "ramda"

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

      <main>
        <h2>
          hi, we&apos;re in an <em>elevator</em>, this is my <em>pitch</em>, i
        </h2>
        <h3>write</h3>
        <p>
          modern web applications @{" "}
          <ExternalLink href="https://www.frontmen.nl" important>
            Frontmen
          </ExternalLink>
        </p>
        <h3>use</h3>
        <UnorderedList>
          {useList.map((item) => (
            <ListItem inline key={item}>
              {item}
            </ListItem>
          ))}
        </UnorderedList>
        <h3>like</h3>
        <UnorderedList>
          {likeList.map((item) => (
            <ListItem inline key={item}>
              {item}
            </ListItem>
          ))}
        </UnorderedList>
        <HorizontalRule />
        <p>
          <em>
            Eager to learn, always seeking to improve, perfectionistic yet
            practical, that&#39;s who I am.
          </em>
        </p>
      </main>
    </>
  )
}

export default IndexPage
