const mongoose = require('mongoose');
const Schema = mongoose.Schema
require('../config/db')

const houseSchema = new Schema({
  title : String,
  address : String,
  coordinate : String,
  description : String,
  price : Number,
  img : String
}, {timestamps : true})

const House = mongoose.model('House', houseSchema)
module.exports = House
