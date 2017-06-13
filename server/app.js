const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
mongoose.Promise = require('bluebird')
const houses = require('./routes/houses')
const app = express()

app.set('port', process.env.PORT || 3000)
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended : false}))
app.use('/api/houses', houses)
app.listen(app.get('port'),()=>{
  console.log("COnnected to Port ", app.get('port'));
})
