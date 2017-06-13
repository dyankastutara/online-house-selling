const express = require('express');
const router = express.Router()
const controllerHouse = require('../controllers/houses')

router.get('/',controllerHouse.getAll)
router.post('/',controllerHouse.insert)

module.exports = router
