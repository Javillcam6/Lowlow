const ENGINE_DB =process.env.ENGINE_DB
const pathModels = (ENGINE_DB === 'nosql') ? './nosql' : "./mysql"

const models =  {
    usersModel: require(`${pathModels}/users`),
    PackagesModel: require(`${pathModels}/packages`),
    StorageModel: require(`${pathModels}/storage`),
}

module.exports = models