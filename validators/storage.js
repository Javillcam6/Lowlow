const {check} = require("express-validator")
const { validateResults } = require("../utils/handleValidators")


const validatorGetItem = [
  check("mediaId").exists().notEmpty(),
  (req, res, next) => {
    return validateResults(req, res, next) // Respondemos ante una peticion gracias al Middleware
  }
]

module.exports = { validatorGetItem }  //Importamos desde routes


//** Nota
// EXPORTAMOS ARCHIVO A UTILS Y HANDLEVALIDATORS PARA INTEGRAR LOS VALIDADORES */ */