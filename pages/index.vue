<template>
  <main>
    <h2>hi, we're in an <em>elevator</em>, this is my <em>pitch</em>, i</h2>
    <h3>write</h3>
    <p>
      modern front-end web applications @
      <i-link to="https://www.frontmen.nl" external important>
        Frontmen
      </i-link>
    </p>
    <h3>use</h3>
    <i-unordered-list :items="useList" inline>
      <template slot-scope="{ item }">
        {{ item }}
      </template>
    </i-unordered-list>
    <h3>like</h3>
    <i-unordered-list :items="likeList" inline>
      <template slot-scope="{ item }">
        {{ item }}
      </template>
    </i-unordered-list>
    <i-hr />
    <p>
      <em
        >Eager to learn, always seeking to improve, perfectionistic yet
        practical, that is who I am.</em
      >
      Still reading? Hit me up!
    </p>
    <address>
      <i-link to="mailto:iskanderbroere@gmail.com" important external>
        iskanderbroere@gmail.com
      </i-link>
    </address>
  </main>
</template>

<script>
import ILink from "~/components/ILink"
import IUnorderedList from "~/components/IUnorderedList"
import IHr from "~/components/IHorizontalRule"

export default {
  components: {
    ILink,
    IUnorderedList,
    IHr
  },
  created() {
    this.useList = [
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
      "CSSinJS",
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
      "GitHub"
    ]
    this.likeList = [
      "Performance 🚀",
      "PWAs",
      "CI",
      "Static site generators",
      "Decoupled applications",
      "Serverless functions"
    ]
  }
}
</script>
