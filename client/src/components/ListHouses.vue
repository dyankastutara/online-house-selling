<template lang="html">
  <div class="list">
    <Card v-for="house in listHouses">
      <p slot="title">
          <strong>{{house.title}}</strong>
      </p>
      <div style="display:flex; justify-content:flex-start;">
        <div class="content">
          <img :src="house.img" style="height:200px; width:200px;">
        </div>
        <div class="content">
          {{house.description}} <br>
          <strong>{{house.price}}</strong>
        </div>
        <div class="content">
          <gmap-map
  :center="{lat:-6.260814, lng:106.781590}"
  :zoom="12"
  map-type-id="terrain"
  style="width: 200px; height: 200px"
>
</gmap-map>
        </div>
      </div>
    </Card>
  </div>
</template>

<script>
export default {
  name : 'listHouses',
  methods : {
    listDataHouses(){
      this.$store.dispatch('seedList')
    }
  },
  computed : {
    listHouses(){
      return this.$store.state.listHouses
    }
  },
  created (){
    this.listDataHouses()
  }
}
</script>

<style lang="css">
.list{
  margin: 10px 10px 10px 10px
}
.content{
  margin: 10px 10px 10px 10px;
}
</style>
