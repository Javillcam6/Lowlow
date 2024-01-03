// users.js
const express = require('express');
const router = express.Router();

// Definir tus rutas y middleware aquí
router.get('/', (req, res) => {
    res.send('¡Hola, mundo!');
});

module.exports = router;
