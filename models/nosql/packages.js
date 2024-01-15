const { ObjectId } = require("mongodb");
const mongoose = require("mongoose");
// const mongooseDelete = require("mongooseDelete")

// Creamos un esquema de datos por medio de Schema
const packagesScheme = new mongoose.Schema(
    {
        userName: {
            type: String,
            required: true,
        },
        streamingPlatform: {
            type: String,
            required: true,
        },
        price: {
            type: Number,
            required: true,
        },
        availablePackages: {
            type: Number,
            default: 0,
        },
        mediaId: {
            type: mongoose.Types.ObjectId
        }
    },
    {
        timestamps: true, // TODO LO RELACIONADO A createdAt, updatedAt
        versionKey: false,
    }
);

/**
 * Implementar metodo propio con relacion a Storage, en teoria debe de unir Packages con storage
 */

packagesScheme.statics.findAllData = function() {
    const joinData = [this.aggregate([ //ESTAMOS EN PAQUETES O PACKAGES
        {
            $lookup:{
                from: "storage",  // CREAMOS RELACION CON STORAGE
                localField: "mediaId", //DONDE PADRE (PACKAGES) UTILIZAR  MEDIAID "PACKAGES.MEDIAID"
                foreignField: "_id", //SE RELACIONARA CON STORAGES._ID
                as: "image" // EL RESULTADO LO COLOCARA EN UN "ALIAS"
            },
        },
        {
            $unwind:"$image"
        }
    ])]
    return joinData


  };

packagesScheme.statics.findOneData = function(id) {
    const joinData = [this.aggregate([ //ESTAMOS EN PAQUETES O PACKAGES
        {
            $match:{
                _id: new mongoose.Types.ObjectId(id)
            }
        },
        {
            $lookup:{
                from: "storage",  // CREAMOS RELACION CON STORAGE
                localField: "mediaId", //DONDE PADRE (PACKAGES) UTILIZAR  MEDIAID "PACKAGES.MEDIAID"
                foreignField: "_id", //SE RELACIONARA CON STORAGES._ID
                as: "image" // EL RESULTADO LO COLOCARA EN UN "ALIAS"
            },
        },
        {
            $unwind:"$image"
        },
    ])]
    return joinData
  };  



// packagesScheme.plugin(mongooseDelete, {overrideMethods:"all"})

module.exports = mongoose.model("packages", packagesScheme);
