var express = require('express');
var router = express.Router();
var peliculasController = require('../controllers/peliculasController')

router.get('/', peliculasController.home)
router.get('/detalle:id', peliculasController.detalle)



module.exports = router;