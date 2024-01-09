const { restart } = require('nodemon')
const { PackagesModel }  = require('../models')


/** 
 * Obtener lista de base de datos
 * @param {*} req 
 * @param {*} res 
 */
const getItems = async (req, res) => {
    const data = await PackagesModel.find({})
    res.send({data})
}


/**
 * Obtiene un detalle
 * @param {*} req 
 * @param {*} res 
 */
const getItem = (req, res) => {

}

/**
 * /Inserta un registro
 * @param {*} req 
 * @param {*} res 
 */
const createItem = async (req, res) => {
    // try {
        const { body } = req;
        console.log(body);

        const data = await PackagesModel.create(body);
        res.send({ data });
    // } catch (error) {
    //     console.log(error);

    //     if (error.code === 11000) {
    //         res.status(400).send({ error: 'Clave duplicada en la colección packages.' });
    //     } else {
    //         res.status(500).send({ error: 'Error interno del servidor.' });
    //     }
    // }
};



/**
 * Actualiza un registro
 * @param {*} req 
 * @param {*} res 
 */
const updateItem = (req, res) => {

}


/**
 * Elimina un registro
 * @param {*} req 
 * @param {*} res 
 */
const deleteItem = (req, res) => {

}


module.exports = { getItems, getItem, createItem, updateItem, deleteItem}