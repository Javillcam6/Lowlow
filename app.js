require ("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const morganBody = require("morgan-body")
const loggerStream = require("../LowLou/utils/handleLogger")
const dbConnectNoSql = require("./config/mongo")
const {dbConnectMySql} = require("./config/mysql")


const ENGINE_DB = process.env.ENGINE_DB


app.use(cors())
app.use(express.json())
app.use(express.static("storage"))


/**
 * Nos ayuda a mandar un mensaje de error por un canal de slack, con ayuda de la appi que creamos en slack.
 */
morganBody(app,{     /// Responde dentro la terminal los resultados
    noColors: true,
    stream: loggerStream,
    skip: function(req, res) {
        return res.statusCode < 400 // Si el codigo es menor a 400 omitira el mensaje, si es 400 o mas envia el LOG
    }
})

const port = process.env.PORT || 3000

//**AQUI TRAEMOS A LAS RUTAS */
// Cuando las personas entren a "http://localhost/api/..."
app.use("/api", require("./routes"))

app.listen(port, () => {
    console.log(`http://localhost:${port}`)
})


// (ENGINE_DB === 'nosql') ? dbConnectNoSql() : dbConnectMySql()

if (ENGINE_DB === 'nosql') {
    dbConnectNoSql();
  } else if (ENGINE_DB === 'mysql') {
    dbConnectMySql();
  } else {
    console.error('Tipo de base de datos no compatible.');
    process.exit(1);
  }