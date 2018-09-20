<template>
  <div class="__nuxt-error-page">
    <div class="error">
      <svg xmlns="http://www.w3.org/2000/svg"
           width="90"
           height="90"
           fill="#47494e"
           viewBox="0 0 48 48">
        <path d="M22 30h4v4h-4zm0-16h4v12h-4zm1.99-10C12.94 4 4 12.95 4 24s8.94 20 19.99 20S44 35.05 44 24 35.04 4 23.99 4zM24 40c-8.84 0-16-7.16-16-16S15.16 8 24 8s16 7.16 16 16-7.16 16-16 16z"/>
      </svg>
      <div class="title">{{ message }}</div>
      <nuxt-link to="/">Go back home</nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NuxtError',
  props: {
    error: {
      type: Object,
      default() {
        return {
          message: 'An error has occured.',
          statusCode: 500
        }
      }
    }
  },
  head() {
    return {
      title: this.message,
      meta: [
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1, shrink-to-fit=no'
        }
      ]
    }
  },
  computed: {
    statusCode() {
      return (this.error && this.error.statusCode) || 500
    },
    message() {
      return this.error.message || 'An error has occured.'
    }
  }
}
</script>

<style>
.__nuxt-error-page {
  padding: 1rem;
  background: var(--light-gray);
  color: var(--gray);
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-family: 'skolar-sans-latin', system-ui;
  font-weight: 400;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
.__nuxt-error-page .error {
  max-width: 450px;
}
.__nuxt-error-page .title {
  font-size: 1.5rem;
  color: var(--gray);
  margin-bottom: 8px;
}
.__nuxt-error-page a {
  color: var(--bright-green);
  font-weight: 700;
  box-shadow: 0 0 var(--bright-green);
  transition: color 0.2s, box-shadow 0.2s;
  line-height: 21px;
  margin-bottom: 10px;
  text-transform: uppercase;
  text-decoration: none;
}
.__nuxt-error-page a:hover,
.__nuxt-error-page a:focus {
  font-weight: 700;
  color: var(--bright-green);
  box-shadow: 0 4px var(--bright-green);
  text-decoration: none;
}
</style>
