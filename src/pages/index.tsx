import React from "react"
import { ExternalLink } from "../components/Link"
import { UnorderedList } from "../components/UnorderedList"
import { HorizontalRule } from "../components/HorizontalRule"
import { ListItem } from "../components/ListItem"

const useList = [
  "JavaScript",
  "HTML",
  "CSS",
  "GraphQL",
  "Markdown",
  "MongoDB",
  "PostgreSQL",
  "Vue.js 💚",
  "React",
  "Express",
  "PostCSS",
  "SCSS",
  "CSS in JS",
  "Material Design",
  "Bootstrap 4",
  "Apollo GraphQL ⭐",
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
  "Performance 🚀",
  "PWAs",
  "CI & CD",
  "Static site generators",
]

const IndexPage = () => (
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
      {useList.map(item => (
        <ListItem inline key={item}>
          {item}
        </ListItem>
      ))}
    </UnorderedList>
    <h3>like</h3>
    <UnorderedList>
      {likeList.map(item => (
        <ListItem inline key={item}>
          {item}
        </ListItem>
      ))}
    </UnorderedList>
    <HorizontalRule />
    <p>
      <em>
        Eager to learn, always seeking to improve, perfectionistic yet
        practical, that is who I am.
      </em>{" "}
      Still reading? Hit me up!
    </p>
    <address>
      <ExternalLink href="mailto:iskanderbroere@gmail.com" important>
        iskanderbroere@gmail.com
      </ExternalLink>
    </address>
  </main>
)

export default IndexPage
