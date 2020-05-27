var express = require('express');
var router = express.Router();
var peliculasController = require('../controllers/peliculasController')

router.get('/', peliculasController.home)
router.get('/detalle', peliculasController.detalle)
router.post('/detalle/:id', peliculasController.envioResenias)
router.get('/buscar', peliculasController.buscador)
router.get ('/genero', peliculasController.genero)
router.get('/estrenos', peliculasController.estrenos)
router.get('/populares', peliculasController.populares)
router.get('/mejores', peliculasController.mejores)
router.get('/proximas', peliculasController.proximas)
router.get('/favoritas', peliculasController.favoritas)
router.get('/registro', peliculasController.registro)
router.post('/registro', peliculasController.creacion)
router.get('/login', peliculasController.login)
router.post('/login', peliculasController.comparacion)
// router.get('/resenia', peliculasController.creacionResenias)




module.exports = router;