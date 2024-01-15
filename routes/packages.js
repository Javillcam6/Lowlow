const { Router } = require ("express")
const router = Router()
const authMiddlware = require("../middlewares/session")
const checkRol = require ("../middlewares/rol")
const {validatorCreateItem, validatorGetItem} = require("../validators/packages")
const { getItems, createItem, getItem, updateItem, deleteItem } = require("../controllers/packages")


//Lista 
// http://localhost/packages GET, POST, DELETE, PUT.

// router.get("/get",)



/***
 * Lista los ITEMS desde la base de datos
 */
router.get("/", authMiddlware, getItems) // Obtiene la lista de la DB

/**
 * Obtener un detalle de Items
 */
router.get("/:id", validatorGetItem, getItem) 

/**
 * Crear registro
 */
// router.post("/", customHeader, createItem) 
router.post("/", authMiddlware, checkRol (["user","admin"]), validatorCreateItem, createItem) 

/**
 * Actualizar registro
 */
router.put("/:id", validatorCreateItem, validatorCreateItem, updateItem) 

/**
 * Eliminar registro
 */
router.delete("/:id", validatorCreateItem, validatorCreateItem, deleteItem) 






// router.get("/:id", getItem)

module.exports = router