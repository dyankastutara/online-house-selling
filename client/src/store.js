import Vue from 'vue'
import Vuex from 'vuex'
// import * as VueGoogleMaps from 'vue2-google-maps';


Vue.use(Vuex)
// Vue.use(VueGoogleMaps, {
//   load: {
//     key: 'AIzaSyBYNdSR-pB_Uo-uTehjFlVMQ0nlseWn8q8',
//     // v: 'OPTIONAL VERSION NUMBER',
//     // libraries: 'places', //// If you need to use place input
//   }
// });

export const store = new Vuex.Store({
  state : {
    center:{
      lat: -6.260814,
      lng: 106.781590
    },
    listHouses:[{
      title : null,
      address : null,
      coordinate : {
        lat: null,
        lng: null
      },
      description : null,
      price : 0,
      img : null
    }]
  },
  mutations : {
    listDataHouse(state, house){
        state.listHouses = house
    },
    setMarker(state, coordinate) {
      state.center.lng = coordinate.lng;
      state.center.lat = coordinate.lat;
    },
    addHouse(state, house){
      state.listHouses.push(house)
    },
    deleteHouse(state, house){
      // state.listHouses.findIndex(stHouse=>{stHouse._id == house._id})
      function checkIndex(houses) {
          return houses == house;
      }
      let index = state.listHouses.findIndex(checkIndex)
      state.listHouses.splice(index,1)
    }
  },
  actions : {
    seedList ({commit}){
      axios.get('http://localhost:3000/api/houses/')
      .then(response=>{
        commit('listDataHouse', response.data)
      })
      .catch(err=>{
        console.log(err);
      })
    },
    insertHouse({commit}, house){
      axios.post('http://localhost:3000/api/houses/', house)
      .then((response) => {
        commit('addHouse', response.data);
      })
      .catch((err) => {
        console.log(err);
      });
    },
    deleteList({commit}, house){
      axios.delete('http://localhost:3000/api/houses/'+house._id)
      .then(response=>{
      commit('deleteHouse', house)
      })
      .catch(err=>{
        console.log(err);
      })
    }
  },
  getters : {
    listHouses(state){
      return state.listHouses
    },
    markers(state){
      return state.center
    }
  }
});
