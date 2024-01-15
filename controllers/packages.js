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
        const user = req.user
        const data = await PackagesModel.find({})
        res.send({data, user})
    } catch (e) {
        handleHttpError(res,"ERROR AL TRAER EL ITEM")
    }
}


/**
 * Obtiene un detalle
 * @param {*} req 
 * @param {*} res 
 */
const getItem = async (req, res) => {
    try{
        // req = matchedData(req)
        const {id} = req.params
        console.log("id", id)
        const data = await PackagesModel.findOneData(id)
        res.send({data})
    } catch (e) {
        console.log(e)
        handleHttpError(res,"ERROR AL TRAER EL ITEM")
    }

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
const updateItem = async (req, res) => {
    try{
        const {id, ...body} =  matchedData(req)  // Esto nos permite de un objeto crear dos objetos separando el id y el body
        const data = await PackagesModel.findOneAndUpdate(id,body);
        res.send({ data });
    } catch (e) {
        console.log(e)
        handleHttpError(res,"ERROR AL ACTUALIZAR LOS ITEMS")
    }

}


/**
 * Elimina un registro
 * @param {*} req 
 * @param {*} res 
 */
const deleteItem = async (req, res) => {
    try{
        // req = matchedData(req)
        const {id} = req.params;
        const data = await PackagesModel.deleteOne({_id:id})
        res.send({data})
    } catch (e) {
        console.log(e)
        handleHttpError(res,"ERROR AL ELIMINAR EL ITEM")
    }

}


module.exports = { getItems, getItem, createItem, updateItem, deleteItem}