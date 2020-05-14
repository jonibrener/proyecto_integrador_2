var express = require('express');
var router = express.Router();
var peliculasController = require('../controllers/peliculasController')

router.get('/', peliculasController.home)
router.get('/detalle/:id', peliculasController.detalle)
router.get('/buscar/:nombre', peliculasController.buscador)


module.exports = router;