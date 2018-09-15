<template>
  <main>
    <section>
      <h2>hi, we're in an <span class="green">elevator</span>, this is my <span class="green">pitch</span>, i</h2>
      <h3>write</h3>
      <p>modern front-end web applications @
        <i-link
          to="https://frontmen.nl"
          external
          important>
          Frontmen
        </i-link>
      </p>
      <h3>use</h3>
      <i-unordered-list><li v-for="item in useList" :class="$style.listitem" :key="item">{{ item }}</li></i-unordered-list>
      <h3>like</h3>
      <i-unordered-list><li v-for="item in likeList" :class="$style.listitem" :key="item">{{ item }}</li></i-unordered-list>
      <i-hr/>
      <p><em>Eager to learn, always seeking to improve, perfectionistic yet practical, that is who I am.</em> Still reading? Hit me up! </p>
      <address>
        <i-link to="mailto:iskanderbroere@gmail.com" important>iskanderbroere@gmail.com</i-link>
      </address>
    </section>
  </main>
</template>

<script>
import ILink from '~/components/ILink'
import IUnorderedList from '~/components/IUnorderedList'
import IHr from '~/components/IHorizontalRule'

export default {
  components: {
    ILink,
    IUnorderedList,
    IHr
  },
  created() {
    this.useList = [
      'JavaScript',
      'HTML',
      'CSS',
      'GraphQL',
      'Markdown',
      'MongoDB',
      'PostgreSQL',
      'Vue.js 💚',
      'React',
      'Express',
      'PostCSS',
      'SCSS',
      'CSSinJS',
      'Material Design',
      'Bootstrap 4',
      'Apollo GraphQL ⭐',
      'Webpack',
      'Yarn',
      'NPM',
      'Prettier',
      'ESLint',
      'Stylelint',
      'VSCode',
      'Netlify',
      'GitHub'
    ]
    this.likeList = [
      'Performance 🚀',
      'PWAs',
      'CI',
      'Static site generators',
      'Decoupled applications',
      'Serverless functions'
    ]
  }
}
</script>

<style module>
.listitem:not(:last-child)::after {
  content: ' - ';
}
.listitem {
  display: inline;
}
</style>
