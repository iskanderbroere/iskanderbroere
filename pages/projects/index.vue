<template>
  <main>
    <h2>Projects</h2>
    <h3 v-if="prodProjects.length > 0">In production</h3>
    <i-unordered-list :items="prodProjects" item-key="name">
      <template slot-scope="{ item: { name, link = null, tags } }">
        <h4 v-if="link" ><i-link :to="link" external>{{ name }}</i-link></h4>
        <h4 v-else>{{ name }}</h4>
        <i-unordered-list :items="tags" inline>
          <template slot-scope="{ item }">
            {{ item }}
          </template>
        </i-unordered-list>
      </template>
    </i-unordered-list>
    <h3 v-if="devProjects.length > 0">In development</h3>
    <i-unordered-list :items="devProjects" item-key="name">
      <template slot-scope="{ item: { name, link = null, tags } }">
        <h4 v-if="link" ><i-link :to="link" external>{{ name }}</i-link></h4>
        <h4 v-else>{{ name }}</h4>
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
import IUnorderedList from '~/components/IUnorderedList'
import IListItem from '~/components/IListItem'
import ILink from '~/components/ILink'

export default {
  components: {
    IUnorderedList,
    IListItem,
    ILink
  },
  created() {
    this.prodProjects = [
      {
        name: 'Personal website',
        tags: ['Vue.js', 'Nuxt', 'Netlify', 'SSG', 'PostCSS']
      },
      {
        name: 'Depoclaim',
        link: 'https://depoclaim.com',
        tags: ['Vue.js', 'Nuxt', 'Netlify', 'SSG', 'Contentful', 'Bootstrap 4', 'Markdown']
      },
      {
        name: 'Màtyàs Bittenbinder',
        link: 'https://mbittenbinder.com',
        tags: ['Vue.js', 'Nuxt', 'Netlify', 'SSG', 'Contentful', 'Bootstrap 4']
      },
      {
        name: 'Jolien Wesselink',
        link: 'https://jolienwesselink.nl',
        tags: ['Vue.js', 'Nuxt', 'Netlify', 'SSG', 'Contentful', 'Bootstrap 4', 'Markdown']
      }
    ]
    this.devProjects = []
  }
}
</script>
