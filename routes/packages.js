const { Router } = require ("express")
const router = Router()
const customHeader = require("../middlewares/customHeader")
const {validatorCreateItem} = require("../validators/packages")
const { getItems, createItem } = require("../controllers/packages")


//Lista 
// http://localhost/packages GET, POST, DELETE, PUT.

// router.get("/get",)

router.get("/", getItems) // Obtiene la lista de la DB

// router.post("/", customHeader, createItem) //Inserta un registro
router.post("/", validatorCreateItem, createItem) //Inserta un registro




// router.get("/:id", getItem)

module.exports = router