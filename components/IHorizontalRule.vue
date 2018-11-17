<template functional>
  <hr :class="$style.hr" />
</template>

<style module>
.hr {
  /* bootstrap resets */
  box-sizing: content-box;
  height: 0;
  overflow: visible;
  /* bootstrap resets end */
  border: none;
  border-bottom: 2px dotted #6b6f6d;
}
</style>
