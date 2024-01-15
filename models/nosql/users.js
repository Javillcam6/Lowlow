const mongoose = require("mongoose")


//Creamos un esquema de datos por medio de Schema
const userScheme = new mongoose.Schema (
    {
        name: {
            type: String
        },
        age:{
            type:Number
        },
        email: {
            type:String,
            sparse: true,
            // unique:true
        },
        password: {
            type: String,
        },
        role: {
            type:["user", "admin"],
            default: "user",
        } 

    },
    {
        timestamps:true, //TODO LO RELACIONADO A createAt, updateAt
        versionKey: false
    }
)

module.exports = mongoose.model("users", userScheme)