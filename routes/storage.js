const express = require ("express")
const router = express.Router()
const uploadMiddleware = require('../utils/handleStorage')
const {createItem} = require("../controllers/storage")

//Ruta: http://localhost:3001/api/storage



//Tenemos que encriptar el Middleware dentro de la funcion.
router.post("/", uploadMiddleware.single("myfile"), createItem) 


module.exports = router