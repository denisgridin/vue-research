<template>
  <section class="slots">
    <h2>Слоты VueJS</h2>
    <div class="slot-container">
      <div class="profile">
        <add>
          <template v-slot:title>
            <h2>Title</h2>
          </template>
          <p>some text</p>
          <template v-slot:default>
            <p>Some new text</p>
          </template>
          <template v-slot:message>
            <el-button type="text" class="button">Hello world</el-button>
          </template>
        </add>
      </div>
    </div>
  </section>
</template>
<style lang="less">
</style>
<script>
import add  from '@/views/slots/Profile'
export default {
  components: {
    add
  }
}
</script>
