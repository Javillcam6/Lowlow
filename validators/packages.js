const {check} = require("express-validator")
const { validateResults } = require("../utils/handleValidators")

const validatorCreateItem = [
    check("userName").exists().notEmpty().isLength({min:5, max: 50}),
    check("streamingPlatform").exists().notEmpty(),
    check("price").exists().notEmpty(),
    check("availablePackages").exists().notEmpty(),
    check("mediaId").exists().notEmpty(),
    (req, res, next) => {
      return validateResults(req, res, next) // Respondemos ante una peticion gracias al Middleware
    }
]

const validatorGetItem = [
  check("mediaId").exists().notEmpty(),
  (req, res, next) => {
    return validateResults(req, res, next) // Respondemos ante una peticion gracias al Middleware
  }
]

module.exports = { validatorCreateItem, validatorGetItem }  //Importamos desde routes


//** Nota
// EXPORTAMOS ARCHIVO A UTILS Y HANDLEVALIDATORS PARA INTEGRAR LOS VALIDADORES */ */