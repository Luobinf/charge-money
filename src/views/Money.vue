<template>
  <div>
    {{recordList}}
    <Layout class-prefix="layout">
      <Tags :data-source="tags" @update:dataSource="updateDataSource"
        @update:value="onUpdateTags"
      >
      </Tags>
      <Notes @update:value="onUpdateNotes"></Notes>
      <Types :value.sync="record.type"></Types>
      <NumberPad :value.sync="record.amount" @submit="saveRecord"></NumberPad>
    </Layout>
  </div>
</template>

<script lang="ts">
import  Vue from 'vue';
import {Component, Watch} from 'vue-property-decorator';
import Tags from '@/components/Money/Tags.vue';
import Notes from '@/components/Money/Notes.vue';
import Types from '@/components/Money/Types.vue';
import NumberPad from '@/components/Money/NumberPad.vue';

window.localStorage.setItem('version','0.0.1');

type Record = {
  tags: string[],
  notes: string,
  type: string,
  amount: number,
  createAt?: Date
}

@Component({
  components: {
    Tags, Notes, Types, NumberPad
  }
})
export default class Money extends Vue{
  tags: string [] = ['衣','食','住','行','彩票','HELLO','LL','PPP','PP','VUE.JS'];
  recordList: Record [] = JSON.parse(window.localStorage.getItem('recordList') || '[]');
  record: Record = {
    tags: [],
    notes: '',
    type: '-',
    amount: 0
  };
  updateDataSource(tagname: string) {
    if(this.tags.indexOf(tagname) >= 0) {
      window.alert('标签名已经存在,不能重复添加！');
    } else {
      this.tags.push(tagname);
    }
  }
  onUpdateNotes(value: string) {
    this.record.notes = value;
  }
  onUpdateTags(value:string []) {
    this.record.tags = value;
  }
  saveRecord() {
    let deepCloneRecord: Record = JSON.parse(JSON.stringify(this.record));
    deepCloneRecord.createAt = new Date();
    this.recordList.push(deepCloneRecord);
  }
  @Watch('recordList')
  onRecordListChanged() {
    window.localStorage.setItem('recordList',JSON.stringify(this.recordList));
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
