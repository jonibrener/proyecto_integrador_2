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
        var prueba3 = req.params.busqueda
        res.render('buscador', {prueba3:prueba3, pagina: "busqueda"})
    },
    genero : function(req,res){
        var prueba4 = req.params.id
        res.render('generos', {prueba4:prueba4, pagina: "generos"})
    },
    estrenos : function (req, res){
        var prueba5 = 'hola'
        res.render('estrenos', {prueba5:prueba5, pagina: "estrenos"})
    },
    populares : function (req, res){
        var prueba6 = 'hola'
        res.render('populares', {prueba6:prueba6, pagina: "popular"})
    },
     mejores : function (req, res){
        var prueba7 = 'hola'
        res.render('mejores', {prueba7:prueba7, pagina: "top100"})
    },
    proximas : function (req, res){
        var prueba8 = 'hola'
        res.render('proximas', {prueba8:prueba8, pagina: "prox"})
    },
    favoritas : function (req, res){
        var prueba9 = "hola"
        res.render('favoritas', {prueba9:prueba9, pagina: "fav"})
    },
    registro: function (req,res){
        var prueba10 = "hola"
        res.render('registro', {prueba10:prueba10, pagina:"registro"})
    }
    
}

module.exports = peliculasController