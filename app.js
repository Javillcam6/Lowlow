require ("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const dbConnect = require("./config/mongo")

app.use(cors())
app.use(express.json())
app.use(express.static("storage"))

const port = process.env.PORT || 3000

//**AQUI TRAEMOS A LAS RUTAS */
// Cuando las personas entren a "http://localhost/api/..."
app.use("/api", require("./routes"))

app.listen(port, () => {
    console.log(`http://localhost:${port}`)
})

dbConnect()