<template>
  <div id="app" class="d-flex row">
    <Menu class="col-2"/>
    <router-view class="col-10 contentSection" style="width: 1200px; margin-left: auto; margin-right: 100px;" :key="$route.path" />
  </div>
</template>

<style lang="less">
@font: 'Rubik', sans-serif;
@fontColor: #333;

.app {
  margin-top: -20px;
  margin: 0px;
  padding: 0px;
  font-size: 20px;
  background-color: #f2f2f2;
}

h1,h2,h3,h4,h5,h6,p,span,a {
  font-family: @font;
  color: @fontColor;
}
</style>

<style lang="less" scoped>
.contentSection {
  box-shadow: 1px 1px 10px #f1f1f1;
  border-radius: 4px;
  background: #f9f9f9;
  padding: 2rem;
  box-sizing: border-box;
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