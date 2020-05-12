let peliculasController = {
    home: function(req,res){
        var prueba = 'hola'
        res.render('home', {prueba:prueba}) 
    }
}

module.exports = peliculasController