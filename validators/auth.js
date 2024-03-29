const {check} = require("express-validator")
const { validateResults } = require("../utils/handleValidators")


const validatorRegister = [
  check("name").exists().notEmpty() .isLength({min:3, max:50}),
  check("age").exists().notEmpty() .isNumeric(),
  check("password").exists().notEmpty() .isLength({min:3, max:20}),
  check("email").exists().notEmpty() .isEmail({min:3, max:50}),

  (req, res, next) => {
    return validateResults(req, res, next) // Respondemos ante una peticion gracias al Middleware
  }
]

const validatorLogin = [
  check("password").exists().notEmpty() .isLength({min:3, max:20}),
  check("email").exists().notEmpty() .isEmail({min:3, max:50}),

  (req, res, next) => {
    return validateResults(req, res, next) // Respondemos ante una peticion gracias al Middleware
  }
]

module.exports = { validatorRegister, validatorLogin }  //Importamos desde routes


//** Nota
// EXPORTAMOS ARCHIVO A UTILS Y HANDLEVALIDATORS PARA INTEGRAR LOS VALIDADORES */ */