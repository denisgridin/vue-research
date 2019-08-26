<template>
  <el-card :body-style="{ padding: '0px' }">
    <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" class="image">
    <div style="padding: 14px;">
      <slot name="title">
        <h2>Hamberger</h2>
      </slot>
      <slot>
        <p>Very delitious</p>
      </slot>
      <div class="bottom">
        <time class="time">{{ moment(new Date, 'YYYY-MM-DD').format('YYYY-MM-DD') }}</time>
        <slot name="message">
          <el-button type="text" class="button">Hello world</el-button>
        </slot>
      </div>
    </div>
  </el-card>
</template>
<style scoped>

</style>
<script>
import moment from 'moment'
export default {
  name: 'add',
  methods: {
    moment
  }
}
</script>