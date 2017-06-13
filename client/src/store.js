import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state : {
    listHouses:[{
      title : null,
      address : null,
      location : null,
      description : null,
      price : 0,
      img : null
    }]
  },
  mutations : {
    listDataHouse(state){
      var self = this
      axios.get('http://localhost:3000/api/houses')
      .then(response=>{
        state.listHouses = response.data
      })
      .catch(err=>{
        res.send(err)
      })
    }
  },
  actions : {
    seedList ({commit}){
      commit('listDataHouse')
    }
  },
  getters : {
    listHouses(state){
      return state.listHouses
    }
  }
});
