<template>
  <ul :class="[$style.ul, { [$style.unstyled] : 'list-style' }]">
    <slot />
  </ul>
</template>

<script>
export default {
  name: "UnorderedList",
  props: {
    "list-style": {
      type: String,
      validator: value => ["none"].includes(value),
      default: () => "none"
    }
  }
}
</script>

<style module>
.ul {
  padding-left: 20px;
  margin-top: 0;
  margin-bottom: 1rem;
}
.unstyled {
  list-style: none;
  padding-left: 0;
}
</style>
