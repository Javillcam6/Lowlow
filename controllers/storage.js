const { restart } = require('nodemon')
const fs = require("fs")
const { StorageModel }  = require('../models')
const {handleHttpError} = require("../utils/handleError")
const { matchedData } = require("express-validator");

const PUBLIC_URL = process.env.PUBLIC_URL  //RUTA PUBLICA   
const MEDIA_PATH = `${__dirname}/../storage` //RUTA PRIVA Y ABSOLUTA DEL ARCHIVO



/** 
 * Obtener lista de base de datos
 * @param {*} req 
 * @param {*} res 
 */
const getItems = async (req, res) => {
    try{
        const data = await StorageModel.find({})
        res.send({data})
    } catch (e) {
        handleHttpError(res,"ERROR AL TRAER LA LISTA DE ITEMS")
    }
}


/**
 * Obtiene un detalle
 * @param {*} req 
 * @param {*} res 
 */
const getItem = async (req, res) => {
    try{
        const {id} = req.params
        console.log("id", id)
        const data = await StorageModel.findById(id)
        res.send({data})
    } catch (e) {
        handleHttpError(res,"ERROR AL TRAER EL ITEM")
    }

}

/**
 * /Inserta un registro
 * @param {*} req 
 * @param {*} res 
 */
const createItem = async (req, res) => {
    try{
        const { body, file } = req;
        console.log(file);
        const fileData = {
            filename: file.filename,
            url: `${PUBLIC_URL}/${file.filename}`
        }
        const data = await StorageModel.create(fileData);
        res.send({ data });
    } catch (e){
        handleHttpError(res,"ERROR AL CREAR EL ITEM")

    }


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
// const deleteItem = async (req, res) => {
//     try{
//         const {id} = req.params
//         console.log("id", id)
//         const findMedia = await StorageModel.findById(id)
//         const {fileName} = findMedia.filename  // destructuramos y posteriormente eliminamos con la opcion de filePath
//         const filePath = `${MEDIA_PATH}/${fileName}`  //Traes solamente de dato la opcion filename
//         fs.unlinkSync(filePath)
//         const data = {
//             filePath,
//             delete:1
//         }
//         res.send({data})
//     } catch (e) {
//         handleHttpError(res,"ERROR ELIMINAR EL ITEM")
//         console.log(e)
//     }
// }
const deleteItem = async (req, res) => {
    try {
    //   req = matchedData(req);
      const {id} = req.params;
      const findMedia = await StorageModel.findById(id);
      const fileName = findMedia.filename;
      console.log(findMedia)
         await StorageModel.findByIdAndDelete(id);
      fs.unlinkSync(`${MEDIA_PATH}/${fileName}`);
  
      const data = {
        findMedia: fileName,
        deleted: true,
      };
  
      res.send({ data });
    } catch (e) {
        console.log(e)
      handleHttpError(res, e);
    }
  };


module.exports = { getItems, getItem, createItem, updateItem, deleteItem}