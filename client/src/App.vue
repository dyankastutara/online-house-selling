<template>
  <div id="app">
    <div class="layout-ceiling">
        <div class="layout-ceiling-main">
            <a href="#">Login</a> |
            <a href="#">Help Center</a>
        </div>
    </div>
    <div class="layout-header">
      <MenuHorizontal></MenuHorizontal>
    </div>
    <div>
      <router-view></router-view>
    </div>
    <div class="layout-copy">
        2017 &copy; Online House Selling
    </div>
  </div>
</template>

<script>
import MenuHorizontal from './components/MenuHorizontal'
export default {
  name: 'app',
  components : {
    MenuHorizontal
  }
}
</script>

<style>
#app {
  width: 75%;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin: auto;
  color: #2c3e50;
  border: 1px solid #d7dde4;
  background: #f5f7f9;
  position: relative;
  border-radius: 4px;
  overflow: hidden;
}
a{
  text-decoration: none;
}
.layout-logo{
    width: 100px;
    height: 30px;
    background: #5b6270;
    border-radius: 3px;
    float: left;
    position: relative;
    top: 15px;
    left: 20px;
}
.layout-header{
    height: 60px;
    background: #fff;
    box-shadow: 0 1px 1px rgba(0,0,0,.1);
}
.layout-copy{
    text-align: center;
    padding: 10px 0 20px;
    color: #9ea7b4;
}
.layout-ceiling{
    background: #464c5b;
    padding: 10px 0;
    overflow: hidden;
}
.layout-ceiling-main{
    float: right;
    margin-right: 15px;
}
.layout-ceiling-main a{
    color: #9ba7b5;
}
</style>
