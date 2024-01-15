const express = require ("express")
const router = express.Router()
const uploadMiddleware = require('../utils/handleStorage')
const {createItem, getItems, getItem, updateItem, deleteItem} = require("../controllers/storage")
const {validatorGetItem} = require("../validators/storage")


//Ruta: http://localhost:3001/api/storage



//Tenemos que encriptar el Middleware dentro de la funcion.
router.post("/", uploadMiddleware.single("myfile"), createItem) 

router.get("/", getItems)  // Trae los Items de la DB

router.get("/:id", validatorGetItem, getItem)  //Trae un item especificamente con el id

router.delete("/:id", validatorGetItem, deleteItem)  //Elimina el item



module.exports = router