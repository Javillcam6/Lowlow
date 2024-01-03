const { Router } = require ("express")
const router = Router()

//Lista 
// http://localhost/packages GET, POST, DELETE, PUT.

// router.get("/get",)

router.get("/", (req, res) => {
    const data = ["Hola", "mundo"]
    res.send({data})
})

module.exports = router