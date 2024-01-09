const multer = require ("multer")


const storage = multer.diskStorage({ 
    destination:function (req, file, callback) {   // Esta funcion indica donde guardaras los archivos
        const pathStorage = `${__dirname} /../storage`
        callback(null, pathStorage)                    //Pasa como primer argumento si existe un error y como segundo argumento un string que hace relacion a la ubicacion donde se van a guardar los archivos.
    },
    filename:function(req, file, callback){
        //Accion de los archivo: cv-javier.pdf   mi-foto.png  mi-video.mp4  mi-cancion.mp3
        const ext = file.originalname.split(".").pop() //Devuelve ["Nombre","png"]
        const filename = `file-${Date.now()}.${ext}` // Devuelve el archivo en formato unix... Ejemplo "192939292" Devuelve un numero aleatorio y el .ext devolvera la extension "283818282.png"
        callback(null,filename)
    }
})

//Multer utilia Storage como un middleware 
const uploadMiddleware = multer({storage})


module.exports = uploadMiddleware;