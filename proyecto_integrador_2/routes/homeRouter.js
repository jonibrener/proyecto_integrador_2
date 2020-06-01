var express = require('express');
var router = express.Router();
var peliculasController = require('../controllers/peliculasController')

router.get('/', peliculasController.home)
router.post('/', peliculasController.comparacion)
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
// router.get('/login', peliculasController.login)
// router.post('/login', peliculasController.comparacion)
router.get('/usuarios', peliculasController.usuarios)
router.post('/usuarios', peliculasController.buscadorDeUsuarios)
router.get('/misResenias', peliculasController.misResenias)
// router.get('/detalle', peliculasController.mostrarResenia)
// router.get('/resenia', peliculasController.creacionResenias)

// router.post('/editar', peliculasController.editar)
// router.post('/resenias/:id', peliculasController.mostrarResenias)
router.get('/resenias/eliminar/:id', peliculasController.eliminar)
router.post('/resenias/eliminar/:id', peliculasController.confirmarEliminar)
router.get('/resenias/editar/:id', peliculasController.editar)
router.post('/resenias/editar/:id', peliculasController.confirmarEditar)
// router.get('/reseniasMasRecientes', peliculasController.reseniasMasRecientes)





module.exports = router;