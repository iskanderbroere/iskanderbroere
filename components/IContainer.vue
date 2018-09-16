<template functional>
  <div :class="$style.container">
    <slot />
  </div>
</template>

<style module>
.container {
  width: 100%;
  padding: 0 15px;
  margin-right: auto;
  margin-left: auto;
}
@media (min-width: 768px) {
  .container {
    padding: 0;
    max-width: 600px;
  }
}
</style>
