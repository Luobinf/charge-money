<template>
  <nav>
      <router-link to="/money" class="item" active-class="is-active">
          <Icon name="money"></Icon>
          记账
      </router-link>
      <router-link to="/labels" class="item" active-class="is-active">
          <Icon name="label"></Icon>
          标签
      </router-link>
      <router-link to="/statistics" class="item" active-class="is-active">
          <Icon name="statistics"></Icon>
          统计
      </router-link>
  </nav>
</template>

<script lang="ts">
export default {
  name: 'Navigator',
  data () {
    return {

    }
  },
  components: {

  }
}
</script>

<style scoped lang="scss">
@import "~@/assets/styles/helper.scss";
    nav {
        @extend %outerShadow;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        font-size: 12px;
        .item {
            width: 33.333333%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            padding: 2px 0;
            .icon {
                width: 2em;
                height: 2em;
            }
            &.is-active {
                background-color: skyblue;
                .icon {
                    fill: blue;
                }
            }
        }
    }
</style>
