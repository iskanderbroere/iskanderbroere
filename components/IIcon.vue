<template functional>
  <svg
    :viewBox="props.viewBox"
    :aria-labelledby="props.accessibilityName"
    role="img"
    xmlns="http://www.w3.org/2000/svg"
  >
    <title :id="props.accessibilityName">{{ props.accessibilityName }}</title>
    <slot />
  </svg>
</template>

<script>
export default {
  name: 'IIcon',
  props: {
    viewBox: {
      type: String,
      default: () => '0 0 24 24'
    },
    accessibilityName: {
      type: String,
      required: true
    }
  }
}
</script>
