<template>
  <div>
    <label class="notes">
      <span class="name">备注</span>
      <input type="text" placeholder="请输入备注"/>
    </label>
  </div>
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
  .notes {
    font-size: 14px;
    background-color: #f5f5f5;
    display: flex;
    padding: 0 0 0 16px;
    align-items: center;
    .name {
      padding-right: 16px;
    }
    input {
      height: 64px;
      flex-grow: 1;
      background-color: transparent;
      border: none;
      padding-right: 16px;
    }
  }
</style>
