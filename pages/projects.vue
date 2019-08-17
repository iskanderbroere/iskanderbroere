<template>
  <main>
    <h2>Projects</h2>
    <i-unordered-list :items="projects" item-key="name">
      <template slot-scope="{ item: { name, link = null, tags } }">
        <h3 v-if="link">
          <i-link :to="link" external>{{ name }}</i-link>
        </h3>
        <h3 v-else>{{ name }}</h3>
        <i-unordered-list :items="tags" inline>
          <template slot-scope="{ item }">
            {{ item }}
          </template>
        </i-unordered-list>
      </template>
    </i-unordered-list>
  </main>
</template>

<script>
import IUnorderedList from "~/components/IUnorderedList"
import IListItem from "~/components/IListItem"
import ILink from "~/components/ILink"

const projects = [
  {
    name: "Personal website",
    tags: ["Vue.js", "Nuxt", "Netlify", "SSG", "PostCSS"]
  },
  {
    name: "Corporate projects",
    tags: [
      "React",
      "Next",
      "Redux",
      "Apollo GraphQL",
      "SSR",
      "Material-UI",
      "CSS-in-JS",
      "Webpack",
      "Express",
      "Docker",
      "Kubernetes",
      "Azure DevOps"
    ]
  },
  {
    name: "Depoclaim",
    link: "https://depoclaim.com",
    tags: [
      "Vue.js",
      "Nuxt",
      "Netlify",
      "SSG",
      "Contentful",
      "Bootstrap 4",
      "Markdown"
    ]
  },
  {
    name: "Mátyás Bittenbinder",
    link: "https://mbittenbinder.com",
    tags: ["Vue.js", "Nuxt", "Netlify", "SSG", "Contentful", "Bootstrap 4"]
  },
  {
    name: "Jolien Wesselink",
    link: "https://jolienwesselink.nl",
    tags: [
      "Vue.js",
      "Nuxt",
      "Netlify",
      "SSG",
      "Contentful",
      "Bootstrap 4",
      "Markdown"
    ]
  }
]

export default {
  components: {
    IUnorderedList,
    IListItem,
    ILink
  },
  head() {
    return {
      meta: [
        {
          name: "keywords",
          content: projects
            .reduce((accumulator, { tags }) => accumulator.concat(tags), [])
            .join(", ")
        }
      ]
    }
  },
  created() {
    // set non reactive static data
    // https://github.com/vuejs/vue/issues/6004
    this.projects = projects
  }
}
</script>
