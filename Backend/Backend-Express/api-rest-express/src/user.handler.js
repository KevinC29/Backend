const Users = require('./user.model')

const User = {
    list: async (req, res) => {
        const users = await Users.find()
        res.status(200).send(users)
    },
    create: async(req, res)=> { //recibimos lo que envia el cliente y registramos en la base de datos los usuarios
        const user = new Users(req.body)
        const saveUser = await user.save()
        res.status(201).send(saveUser._id)
        //console.log(req.body)
    },
    get: async(req, res)=> {
        const {id} = req.params //obtenemos el id del usuario
        const user = await Users.findOne({_id: id})  //_id  es le id por defecto de mongodb
        res.status(200).send(user)
    },
    update: async(req, res)=> {
        //Obtenemos el user id
        const {id} = req.params
        const user = await Users.findOne({_id: id})
        //Actualizamos datos
        Object.assign(user, req.body)
        await user.save()

        res.sendStatus(204)
    },
    delete: async(req, res)=> {
        //Obtenemos el user id
        const {id} = req.params
        const user = await Users.findOne({_id: id})
        //Eliminamos el usuario
        if (user) {
            user.remove()
        }        
        res.sendStatus(204)
    },
}

module.exports = User