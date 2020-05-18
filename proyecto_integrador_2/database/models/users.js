module.exports = function (sequelize, DataTypes){

    const cols = {
        user_id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        user_email: {
            type: DataTypes.STRING
        },
        user_name: {
            type: DataTypes.STRING
        },
        user_pass: {
            type: DataTypes.STRING
        },
        user_bornDate: {
            type: DataTypes.DATE
        }
        
    }
    const config = {
        timestamps: true,
        tableName: 'users'
    }
    
    
    const users = sequelize.define('users', cols, config)
    return users
    }