<template>
  <div class="container">
    <nav>
      <h1><em>iskander</em><strong>broere</strong></h1>
    </nav>
    <main class="grid">
      <section>
        <h2>hi, we're in an elevator, this is my pitch, i</h2>
        <dl>
          <dt>write</dt>
          <dd>modern full-stack web applications</dd>
          <dt>use</dt>
          <dd>JS - HTML - CSS - GraphQL - Markdown - MongoDB - PostgreSQL - Vue - React - Express - Mongoose - Sequelize - PostCSS - SCSS - Bootstrap - Webpack - Yarn - NPM - ESLint - Stylelint - Prettier - VSCode - Hyper - Netlify - GitHub</dd>
          <dt>like</dt>
          <dd>PWAs - CI - TDD - Static Hosting - Decoupling Applications - Microservices</dd>
        </dl>
        <hr>
        <p><em>Eager to learn, always seeking to improve, perfectionistic yet practical, that is who I am.</em> Still reading? Hit me up at <a href="mailto:iskanderbroere@gmail.com">iskanderbroere@gmail.com</a></p>
      </section>
    </main>
  </div>
</template>

<style lang="postcss" scoped>
  p {
    margin-bottom: 0;
  }
  h2 {
    margin-bottom: 0;
  }
  em {
    font-weight: 300;
  }
  nav {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 25px;
    margin-top: 25px;
    color: #f9f9f9;
    line-height: 76px;
    background-image: url('~/assets/images/chalkboard.jpg');
    & h1 {
      margin-bottom: -0.6rem;
    }
  }
</style>
