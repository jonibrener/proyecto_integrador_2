module.exports = function (sequelize, DataTypes){

    const cols = {
        resenias_id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        movie_id: {
            type: DataTypes.INTEGER
        },
        user_id: {
            type: DataTypes.INTEGER,
            // foreignKey: true
        },
        resenia_text: {
            type: DataTypes.STRING
        },
        resenia_date: {
            type: DataTypes.DATE
        },
        resenia_updateDate: {
            type: DataTypes.DATE
        },
        movie_score: {
            type: DataTypes.FLOAT
        }
        
    }
    const config = {
        timestamps: false,
        tableName: 'resenias'
    }
    
    
    
    const resenias = sequelize.define('resenias', cols, config)
    resenias.associate = function (modelos){
        resenias.belongsTo(modelos.users, {
            as: "reseniaUsuario", 
            foreignKey: "user_id"
        });
    }
    return resenias
    }
