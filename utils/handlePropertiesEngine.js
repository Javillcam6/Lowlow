const ENGINE_DB = process.env.ENGINE_DB;

const getProperties = () => {
    const data ={
        nosql:{
            id:'_id'  //Para base de datos NOSQL
        },
        mysql: {
            id:'id'   // Para base de datos SQL
        }
    }
    return data[ENGINE_DB]
}

module.exports = getProperties


//Aqui se definara el tipo de ID que se utilizara dependiendo si la base de datos use el motor NOSQL o MYSQL