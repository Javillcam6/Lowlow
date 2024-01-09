const { restart } = require('nodemon')
const { StorageModel }  = require('../models')
const PUBLIC_URL = process.env.PUBLIC_URL


/** 
 * Obtener lista de base de datos
 * @param {*} req 
 * @param {*} res 
 */
const getItems = async (req, res) => {
    const data = await StorageModel.find({})
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

        const { body, file } = req;
        console.log(file);
        const fileData = {
            filename: file.filename,
            url: `${PUBLIC_URL}/${file.filename}`
        }
        const data = await StorageModel.create(fileData);
        res.send({ data });

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