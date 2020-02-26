<template>
  <div class="nav-wrapper">
    <div class="content">
      statistics.vue
    </div>
    <Nav></Nav>
  </div>
</template>

<script type="text/javascript">
export default {
  name: 'statistics',
  data () {
    return {

    }
  },
  components: {

  }
}
</script>

<style scoped lang="scss">
  .nav-wrapper {
    display: flex;
    flex-direction: column;
    height: 100vh;
    border: 1px solid red;
    .content {
      flex-grow: 1;
      overflow: auto;
      border: 1px solid skyblue;
    }
  }
</style>
