let db = require('../database/models')
let bcrypt = require('bcryptjs');
var moment = require('moment')
let moduloLogin = require('../modulo-login')
let OP = db.Sequelize.Op
let alert = require("alert-node") 
// let notifications = require('awesome-notifications')

let peliculasController = {
    home: function(req,res){
        var prueba = 'hola'
        res.render('home', {prueba:prueba, pagina: "home"})
    },
    detalle: function(req,res){
        var id = req.query.id
       
            db.resenias.findAll({
                where: [
                   
                    { movie_id: req.query.id }
                ], 
                include: [

                    {association: "reseniaUsuario"}
                ]
            }).then(resultados => {
                // console.log(resultados)
                res.render('detalle', {id:id, pagina:"detalle", resultados:resultados})
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
       const hash = bcrypt.hashSync(req.body.psw, 10);



        db.users.create({
            user_name: req.body.usrnm,
            user_email: req.body.email,
            user_pass: hash,
            user_bornDate: req.body.birthday, 

        })

        res.redirect('/home')

    },
    login: function(req,res){
        var prueba11 = "hola"
        var resultado = []
        res.render('login', {prueba11:prueba11, pagina:"login", resultado:resultado})
        
    },
    comparacion: function(req,res){
       moduloLogin.chequearUsuario(req.body.uname)
       .then(resultado => {
     
        if (resultado == false){
           res.redirect("/home")
        }
        else{
   
            moduloLogin.buscarPorEmail(req.body.uname)
             .then(usuario =>{
    
           if (bcrypt.compareSync(req.body.psw, usuario.user_pass)){
               var nombre = usuario.user_name
               var idUsusario = usuario.user_id
               db.resenias.findAll({
                where: [
                   
                    { user_id: usuario.user_id}
                ], 
                include: [
    
                    {association: "reseniaUsuario"}
                ]
                })
                    .then(resultado =>{
                        res.render('login', {resultado:resultado, pagina: "login"})
    
                    })
        }
           else{
               res.redirect('/home')
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
                res.send("el email no esta en la base de datos");
                 }
                else{
                    // console.log("el email esta en la base de datos");
                    moduloLogin.buscarPorEmail(req.body.email)
                     .then(usuario =>{
                //    console.log('objeto literal con datos')
                //    console.log(req.body.password);
                //    console.log(usuario.user_pass);
                //    console.log(bcrypt.compareSync(req.body.password, usuario.user_pass));
                   
                   if (bcrypt.compareSync(req.body.password, usuario.user_pass)){
                       var nombre = usuario.user_name
                       var idUsusario = usuario.user_id
                    //    console.log('logueado con exito' + nombre);
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
        let resultados = null
        res.render('usuarios', {prueba15:prueba15, pagina: "usuarios", resultados:resultados})
    },

    buscadorDeUsuarios: function(req,res){
        db.users.findAll({
            where: {
                [OP.or]: [
               {user_email: {[OP.like]: "%" + req.body.usuario + "%"}}, 
              { user_name: {[OP.like]: "%" + req.body.usuario + "%"}}
            ]
            },
        }).then(resultados => {
            // console.log(resultados);
            if (resultados.length == 0) {
                // console.log(1);

                // console.log(resultados);
                
                res.render('usuarios', {resultados: 'No se encontraron usuarios para ese mail', resultados:resultados, pagina: 'estrenos'});
                
            }else{
                // console.log(2);
                
                // console.log(resultados);
                
                res.render('usuarios', {resultados:resultados, pagina: 'estrenos'})
            }
        })
    },
    misResenias: function(req,res){
        var prueba16 = "hola"
        res.render('misResenias', {prueba16:prueba16, pagina:"estrenos"})

    
    },

    infoUsuarios: function (req,res) {
        db.users.findByPk(req.params.id)
        .then(resultado => {
            res.render('infoUsuarios', {resultado:resultado, pagina:'home'})
        })
    },

    eliminar: function (req, res) {
        resultado= []
        res.render('eliminar', {deleteId:req.params.id, pagina:"home", resultado:resultado})
    },
    confirmarEliminar: function(req,res){
        moduloLogin.chequearUsuario(req.body.email)
    .then(resultado => {
        if (resultado == false){
            res.send("el email no esta en la base de datos");
             }
            else{
                moduloLogin.buscarPorEmail(req.body.email)
                 .then(usuario =>{
               
               if (bcrypt.compareSync(req.body.password, usuario.user_pass)){
                   var nombre = usuario.user_name
                   var idUsusario = usuario.user_id
                   var detalles = req.params.id
                 
                   db.resenias.destroy({
                    where: {
                        resenias_id:req.params.id,
                    }
                })
                res.redirect("/home")
               }else{
                res.redirect('/home/resenias/eliminar/'+req.params.id)
            }
    })
}
    })
},

editar: function(req,res){
    resultado= []
    res.render('editar', {editarId:req.params.id, pagina:"home", resultado:resultado})
},

confirmarEditar: function(req,res){
    moduloLogin.chequearUsuario(req.body.email)
.then(resultado => {
    if (resultado == false){
        res.send("el email no esta en la base de datos");
         }
        else{
            moduloLogin.buscarPorEmail(req.body.email)
             .then(usuario =>{
           
           if (bcrypt.compareSync(req.body.password, usuario.user_pass)){
               
            // let updateR ={
            //     textoResenia: req.body.resenia_text,
            //     puntajeResenia: req.body.quantity,
            //     id: req.params.id
            // }

               db.resenias.update({
                resenia_text: req.body.resenia,
                movie_score: req.body.quantity,
                resenia_updateDate: db.sequelize.literal("CURRENT_DATE")
               }, { 
                   where: {
                    resenias_id: req.params.id,
                }
               }).then(()=>{
                   db.resenias.findByPk(req.params.id)
                   .then(resultado =>{
                       res.redirect('/home')
                   })
                
               })
            
           }
           else{
            res.redirect('/home/resenias/editar/'+req.params.id)
        }
        
})
}
})


}
}
module.exports = peliculasController;