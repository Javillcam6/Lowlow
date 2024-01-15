const { usersModel } = require("../models");
const {handleHttpError} = require("../utils/handleError");
const {verifyToken} = require("../utils/handleJwt")


const authMiddlware = async(req, res, next) => {
    
    try{
        
        if(!req.headers.authorization) {
            handleHttpError(res, "Necesitas una sesion", 401)
        }

        const token = req.headers.authorization.split(" ").pop(); ///// Pasa por postman en el apartado obtener lista, vas autorizacion, a bearer e inserta el token
        const dataToken = await verifyToken(token)
        
        if(!dataToken) {
            handleHttpError(res, "NOT PAYLOAD_DATA", 401);
            console.log(dataToken) 
        }

        if (!dataToken._id) {      //Vereficamos si existe un id
            handleHttpError(res, "ERROR ID TOKEN", 401);
            console.log(dataToken) 
            return
        }

        const user = await usersModel.findById(dataToken)
        req.user = user

        next()

    } catch(e) {
        handleHttpError(res, "NOT SESSION", 401)
        console.log(e)
    }
}

module.exports = authMiddlware