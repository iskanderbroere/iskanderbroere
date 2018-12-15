<template>
  <ul :class="[$style.ul, { [$style.unstyled]: listStyle === 'none' }]">
    <i-list-item
      v-for="item in items"
      :key="itemKey ? item[itemKey] : item"
      :inline="inline"
    >
      <slot :item="item">{{ item }}</slot>
    </i-list-item>
  </ul>
</template>

<script>
import IListItem from '~/components/IListItem'

export default {
  name: 'IUnorderedList',
  components: {
    IListItem
  },
  props: {
    listStyle: {
      type: String,
      validator: value => ['none', 'standard'].includes(value),
      default: () => 'none'
    },
    items: {
      type: Array,
      required: true
    },
    itemKey: {
      type: [String, Boolean],
      default: false
    },
    inline: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style module>
.ul {
  padding-left: 20px;
  margin: 0;
  list-style: circle;
}
.unstyled {
  list-style: none;
  padding-left: 0;
}
</style>
