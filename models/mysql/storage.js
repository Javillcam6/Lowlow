const {sequelize} = require("../../config/mysql")
const {DataTypes} = require("sequelize")

//Creamos un esquema de datos por medio de Schema
const Storage = new sequelize.Schema (
    {
        url: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        filename:{
            type:DataTypes.STRING
        }

    },
    {
        timestamps:true, //TODO LO RELACIONADO A createAt, updateAt
    }
)

module.exports = Storage