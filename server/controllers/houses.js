const House = require('../models/house')

module.exports = {
  getAll : (req, res)=>{
    House.find({})
    .sort({createdAt : -1})
    .exec((err, result)=>{
      if(err){
        res.send(err)
      }else{
        res.send(result)
      }
    })
  },
  insert : (req, res)=>{
    House.create({
      title : req.body.title,
      address : req.body.address,
      coordinate : req.body.coordinate,
      description : req.body.description,
      price : req.body.price,
      img : req.body.img
    })
    .then((result)=>{
        res.send(result)
    })
    .catch(err=>{
      res.send (err)
    })
  },
  deleteHouse : (req, res)=>{
    House.deleteOne({_id : req.params.id})
    .exec((err, result)=>{
      if(err){
        res.send(err)
      }else{
        res.send(result)
      }
    })
  }
}
