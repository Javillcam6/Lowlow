const mongoose = require("mongoose");

// Funcion para conectar la base de datos
const dbConnect = async () => {
    try {
        // Conexión e importación de la base de datos
        const DB_URI = process.env.DB_URI;
        await mongoose.connect(DB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("Base de datos conectada");
    } catch (err) {
        console.error("**ERROR EN LA BASE DE DATOS**", err.message);
    }
};

module.exports = dbConnect;
