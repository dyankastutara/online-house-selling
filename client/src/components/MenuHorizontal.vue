<template lang="html">
  <div class="">
    <Menu mode="horizontal" >
      <div class="layout-nav">
          <router-link to="/">
            <Menu-item name="1">
              <Icon type="ios-list-outline"></Icon>
              List Houses
            </Menu-item>
          </router-link>
          <router-link to="/add-house">
            <Menu-item name="2">
              <Icon type="plus-round"></Icon>
              Add Houses
            </Menu-item>
          </router-link>
      </div>
    </Menu>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="css">
</style>
