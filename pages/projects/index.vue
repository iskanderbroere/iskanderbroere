<template>
  <main>
    <section>
      <h2>Projects</h2>
      <h3>In production</h3>
      <i-unordered-list list-style="none">
        <li>Personal website - <small>Vue.js - Nuxt - Netlify - SSR - PostCSS</small></li>
        <li>DepoClaim - <i-link to="https://depoclaim.com" external>DepoClaim.com</i-link> - <small>Vue.js - Nuxt - Netlify - SSR - Contentful - Bootstrap 4 - Markdown</small></li>
        <li>M&aacute;ty&aacute;s Bittenbinder - <i-link to="https://mbittenbinder.com" external>mbittenbinder.com</i-link> - <small>Vue.js - Nuxt - Netlify - SSR - Contentful - Bootstrap 4</small></li>
        <li>Jolien Wesselink - <i-link to="https://jolienwesselink.nl" external>jolienwesselink.nl</i-link> - <small>Vue.js - Nuxt - Netlify - SSR - Contentful - Bootstrap 4 - Markdown</small></li>
      </i-unordered-list>
      <h3>In development</h3>
      <i-unordered-list>
        <li>Vue.js Apollo GraphQL - <i-link to="https://github.com/iskanderbroere/gqvue" external>GitHub repository</i-link> - <small>Vue.js - Nuxt - Apollo GraphQL - GraphQL Yoga - Material Design</small></li>
        <li>Adonuxt - <i-link to="https://github.com/iskanderbroere/adonuxt" external>GitHub repository</i-link> - <small>Vue.js - Nuxt - AdonisJS - PostgreSQL - Material Design</small></li>
        <li>IPShares - <i-link to="https://github.com/IPSharesSam/IPShares" external>GitHub repository</i-link>  - <small>React - Express - MongoDB - Heroku - Material Design</small></li>
      </i-unordered-list>
    </section>
  </main>
</template>

<script>
import IUnorderedList from '~/components/IUnorderedList'
import ILink from '~/components/ILink'

export default {
  components: {
    IUnorderedList,
    ILink
  }
}
</script>
