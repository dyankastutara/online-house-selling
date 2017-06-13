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
        <div class="content" style="width:100%;">
          {{house.description}} <br>
          <strong>{{house.price}}</strong>
          {{house.location}}
        </div>
        <div class="content">
          <gmap-map
            :center="{lat: marker.lat, lng: marker.lng}"
            :zoom="12"
            scrollwheel="false"
            map-type-id="terrain"
            style="width: 200px; height: 200px"
          >
          <gmap-marker
            :position="{lat: marker.lat, lng: marker.lng}"
          ></gmap-marker>
          </gmap-map>
        </div>
      </div>
    </Card>
  </div>
</template>

<script>
export default {
  name : 'listHouses',
  data(){
    return {
      marker:[{
        lat:null,
        lng:null
      }]
    }
  },
  methods : {
    listDataHouses(){
      this.$store.dispatch('seedList')
    },
    parseCoordinate() {
      this.marker.lat = Number(this.$store.getters.markers.lat);
      this.marker.lng = Number(this.$store.getters.markers.lng);
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
