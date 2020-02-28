<template>
  <div>
    <Layout class-prefix="layout">
      <Tags :data-source="tags" @update:dataSource="updateTags"

      >

      </Tags>
      <Notes></Notes>
      <Types></Types>
      <NumberPad></NumberPad>
    </Layout>
  </div>
</template>

<script lang="ts">
import  Vue from 'vue';
import {Component} from 'vue-property-decorator';
import Tags from '@/components/Money/Tags.vue'
import Notes from '@/components/Money/Notes.vue'
import Types from '@/components/Money/Types.vue'
import NumberPad from '@/components/Money/NumberPad.vue'

@Component({
  components: {
    Tags, Notes, Types, NumberPad
  }
})
export default class Money extends Vue{
  tags: string [] = ['衣','食','住','行','彩票','HELLO','LL','PPP','PP','VUE.JS'];
  updateTags(tagname: string) {
    if(this.tags.indexOf(tagname) >= 0) {
      window.alert('标签名已经存在,不能重复添加！');
    } else {
      this.tags.push(tagname);
    }
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

</style>
