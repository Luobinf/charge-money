<template>
  <div class="tags">
    <ul class="current">
      <li>衣</li>
      <li>食</li>
      <li>住</li>
      <li>行</li>
      <li>衣</li>
      <li>食</li>
      <li>住</li>
      <li>行</li>
      <li>衣</li>
      <li>食</li>
      <li>住</li>
      <li>行</li>
      <li>衣</li>
      <li>食</li>
    </ul>
    <div class="new">
      <button>新增标签</button>
    </div>
  </div>
</template>

<script class="ts">
export default {
  name: 'tags',
  data () {
    return {

    }
  },
  components: {

  }
}
</script>

<style scoped lang="scss">
  .tags {
    font-size: 14px;
    padding: 16px;
    .current {
      display: flex;
      flex-wrap: wrap;
      > li {
        height: 24px;
        line-height: 24px;
        background: #D9D9D9;
        border-radius: 12px;
        padding: 0 16px;
        margin-right: 12px;
        margin-bottom: 10px;
      }
    }
    .new {
      padding-top: 16px;
      button {
        background-color: transparent;
        border: none;
        border-bottom: 1px solid black;
        color: #999;
        padding: 0 3px;
      }
    }
  }
</style>
