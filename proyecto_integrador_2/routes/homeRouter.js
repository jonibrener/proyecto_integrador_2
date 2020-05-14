var express = require('express');
var router = express.Router();
var peliculasController = require('../controllers/peliculasController')

router.get('/', peliculasController.home)
router.get('/detalle', peliculasController.detalle)
router.get('/buscar/:nombre', peliculasController.buscador)
router.get ('/genero', peliculasController.genero)

module.exports = router;