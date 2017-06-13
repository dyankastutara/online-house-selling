const express = require('express');
const router = express.Router()
const controllerHouse = require('../controllers/houses')

router.get('/',controllerHouse.getAll)
router.post('/',controllerHouse.insert)
router.delete('/:id',controllerHouse.deleteHouse)

module.exports = router
