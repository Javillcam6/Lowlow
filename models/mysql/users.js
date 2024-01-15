const {sequelize} = require("../../config/mysql")
const {DataTypes} = require("sequelize")


//Creamos un esquema de datos por medio de Schema
const User = new sequelize.define (
    "users",
    {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        age:{
            type:DataTypes.NUMBER
        },
        email: {
            type:DataTypes.STRING
        },
        password: {
            type:DataTypes.STRING
        },
        role: {
            type:DataTypes.ENUM(["user","admin"])
        } 

    },
    {
        timestamps:true, //TODO LO RELACIONADO A createAt, updateAt
    }
)

module.exports = User