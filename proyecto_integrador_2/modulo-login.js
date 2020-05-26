let db = require('./database/models')

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
                user_pass: pass
            },
        })
        .then(results=>{
            return results;
        })
    }
}


module.exports = moduloLogin;