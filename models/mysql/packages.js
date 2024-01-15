const {sequelize} = require("../../config/mysql")
const {DataTypes} = require("sequelize")
// const mongooseDelete = require("mongooseDelete")

// Creamos un esquema de datos por medio de Schema
const Packages = new sequelize.define(
    "packages",
    {
        userName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        streamingPlatform: {
            type: DataTypes.STRING,
        },
        price: {
            type:DataTypes.NUMBER
        },
        availablePackages: {
            type:DataTypes.NUMBER

        },
        mediaId: {
            type: DataTypes.STRING,
        }
    },
    {
        timestamps: true, // TODO LO RELACIONADO A createdAt, updatedAt
    }
);

// packagesScheme.plugin(mongooseDelete, {overrideMethods:"all"})

module.exports = Packages