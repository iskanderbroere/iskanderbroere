<template>
  <main>
    <section>
      <h2>Projects</h2>
      <h3>In production</h3>
      <unordered-list list-style="none">
        <li>Personal website - <small>Vue.js - Nuxt - Netlify - SSR - PostCSS</small></li>
        <li>DepoClaim - <a href="https://depoclaim.com" rel="noopener noreferrer" target="_blank">DepoClaim.com</a> - <small>Vue.js - Nuxt - Netlify - SSR - Contentful - Bootstrap 4 - Markdown</small></li>
        <li>M&aacute;ty&aacute;s Bittenbinder - <a href="https://mbittenbinder.com" rel="noopener noreferrer" target="_blank">mbittenbinder.com</a> - <small>Vue.js - Nuxt - Netlify - SSR - Contentful - Bootstrap 4</small></li>
        <li>Jolien Wesselink - <a href="https://jolienwesselink.nl" rel="noopener noreferrer" target="_blank">jolienwesselink.nl</a> - <small>Vue.js - Nuxt - Netlify - SSR - Contentful - Bootstrap 4 - Markdown</small></li>
      </unordered-list>
      <h3>In development</h3>
      <unordered-list>
        <li>Vue.js Apollo GraphQL - <a href="https://github.com/iskanderbroere/gqvue" rel="noopener noreferrer" target="_blank">GitHub repository</a> - <small>Vue.js - Nuxt - Apollo GraphQL - GraphQL Yoga - Material Design</small></li>
        <li>Adonuxt - <a href="https://github.com/iskanderbroere/adonuxt" rel="noopener noreferrer" target="_blank">GitHub repository</a> - <small>Vue.js - Nuxt - AdonisJS - PostgreSQL - Material Design</small></li>
        <li>IPShares - <a href="https://github.com/IPSharesSam/IPShares" rel="noopener noreferrer" target="_blank">GitHub repository</a> - <small>React - Express - MongoDB - Heroku - Material Design</small></li>
      </unordered-list>
    </section>
  </main>
</template>

<script>
import UnorderedList from "~/components/UnorderedList"

export default {
  components: {
    UnorderedList
  }
}
</script>
