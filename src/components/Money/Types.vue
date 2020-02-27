<template>
  <ul class="types">
    <li class="is-active">支出</li>
    <li>收入</li>
  </ul>
</template>

<script lang="ts">
export default {
  data () {
    return {

    }
  },
  components: {

  }
}
</script>

<style scoped lang="scss">
  .types {
    font-size: 24px;
    background-color: #C4C4C4;
    display: flex;
    > li {
      width: 50%;
      height: 64px;
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      &.is-active::after {
        content: '';
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 3px;
        background-color: #333333;
      }
    }
  }
</style>
