<template lang="html">
  <div>
    <div class="title">
      <strong> Add Your House</strong>
    </div>
    <div class="addHouse">
      <div class="input">
        <label>Title</label>
        <Input v-model="title" placeholder="Title" class="in"></Input>
      </div>
      <div class="input">
        <label>Address</label>
        <Input v-model="address" type="textarea" :rows="3" class="in" placeholder="Address"></Input>
      </div>
      <div class="input">
        <label>Description</label>
        <Input v-model="description" type="textarea" :rows="4" class="in" placeholder="Description"></Input>
      </div>
      <div class="input">
        <label>Price</label><br>
        <Input v-model="price" class="in" placeholder="Price Rp." style="width : 100px;"></Input>
      </div>
      <div class="input">
        <label>Image</label><br>
        <Input v-model="image" class="in" placeholder="image">
          <Button slot="append" icon="ios-search"></Button>
        </Input>
      </div>
      <div class="input">
        <label>Location Coordinate</label><br>
        <gmap-map
          :center="center"
          :zoom="16"
          style="height: 300px"
        >
          <gmap-marker
            :key="index"
            v-for="(m, index) in markers"
            :position="m.position"
            :clickable="true"
            :draggable="true"
            @click="center"
          ></gmap-marker>
        </gmap-map>
      </div>
      <div class="input">
        <Button type="primary" style="margin-top : 10px;">Save</Button>
      </div>
      {{center}}
    </div>
  </div>
</template>

<script>
import * as VueGoogleMaps from 'vue2-google-maps';
import Vue from 'vue';
Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyBYNdSR-pB_Uo-uTehjFlVMQ0nlseWn8q8',
    // v: 'OPTIONAL VERSION NUMBER',
    // libraries: 'places', //// If you need to use place input
  }
});

export default {
  data () {
    return {
      modalMap : false,
      center: {lat: -6.260814, lng: 106.781590},
      markers: [{
        position: {lat: -6.260814, lng: 106.781590}
      }]
    }
  }
}
</script>

<style lang="css">
.title{
  text-align: center;
  font-size: 2em;
  margin-top: 10px;
}
.addHouse{
  margin: auto;
  padding: 5px 5px 5px 5px;
  text-align: left;
  width: 450px;
  border:  1px inset #9ea7b4;
  border-radius: 3px;

}
.input{
  font-size: 14px;
  font-weight: bold;
  margin: 5px 5px 5px 5px;
}
.in{
  margin-top: 5px;
}
</style>
