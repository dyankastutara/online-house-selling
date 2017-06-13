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
          {{house.location}}
        </div>
        <div class="content">
          <gmap-map
            :center="{lat: -6.26048407592326, lng: 106.78148746490479}"
            :zoom="12"
            scrollwheel="false"
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
    },
    parseCoordinate() {
      // let parsedCoor = this.coordinate.split(",");
      // this.marker.lat = Number(parsedCoor[0]);
      // this.marker.lng = Number(parsedCoor[1]);
    }
  },
  computed : {
    listHouses(){
      return this.$store.getters.listHouses
    }
  },
  created (){
    this.listDataHouses()
  },
  mounted: function() {
    this.parseCoordinate();
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
