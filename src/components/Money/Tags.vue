<template>
  <div class="tags">
    <ul class="current">
      <li v-for="tag in dataSource" :key="tag" @click="toggle(tag)"
        :class="{'is-active': selectedTags.indexOf(tag)>=0}"
      >
        {{tag}}
      </li>
    </ul>
    <div class="new">
      <button>新增标签</button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component,Prop} from 'vue-property-decorator';

@Component
export default class Tags extends Vue{
  @Prop(Array) dataSource: string[] | undefined;
  selectedTags: string [] = [];

  toggle(tag: string) :void {
    const index = this.selectedTags.indexOf(tag);
    if(index >= 0) {
      this.selectedTags.splice(index,1);
    } else {
      this.selectedTags.push(tag);
    }
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
        &.is-active {
          background-color: #333333;
          color: white;
        }
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
