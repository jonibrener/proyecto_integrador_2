let db = require('../database/models')
let bcrypt = require('bcryptjs');
var moment = require('moment')
let moduloLogin = require('../modulo-login')
let OP = db.Sequelize.Op

let peliculasController = {
    home: function(req,res){
        var prueba = 'hola'
        res.render('home', {prueba:prueba, pagina: "home"})
    },
    detalle: function(req,res){
        var id = req.query.id
        res.render('detalle', {id:id, pagina:"detalle"})
            db.resenias.findAll({
                where: [
                    { movie_id: req.query.id }
                ]
            }).then(resultados => {
                console.log(resultados.resenia_text);
            })
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
        //    res.render('login', {resultado:resultado})

        if (resultado == false){
        console.log("el email no esta en la base de datos");

        }
        else{
            console.log("el email esta en la base de datos");
           
            moduloLogin.buscarPorEmail(req.body.email)
             .then(usuario =>{
           console.log('objeto literal con datos')
           console.log(req.body.password);
           console.log(usuario.user_pass);
           console.log(bcrypt.compareSync(req.body.password, usuario.user_pass));
           
           
           
           if (bcrypt.compareSync(req.body.password, usuario.user_pass)){
               var nombre = usuario.user_name
               var idUsusario = usuario.user_id
               res.send('logueado con exito ' + nombre + 'con id: ' + idUsusario)
            // res.render('header', {usuario.user_name: usuario.user_name})
            // res.render('header', {nombre:null})

           }
           else{
               res.send('datos invalidos')
           }

       
       })
        }
       })

       
    },
    // creacionResenias: function(req, res){
    //    var id = req.query.id
    //     var prueba12 = "hola"
    //     res.render('detalle', {prueba12:prueba12, pagina:"detalle", idpelicula:id})
    // },
    envioResenias: function(req,res){
        moduloLogin.chequearUsuario(req.body.email)
        .then(resultado => {
            if (resultado == false){
                console.log("el email no esta en la base de datos");
                 }
                else{
                    console.log("el email esta en la base de datos");
                    moduloLogin.buscarPorEmail(req.body.email)
                     .then(usuario =>{
                   console.log('objeto literal con datos')
                   console.log(req.body.password);
                   console.log(usuario.user_pass);
                   console.log(bcrypt.compareSync(req.body.password, usuario.user_pass));
                   
                   if (bcrypt.compareSync(req.body.password, usuario.user_pass)){
                       var nombre = usuario.user_name
                       var idUsusario = usuario.user_id
                       console.log('logueado con exito' + nombre);
                       var detalles = req.params.id
                    //    var date = moment().format("MMM Do YY")
                       
                       //No se si funciona esto del date, faltaria mandarlo a la base de datos, pero por las dudas no mande
                       
                       db.resenias.create({
                           resenia_text: req.body.resenia,
                           movie_score: req.body.quantity,
                           movie_id: detalles,
                           user_id: idUsusario,
                           resenia_date: db.sequelize.literal("CURRENT_DATE")
                       })
                   }
                   else{
                       console.log('datos invalidos')
                   }
               })
                }
        })
        
        res.redirect('/home')
    },
    usuarios: function(req,res){
        var prueba15 = 'hola'
        res.render('usuarios', {prueba15:prueba15, pagina: "usuarios"})
    },

    buscadorDeUsuarios: function(req,res){
        db.users.findAll({
            where: {
               user_email: {[OP.like]: '%' + req.query.usuario + '%'}
            },
        }).then(resultados => {
            console.log(resultados);
            if (resultados.length == 0) {
                res.render('usuarios', {resultados: 'No se encontraron usuarios para ese mail'});
                
            }
        })
    }
    
    
}

module.exports = peliculasController;