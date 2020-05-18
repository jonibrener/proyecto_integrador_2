var express = require('express');
var router = express.Router();
var peliculasController = require('../controllers/peliculasController')

router.get('/', peliculasController.home)
router.get('/detalle', peliculasController.detalle)
router.get('/buscar/?buscar:busqueda', peliculasController.buscador)
router.get ('/genero', peliculasController.genero)
router.get('/estrenos', peliculasController.estrenos)
router.get('/populares', peliculasController.populares)
router.get('/mejores', peliculasController.mejores)
router.get('/proximas', peliculasController.proximas)
router.get('/favoritas', peliculasController.favoritas)

module.exports = router;