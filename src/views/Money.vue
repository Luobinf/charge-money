<template>
  <div>
    <Layout class-prefix="layout">
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
      <div>
        <label class="notes">
          <span class="name">备注</span>
          <input type="text" placeholder="请输入备注"/>
        </label>
      </div>
      <div>
        <ul class="types">
          <li class="is-active">支出</li>
          <li>收入</li>
        </ul>
      </div>
      <div class="numberPad">
        <div class="output">10000</div>
        <div class="buttons">
          <button>1</button>
          <button>2</button>
          <button>3</button>
          <button>删除</button>
          <button>4</button>
          <button>5</button>
          <button>6</button>
          <button>清空</button>
          <button>7</button>
          <button>8</button>
          <button>9</button>
          <button class="ok">OK</button>
          <button class="zero">0</button>
          <button class="dot">.</button>
        </div>
      </div>
    </Layout>
  </div>
</template>

<script lang="ts">

export default {
  name: 'money',
  data () {
    return {

    }
  },
  components: {

  }
}
</script>

<style lang="scss">
.layout-content {
  display: flex;
  flex-direction: column;
  .tags {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
  }
}
</style>
<style scoped lang="scss">
@import "~@/assets/styles/helper.scss";
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
.numberPad {
  .output {
    @extend %innerShadow;
    font-size: 36px;
    font-family: Consolas,monospace;
    padding: 9px 16px;
    text-align: right;
  }
  .buttons {
    @extend  %clearfix;
    > button {
      float: left;
      width: 25%;
      height: 64px;
      background: none;
      border: none;
      &.ok {
        height: 128px;
        float: right;
      }
      &.zero {
        width: 50%;
      }
      $bg: #f2f2f2;
      &:nth-child(1) {
        background: $bg;
      }
      &:nth-child(2), &:nth-child(5) {
        background: darken($bg, 4%);
      }
      &:nth-child(3), &:nth-child(6), &:nth-child(9) {
        background: darken($bg, 4*2%);
      }
      &:nth-child(4), &:nth-child(7), &:nth-child(10) {
        background: darken($bg, 4*3%);
      }
      &:nth-child(8), &:nth-child(11), &:nth-child(13) {
        background: darken($bg, 4*4%);
      }
      &:nth-child(12) {
        background: darken($bg, 4*5%);
      }
      &:nth-child(14) {
        background: darken($bg, 4*6%);
      }
    }
  }
}
</style>
