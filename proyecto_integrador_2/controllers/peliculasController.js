let peliculasController = {
    home: function(req,res){
        var prueba = 'hola'
        res.render('home', {prueba:prueba})
    },
    detalle: function(req,res){
        var prueba2 = req.params.id
        res.render('detalle', {prueba2:prueba2})
    }
}

module.exports = peliculasController