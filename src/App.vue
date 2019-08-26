<template>
  <div id="app">
    <Menu/>
    <router-view :key="$route.path" />
  </div>
</template>

<style lang="less">
@font: 'Rubik', sans-serif;
@fontColor: #333;

.app {
  margin-top: -10px;
  margin: 0px;
  padding: 0px;
  font-family: @font;
  font-size: 20px;
  color: @fontColor;
  background-color: #f2f2f2;
}
</style>

<script>
import Menu from '@/views/main/Menu'

export default {
  components: {
    Menu
  }
}

</script>