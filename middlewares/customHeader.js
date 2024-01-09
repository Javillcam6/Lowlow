const customHeader = (req, res, next) => {
    try{
        const apiKey = req.headers.api_key;
        if(apiKey === 'api-low-low') {
            next()
        } else{
            res.status(403)
        res.send({error:"API_KEY NO ES CORRECTO"})
        }

    } catch(e){
        res.status(403)
        res.send({error:"Existe un error en el CUSTOM HEADER"})
    }
}

module.exports = customHeader;
