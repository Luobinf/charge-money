<template>
  <div>
    <Layout class-prefix="layout">
      <Tags></Tags>
      <Notes></Notes>
      <Types></Types>
      <NumberPad></NumberPad>
    </Layout>
  </div>
</template>

<script lang="ts">
import Tags from '@/components/Money/Tags.vue'
import Notes from '@/components/Money/Notes.vue'
import Types from '@/components/Money/Types.vue'
import NumberPad from '@/components/Money/NumberPad.vue'

export default {
  name: 'money',
  data () {
    return {

    }
  },
  components: {
    Tags,
    Notes,
    Types,
    NumberPad
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
