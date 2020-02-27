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
import {Component} from 'vue-property-decorator';

@Component
export default class Types extends Vue {
  type = '-' ;// type 只能是‘-’表示支出，‘+’号表示收入
  selectType(type:string) {
      if(type !== '-' && type !== '+') {
        throw new Error('type is unknown');
      }
      this.type = type;
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
