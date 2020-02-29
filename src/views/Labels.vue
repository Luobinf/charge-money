<template>
  <div>
    <Layout>
      <ul class="tags">
        <li v-for="tag in tags">
          <span>{{tag}}</span>
          <Icon name="right"></Icon>
        </li>
      </ul>
      <div class="createTag-wrapper">
        <button class="createTag" @click="createTag">新建标签</button>
      </div>
    </Layout>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';
import tagListModel from '@/models/tagListModel.ts';

tagListModel.getData();
@Component
export default class Labels extends Vue{
  tags = tagListModel.data;
  createTag() {
    const name = window.prompt('请输入标签名');
    if(name) {
      const message = tagListModel.create(name);
      if(message === 'duplicated') {
        window.alert('标签名重复了');
      } else if (message === 'success') {
        window.alert('添加成功');
      }
    } else {
      window.alert('标签名不能为空');
    }
  }
}
</script>

<style scoped lang="scss">
.tags {
  background-color: white;
  font-size: 16px;
  padding-left: 16px;
  > li {
    min-height: 44px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #e6e6e6;
    color: #000000;
    .icon {
      width: 20px;
      height: 20px;
    }
  }
}
.createTag-wrapper {
  text-align: center;
  border: 1px solid red;
  margin-top: 44px;
  .createTag {
    background-color: #767676;
    color:  #FFFFFF;
    border: none;
    border-radius: 6px;
    height: 40px;
    padding: 0 16px;
  }
}
</style>
