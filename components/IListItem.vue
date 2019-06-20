<template functional>
  <li :class="[{ [$style['list-item-inline']]: props.inline }, data.class]">
    <slot />
  </li>
</template>

<script>
export default {
  name: "IListItem",
  props: {
    inline: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style module>
.list-item-inline:not(:last-child)::after {
  content: " – ";
}
.list-item-inline {
  display: inline;
}
</style>
