const { Sequelize} = require("sequelize")

const dataBase = process.env.MYSQL_DATABASE
const username = process.env.MYSQL_USER
const password = process.env.MYSQL_PASSWORD
const host = process.env.MYSQL_HOST

const sequelize = new Sequelize(
    dataBase,
    username,
    password,
    {
        host,
        dialect:"mysql"
    }
)

const dbConnectMySql = async () => {
    try {
        await Sequelize.authenticate
        console.log("MYSQL CONEXION CORRECTA")
    } catch(e) {
        console.error("ERROR DE CONEXXION", e)
    }
}

module.exports = {sequelize, dbConnectMySql}