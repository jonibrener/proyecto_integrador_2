let peliculasController = {
    home: function(req,res){
        var prueba = 'hola'
        res.render('home', {prueba:prueba, pagina: "home"})
    },
    detalle: function(req,res){
        var prueba2 = req.params.id
        res.render('detalle', {prueba2:prueba2, pagina:"detalle"})
    },
    buscador: function (req,res){
        var prueba3 = req.params.nombre
        res.render('buscador', {prueba3:prueba3, pagina: "busqueda"})
    }
}

module.exports = peliculasController