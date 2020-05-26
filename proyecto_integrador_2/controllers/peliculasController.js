let db = require('../database/models')
let bcrypt = require('bcryptjs');
var moment = require('moment')
let moduloLogin = require('../modulo-login')

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
    },

    creacion: function(req,res){
        // var name = req.body.name

       // var email = req.body.email

       // var password = req.body.password 
       const hash = bcrypt.hashSync(req.body.password, 10);



        db.users.create({
            user_name: req.body.name,
            user_email: req.body.email,
            user_pass: hash,
            user_bornDate: req.body.birthday, 

        })

        res.redirect('/home')

    },
    login: function(req,res){
        var prueba11 = "hola"
        res.render('login', {prueba11:prueba11, pagina:"login"})
    },
    comparacion: function(req,res){
       moduloLogin.chequearUsuario(req.body.email)
       .then(resultado => {
        //    res.send("el email esta en la base de datos")
           res.render('login', {resultado:resultado})
       })

       moduloLogin.buscarPorEmail(req.body.email)
       .then(resultado=> {
           res.send("objeto literal de datos del usuario")
       })

       moduloLogin.validar(req.body.email , req.body.password)
       .then(resultado =>{
           res.send('objeto literal de datos del usuario')
       })
    },
    creacionResenias: function(req, res){
        var prueba12 = "hola"
        res.render('detalle', {prueba12:prueba12, pagina:"detalle"})
    },
    envioResenias: function(req,res){
        // var queryString = new URLSearchParams(location.search);
        // var detalles = queryString.get('id');
        var detalles = req.params.id
        var date = moment().format("MMM Do YY")
        //No se si funciona esto del date, faltaria mandarlo a la base de datos, pero por las dudas no mande
        
        db.resenias.create({
            resenia_text: req.body.resenia,
            movie_score: req.body.quantity,
            movie_id: detalles,
        })
        // var today = new Date();
        // var dd = String(today.getDate()).padStart(2, '0');
        // var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        // var yyyy = today.getFullYear();
        // today = mm + '/' + dd + '/' + yyyy;
        // // document.write(today);
        // console.log(today);
        
        
        
        
        
        res.redirect('/home')
    }
    
}

module.exports = peliculasController