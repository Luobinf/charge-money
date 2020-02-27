<template>
  <div class="layout-wrapper">
    <div class="content" :class="classPrefix && `${classPrefix}-content`">
      <slot></slot>
    </div>
    <Nav></Nav>
  </div>
</template>

<script lang="ts">
  export default {
    name: 'layout',
    props: {
      classPrefix: {
        type: String
      }
    }
  }
</script>
<style scoped lang="scss">
  .layout-wrapper {
    display: flex;
    flex-direction: column;
    height: 100vh;
  .content {
    flex-grow: 1;
    overflow: auto;
  }
  }
</style>
