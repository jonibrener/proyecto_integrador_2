let db = require('./database/models')
let bcrypt = require('bcryptjs')
let moduloLogin = {
    chequearUsuario: function (email) {
        return db.users.findOne({
            where: {
                user_email: email
            }
        })
        .then(function(usuario) {
            return usuario != null;
        })
    },

    buscarPorEmail: function (email){
        return db.users.findOne({
            where: {
                user_email:email
            }
        })
        .then(resultado=> {
            return resultado
        })
    },

    validar: function (email, pass) {
        return db.users.findOne({
            where:{
                user_email:email,
            },
        })
        .then(results=>{
            if (results && bcrypt.compareSync(pass, results.user_pass)){
                return results
            }else{
                return null
            }
        })
    }
}


module.exports = moduloLogin;