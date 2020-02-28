<template>
  <ul class="types">
    <li :class="{'is-active': type && type === '-'}" @click="selectType('-')">
      支出
    </li>
    <li :class="{'is-active': type && type === '+'}" @click="selectType('+')">
      收入
    </li>
  </ul>
</template>

<script lang="ts">
// export default {
//   name: 'Types',
//   data () {
//     return {
//       type: '-' // ‘-’表示支出，‘+’号表示收入
//     }
//   },
//   methods: {
//     selectType(type:string) {
//       if(type !== '-' && type !== '+') {
//         throw new Error('type is unknown');
//       }
//       this.type = type;
//     }
//   }
// }
import Vue from 'vue';
import {Component, Prop} from 'vue-property-decorator';

@Component
export default class Types extends Vue {
  type:string = '-' ;// type 只能是‘-’表示支出，‘+’号表示收入
  @Prop(Number) xxx: number | undefined; //任何时候都需要检查xxx有可能是undefined的时候
  //Number是Vue加的，后面的undefined用于给xxx一个初始值
  selectType(type:string) {
      if(type !== '-' && type !== '+') {
        throw new Error('type is unknown');
      }
      this.type = type;
  }
  mounted(): void {

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
