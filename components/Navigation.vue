<template>
  <div :class="$style.nav">
    <h1><em>iskander</em><strong>broere</strong></h1>
    <div class="icons">
      <slot />
      <nuxt-link v-if="this.$route.path !== '/'" to="/" class="projects">Home</nuxt-link>
      <nuxt-link v-if="this.$route.path !== '/projects'" to="/projects" class="projects">Projects</nuxt-link>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style module>
.nav {
  width: 100%;
  height: 120px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 25px;
  padding-right: 25px;
  color: #f9f9f9;
  line-height: 76px;
  background-color: #212529;
}
</style>
