const { restart } = require('nodemon')
const { PackagesModel }  = require('../models')
const { matchedData } = require('express-validator')
const {handleHttpError} = require("../utils/handleError")


/** 
 * Obtener lista de base de datos
 * @param {*} req 
 * @param {*} res 
 */
const getItems = async (req, res) => {
    try{
        const data = await PackagesModel.find({})
        res.send({data})
    } catch (e) {
        handleHttpError(res,"ERROR AL TRAER EL ITEM")
    }
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
        try{
            const body = matchedData(req)
            const data = await PackagesModel.create(body);
            res.send({ data });
        } catch (e) {
            handleHttpError(res,"ERROR AL CREAR LOS ITEMS")
        }
    
    
    
    

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