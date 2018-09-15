<template functional>
  <ul :class="[$style.ul, { [$style.unstyled] : props.listStyle }]">
    <slot />
  </ul>
</template>

<script>
export default {
  name: 'IUnorderedList',
  props: {
    listStyle: {
      type: String,
      validator: value => ['none'].includes(value),
      default: () => 'none'
    }
  }
}
</script>

<style module>
.ul {
  padding-left: 20px;
  margin: 0;
}
.unstyled {
  list-style: none;
  padding-left: 0;
}
</style>
